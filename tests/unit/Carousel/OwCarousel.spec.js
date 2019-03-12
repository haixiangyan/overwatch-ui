import {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import OwCarousel from '../../../src/components/Carousel/OwCarousel.vue'
import OwCarouselItem from '../../../src/components/Carousel/OwCarouselItem.vue'
import sinon from "sinon"

describe('OwCarousel.vue', () => {
    it('exists', () => {
        const OwCarouselWrapper = shallowMount(OwCarousel)
        expect(OwCarouselWrapper).to.exist
    })

    it('receives selected props', (done) => {
        const OwCarouselWrapper = mount(OwCarousel, {
            propsData: {isAutoPlay: false},
            slots: {
                default: `
                    <ow-carousel-item name="1">
                        <div class="box1">1</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box2">2</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box3">3</div>
                    </ow-carousel-item>`,
            },
            stubs: { OwCarouselItem }
        })

        setTimeout(() => {
            expect(OwCarouselWrapper.find('.box1').element).to.exist
            done()
        }, 200)
    })

    it('render selected', (done) => {
        const OwCarouselWrapper = mount(OwCarousel, {
            propsData: {isAutoPlay: false, selected: '2'},
            slots: {
                default: `
                    <ow-carousel-item name="1">
                        <div class="box1">1</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box2">2</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box3">3</div>
                    </ow-carousel-item>`,
            },
            stubs: { OwCarouselItem },
        })

        setTimeout(() => {
            expect(OwCarouselWrapper.find('.box2').exists()).to.be.true
            done()
        }, 200)
    })

    it('show second box when clicking', (done) => {
        const OwCarouselWrapper = mount(OwCarousel, {
            propsData: {isAutoPlay: false, selected: '1'},
            slots: {
                default: `
                    <ow-carousel-item name="1">
                        <div class="box1">1</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box2">2</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box3">3</div>
                    </ow-carousel-item>`,
            },
            stubs: { OwCarouselItem },
            listeners: {
                'update:selected': (newSelected) => {
                    expect(newSelected).to.eq('2')
                    done()
                }
            }
        })

        setTimeout(() => {
            OwCarouselWrapper.find('[data-index="1"]').trigger('click')
        }, 200)
    })

    it('can auto play', (done) => {
        const eventHandler = sinon.stub()
        const OwCarouselWrapper = mount(OwCarousel, {
            propsData: {isAutoPlay: true, autoPlayDelay: 100, selected: '1'},
            slots: {
                default: `
                    <ow-carousel-item name="1">
                        <div class="box1">1</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="2">
                        <div class="box2">2</div>
                    </ow-carousel-item>
                    <ow-carousel-item name="3">
                        <div class="box3">3</div>
                    </ow-carousel-item>`,
            },
            stubs: { OwCarouselItem },
            listeners: {
                'update:selected': eventHandler
            }
        })

        setTimeout(() => {
            expect(eventHandler.called).to.equal(true)
            done()
        }, 110)
    })
})
