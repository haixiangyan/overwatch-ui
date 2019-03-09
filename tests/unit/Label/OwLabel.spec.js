import Vue from 'vue'
import {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import OwLabel from '../../../src/components/Label/OwLabel.vue'
import OwSlider from '../../../src/components/Slider/OwSlider.vue'

describe('OwLabel.vue', () => {
    it('exists', () => {
        const OwLabelWrapper = shallowMount(OwLabel)
        expect(OwLabelWrapper).to.exist
    })
    it('can wrap OwSlider', () => {
        const OwLabelWrapper = mount(OwLabel, {
            slots: {
                default: `<ow-slider :width="300" value="11"></ow-slider>`
            },
            stubs: {
                'ow-slider': OwSlider
            }
        })
        expect(OwLabelWrapper.find(OwSlider).exists()).to.equal(true)
    })
    it('can show input', (done) => {
        const OwLabelWrapper = shallowMount(OwLabel, {
            attachToDocument: true,
            slots: {
                default: `<ow-slider :width="300" :value="11"></ow-slider>`
            },
            stubs: {
                'ow-slider': OwSlider
            }
        })
        Vue.nextTick(() => {
            OwLabelWrapper.find('.ow-label-item-label').trigger('click')
            expect(OwLabelWrapper.find('.ow-label-item-input').exists()).to.equal(true)
            done()
        })
    })
})
