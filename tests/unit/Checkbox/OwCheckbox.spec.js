import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwCheckbox from '../../../src/components/Checkbox/OwCheckbox.vue'

describe('OwCheckbox.vue', () => {
    it('exists', () => {
        const OwCheckboxWrapper = shallowMount(OwCheckbox, {
            propsData: {
                value: true,
            }
        })
        expect(OwCheckboxWrapper).to.exist
    })
    it('can be checked', (done) => {
        const OwChekcboxWrapper = shallowMount(OwCheckbox, {
            propsData: {
                value: true
            },
            listeners: {
                'input': (newValue) => {
                    expect(newValue).to.equal(false)
                    done()
                }
            }
        })
        OwChekcboxWrapper.trigger('click')
    })
})
