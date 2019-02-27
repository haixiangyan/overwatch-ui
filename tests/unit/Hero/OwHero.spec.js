import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import OwHero from '../../../src/components/Hero/OwHero.vue'

const testData = {
}

describe('OwButton.vue', () => {
    it('exists', () => {
        const OwHeroWrapper = shallowMount(OwHero)
        expect(OwHeroWrapper).to.exist
    })

    it('receives hero props', () => {
        const OwHeroWrapper = shallowMount(OwHero, {
            propsData: {
                hero: 'hanzo'
            }
        })

        expect(OwHeroWrapper.find('.ow-hero-avatar').attributes().style).to.equal('background-image: url("https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png");');
    })

    it('receives size props', () => {
        const OwHeroWrapper = shallowMount(OwHero, {
            propsData: {
                hero: 'hanzo',
                size: 'large'
            }
        })

        expect(OwHeroWrapper.find('.large').exists()).to.equal(true)
    })

    it('receives isActive props', () => {
        const OwHeroWrapper = shallowMount(OwHero, {
            propsData: {
                hero: 'hanzo',
                isActive: true
            }
        })

        expect(OwHeroWrapper.find('.active').exists()).to.equal(true)
    })

    it('receives url props', () => {
        const OwHeroWrapper = shallowMount(OwHero, {
            propsData: {
                url: '/xxx'
            }
        })
        expect(OwHeroWrapper.find('.ow-hero-avatar').attributes().style).to.equal('background-image: url("/xxx");');
    })
})
