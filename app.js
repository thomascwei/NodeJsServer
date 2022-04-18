const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

const userRouter = require('./router/user')
app.use('/api', userRouter)
// 导入并使用用户信息路由模块
const userInfoRouter = require('./router/userinfo')
// 注意：以 /my 開頭的API需要驗證token
app.use('/my', userInfoRouter)

const artCateRouter  = require('./router/artcate')
app.use('/my', artCateRouter )

const articleRouter  = require('./router/article')
app.use('/my', articleRouter )

const joi = require('joi')

// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError)
        return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError')
        return res.cc('身分認證失敗！')
    // 未知错误
    res.cc(err)
})

app.listen(3007, () => {
    console.log('listening on http://127.0.0.1:3007')
})

