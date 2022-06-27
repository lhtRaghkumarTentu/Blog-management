import Utils from '../app/utils'
import * as yup from 'yup'

module.exports = {

    validateCreateBlog: async(req, res, next) => {
        const schema = yup.object().shape({
            tittle: yup.string().max(20).required(),
            description: yup.string().min(20).max(200).required(),
            author: yup.string().max(20).required(),
        })
        await validate(schema, req.body, res, next)
    },
    validateGetDetailsBlog: async(req, res, next) => {
        const schema = yup.object().shape({
            id: yup.string().required()
        })
        await validate(schema, req.query, res, next)
    },
    validateUpdateBlog: async(req, res, next) => {
        const schema = yup.object().shape({
            id: yup.string().required()
        })
        await validate(schema, req.body, res, next)
    },
    validateDeleteBlog: async(req, res, next) => {
        const schema = yup.object().shape({
            id: yup.string().required()
        })
        await validate(schema, req.query, res, next)
    },

}

const validate = async(schema, reqData, res, next) => {
    try {
        await schema.validate(reqData, { abortEarly: false })
        next()
    } catch (e) {
        const errors = e.inner.map(({ path, message, value }) => ({ path, message, value }))
        Utils.responseForValidation(res, errors)
    }
}