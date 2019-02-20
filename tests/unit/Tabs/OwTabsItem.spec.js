import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwTabs from '../../../src/components/Tabs/OwTabs.vue'
import OwTabsHead from '../../../src/components/Tabs/OwTabsHead.vue'
import OwTabsBody from '../../../src/components/Tabs/OwTabsBody.vue'
import OwTabsItem from '../../../src/components/Tabs/OwTabsItem.vue'
import OwTabsPane from '../../../src/components/Tabs/OwTabsPane.vue'

const testData = {
    selected: 'career',
    slot: `<ow-tabs-head>
                <ow-tabs-item name="data">Data</ow-tabs-item>
                <ow-tabs-item name="career">Career</ow-tabs-item>
                <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
            </ow-tabs-head>

            <ow-tabs-body>
                <ow-tabs-pane name="data">Data</ow-tabs-pane>
                <ow-tabs-pane name="career">Career</ow-tabs-pane>
                <ow-tabs-pane name="avatar">Avatar</ow-tabs-pane>
            </ow-tabs-body>`
}

describe('OwTabsItem.vue', () => {

    it('exists', () => {
        const {selected, slot} = testData
        const OwTabsWrapper = shallowMount(OwTabs, {
            propsData: {selected},
            slots: {default: slot},
            stubs: { OwTabsHead, OwTabsBody, OwTabsItem, OwTabsPane }
        })
        expect(OwTabsWrapper.find(OwTabsItem)).to.exist
    })

    describe('props', () => {
        it('should pass props.selected', () => {
        })
    })
})
