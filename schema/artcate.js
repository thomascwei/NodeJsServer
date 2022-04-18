const joi = require('joi')

const name = joi.string().required()
const alias = joi.string().required()
const is_delete = joi.number()
const id = joi.number().integer().min(1).required()

module.exports.addcate = {
    body: {
        name,
        alias,
        is_delete
    }
}

module.exports.updatecate = {
    body: {
        name,
        alias,
        id
    }
}