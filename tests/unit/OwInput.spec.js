import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwInput from '../../src/components/OwInput.vue'
import {testProperty} from "../utils"

const testData = {
    values: ['text'],
    iconNames: ['setting'],
    placeholders: ['Some hint here'],
    disabled: true,
    readonly: true,
    hints: ['Some error message here'],
    hintTypes: ['info', 'danger', 'warning'],
    types: ['text', 'password', 'email', 'number'],
    events: ['change', 'focus', 'blur']
}

describe('OwInputVue.vue', () => {

    it('exists', () => {
        const OwInputWrapper = shallowMount(OwInput)
        expect(OwInputWrapper.exists()).to.equal(true)
    })

    describe('props', () => {
        const OwInputWrapper = shallowMount(OwInput)
        afterEach(() => {
            OwInputWrapper.setProps({})
        })

        it('renders props.value when passed', () => {
            const {values} = testData

            testProperty(values, (value) => {
                OwInputWrapper.setProps({value})
                expect(OwInputWrapper.find('input').attributes('type'))
                    .to.equal(value)
            })
        })
        it('renders props.disabled when passed', () => {
            const {disabled} = testData
            OwInputWrapper.setProps({ disabled })

            expect(OwInputWrapper.find('input').element.getAttribute('disabled'))
                .to.equal('disabled')
        })
        it('renders props.readonly when passed', () => {
            const {readonly} = testData
            OwInputWrapper.setProps({ readonly })

            expect(OwInputWrapper.find('input').element.getAttribute('readonly'))
                .to.equal('readonly')
        })
        it('renders props.hint when passed', () => {
            const {hints} = testData

            hints.forEach((hint) => {
                OwInputWrapper.setProps({ hint })
                expect(OwInputWrapper.find('small').text())
                    .to.equal(hint)
            })
        })
        it('renders props.hintType when passed', () => {
            const {hints, hintTypes} = testData

            OwInputWrapper.setProps({ hint: hints[0] })

            hintTypes.forEach((hintType) => {
                OwInputWrapper.setProps({ hintType})

                expect(OwInputWrapper.classes()).contain(`ow-input-wrapper-${hintType}`)
            })
        })
    })

    describe('events', ()=> {
        it('can be handled', () => {
            const { events } = testData
            const eventHandler = sinon.stub()

            testProperty(events, (eventName) => {
                const OwInputWrapper = shallowMount(OwInput, {
                    listeners: {
                        [`${eventName}`]: eventHandler
                    }
                })

                OwInputWrapper.find('input').trigger(eventName)

                expect(eventHandler.called).to.equal(true)
            })
        })
    })
})
