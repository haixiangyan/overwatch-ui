import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwHeader from '../../../src/components/Layout/OwHeader.vue'

const testData = {
    slot: 'Hello',
}

describe('OwHeader.vue', () => {
    it('should exist', () => {
        const OwHeaderWrapper = shallowMount(OwHeader)
        expect(OwHeaderWrapper).to.exist
    })

    it('should pass elements to slot', () => {
        const {slot} = testData
        const OwHeaderWrapper = shallowMount(OwHeader, {
            slots: {
                default: slot
            }
        })

        expect(OwHeaderWrapper.text()).to.equal(slot)
    })
})
