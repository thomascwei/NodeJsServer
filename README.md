# API文件

> 以 /api 開頭的不需要token認證
>
> 以 /my 開頭的，需要在header中加入 Authorization 認證，才能正常訪問

## 登錄註冊

---

### 註冊

**簡要描述**:

* 用户註冊

**Request URL**:

* `api/reguser`

**請求方式**:

* `POST`

**Content-Type**:

* `application/x-www-form-urlencoded`

**Request Body**:


| 參數名   | 必需 | 類型   | 說明   |
| ---------- | ------ | -------- | -------- |
| username | 是   | string | 用户名 |
| password | 是   | string | 密碼   |

**返回示例**:

```json=
{
  "status": 0,
  "message": "註冊成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求结果的描述消息             |

---

### 登錄

**簡要描述**:

* 用户登錄

**Request URL**:

* `api/login`

**請求方式**:

* `POST`

**Content-Type**:

* `application/x-www-form-urlencoded`

**請求體**:


| 参数名   | 必选 | 类型   | 说明   |
| ---------- | ------ | -------- | -------- |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**返回示例**:

```json=
{
  "status": 0,
  "message": "註冊成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求结果的描述消息             |

## 個人中心

---

### 獲取基本信息

**簡要描述**:

* 獲取用戶基本信息

**Request URL**:

* `/my/userinfo`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* `application/x-www-form-urlencoded`

**參數**:

* 無

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取用户基本信息成功！",
  "data": {
    "id": 1,
    "username": "admin",
    "nickname": "管理員",
    "email": "admin@itcast.cn",
    "user_pic": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAgAElEQVR4Xny9CbRl=="
  }
}
```

**返回參數說明**:


| 參數名            | 類型                   | 說明                           |
| ------------------- | ------------------------ | -------------------------------- |
| status            | int                    | 請求是否成功，0：成功；1：失敗 |
| message           | string                 | 請求结果的描述消息             |
| data              | object                 | 用户的基本信息                 |
| + id              | int                    | 用户的 id                      |
| + username        | string                 | 用户名                         |
| + nickname        | string                 | 暱稱                           |
| + email           | string                 | 信箱                           |
| + user_pic	string | 頭像，base64格式的圖片 |                                |

---

### 更新基本信息

**簡要描述**:

* 更新用户的基本信息

**Request URL**:

* `/my/userinfo`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* `application/x-www-form-urlencoded`

**Request Body**:


| 參數名   | 必要 | 類型   | 說明   |
| ---------- | ------ | -------- | -------- |
| id       | 是   | number | 用户id |
| nickname | 是   | string | 暱稱   |
| email    | 是   | string | 信箱   |

**返回示例**:

```json=
{
  "status": 0,
  "message": "修改用户信息成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 更新密碼

**簡要描述**:

* 更新密碼

**Request URL**:

* `/my/updatepwd`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* `application/x-www-form-urlencoded`

**Request Body**:


| 參數名 | 必要 | 類型   | 說明   |
| -------- | ------ | -------- | -------- |
| oldPwd | 是   | string | 原密碼 |
| newPwd | 是   | string | 新密碼 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "修改密碼成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 更換頭像

**簡要描述**:

* 更換頭像

**Request URL**:

* `/my/update/avatar`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* `application/x-www-form-urlencoded`

**Request Body**:


| 參數名 | 必要 | 類型   | 說明             |
| -------- | ------ | -------- | ------------------ |
| avatar | 是   | string | base64格式的字串 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "更新頭像成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

## 文章類別管理

---

### 獲取文章分類列表

**簡要描述**:

* 獲取文章分類列表

**Request URL**:

* `/my/article/cates`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**參數**:

* 無

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取文章分類成功！",
  "data": [
    {
      "Id": 1,
      "name": "最新",
      "alias": "ZuiXin",
      "is_delete": 0
    },
    {
      "Id": 2,
      "name": "科技",
      "alias": "KeJi",
      "is_delete": 0
    },
    {
      "Id": 3,
      "name": "股市",
      "alias": "GuShi",
      "is_delete": 0
    },
    {
      "Id": 4,
      "name": "歷史",
      "alias": "LiShi",
      "is_delete": 0
    },
    {
      "Id": 5,
      "name": "情感",
      "alias": "QingGan",
      "is_delete": 0
    }
  ]
}
```

**返回參數說明**:


| 參數名      | 類型   | 說明                             |
| ------------- | -------- | ---------------------------------- |
| status      | int    | 請求是否成功，0：成功；1：失敗   |
| message     | string | 請求結果的描述消息               |
| data        | array  | 文章分類的陣列                   |
| + Id        | int    | 分類                             |
| + name      | string | 分類名稱                         |
| + alias     | string | 分類别名                         |
| + is_delete | int    | 是否被删除，0：未删除；1：已删除 |

---

### 新增文章分類

**簡要描述**:

* 新增文章分類

**Request URL**:

* `/my/article/addcates`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* application/x-www-form-urlencoded

**Request Body**:


| 參數名 | 必要 | 類型   | 說明     |
| -------- | ------ | -------- | ---------- |
| name   | 是   | string | 分類名稱 |
| alias  | 是   | string | 分類別名 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "新增文章分類成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 根據id刪除文章分類

**簡要描述**:

* 根據id刪除文章分類

**Request URL**:

* `/my/article/deletecate/:id`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**URL參數**:


| 參數名 | 必要 | 類型   | 說明           |
| -------- | ------ | -------- | ---------------- |
| id     | 是   | string | 要删除的分類id |

**返回示例**:

```json=
{
  "status": 0,
  "message": "删除文章分類成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 根據id獲取文章分類數據

**簡要描述**:

* 根據id獲取文章分類數據

**Request URL**:

* `/my/article/cates/:id`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**URL參數**:


| 參數名 | 必要 | 類型   | 說明           |
| -------- | ------ | -------- | ---------------- |
| id     | 是   | string | 要删除的分類id |

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取文章分類數據成功！",
  "data": {
    "Id": 1,
    "name": "最新",
    "alias": "ZuiXin",
    "is_delete": 0
  }
}
```

**返回參數說明**:


| 參數名    | 類型   | 說明                           |
| ----------- | -------- | -------------------------------- |
| status    | int    | 請求是否成功，0：成功；1：失敗 |
| message   | string | 請求結果的描述消息             |
| data      | object | 文章分類的信息對象             |
| Id        | int    | 分類 Id                        |
| name      | string | 分類名稱                       |
| alias     | string | 分類別名                       |
| is_delete | int    | 是否被删除，0：未删除；1：删除 |

---

### 根據id更新文章分類數據

**簡要描述**:

* 根據id更新文章分類數據

**Request URL**:

* `/my/article/updatecate`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Content-Type**:

* `application/x-www-form-urlencoded`

**Request Body**:


| 參數名 | 必要 | 類型   | 說明     |
| -------- | ------ | -------- | ---------- |
| Id     | 是   | int    | 分類id   |
| name   | 是   | string | 分類名稱 |
| alias  | 是   | string | 分類別名 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "更新文章分類成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

## 文章管理

---

### 發布新文章

**簡要描述**:

* 發布新文章

**Request URL**:

* `/my/article/add`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Request Body（FormData)**:


| 參數名    | 必要 | 類型   | 說明                     |
| ----------- | ------ | -------- | -------------------------- |
| title     | 是   | string | 文章標題                 |
| cate_id   | 是   | int    | 所屬分類id               |
| content   | 是   | string | 文章内容                 |
| cover_img | 是   | blob   | 二進制	文章封面          |
| state     | 是   | string | 狀態，範圍：已發布、草稿 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "更新文章分類成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 獲取文章的列表數據

**簡要描述**:

* 獲取文章的列表數據

**Request URL**:

* `/my/article/list`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**URL參數**:


| 參數名   | 必要 | 類型   | 說明                           |
| ---------- | ------ | -------- | -------------------------------- |
| pagenum  | 是   | int    | 頁碼                           |
| pagesize | 是   | int    | 每頁顯示多少筆數據             |
| cate_id  | 否   | string | 文章分類的id                   |
| state    | 否   | string | 文章的狀態，範圍：已發布、草稿 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取文章列表成功！",
  "data": [
    {
      "Id": 1,
      "title": "abab",
      "pub_date": "2020-01-03 12:19:57.690",
      "state": "已發布",
      "cate_name": "最新"
    },
    {
      "Id": 2,
      "title": "666",
      "pub_date": "2020-01-03 12:20:19.817",
      "state": "已發布",
      "cate_name": "股市"
    }
  ],
  "total": 5
}
```

