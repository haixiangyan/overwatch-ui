import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwSider from '../../../src/components/Layout/OwSider.vue'

const testData = {
    slot: 'Hello',
    visible: false
}

describe('OwSider.vue', () => {
    it('should exist', () => {
        const OwSiderWrapper = shallowMount(OwSider)
        expect(OwSiderWrapper).to.exist
    })

    it('should pass elements to slot', () => {
        const {slot} = testData
        const OwSiderWrapper = shallowMount(OwSider, {
            slots: {
                default: slot
            }
        })

        expect(OwSiderWrapper.text()).to.equal(slot)
    })
    it('should pass props.visible to slot', () => {
        const {slot, visible} = testData
        const OwSiderWrapper = shallowMount(OwSider, {
            propsData: {visible},
            slot: {default: slot}
        })

        expect(OwSiderWrapper.text()).to.equal('')
    })
})
