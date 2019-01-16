import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Icon from '@/components/Icon.vue'
import {testProperty} from "../utils"

const testData = {
    names: ['setting', 'add'],
    colors: ['#ffaabb', '#aabbff'],
    isLoadings: [true]
}

describe('Icon.vue', () => {
    it('renders props.name when passed', () => {
        const {names} = testData
        const IconVue = shallowMount(Icon, {
            props: {name: names[0]}
        })

        testProperty(names)
            .then((name) => {
                IconVue.setProps({name})
                const useVue = IconVue.find('use')
                expect(useVue.attributes().href).to.equal(`#icon-${name}`)
            })
    })
    it('renders props.color when passed', () => {
        const {names, colors} = testData
        const IconVue = shallowMount(Icon, {
            props: {name: names[0]}
        })

        testProperty(colors)
            .then((color) => {
                IconVue.setProps({color})
                console.log(IconVue.html())
                expect(IconVue.element.style.fill).to.equal(color)
            })
    })
    it('renders props.isLoading when passed', () => {
        const {names, isLoadings} = testData
        const IconVue = shallowMount(Icon, {
            props: {name: names[0]}
        })

        testProperty(isLoadings)
            .then((isLoading) => {
                IconVue.setProps({isLoading})
                expect(IconVue.classes()).contain('ow-icon_loading')
            })
    })
})
