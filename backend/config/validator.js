const joi = require('@hapi/joi')

const validator = {
    validateData: (req, res, next) => {
        const schema = joi.object({
            urlPick: joi.string().trim(),
            user: joi.string().min(3).max(50).alphanum(),
            password: joi.string().trim().min(0).max(50).pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!@"#$%&/()=?¡*¨´+'}{¿,.<>[\]-]).{8,}/, "password"),
            firstName: joi.string().min(3).max(50),
            lastName: joi.string().min(3).max(50),
            email: joi.string().trim().email(),
            country: joi.string()
        })

        const validate = schema.validate(req.body)

        if (validate.error !== undefined) {
            return res.json({
                success: false,
                error: 'a problem occurred when trying to validate your data',
                message: validate.error
            })
        }

        next()
    }
}

module.exports = validator