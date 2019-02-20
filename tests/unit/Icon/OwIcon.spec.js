import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwIcon from '../../../src/components/Icon/OwIcon.vue'
import {testProperty} from "../../utils"

const testData = {
    names: ['setting', 'add'],
    colors: ['rgb(189, 40, 48)'],
    isLoading: true
}

describe('OwIcon.vue', () => {
    const OwIconWrapper = shallowMount(OwIcon)

    afterEach(() => {
        OwIconWrapper.setProps({})
    })

    it('renders props.name when passed', () => {
        const {names} = testData
        OwIconWrapper.setProps({ name: names[0] })

        testProperty(names, (name) => {
            OwIconWrapper.setProps({name})
            const useWrapper = OwIconWrapper.find('use')
            expect(useWrapper.attributes('href')).to.equal(`#icon-${name}`)
        })
    })
    it('renders props.color when passed', () => {
        const {names, colors} = testData
        OwIconWrapper.setProps({ name: names[0] })

        testProperty(colors, (color) => {
            OwIconWrapper.setProps({color})
            expect(OwIconWrapper.element.style.fill).to.equal(color)
        })
    })
    it('renders props.isLoading when passed', () => {
        const {names, isLoading} = testData
        OwIconWrapper.setProps({ name: names[0], isLoading })

        expect(OwIconWrapper.classes()).contain('ow-icon_loading')
    })
})
