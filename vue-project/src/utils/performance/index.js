const performance = window.performance;
export function handlePerformance() {
    observeEvent('paint'); // FP,FCP
    observeEvent('largest-contentful-paint'); // LCP
    observeEvent('resource'); //  收集上报资源加载时间
    observerLoad();
    onClick();
    getFirstScreenLoadTime();
}
export function getPageURL() {
    return window.location.href;
}
function isSupportPerformanceObserver() {
    return typeof PerformanceObserver !== 'undefined';
}
export function lazyReportCache(params) {
    if (isSupportPerformanceObserver()) {
        // console.log('🚀 ~ lazyReportCache ~ params:', params);
    }
}
export function observeEvent(entryType) {
    function entryHandler(list) {
        const data = list.getEntries();
        for (const entry of data) {
            if (observer) {
                observer.disconnect();
            }
            lazyReportCache({
                name: entry.name, // 资源名称
                subType: entryType,
                type: 'performance',
                sourceType: entry.initiatorType, // 资源类型
                duration: entry.duration, // 资源加载耗时
                dns: entry.domainLookupEnd - entry.domainLookupStart, // DNS 耗时
                tcp: entry.connectEnd - entry.connectStart, // 建立 tcp 连接耗时
                redirect: entry.redirectEnd - entry.redirectStart, // 重定向耗时
                ttfb: entry.responseStart, // 首字节时间
                protocol: entry.nextHopProtocol, // 请求协议
                responseBodySize: entry.encodedBodySize, // 响应内容大小
                responseHeaderSize: entry.transferSize - entry.encodedBodySize, // 响应头部大小
                resourceSize: entry.decodedBodySize, // 资源解压后的大小
                startTime: performance.now(),
            });
        }
    }

    let observer;
    if (isSupportPerformanceObserver()) {
        observer = new PerformanceObserver(entryHandler);
        observer.observe({ type: entryType, buffered: true });
    }
}

export function observerLoad() {
    ['DOMContentLoaded', 'load'].forEach(type => onEvent(type));
}

function onEvent(type) {
    console.log('🚀 ~ onEvent ~ type:', type);
    function callback() {
        lazyReportCache({
            type: 'performance',
            subType: type.toLocaleLowerCase(),
            startTime: performance.now(),
        });
        window.removeEventListener(type, callback, true);
    }
    window.addEventListener(type, callback, true);
}

// 监听点击事件
export function onClick() {
    ['mousedown', 'touchstart'].forEach(eventType => {
        let timer;
        window.addEventListener(eventType, event => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const target = event.target;
                const { top, left } = target.getBoundingClientRect();

                lazyReportCache({
                    top,
                    left,
                    eventType,
                    pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
                    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
                    type: 'behavior',
                    subType: 'click',
                    target: target.tagName,
                    paths: event.path?.map(item => item.tagName).filter(Boolean),
                    startTime: event.timeStamp,
                    pageURL: getPageURL(),
                    outerHTML: target.outerHTML,
                    innerHTML: target.innerHTML,
                    width: target.offsetWidth,
                    height: target.offsetHeight,
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                    },
                    uuid: getUUID(),
                });
            }, 500);
        });
    });
}

export function getUUID() {
    const uuid = 'xxxxxxxx - xxxx - 4xxx - yxxx - xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
    // console.log('🚀 ~ uuid ~ uuid:', uuid);
    return uuid;
}

// 计算首屏加载时间
export function getFirstScreenLoadTime() {
    // 创建一个 MutationObserver 实例来监听 DOM 变化
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (isInFirstScreen(mutation.target)) {
                addToFirstScreenElements(mutation.target, Date.now());
            }
        });
        debouncedCheckReadyState();
    });
    // 判断元素是否在首屏内的函数
    function isInFirstScreen(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    const firstScreenElements = [];
    function addToFirstScreenElements(element, time) {
        firstScreenElements.push({ element, time });
    }

    let timer;
    function debouncedCheckReadyState() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (document.readyState === 'complete') {
                observer.disconnect();
                clearTimeout(timer);
                calculateFirstScreenLoadTime();
            }
        }, 100);
    }

    function calculateFirstScreenLoadTime() {
        let lastChangeTime = 0;
        for (const { time } of firstScreenElements) {
            if (time > lastChangeTime) {
                lastChangeTime = time;
            }
        }
        const loadTime = lastChangeTime - performance?.timing?.navigationStart;
        console.log(`首屏加载时间为：${loadTime} 毫秒`);
    }

    // 开始监听 document 对象的变化
    observer.observe(document, { childList: true, subtree: true });
}
// ————————————————

//                             版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

// 原文链接：https://blog.csdn.net/franktaoge/article/details/142425672