**返回參數說明**:


| 參數名      | 類型   | 說明                           |
| ------------- | -------- | -------------------------------- |
| status      | int    | 請求是否成功，0：成功；1：失敗 |
| message     | string | 請求結果的描述消息             |
| data        | object | 文章分類的信息對象             |
| + Id        | int    | 文章 Id                        |
| + title     | string | 標題                           |
| + pub_date  | string | 發布時間                       |
| + state     | string | 狀態                           |
| + cate_name | string | 所屬分類名稱                   |

---

### 根據id刪除文章數據

**簡要描述**:

* 根據id刪除文章數據

**Request URL**:

* `/my/article/delete/:id`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**URL參數**:


| 參數名 | 必要 | 類型   | 說明           |
| -------- | ------ | -------- | ---------------- |
| id     | 是   | string | 要删除的文章id |

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取文章列表成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |

---

### 根據id獲取文章詳情

**簡要描述**:

* 根據id獲取文章詳情

**Request URL**:

* `/my/article/:id`

**請求方式**:

* `GET`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**URL參數**:


| 參數名 | 必要 | 類型   | 說明   |
| -------- | ------ | -------- | -------- |
| id     | 是   | string | 文章id |

**返回示例**:

```json=
{
  "status": 0,
  "message": "獲取文章成功！",
  "data": {
  "Id": 4,
  "title": "新地球",
  "content": "<p><span style=\"color: #0000ff;\"><em><strong>新地球</strong></em></span></p>",
  "cover_img": "\\uploads\\upload_1cbcb854da97eb04d808cddb40dd3954",
  "pub_date": "2020-01-03 12:23:01.903",
  "state": "草稿",
  "is_delete": 0,
  "cate_id": 2,
  "author_id": 1
  }
}
```

