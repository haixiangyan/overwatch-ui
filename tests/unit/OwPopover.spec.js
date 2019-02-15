import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwPopover from '../../src/components/Popover/OwPopover.vue'

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
})
