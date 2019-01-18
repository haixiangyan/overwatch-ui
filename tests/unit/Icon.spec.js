import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Icon from '@/components/Icon.vue'
import {testProperty} from "../utils"

const testData = {
    names: ['setting', 'add'],
    colors: ['rgb(189, 40, 48)'],
    isLoadings: [true]
}

describe('Icon.vue', () => {
    it('renders props.name when passed', () => {
        const {names} = testData
        const IconVue = shallowMount(Icon, {
            props: {
                name: names[0]
            }
        })

        testProperty(names, (name) => {
            IconVue.setProps({name})
            const useVue = IconVue.find('use')
            expect(useVue.attributes().href).to.equal(`#icon-${name}`)
        })
    })
    it('renders props.color when passed', () => {
        const {names, colors} = testData
        const IconVue = shallowMount(Icon, {
            propsData: {name: names[0]}
        })

        testProperty(colors, (color) => {
            IconVue.setProps({color})
            expect(IconVue.element.style.fill).to.equal(color)
        })
    })
    it('renders props.isLoading when passed', () => {
        const {names, isLoadings} = testData
        const IconVue = shallowMount(Icon, {
            propsData: {name: names[0]}
        })

        testProperty(isLoadings, (isLoading) => {
            IconVue.setProps({isLoading})
            expect(IconVue.classes()).contain('ow-icon_loading')
        })
    })
})
