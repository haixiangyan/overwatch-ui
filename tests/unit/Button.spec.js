import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import {testProperty} from "../utils"

const testData = {
    iconNames: ['setting', 'add'],
    iconPositions: ['left', 'right'],
    isLoading: true,
    types: ['primary', 'warning', 'danger', 'info'],
    events: ['click']
}

describe('Button.vue', () => {

    it('exists', () => {
        const ButtonVue = shallowMount(Button)
        expect(ButtonVue).to.exist
    })

    describe(('props'), () => {
        let ButtonVue = shallowMount(Button)

        afterEach(() => {
            ButtonVue.setProps({})
        })

        it('renders props.iconName when passed', () => {
            const {iconNames} = testData
            const IconVue = ButtonVue.find(Icon)

            testProperty(iconNames, (iconName) => {
                ButtonVue.setProps({iconName})
                expect(IconVue.attributes('name')).to.equal(iconName)
            })
        })
        it('renders props.iconPosition when passed', () => {
            const {iconNames, iconPositions} = testData
            testProperty(iconPositions, (iconPosition) => {
                ButtonVue.setProps({
                    iconName: iconNames[0],
                    iconPosition
                })
                expect(ButtonVue.classes()).contain(`ow-button-icon_${iconPosition}`)
            })
        })
        it('renders props.isLoading when passed', () => {
            const {isLoading} = testData
            ButtonVue.setProps({
                isLoading
            })

            const IconVue = ButtonVue.find(Icon)
            expect(IconVue.attributes('isloading')).to.equal('true')
        })
        it('renders props.type when passed', () => {
            const {types} = testData
            testProperty(types, (type) => {
                ButtonVue.setProps({type})
                expect(ButtonVue.classes()).contain(`ow-button-${type}`)
            })
        })
    })

    describe('events', () => {
        it('handles click event', () => {
            const {events} = testData
            const eventHandler = sinon.stub()
            const ButtonVue = shallowMount(Button, {
                listeners: {
                    click: eventHandler
                }
            })

            ButtonVue.trigger(events[0])

            expect(eventHandler.called).to.equal(true)
        })
    })
})
