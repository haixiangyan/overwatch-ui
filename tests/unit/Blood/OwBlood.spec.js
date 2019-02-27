import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import OwBlood from '../../../src/components/Blood/OwBlood.vue'

describe('OwButton.vue', () => {
    it('exists', () => {
        const OwBloodWrapper = shallowMount(OwBlood)
        expect(OwBloodWrapper).to.exist
    })
    it('receives total', () => {
        const OwBloodWrapper = shallowMount(OwBlood, {
            propsData: {
                total: 200
            }
        })
        expect(OwBloodWrapper.find('.title').text().split('/')[0]).to.equal('200');
    })
    it('receives residual', () => {
        const OwBloodWrapper = shallowMount(OwBlood, {
            propsData: {
                total: 200,
                residual: 150
            }
        })
        expect(OwBloodWrapper.find('.title').text().split('/')[1]).to.equal('150');
    })
    it('receives width', () => {
        const OwBloodWrapper = shallowMount(OwBlood, {
            propsData: {
                total: 200,
                width: 400
            }
        })
        expect(OwBloodWrapper.find('.ow-blood-items').attributes().style).to.equal('width: 400px;')
    })
})
