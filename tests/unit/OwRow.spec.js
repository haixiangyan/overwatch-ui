import {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import OwRow from '../../src/components/OwRow.vue'
import OwCol from '../../src/components/OwCol.vue'
import Vue from 'vue'
import {testProperty} from "../utils"

const testData = {
    gutter: 10,
    rowAligns: ['left', 'right', 'center']
}

describe('OwRow.vue', () => {

    it('exists', () => {
        const OwRowWrapper = shallowMount(OwRow)
        expect(OwRowWrapper).to.exist
    })

    describe('props', () => {
        it('renders props.gutter when passed', (done) => {
            const {gutter} = testData
            const OwRowWrapper = mount(OwRow, {
                attachToDocument: true,
                slots: {
                    default: `
                        <ow-col :pc="{span: 12}"></ow-col>
                        <ow-col :pc="{span: 12}"></ow-col>
                    `
                },
                stubs: {
                    OwCol
                },
                propsData: { gutter },
            })

            Vue.nextTick(() => {
                expect(OwRowWrapper.find(OwCol).element.style.paddingLeft).to.equal(`${gutter / 2}px`)
                done()
            })
        })
        it('renders props.rowAlign when passed', () => {
            const {rowAligns} = testData
            const OwRowWrapper = mount(OwRow, {
                attachToDocument: true,
                slots: {
                    default: `
                        <ow-col :pc="{span: 12}"></ow-col>
                        <ow-col :pc="{span: 12}"></ow-col>
                    `
                },
                stubs: {
                    OwCol
                },
            })

            testProperty(rowAligns, (rowAlign) => {
                OwRowWrapper.setProps({ rowAlign })
                expect(OwRowWrapper.classes()).contains(`ow-row-align-${rowAlign}`)
            })
        })
    })
})
