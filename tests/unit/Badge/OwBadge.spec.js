import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwBadge from '../../../src/components/Badge/OwBadge.vue'

describe('OwBadge.vue', () => {
    it('exists', () => {
        const OwBadgeWrapper = shallowMount(OwBadge)
        expect(OwBadgeWrapper).to.exist
    })
})
