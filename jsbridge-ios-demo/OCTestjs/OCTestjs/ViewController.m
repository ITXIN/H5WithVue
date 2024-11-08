//
//  ViewController.m
//  OCTestjs
//
//  Created by apple1 on 2024/8/22.
//

#import "ViewController.h"

#import "WebKit/WebKit.h"
#import "PageBViewController.h"
@interface ViewController ()<UIWebViewDelegate>

@property(nonatomic, strong, readwrite)WKWebView *webView;
@end

@implementation ViewController
//其中：
//WKWebViewConfiguration 用来添加WKWebView的一些配置信息，包括交互的userContentController，进程池processPool及一些其他的属性
//WKUserContentController 这个类主要用处理JavaScript向webview发送消息的交互，addScriptMessageHandler方法注册了一个名为jsCallOC的方法用来和H5进行交互，具体的交互的方法名可以两端统一即可
//webViewConfig.allowsInlineMediaPlayback = YES;这个属性是支持视频页面内播放，这里注意下，不设置这个属性会导致页面内的视频都是打开视频播放器全屏播放的，使用UIWebview时候没有这个问题，所以提醒大家在使用WKWebview时候注意一下
//
//作者：xiaofu666
//链接：https://www.jianshu.com/p/7016be20f42f
//来源：简书
//著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
- (WKWebView *)webView {
    if (_webView) {
        return _webView;
    }
    WKUserContentController *userContentController = [[WKUserContentController alloc] init];
    // 通道名称
    [userContentController addScriptMessageHandler:self name:@"bridgeTest"];
    WKWebViewConfiguration* webViewConfig = [[WKWebViewConfiguration alloc] init];
    webViewConfig.userContentController = userContentController;
//    webViewConfig.processPool = [[self cookieManager] sharedProcessPool];
    webViewConfig.allowsInlineMediaPlayback = true;
    
    _webView = [[WKWebView alloc] initWithFrame:CGRectMake(0,
                                                          0,
                                                           self.view.bounds.size.width,
                                                           (self.view.bounds.size.height - 0)) configuration:webViewConfig];
    _webView.backgroundColor = [UIColor whiteColor];
    _webView.scrollView.backgroundColor = [UIColor blackColor];
    _webView.opaque = NO;
    _webView.scrollView.showsHorizontalScrollIndicator = NO;
    _webView.scrollView.showsVerticalScrollIndicator = NO;

    _webView.opaque = NO;
    _webView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
//    _webView.scrollView.bounces = !self.disableBounces;
//    _webView.UIDelegate = self;
    _webView.navigationDelegate = self;
    return _webView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = UIColor.redColor;
    [self.view addSubview:self.webView];
    [self.webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"http://192.168.0.101:3088/a/b/home_family.html"]]];
  
    NSObject *uninitializedPtr;
    NSLog(@"========%@",uninitializedPtr);
    // Do any additional setup after loading the view.
}

-(void)test1{
    NSLog(@"====test1");
}
-(void)test2{
    NSLog(@"====test2");
}
-(void)test3{
    NSLog(@"====test3");
}


#pragma mark - WKScriptMessageHandler

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"===didReceiveScriptMessage bridgeTest info:%@",message.name);
    if ([message.name isEqualToString:@"bridgeTest"]) {
        NSLog(@"===didReceiveScriptMessage bridgeTest info:%@",message.body);
        
        //string转为dictionary
        NSString *bodyString = message.body;
        NSData *data = [bodyString dataUsingEncoding:kCFStringEncodingUTF8];
        NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingFragmentsAllowed error:nil];
        NSString *callBackId = dic[@"callbackId"];
        
        //添加alert提示
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"jsBridge" message:bodyString preferredStyle:UIAlertControllerStyleAlert];
        __weak typeof(self) weakSelf = self;
        UIAlertAction *confirm = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            
            [weakSelf dismissViewControllerAnimated:YES completion:^{
                //向js发起回调
                NSString *jsString = [NSString stringWithFormat:@"window.bridgeCallback(\"%@\", \"%@\")", callBackId, @"success"];
                [self.webView evaluateJavaScript:jsString completionHandler:^(id _Nullable res, NSError * _Nullable error) {
                    NSLog(@"===didReceiveScriptMessage evaluateJavaScript error:%@",error);
                    NSLog(@"===didReceiveScriptMessage evaluateJavaScript res:%@",res);
                }];
                
                [weakSelf.navigationController pushViewController:[[PageBViewController alloc]init] animated:YES];
            }];
        }];
        [alert addAction:confirm];
        [self presentViewController:alert animated:YES completion:^{
            
        }];
        
        
       

        //没有参数
    }
//    NSLog(@"===didReceiveScriptMessage showMessage2 message.name:%@",message.name);
    if ([message.name isEqualToString:@"showMessage2"]) {
        NSArray *array = message.body;
        NSString *info = [NSString stringWithFormat:@"有两个参数: %@, %@ !!",array.firstObject,array.lastObject];
        NSLog(@"===didReceiveScriptMessage showMessage2 info:%@",info);
    }
}

-(void)removeAllScriptMsgHandle{
    WKUserContentController *controller = self.webView.configuration.userContentController;
    [controller removeScriptMessageHandlerForName:@"bridgeTest"];
//    [controller removeScriptMessageHandlerForName:@"showMessage2"];
}

#pragma mark - WKNavigationDelegate
//载入 URL之前的一次调用，询问是否下载并载入当前 URL
//在 URL 下载完毕之后还会发一次询问，根据服务器返回的 Web 内容再次做一次确定。
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    NSLog(@"===decidePolicyForNavigationAction:%@",navigationAction.request.URL.absoluteString);
        //允许跳转
    decisionHandler(WKNavigationActionPolicyAllow);
}
// 根据客户端受到的服务器响应头以及response相关信息来决定是否可以跳转
- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler {
    NSLog(@"===decidePolicyForNavigationResponse:%@",navigationResponse.response);
      //允许跳转
    decisionHandler(WKNavigationResponsePolicyAllow);
}
//同意载入之后，组件就开始下载指定 URL 的内容，在下载之前会调用一次 开始下载 回调，通知开发者 Web 已经开始下载。
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(null_unspecified WKNavigation *)navigation { }
// 当内容开始返回时调用
- (void)webView:(WKWebView *)webView didCommitNavigation:(null_unspecified WKNavigation *)navigation { }
//页面下载完毕之后 WKWebView 会发询问，确定下载的内容被允许之后再载入视图。
- (void)webView:(WKWebView *)webView didFinishNavigation:(null_unspecified WKNavigation *)navigation { }
//整个流程有错误发生都会发出错误回调
- (void)webView:(WKWebView *)webView didFailProvisionalNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error {
    NSLog(@"didFailProvisionalNavigation%@",error);
}
//提交发生错误时调用
- (void)webView:(WKWebView *)webView didFailNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error {
    NSLog(@"didFailNavigation%@",error);
}
@end
