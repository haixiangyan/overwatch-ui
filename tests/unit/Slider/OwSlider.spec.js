import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwSlider from '../../../src/components/Slider/OwSlider.vue'

describe('OwSlider.vue', () => {
    it('exists', () => {
        const OwSliderWrapper = shallowMount(OwSlider)
        expect(OwSliderWrapper).to.exist
    })
})
