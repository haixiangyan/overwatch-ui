import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwTable from '../../src/components/Table/OwTable.vue'

describe('OwButton.vue', () => {

    it('exists', () => {
        const OwTableWrapper = shallowMount(OwTable, {
            props: {
                columns: [],
                source: [],
                selected: []
            }
        })
        expect(OwTableWrapper).to.exist
    })
})
