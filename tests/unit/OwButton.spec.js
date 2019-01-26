import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import OwButton from '../../src/components/OwButton.vue'
import OwIcon from '../../src/components/OwIcon.vue'
import {testProperty} from "../utils"

const testData = {
    iconNames: ['setting', 'add'],
    iconPositions: ['left', 'right'],
    isLoading: true,
    types: ['primary', 'warning', 'danger', 'info'],
    events: ['click']
}

describe('OwButton.vue', () => {

    it('exists', () => {
        const OwButtonWrapper = shallowMount(OwButton)
        expect(OwButtonWrapper).to.exist
    })

    describe(('props'), () => {
        const OwButtonWrapper = shallowMount(OwButton)
        const IconVue = OwButtonWrapper.find(OwIcon)

        afterEach(() => {
            OwButtonWrapper.setProps({})
        })

        it('renders props.iconName when passed', () => {
            const {iconNames} = testData

            testProperty(iconNames, (iconName) => {
                OwButtonWrapper.setProps({iconName})
                expect(IconVue.attributes('name')).to.equal(iconName)
            })
        })
        it('renders props.iconPosition when passed', () => {
            const {iconNames, iconPositions} = testData
            testProperty(iconPositions, (iconPosition) => {
                OwButtonWrapper.setProps({
                    iconName: iconNames[0],
                    iconPosition
                })
                expect(OwButtonWrapper.classes()).contain(`ow-button-icon-${iconPosition}`)
            })
        })
        it('renders props.isLoading when passed', () => {
            const {isLoading} = testData
            OwButtonWrapper.setProps({
                isLoading
            })

            expect(IconVue.attributes('isloading')).to.equal('true')
        })
        it('renders props.type when passed', () => {
            const {types} = testData
            testProperty(types, (type) => {
                OwButtonWrapper.setProps({type})
                expect(OwButtonWrapper.classes()).contain(`ow-button-${type}`)
            })
        })
    })

    describe('events', () => {
        it('handles click event', () => {
            const {events} = testData
            const eventHandler = sinon.stub()
            const OwButtonWrapper = shallowMount(OwButton, {
                listeners: {
                    click: eventHandler
                }
            })

            OwButtonWrapper.trigger(events[0])

            expect(eventHandler.called).to.equal(true)
        })
    })
})
