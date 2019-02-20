import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwPager from '../../../src/components/Pager/OwPager.vue'

describe('OwButton.vue', () => {

    it('exists', () => {
        const OwPagerWrapper = shallowMount(OwPager, {
            propsData: {
                total: 10,
                current: 3
            }
        })
        expect(OwPagerWrapper).to.exist
    })

    describe(('props'), () => {
        it('receives current and total', () => {
            const OwPagerWrapper = shallowMount(OwPager, {
                propsData: {
                    total: 10,
                    current: 3
                }
            })
            expect(OwPagerWrapper.find('.ow-pager-current').text()).to.equal('3')
        })
        it('receives hideOnSinglePage', () => {
            const OwPagerWrapper = shallowMount(OwPager, {
                propsData: {
                    total: 1,
                    current: 1,
                    hideOnSinglePage: false
                }
            })

            expect(OwPagerWrapper.exists()).to.equal(true)
        })
    })

    describe('events', () => {
        it('handles click event', (done) => {
            const OwPagerWrapper = shallowMount(OwPager, {
                propsData: {
                    total: 10,
                    current: 3
                },
                listeners: {
                    'update:current': function (newCurrent) {
                        expect(newCurrent).to.equal(1)
                        done()
                    }
                }
            })
            OwPagerWrapper.find('.ow-pager-indicator').trigger('click')
        })
    })
})
