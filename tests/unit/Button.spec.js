import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import {testProperty} from "../utils"

const testData = {
    iconNames: ['setting', 'add'],
    iconPositions: ['left', 'right'],
    isLoadings: [true],
    types: ['primary', 'warning', 'danger', 'info'],
    events: ['click']
}

describe('Button.vue', () => {
    it('renders props.iconName when passed', () => {
        const {iconNames} = testData
        const ButtonVue = shallowMount(Button)
        const IconVue = ButtonVue.find(Icon)

        testProperty(iconNames, (iconName) => {
            ButtonVue.setProps({iconName})
            expect(IconVue.attributes().name).to.equal(iconName)
        })
    })
    it('renders props.iconPosition when passed', () => {
        const {iconNames, iconPositions} = testData
        const ButtonVue = shallowMount(Button)
        testProperty(iconPositions, (iconPosition) => {
            ButtonVue.setProps({
                iconName: iconNames[0],
                iconPosition
            })
            expect(ButtonVue.classes()).contain(`ow-button-icon_${iconPosition}`)
        })
    })
    it('renders props.isLoading when passed', () => {
        const {isLoadings} = testData
        const ButtonVue = shallowMount(Button)
        const IconVue = ButtonVue.find(Icon)
        testProperty(isLoadings, (isLoading) => {
            ButtonVue.setProps({
                isLoading
            })
            expect(IconVue.attributes().isloading).to.equal('true')
        })
    })
    it('renders props.type when passed', () => {
        const {types} = testData
        const ButtonVue = shallowMount(Button)
        testProperty(types, (type) => {
            ButtonVue.setProps({type})
            expect(ButtonVue.classes()).contain(`ow-button-${type}`)
        })
    })
    it('handles click event', () => {
        const ButtonVue = shallowMount(Button)
        const {events} = testData
        testProperty(events, (event) => {
            const eventHandler = sinon.stub()

            ButtonVue.element.addEventListener(event, eventHandler)
            ButtonVue.trigger(event)

            expect(eventHandler.called).to.equal(true)
            ButtonVue.element.removeEventListener(event, eventHandler)
        })
    })
})
