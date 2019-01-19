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
        const OwButtonVue = shallowMount(OwButton)
        expect(OwButtonVue).to.exist
    })

    describe(('props'), () => {
        const OwButtonVue = shallowMount(OwButton)
        const IconVue = OwButtonVue.find(OwIcon)

        afterEach(() => {
            OwButtonVue.setProps({})
        })

        it('renders props.iconName when passed', () => {
            const {iconNames} = testData

            testProperty(iconNames, (iconName) => {
                OwButtonVue.setProps({iconName})
                expect(IconVue.attributes('name')).to.equal(iconName)
            })
        })
        it('renders props.iconPosition when passed', () => {
            const {iconNames, iconPositions} = testData
            testProperty(iconPositions, (iconPosition) => {
                OwButtonVue.setProps({
                    iconName: iconNames[0],
                    iconPosition
                })
                expect(OwButtonVue.classes()).contain(`ow-button-icon_${iconPosition}`)
            })
        })
        it('renders props.isLoading when passed', () => {
            const {isLoading} = testData
            OwButtonVue.setProps({
                isLoading
            })

            expect(IconVue.attributes('isloading')).to.equal('true')
        })
        it('renders props.type when passed', () => {
            const {types} = testData
            testProperty(types, (type) => {
                OwButtonVue.setProps({type})
                expect(OwButtonVue.classes()).contain(`ow-button-${type}`)
            })
        })
    })

    describe('events', () => {
        it('handles click event', () => {
            const {events} = testData
            const eventHandler = sinon.stub()
            const OwButtonVue = shallowMount(OwButton, {
                listeners: {
                    click: eventHandler
                }
            })

            OwButtonVue.trigger(events[0])

            expect(eventHandler.called).to.equal(true)
        })
    })
})
