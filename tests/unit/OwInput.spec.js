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
        const OwInputVue = shallowMount(OwInput)
        expect(OwInputVue.exists()).to.equal(true)
    })

    describe('props', () => {
        const OwInputVue = shallowMount(OwInput)
        afterEach(() => {
            OwInputVue.setProps({})
        })

        it('renders props.value when passed', () => {
            const {values} = testData

            testProperty(values, (value) => {
                OwInputVue.setProps({value})
                expect(OwInputVue.find('input').attributes('type'))
                    .to.equal(value)
            })
        })
        it('renders props.disabled when passed', () => {
            const {disabled} = testData
            OwInputVue.setProps({ disabled })

            expect(OwInputVue.find('input').element.getAttribute('disabled'))
                .to.equal('disabled')
        })
        it('renders props.readonly when passed', () => {
            const {readonly} = testData
            OwInputVue.setProps({ readonly })

            expect(OwInputVue.find('input').element.getAttribute('readonly'))
                .to.equal('readonly')
        })
        it('renders props.hint when passed', () => {
            const {hints} = testData

            hints.forEach((hint) => {
                OwInputVue.setProps({ hint })
                expect(OwInputVue.find('small').text())
                    .to.equal(hint)
            })
        })
        it('renders props.hintType when passed', () => {
            const {hints, hintTypes} = testData

            OwInputVue.setProps({ hint: hints[0] })

            hintTypes.forEach((hintType) => {
                OwInputVue.setProps({ hintType})

                expect(OwInputVue.classes()).contain(`ow-input-wrapper-${hintType}`)
            })
        })
    })

    describe('events', ()=> {
        it('can be handled', () => {
            const { events } = testData
            const eventHandler = sinon.stub()

            testProperty(events, (eventName) => {
                const OwInputVue = shallowMount(OwInput, {
                    listeners: {
                        [`${eventName}`]: eventHandler
                    }
                })

                OwInputVue.find('input').trigger(eventName)

                expect(eventHandler.called).to.equal(true)
            })
        })
    })
})
