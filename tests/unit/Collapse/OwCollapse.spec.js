import {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import OwCollapseGroup from '../../../src/components/Collapse/OwCollapseGroup.vue'
import OwCollapse from '../../../src/components/Collapse/OwCollapse.vue'
import OwButton from '../../../src/components/Button/OwButton.vue'
import Vue from 'vue'

const testData = {
    selected: ['2'],
    slot: `
          <ow-collapse title="Title1" class="one" name="1"> <div>Content 1</div> </ow-collapse>
          <ow-collapse title="Title2" class="two" name="2"> <div>Content 2</div> </ow-collapse>
          <ow-collapse title="Title3" class="three" name="3"> <div>Content 3</div> </ow-collapse>
    `
}

describe('OwCollapse.vue', () => {
    it('exists', () => {
        const OwCollapseGroupWrapper= shallowMount(OwCollapseGroup, {
            propsData: {
                multiSelect: testData.multiple,
                selected: testData.selected
            },
            slots: {default: testData.slot},
            stubs: { OwCollapse, OwButton }
        })
        expect(OwCollapseGroupWrapper.find(OwCollapse)).to.exist
    })

    describe('props', () => {
        it('should pass props.selected', () => {
            const OwCollapseGroupWrapper= mount(OwCollapseGroup, {
                propsData: {
                    multiSelect: testData.multiple,
                    selected: testData.selected
                },
                slots: {default: testData.slot},
                stubs: { OwCollapse, OwButton }
            })

            expect(OwCollapseGroupWrapper.findAll(OwCollapse).at(1).classes()).contains('two')
        })
        it('props.multiSelect can set to false', () => {
            const OwCollapseGroupWrapper= mount(OwCollapseGroup, {
                propsData: {
                    multiSelect: false,
                    selected: testData.selected
                },
                slots: {default: testData.slot},
                stubs: { OwCollapse, OwButton }
            })

            OwCollapseGroupWrapper.findAll(OwCollapse).at(0).find(OwButton).trigger('click')

            expect(OwCollapseGroupWrapper.findAll(OwCollapse).at(0).classes()).contains('one')
            expect(OwCollapseGroupWrapper.findAll('.ow-collapse-content').length).to.equal(1)
        })
        it('props.multiSelect can set to true', (done) => {
            const OwCollapseGroupWrapper= mount(OwCollapseGroup, {
                propsData: {
                    multiSelect: true,
                    selected: testData.selected
                },
                slots: {default: testData.slot},
                stubs: { OwCollapse, OwButton }
            })

            OwCollapseGroupWrapper.findAll(OwCollapse).at(0).find(OwButton).trigger('click')
            Vue.nextTick(() => {
                expect(OwCollapseGroupWrapper.findAll('.ow-collapse-content').length).to.equal(2)
                done()
            })
        })
    })
})
