// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const userinfo_handler = require('../router_handler/userinfo')

const expressJoi = require('@escook/express-joi')
const rls = require('../schema/user')
const update_userinfo_schema = rls.update_userinfo_schema
const update_password_schema = rls.update_password_schema
const update_avatar_schema = rls.update_avatar_schema


// 获取用户的基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)
// 更新用户的基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)
// 重置密碼
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)
// 更新頭像
router.post('/updateAvatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)


// 向外共享路由对象
module.exports = router