**返回參數說明**:


| 參數名      | 類型   | 說明                           |
| ------------- | -------- | -------------------------------- |
| status      | int    | 請求是否成功，0：成功；1：失敗 |
| message     | string | 請求結果的描述消息             |
| data        | object | 文章的詳情                     |
| + Id        | int    | 文章 id                        |
| + title     | string | 標題                           |
| + content   | string | 内容                           |
| + cover_img | string | 封面的URL地址                  |
| + pub_date  | string | 發表時間                       |
| + state     | string | 狀態                           |
| + is_delete | int    | 是否被删除                     |
| + cate_id   | int    | 所屬分類id                     |
| + author_id | int    | 作者 id                        |

---

### 根據id更新文章信息

**簡要描述**:

* 根據id更新文章信息

**Request URL**:

* `/my/article/edit`

**請求方式**:

* `POST`

**Header**:

```json=
Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI
```

**Request Body（FormData)**:


| 參數名    | 必要 | 類型   | 說明                     |
| ----------- | ------ | -------- | -------------------------- |
| Id        | 是   | int    | 文章id                   |
| title     | 是   | string | 文章標題                 |
| cate_id   | 是   | int    | 所屬分類id               |
| content   | 是   | string | 文章内容                 |
| cover_img | 是   | blob   | 二進制	文章封面          |
| state     | 是   | string | 狀態，範圍：已發布、草稿 |

**返回示例**:

```json=
{
  "status": 0,
  "message": "修改文章成功！"
}
```

**返回參數說明**:


| 參數名  | 類型   | 說明                           |
| --------- | -------- | -------------------------------- |
| status  | int    | 請求是否成功，0：成功；1：失敗 |
| message | string | 請求結果的描述消息             |


```
npm i
```
在package.json同一層目錄下執行以下載所有套件
