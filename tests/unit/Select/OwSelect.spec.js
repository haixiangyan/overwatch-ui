import {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import OwSelect from '../../../src/components/Select/OwSelect.vue'
import OwOption from '../../../src/components/Select/OwOption.vue'
import {testProperty} from "../../utils"

const testData = {
    options: [
        {
            value: 'genji',
            label: 'Genji',
            img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
        }, {
            value: 'hanzo',
            label: 'Hanzo',
            img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
            disabled: true
        }, {
            value: 'mccree',
            label: 'McCree',
            img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
        }, {
            value: 'tracer',
            label: 'Tracer',
            img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
            disabled: true
        }, {
            value: 'zarya',
            label: 'Zarya',
            img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
        }
    ]
}

describe('OwSelect.vue', () => {

    it('exists', () => {
        const OwSelectWrapper = shallowMount(OwSelect, {
            propsData: {
                value: '',
                options: [...testData.options]
            }
        })
        expect(OwSelectWrapper).to.exist
    })

    describe(('props'), () => {
        it('can open dropdown', () => {
            const OwSelectWrapper = mount(OwSelect, {
                propsData: {
                    value: '',
                    options: [...testData.options]
                }
            })
            OwSelectWrapper.find('input').trigger('click')
            expect(OwSelectWrapper.element.querySelector('.ow-select-dropdown')).to.exist;
        })
        it('can close dropdown', () => {
            const OwSelectWrapper = mount(OwSelect, {
                propsData: {
                    value: '',
                    options: [...testData.options]
                }
            })
            OwSelectWrapper.find('input').trigger('click')
            OwSelectWrapper.find('input').trigger('click')
            expect(OwSelectWrapper.element.querySelector('.ow-select-dropdown')).to.not.exist;
        })
        it('can update selected option', (done) => {
            const OwSelectWrapper = mount(OwSelect, {
                propsData: {
                    value: '',
                    options: [...testData.options]
                },
                listeners: {
                    'input': (selected) => {
                        expect(selected).to.equal('genji')
                        done()
                    }
                }
            })
            OwSelectWrapper.find('input').trigger('click')
            OwSelectWrapper.findAll(OwOption).at(0).trigger('click')
        })
        it('can update selected option', (done) => {
            const eventHandler = sinon.stub()
            const OwSelectWrapper = mount(OwSelect, {
                propsData: {
                    value: '',
                    options: [...testData.options]
                },
                listeners: {
                    'input': eventHandler
                }
            })
            OwSelectWrapper.find('input').trigger('click')
            OwSelectWrapper.findAll(OwOption).at(1).trigger('click')
            setTimeout(() => {
                expect(eventHandler.called).to.equal(false)
                done()
            }, 100)
        })
    })
})
