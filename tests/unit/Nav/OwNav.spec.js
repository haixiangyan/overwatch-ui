import chai, {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import sinon from 'sinon'
import OwNav from '../../../src/components/Nav/OwNav'
import OwNavItem from '../../../src/components/Nav/OwNavItem'
import OwSubNav from '../../../src/components/Nav/OwSubNav'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

const testData = {
    slot: `
        <ow-nav-item name="home">Home</ow-nav-item>
        <ow-sub-nav name="about">
            <template slot="title">About</template>
            <ow-nav-item name="team">Team</ow-nav-item>
            <ow-nav-item name="developer">Developer</ow-nav-item>
            <ow-sub-nav name="company">
                <template slot="title">Company</template>
                <ow-nav-item name="baidu">Baidu</ow-nav-item>
                <ow-sub-nav name="tencent">
                    <template slot="title">Tencent</template>
                    <ow-nav-item name="sports">Sports</ow-nav-item>
                    <ow-nav-item name="ant">Ant</ow-nav-item>
                </ow-sub-nav>
            </ow-sub-nav>
        </ow-sub-nav>
        <ow-nav-item name="career">Career</ow-nav-item>`,
}

describe('OwNav.vue', () => {
    it('exists', () => {
        const OwNavWrapper = shallowMount(OwNav)
        expect(OwNavWrapper.exists()).to.equal(true)
    })

    it('receives selected props', (done) => {
        const OwNavWrapper = mount(OwNav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: testData.slot
            },
            stubs: {OwNavItem, OwSubNav}
        })
        setTimeout(() => {
            expect(OwNavWrapper.find('[data-name="home"].active').exists()).to.equal(true)
            done()
        })
    })

    it('handles update:selected event', () => {
        const eventHandler = sinon.fake()
        const OwNavWrapper = mount(OwNav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: testData.slot
            },
            stubs: {OwNavItem, OwSubNav},
            listeners: {
                'update:selected': eventHandler
            }
        })
        OwNavWrapper.find('[data-name="developer"]').trigger('click')
        expect(eventHandler).to.have.been.calledWith('developer')
    })
})
