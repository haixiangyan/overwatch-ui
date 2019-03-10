import {expect} from 'chai'
import Vue from 'vue'
import {shallowMount} from '@vue/test-utils'
import OwModal from '../../../src/components/Modal/OwModal.vue'

describe('OwModal.vue', () => {
    it('exists', () => {
        const OwModalWrapper = shallowMount(OwModal)
        expect(OwModalWrapper).to.exist
    })
    it('can open itself', () => {
        const OwModalWrapper = shallowMount(OwModal, {
            propsData: { isOpen: false }
        })
        expect(OwModalWrapper.html()).to.equal(undefined)
        OwModalWrapper.setProps({ isOpen: true })
        expect(OwModalWrapper.html()).to.not.equal(undefined)
    })
    it('can close itself', () => {
        const OwModalWrapper = shallowMount(OwModal, {
            propsData: { isOpen: true }
        })
        expect(OwModalWrapper.html()).to.not.equal(undefined)
        OwModalWrapper.setProps({ isOpen: false })
        expect(OwModalWrapper.html()).to.equal(undefined)
    })
    it('can click outside to close itself', (done) => {
        const OwModalWrapper = shallowMount(OwModal, {
            propsData: { isOpen: true },
            listeners: {
                'update:isOpen': (newIsOpen) => {
                    expect(newIsOpen).to.equal(false)
                    done()
                }
            }
        })
        OwModalWrapper.find('.ow-modal').trigger('click')
    })
    it('remove all side effects when destroied', () => {
        const OwModalWrapper = shallowMount(OwModal, {
            propsData: { isOpen: true }
        })
        OwModalWrapper.destroy()
        expect(window.onwheel).to.equal(null)
        expect(window.onmousewheel).to.equal(null)
        expect(window.ontouchmove).to.equal(null)
        expect(document.onkeydown).to.equal(null)
    })
})
