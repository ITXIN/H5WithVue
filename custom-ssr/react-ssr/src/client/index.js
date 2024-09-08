import React from 'react'
import ReactDOM from 'react-dom'
import routers from '../router/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'
// hydrate 就是表示把服务器端渲染未完成的工作完成，比如说绑定事件
ReactDOM.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>{renderRoutes(routers)}</BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
