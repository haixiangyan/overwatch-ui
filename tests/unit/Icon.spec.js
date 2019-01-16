import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Icon from '@/components/Icon.vue'

const testData = {
    name: 'setting',
    color: '#ffaabb',
    isLoading: true
}

describe('Icon.vue', () => {
    it('renders props.name when passed', () => {
        const {name} = testData
        const IconVue = shallowMount(Icon, {
            propsData: {name}
        })
        const useVue = IconVue.find('use')
        expect(useVue.attributes().href).to.equal(`#icon-${name}`)
    })
    it('renders props.color when passed', () => {
        const {name, color} = testData
        const IconVue = shallowMount(Icon, {
            propsData: {name, color}
        })
        expect(IconVue.element.style.fill).to.equal(color)
    })
    it('renders props.isLoading when passed', () => {
        const {name, isLoading} = testData
        const IconVue = shallowMount(Icon, {
            propsData: {name, isLoading}
        })
        expect(IconVue.classes()).contain('ow-icon_loading')
    })
})
