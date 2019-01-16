import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'

const testData = {
    iconName: 'setting',
    iconPosition: 'right',
    isLoading: true,
    types: ['primary', 'warning', 'danger', 'info'],
    events: ['click']
}

describe('Button.vue', () => {
    it('renders props.iconName when passed', () => {
        const {iconName} = testData
        const ButtonVue = shallowMount(Button, {
            propsData: {iconName}
        })
        const IconVue = ButtonVue.find(Icon)
        expect(IconVue.attributes().name).to.equal(iconName)
    })
    it('renders props.iconPosition when passed', () => {
        const {iconName, iconPosition} = testData
        const ButtonVue = shallowMount(Button, {
            propsData: {
                iconName,
                iconPosition
            }
        })
        expect(ButtonVue.classes()).contain(`ow-button-icon_${iconPosition}`)
    })
    it('renders props.isLoading when passed', () => {
        const {isLoading} = testData
        const ButtonVue = shallowMount(Button, {
            propsData: {isLoading}
        })
        const IconVue = ButtonVue.find(Icon)
        expect(IconVue.attributes().isloading).to.equal('true')
    })
    it('renders props.type when passed', () => {
        const {types} = testData
        const ButtonVue = shallowMount(Button, { })
        types.forEach((type) => {
            ButtonVue.setProps({ type })
            expect(ButtonVue.classes()).contain(`ow-button-${type}`)
        })
    })
    it('handles click event', () => {
        const ButtonVue = shallowMount(Button, { })
        const {events} = testData
        events.forEach((event) => {
            const eventHandler = sinon.stub()

            ButtonVue.element.addEventListener(event, eventHandler)
            ButtonVue.trigger(event)

            expect(eventHandler.called).to.equal(true)
            ButtonVue.element.removeEventListener(event, eventHandler)
        })
    })
})
