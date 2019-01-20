import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwLayout from '../../src/components/OwLayout.vue'
import OwSider from '../../src/components/OwSider.vue'
import Vue from 'vue'

const testData = {
    slot: 'Hello',
}

describe('OwIcon.vue', () => {
    it('should exist', () => {
        const OwLayoutWrapper = shallowMount(OwLayout)
        expect(OwLayoutWrapper).to.exist
    })

    it('should pass elements to slot', () => {
        const {slot} = testData
        const OwLayoutWrapper = shallowMount(OwLayout, {
            slots: {
                default: slot
            }
        })

        expect(OwLayoutWrapper.text()).to.equal(slot)
    })

    it('should add hasSider class if contains', (done) => {
        const OwLayoutWrapper = shallowMount(OwLayout, {
            slots: {
                default: '<ow-sider></ow-sider>'
            },
            stubs: { OwSider }
        })

        Vue.nextTick(() => {
            expect(OwLayoutWrapper.classes()).contains('ow-layout-has-sider')
            done()
        })
    })
})
