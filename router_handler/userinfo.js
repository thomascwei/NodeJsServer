// 导入数据库操作模块
const db = require('../db/index')
const bcrypt = require('bcryptjs')

// 獲取個人信息
const getUserInfo = function (req, res) {
    // 根据用户的 id，查询用户的基本信息
    // 注意：为了防止用户的密码泄露，需要排除 password 字段
    const sql = `select id, username, nickname, email, user_pic
                 from ev_users
                 where id = ?`
    // request通過token驗證後, 原先加密成JWT的值會解密後寫進req裡, 所以可以直接取
    db.query(sql, req.user.id, function (err, results) {
            // 1. 执行 SQL 语句失败
            if (err) return res.cc(err)
            // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
            if (results.length === 0) return res.cc('获取用户信息失败！')
            // 3. 将用户信息响应给客户端
            res.send({
                status: 0,
                message: '获取用户基本信息成功！',
                data: results[0],
            })
        }
    )
}

// 更新個人信息
const updateUserInfo = function (req, res) {
    const sql = `update ev_users
                 set ?
                 where id = ?`
    db.query(sql, [req.body, req.body.id], function (err, results) {
        // 执行 SQL 语句失败
        if (err)
            return res.cc(err)
        // 执行 SQL 语句成功，但影响行数不为 1
        if (results.affectedRows !== 1)
            return res.cc('修改用户基本信息失败！')
        // 修改用户信息成功
        // return res.cc('修改用户基本信息成功！', 0)
        res.send('修改用户基本信息成功！')
    })
}

//更新密碼
const updatePassword = function (req, res) {
    // 根据 id 查询用户是否存在
    const sql = 'select * from ev_users where id =?'
    db.query(sql, req.user.id,(err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length !== 1) {
            return res.cc('用戶不存在')
        }
        // 判断提交的 旧密码 是否正确
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('密码错误！')
        }
        // 定义更新用户密码的 SQL 语句
        const sql = `update ev_users
                     set password=?
                     where id = ?`
        // 对新密码进行 bcrypt 加密处理
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        db.query(sql, [newPwd, req.user.id], function (err, results) {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1)
                return res.cc('修改密碼失败！')

            res.cc('更新密碼成功', 0)
        })
    })


    // 对新密码进行 bcrypt 加密之后，更新到数据库中
}

const updateAvatar = function (req, res){
    const sql = 'update ev_users set user_pic=? where id=?'
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)

        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新头像失败！')

        // 更新用户头像成功
        return res.cc('更新头像成功！', 0)
    })
}

// 匯出
module.exports.getUserInfo = getUserInfo
module.exports.updateUserInfo = updateUserInfo
module.exports.updatePassword = updatePassword
module.exports.updateAvatar = updateAvatar