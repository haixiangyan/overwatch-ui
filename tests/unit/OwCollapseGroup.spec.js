import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwCollapseGroup from '../../src/components/OwCollapseGroup.vue'

const testData = {
    multiple: true,
    single: true,
    selected: ['1'],
    slot: `
          <ow-collapse title="Title1" name="1"> <div>Content 1</div> </ow-collapse>
          <ow-collapse title="Title2" name="2"> <div>Content 2</div> </ow-collapse>
          <ow-collapse title="Title3" name="3"> <div>Content 3</div> </ow-collapse>
    `
}

describe('OwCollapseGroup.vue', () => {

    it('exists', () => {
        const OwCollapseGroupWrapper= shallowMount(OwCollapseGroup, {
            propsData: {
                multiSelect: testData.multiple,
                selected: testData.selected
            }
        })
        expect(OwCollapseGroupWrapper).to.exist
    })

    describe('props', () => {
        it('renders props.pc when passed', () => {
        })
    })
})
