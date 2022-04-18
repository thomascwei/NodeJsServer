// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const article_handler = require('../router_handler/article')

const expressJoi = require('@escook/express-joi')
const rls = require('../schema/article')
const addArticle = rls.addArticle

// 發布新文章
// router.post('/article/addArticle', expressJoi(addArticle), article_handler.addArticle)
router.post('/article/addArticle', article_handler.upload.single('cover_image'), article_handler.addArticle)

// 向外共享路由对象
module.exports = router