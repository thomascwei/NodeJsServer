// 导入数据库操作模块
const db = require('../db/index')

const getArtCate = function (req, res) {
    const sql = `select *
                 from ev_article_cate
                 where is_delete = 0
                 order by id asc`
    db.query(sql, function (err, results) {
        if (err) {
            res.cc(err)
        }
        if (results.length === 0) {
            res.cc('获取文章分類失败！')
        }
        res.send({
            status: 0,
            message: '获取文章分類成功！',
            data: results,
        })

    })
}

const addcates = function (req, res) {
    const sql = `insert into ev_article_cate
                 set ?`
    db.query(sql, req.body, function (err, results) {
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
}

const deletecate = function (req, res) {
    const sql = `delete
                 from ev_article_cate
                 where id = ?`
    db.query(sql, req.params.id, function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err)
        }
        // 執行失敗
        if (results.affectedRows !== 1) {
            return res.cc(err)
        }
        // 刪除成功
        res.cc('刪除成功', 0)
    })
}

const getArtCateById = function (req, res) {
    const sql = `select *
                 from ev_article_cate
                 where id = ?`
    db.query(sql, req.params.id, function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.cc(err)
        }
        // 執行失敗
        if (results.length === 0) {
            return res.cc(err)
        }

        // 查詢成功
        res.send({
            status: 0,
            message: '获取個別文章分類成功！',
            data: results[0],
        })
    })
}

const updatecate = function (req, res) {
    const sql = `update ev_article_cate
                 set ?
                 where id = ?`
    db.query(sql, [req.body, req.body.id], function (err, results) {
            // 执行 SQL 语句失败
            if (err) {
                return res.cc(err)
            }
            // 執行失敗
            if (results.affectedRows === 0) {
                return res.cc('沒有更新')
            }
            // 更新成功
            res.cc('更新成功', 0)
        }
    )
}

module.exports.getArtCate = getArtCate
module.exports.addcates = addcates
module.exports.deletecate = deletecate
module.exports.getArtCateById = getArtCateById
module.exports.updatecate = updatecate