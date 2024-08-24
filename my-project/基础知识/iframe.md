### 要在 `iframe` 中传递参数，常见的方法有以下几种：

1. 通过 `URL` 传递参数
    在 `iframe` 的 `src` 属性中，将参数添加到链接的查询字符串部分。例如：
    ```html
    <iframe src="https://example.com/page?param1=value1&param2=value2"></iframe>
    ```
    在上述示例中，`param1=value1&param2=value2` 就是传递的参数。

2. 使用 JavaScript 动态设置 `iframe` 的 `src` 属性
    在 JavaScript 中，可以根据需要构建包含参数的 `URL` ，然后设置 `iframe` 的 `src` 。
    ```javascript
    var iframe = document.getElementById('myIframe');
    var params = {
      param1: 'value1',
      param2: 'value2'
    };
    var queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
    iframe.src = 'https://example.com/page?' + queryString;
    ```

3. 父页面与 `iframe` 内容通过 `postMessage` 进行通信
    在父页面中：
    ```javascript
    var iframe = document.getElementById('myIframe');
    iframe.contentWindow.postMessage({param1: 'value1'}, 'https://example.com');
    ```
    在 `iframe` 加载的页面中，通过监听 `message` 事件接收参数：
    ```javascript
    window.addEventListener('message', function(event) {
      if (event.origin === 'https://parent-page.com') {
        var data = event.data;
        // 处理接收到的数据
      }
    });
    ```

通过这些方法，可以在 `iframe` 中有效地传递参数，以满足不同的需求。但请注意，在实际应用中要确保参数的传递和处理符合安全性和兼容性的要求。 
