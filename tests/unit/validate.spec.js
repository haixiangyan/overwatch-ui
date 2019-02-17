import {expect} from 'chai'
import Validator from '../../src/plugins/Validator'

describe('Validator', () => {
    it('exists', () => {
        expect(Validator).to.exist
    })

    it('test required rule', () => {
        const data = {
            email: ''
        }
        const rules = [
            {field: 'email', required: true}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email.required).to.eq('Value required')
    })

    it('test to pass required', () => {
        const data = {
            email: 0
        }
        const rules = [
            {field: 'email', required: true}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('test wrong error content', () => {
        const data = {
            email: '@hello.com'
        }
        const rules = [
            {field: 'email', pattern: /^.+@.+$/}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.equal('Invalid value')
    })
    it('test correct email content', () => {
        const data = {
            email: '1@hello.com'
        }
        const rules =[
            {field: 'email', pattern: /^.+@.+$/}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test email keyword for invalid email', () => {
        const data = {
            field: '@hello.com'
        }
        const rules = [
            {field: 'email', pattern: 'email'}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.equal('Invalid value')
    })
    it('test email keyword for valid email', () => {
        const data = {
            email: '1@hello.com'
        }
        const rules = [
            {field: 'email', pattern: 'email'}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('test required and pattern keywords', () => {
        const data = {
            email: ''
        }
        const rules = [
            {field: 'email', pattern: 'email', required: true}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        // errors = {email: {pattern: 'Invalid', required: ''}}
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    })
    it('test pattern and minLength', () => {
        const data = {
            email: ''
        }
        const rules = [
            {field: 'email', pattern: 'email', minLength: 6}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        // errors = {email: {pattern: 'Invalid', required: ''}}
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    })
    it('test maxLength', () => {
        const data = {
            email: '1231231231@a.com'
        }
        const rules = [
            {field: 'email', pattern: 'email', maxLength: 10}
        ]
        const validator = new Validator()
        const errors = validator.validate(data, rules)
        expect(errors.email.maxLength).to.exist
    })
    it('test all validators', () => {
        const data = {
            email: '12312312'
        }
        const rules = [{
            field: 'email',
            required: true,
            pattern: 'email',
            minLength: 5,
            maxLength: 20,
        }]

        let fn = () => {
            const validator = new Validator()
            const errors = validator.validate(data, rules)
        }
        expect(fn).to.throw
    })
    it('receives custom validators', () => {
        const data = {
            email: 'abc'
        }
        const validator = new Validator()
        validator.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return 'Must have number'
            }
        }
        const rules = [{
            field: 'email',
            required: true,
            hasNumber: true
        }]
        let errors = null
        let fn = () => {
            errors = validator.validate(data, rules)
        }
        expect(fn).to.not.throw()
        expect(errors.email.hasNumber).to.eq('Must have number')
    })
    it('isolates validator callback', () => {
        const data = {
            email: 'abcabcabc'
        }
        const validator1 = new Validator()
        const validator2 = new Validator()
        validator1.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return 'Must have number'
            }
        }
        const rules = [{field: 'email', required: true, hasNumber: true}]
        // validator 1 shouldn't have hasNumber
        expect(() => {
            validator1.validate(data, rules)
        }).to.not.throw()
        // validator 2 should have hasNumber
        expect(() => {
            validator2.validate(data, rules)
        }).to.throw()
    })
    it('add custom validator on prototype', () => {
        const data = {
            email: 'abcabcabc'
        }
        const validator1 = new Validator()
        const validator2 = new Validator()
        Validator.addValidator('hasNumber',  (value) => {
            if (!/\d/.test(value)) {
                return 'Must have number'
            }
        })
        const rules = [{field: 'email', required: true, hasNumber: true}]
        // They both have hasNumber
        expect(() => {
            validator1.validate(data, rules)
        }).to.not.throw()
        expect(() => {
            validator2.validate(data, rules)
        }).to.not.throw()
    })
})
