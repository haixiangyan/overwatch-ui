import {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import OwAlert from '../../src/components/Alert/OwAlert.vue'
import OwButton from '../../src/components/Button/OwButton.vue'
import {testProperty} from "../utils"
import sinon from "sinon"

const testData = {
    titles: ['Hello', 'World'],
    messages: ['Yes', 'No'],
    types: ['info', 'success', 'danger', 'warning', 'loading'],
    autoCloseDelay: 0.5,
    closeButton: {
        text: 'OK',
        callback: sinon.stub()
    }
}

describe('OwAlert.vue', () => {

    it('exists', () => {
        const OwAlertWrapper = shallowMount(OwAlert)
        expect(OwAlertWrapper).to.exist
    })

    describe('props', () => {
        const OwAlertWrapper = shallowMount(OwAlert)
        afterEach(() => {
            OwAlertWrapper.setProps({})
        })

        it('renders props.title when passed', () => {
            const {titles} = testData
            testProperty(titles, (title) => {
                OwAlertWrapper.setProps({title})
                expect(OwAlertWrapper.find('.ow-alert-content-title').text()).to.equal(title)
            })
        })
        it('renders props.message when passed', () => {
            const {messages} = testData
            testProperty(messages, (message) => {
                OwAlertWrapper.setProps({message})
                expect(OwAlertWrapper.find('.ow-alert-content-message').text()).to.equal(message)
            })
        })
        it('renders props.type when passed', () => {
            const {types} = testData
            testProperty(types, (type) => {
                OwAlertWrapper.setProps({type})
                expect(OwAlertWrapper.find(`.ow-alert-content-text-${type}`).exists()).to.equal(true)
            })
        })
        it('renders props.autoCloseDelay when passed', (done) => {
            const {autoCloseDelay} = testData
            const OwAlertWrapper = shallowMount(OwAlert, {
                propsData: {autoCloseDelay}
            })
            setTimeout(() => {
                expect(OwAlertWrapper.exists()).to.equal(false)
                done()
            }, autoCloseDelay * 1000 + 500)
        })
        it('renders props.closeButton when passed', () => {
            const {closeButton} = testData
            const OwAlertWrapper = mount(OwAlert, {
                propsData: {closeButton}
            })

            expect(OwAlertWrapper.find(OwButton).text()).to.equal(closeButton.text)

            OwAlertWrapper.find(OwButton).trigger('click')
            expect(closeButton.callback.called).to.equal(true)
        })
    })
})
