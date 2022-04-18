const joi = require('joi')

const title = joi.string().required()
const cate_id = joi.number().integer().required()
const content = joi.string().required()
const cover_img = joi.binary().required()
const state = joi.string().required()

module.exports.addArticle = {
    body: {
        title,
        cate_id,
        content,
        cover_img,
        state
    }
}

