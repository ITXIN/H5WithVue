let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')
let app = express()

// 配置中间件
//将URL编码的请求体解析为键值对形式，并添加到req.body中。
app.use(bodyParser.urlencoded({ extended: true }))
// 将请求体中的JSON数据解析为JavaScript对象，并同样添加到req.body中。这样在后续路由处理函数中可以通过req.body访问这些数据。
app.use(bodyParser.json())

app.use(
    /**
     * saveUninitialized: 设置为 true 表示即使 session 未初始化也会保存。
resave: 设置为 true 表示每次请求后都会重新保存 session。
secret: 设置 session 的加密密钥，此处为 "react-test"。
     */

    session({
        //
        saveUninitialized: true,
        resave: true,
        secret: 'react-test'
    })
)

let users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' }
]
app.get('/api/users', function (req, res) {
    res.json(users)
})

app.post('/api/login', function (req, res) {
    let user = req.body
    req.session.user = user
    res.json({
        code: 0,
        data: {
            user,
            success: '登录成功!'
        }
    })
})

app.get('/api/logout', function (req, res) {
    req.session.user = null
    res.json({
        code: 0,
        data: {
            success: '退出成功!'
        }
    })
})

app.get('/api/user', function (req, res) {
    let user = req.session.user
    if (user) {
        res.json({
            code: 0,
            data: {
                success: '获取用户信息成功!',
                user
            }
        })
    } else {
        res.json({
            code: 1,
            data: {
                error: '用户未登录!'
            }
        })
    }
})

app.listen(4000, () => {
    console.log('server is running at http://localhost:4000')
})
