import { useEffect, useState } from 'react';

type PropsType = {
    lazyExeFunction?: () => {}; // 延迟执行的函数
    lazyExTime?: number; // 延迟执行的时间
    isRender?: boolean; // 是否直接渲染
};

export default (props: PropsType = {}) => {
    const hasIsRenderKey = Reflect.ownKeys(props).includes('isRender');
    const { lazyExeFunction = () => {}, lazyExTime = 300, isRender = false } = props;
    const [timeoutRender, setTimeoutRender] = useState(false);
    useEffect(() => {
        if (hasIsRenderKey && isRender) {
            lazyExeFunction();
        }
    }, [isRender]);

    useEffect(() => {
        let timer = null;
        if (!hasIsRenderKey) {
            timer = setTimeout(() => {
                lazyExeFunction();
                setTimeoutRender();
            }, lazyExTime);
        }
        return () => timer && clearTimeout(timer);
    }, []);

    return isRender || timeoutRender ? props.children : null;
};
