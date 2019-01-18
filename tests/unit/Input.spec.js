import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Input from '@/components/Input.vue'
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

describe('Input.vue', () => {

    it('exists', () => {
        const InputVue = shallowMount(Input)
        expect(InputVue.exists()).to.equal(true)
    })

    describe('props', () => {
        const InputVue = shallowMount(Input)
        afterEach(() => {
            InputVue.setProps({})
        })

        it('renders props.value when passed', () => {
            const {values} = testData

            testProperty(values, (value) => {
                InputVue.setProps({value})
                expect(InputVue.find('input').attributes('type'))
                    .to.equal(value)
            })
        })
        it('renders props.disabled when passed', () => {
            const {disabled} = testData
            InputVue.setProps({ disabled })

            expect(InputVue.find('input').element.getAttribute('disabled'))
                .to.equal('disabled')
        })
        it('renders props.readonly when passed', () => {
            const {readonly} = testData
            InputVue.setProps({ readonly })

            expect(InputVue.find('input').element.getAttribute('readonly'))
                .to.equal('readonly')
        })
        it('renders props.hint when passed', () => {
            const {hints} = testData

            hints.forEach((hint) => {
                InputVue.setProps({ hint })
                expect(InputVue.find('small').text())
                    .to.equal(hint)
            })
        })
        it('renders props.hintType when passed', () => {
            const {hints, hintTypes} = testData

            InputVue.setProps({ hint: hints[0] })

            hintTypes.forEach((hintType) => {
                InputVue.setProps({ hintType})

                expect(InputVue.classes()).contain(`ow-input-wrapper-${hintType}`)
            })
        })
    })

    describe('events', ()=> {
        it('can be handled', () => {
            const { events } = testData
            const eventHandler = sinon.stub()

            testProperty(events, (eventName) => {
                const InputVue = shallowMount(Input, {
                    listeners: {
                        [`${eventName}`]: eventHandler
                    }
                })

                InputVue.find('input').trigger(eventName)

                expect(eventHandler.called).to.equal(true)
            })
        })
    })
})
