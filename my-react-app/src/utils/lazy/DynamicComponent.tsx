import React, { Suspense, useMemo } from 'react';
import { fetchComponent } from './FetchCompnent';
const DynamicComponent = (componentInfo, children = {}, ...props) => {
    const Component = useMemo(() => {
        return React.lazy(async () => fetchComponent(componentInfo));
    }, [componentInfo.name]);

    return (
        <Suspense
            fallba
            ck={
                <div>
                    <p style={{ color: 'white' }}>Loading...</p>
                </div>
            }
        >
            <Component {...props}>{children}</Component>
        </Suspense>
    );
};
