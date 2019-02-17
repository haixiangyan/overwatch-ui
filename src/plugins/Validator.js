function toObject(object, field) {
    if (typeof object[field] !== 'object') {
        object[field] = {}
    }
}

class Validator {
    constructor() { }

    static addValidator(name, callback) {
        Validator.prototype[name] = callback
    }
    validate(data, rules) {
        let errors = {}
        rules.forEach((rule) => {
            let value = data[rule.field]

            // Check required first
            if (rule.required) {
                let error = this.required(value)
                if (error) {
                    toObject(errors, rule.field)
                    errors[rule.field].required = error
                    return
                }
            }

            // Check other validators except 'key' and 'required'
            const validators = Object.keys(rule).filter(validator => validator !== 'field' && validator !== 'required')
            // validators maybe pattern/minLength/maxLength/...
            validators.forEach((validator) => {
                if (this[validator]) {
                    let error = this[validator] && this[validator](value, rule[validator])
                    if (error) {
                        toObject(errors, rule.field)
                        errors[rule.field][validator] = error
                    }
                }
                else {
                    throw `Invalid validator: ${validator}`
                }
            })
        })
        return errors
    }
    required = (value) => {
        if (value !== 0 && !value) {
            return 'Value required'
        }
    }
    pattern = (value, pattern) => {
        if (pattern === 'email') {
            pattern = /^.+@.+$/
        }
        if (!pattern.test(value)) {
            return 'Invalid value'
        }
    }
    minLength = (value, minLength) => {
        if (value.length < minLength) {
            return 'Too short'
        }
    }
    maxLength = (value, maxLength) => {
        if (value.length > maxLength) {
            return 'Too long'
        }
    }
}

export default Validator
