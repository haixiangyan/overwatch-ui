import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwRadio from '../../../src/components/Radio/OwRadio.vue'

describe('OwRadio.vue', () => {
    it('exists', () => {
        const OwRadioWrapper = shallowMount(OwRadio, {
            propsData: {
                value: 'genji',
                radioKey: 'hanzo',
                options: [ { value: 'genji' }, { value: 'hanzo' }, { value: 'widowmaker' } ]
            }
        })
        expect(OwRadioWrapper).to.exist
    })
    it('can be checked', (done) => {
        const OwRadioWrapper = shallowMount(OwRadio, {
            propsData: {
                value: 'genji',
                radioKey: 'hanzo',
                options: [ { value: 'genji' }, { value: 'hanzo' }, { value: 'widowmaker' } ]
            },
            listeners: {
                'input': (newValue) => {
                    expect(newValue).to.equal('hanzo')
                    done()
                }
            }
        })
        OwRadioWrapper.trigger('click')
    })
})
