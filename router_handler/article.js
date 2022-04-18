// 导入数据库操作模块
const db = require('../db/index')
// 导入解析 formdata 格式表单数据的包
const multer = require('multer')
// 导入处理路径的核心模块
const path = require('path')

// 创建 multer 的实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({dest: path.join(__dirname, '../uploads')})

const addArticle = function (req, res) {
    console.log(req.body)
    const sql = 'insert into ev_articles set ?'
    db.query(sql,req.body,function (err,results){
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err)
        }
        // 執行失敗
        if (results.affectedRows !== 1) {
            return res.cc(err)
        }
        // 新增成功
        res.cc('新增成功', 0)
    })
    // res.send('done')
}

module.exports.addArticle = addArticle
module.exports.upload = upload