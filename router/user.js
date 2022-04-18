const express = require('express')
// 创建路由对象
const router = express.Router()

const handler = require('../router_handler/user')

const expressJoi = require('@escook/express-joi')
const rls = require('../schema/user')
const reg_login_schema = rls.reg_login_schema
// 解構賦值
// const { reg_login_schema } = require('../schema/user')


// 注册新用户
// router.post('/reguser', handler.reguser)
router.post('/reguser', expressJoi(reg_login_schema), handler.reguser)

// 登录
router.post('/login', expressJoi(reg_login_schema), handler.login)

module.exports = router