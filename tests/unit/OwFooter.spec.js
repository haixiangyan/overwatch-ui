import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwFooter from '../../src/components/OwFooter.vue'

const testData = {
    slot: 'Hello',
}

describe('OwFooter.vue', () => {
    it('should exist', () => {
        const OwLayoutWrapper = shallowMount(OwFooter)
        expect(OwLayoutWrapper).to.exist
    })

    it('should pass elements to slot', () => {
        const {slot} = testData
        const OwFooterWrapper = shallowMount(OwFooter, {
            slots: {
                default: slot
            }
        })

        expect(OwFooterWrapper.text()).to.equal(slot)
    })
})
