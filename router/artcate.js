// 导入 express
const express = require('express')
// 创建路由对象
const router = express.Router()

const artcate_handler = require('../router_handler/artcate')

const expressJoi = require('@escook/express-joi')
const rls = require('../schema/artcate')
const addcate = rls.addcate
const updatecate = rls.updatecate

// 获取文章分类的列表数据
router.get('/article/cates', artcate_handler.getArtCate)
// 新增文章分類
router.post('/article/addcates', expressJoi(addcate), artcate_handler.addcates)
// 根據id刪除文章分類
router.get('/article/deletecate/:id', artcate_handler.deletecate)
// 根據id獲取文章分類數據
router.get('/article/cates/:id', artcate_handler.getArtCateById)
// 根據id更新文章分類數據
router.post('/article/updatecate', expressJoi(updatecate), artcate_handler.updatecate)

// 向外共享路由对象
module.exports = router