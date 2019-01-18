import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Icon from '@/components/Icon.vue'
import {testProperty} from "../utils"

const testData = {
    names: ['setting', 'add'],
    colors: ['rgb(189, 40, 48)'],
    isLoading: true
}

describe('Icon.vue', () => {
    const IconVue = shallowMount(Icon)

    afterEach(() => {
        IconVue.setProps({})
    })

    it('renders props.name when passed', () => {
        const {names} = testData
        IconVue.setProps({ name: names[0] })

        testProperty(names, (name) => {
            IconVue.setProps({name})
            const useVue = IconVue.find('use')
            expect(useVue.attributes('href')).to.equal(`#icon-${name}`)
        })
    })
    it('renders props.color when passed', () => {
        const {names, colors} = testData
        IconVue.setProps({ name: names[0] })

        testProperty(colors, (color) => {
            IconVue.setProps({color})
            expect(IconVue.element.style.fill).to.equal(color)
        })
    })
    it('renders props.isLoading when passed', () => {
        const {names, isLoading} = testData
        IconVue.setProps({ name: names[0], isLoading })

        expect(IconVue.classes()).contain('ow-icon_loading')
    })
})
