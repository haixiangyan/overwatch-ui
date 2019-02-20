import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwCol from '../../../src/components/Layout/OwCol.vue'

const testData = {
    pc: {span: 2, offset: 2},
    tablet: {span: 2, offset: 2},
    phone: {span: 2, offset: 2}
}

describe('OwCol.vue', () => {

    it('exists', () => {
        const OwColWrapper = shallowMount(OwCol)
        expect(OwColWrapper).to.exist
    })

    describe('props', () => {
        it('renders props.pc when passed', () => {
            const {pc} = testData
            const OwColWrapper = shallowMount(OwCol, {
                propsData: {pc}
            })
            expect(OwColWrapper.classes()).contains(`ow-col-pc-${pc.span}`)
            expect(OwColWrapper.classes()).contains(`ow-col-pc-offset-${pc.offset}`)
        })
        it('renders props.tablet when passed', () => {
            const {tablet} = testData
            const OwColWrapper = shallowMount(OwCol, {
                propsData: {tablet}
            })
            expect(OwColWrapper.classes()).contains(`ow-col-tablet-${tablet.span}`)
            expect(OwColWrapper.classes()).contains(`ow-col-tablet-offset-${tablet.offset}`)
        })
        it('renders props.phone when passed', () => {
            const {phone} = testData
            const OwColWrapper = shallowMount(OwCol, {
                propsData: {phone}
            })
            expect(OwColWrapper.classes()).contains(`ow-col-phone-${phone.span}`)
            expect(OwColWrapper.classes()).contains(`ow-col-phone-offset-${phone.offset}`)
        })
    })
})
