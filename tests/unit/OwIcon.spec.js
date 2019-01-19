import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwIcon from '../../src/components/OwIcon.vue'
import {testProperty} from "../utils"

const testData = {
    names: ['setting', 'add'],
    colors: ['rgb(189, 40, 48)'],
    isLoading: true
}

describe('OwIcon.vue', () => {
    const OwIconVue = shallowMount(OwIcon)

    afterEach(() => {
        OwIconVue.setProps({})
    })

    it('renders props.name when passed', () => {
        const {names} = testData
        OwIconVue.setProps({ name: names[0] })

        testProperty(names, (name) => {
            OwIconVue.setProps({name})
            const useVue = OwIconVue.find('use')
            expect(useVue.attributes('href')).to.equal(`#icon-${name}`)
        })
    })
    it('renders props.color when passed', () => {
        const {names, colors} = testData
        OwIconVue.setProps({ name: names[0] })

        testProperty(colors, (color) => {
            OwIconVue.setProps({color})
            expect(OwIconVue.element.style.fill).to.equal(color)
        })
    })
    it('renders props.isLoading when passed', () => {
        const {names, isLoading} = testData
        OwIconVue.setProps({ name: names[0], isLoading })

        expect(OwIconVue.classes()).contain('ow-icon_loading')
    })
})
