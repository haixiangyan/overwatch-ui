import {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import OwPopover from '../../../src/components/Popover/OwPopover.vue'
import OwButton from '../../../src/components/Button/OwButton'

const testData = {
    position: 'right',
    triggers: ['click', 'hover'],
    contentSlot: `<div id="hello">Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>`,
    triggerSlot: '<button>Top</button>'
}

describe('OwPopover.vue', () => {
    it('exists', () => {
        const OwPopoverWrapper = shallowMount(OwPopover)
        expect(OwPopoverWrapper).to.exist
    })
    it('receives position', () => {
        const OwPopoverWrapper = mount(OwPopover, {
            propsData: {
                position: 'left'
            },
            slots: {
                default: `<ow-button>Pop It!</ow-button>`,
                content: `<div>Popover Content</div>`
            },
            stubs: {OwButton},
            attachToDocument: true
        })

        OwPopoverWrapper.find(OwButton).trigger('click')
        expect(OwPopoverWrapper.find('.ow-popover-content-wrapper-left').exists()).to.equal(true)
    })
    it('receives trigger', () => {
        const OwPopoverWrapper = mount(OwPopover, {
            propsData: {
                trigger: 'hover'
            },
            slots: {
                default: `<ow-button>Pop It!</ow-button>`,
                content: `<div>Popover Content</div>`
            },
            stubs: {OwButton},
            attachToDocument: true
        })
        OwPopoverWrapper.trigger('mouseenter')
        expect(OwPopoverWrapper.find('.ow-popover-content-wrapper').exists()).to.equal(true)
    })
    it('can unmount listeners when destroy', () => {
        const OwPopoverWrapper = mount(OwPopover, {
            propsData: {
                position: 'left'
            },
            slots: {
                default: `<ow-button>Pop It!</ow-button>`,
                content: `<div>Popover Content</div>`
            },
            stubs: {OwButton},
            attachToDocument: true
        })

        OwPopoverWrapper.destroy()
        expect(OwPopoverWrapper.element.onclick).to.equal(null)
    })
})
