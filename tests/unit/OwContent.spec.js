import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwContent from '../../src/components/OwContent.vue'

const testData = {
    slot: 'Hello',
}

describe('OwContent.vue', () => {
    it('should exist', () => {
        const OwContentWrapper = shallowMount(OwContent)
        expect(OwContentWrapper).to.exist
    })

    it('should pass elements to slot', () => {
        const {slot} = testData
        const OwContentWrapper = shallowMount(OwContent, {
            slots: {
                default: slot
            }
        })

        expect(OwContentWrapper.text()).to.equal(slot)
    })
})
