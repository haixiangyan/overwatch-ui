import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import OwTable from '../../../src/components/Table/OwTable.vue'

describe('OwButton.vue', () => {
    it('exists', () => {
        const OwTableWrapper = shallowMount(OwTable, {
            propsData: {
                columns: [],
                source: [],
                selected: []
            }
        })
        expect(OwTableWrapper).to.exist
    })

    it('receives expand', () => {
        const OwTableWrapper = shallowMount(OwTable, {
            propsData: {
                columns: [
                    {label: 'Name', field: 'name', width: 300},
                    {label: 'Score', field: 'score'}
                ],
                source: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Mary', score: 200},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                selected: [],
                expandField: 'description'
            }
        })

        expect(OwTableWrapper.find('.ow-table-expander').exists()).to.equal(true)

        OwTableWrapper.find('.ow-table-expander').trigger('click')
        expect(OwTableWrapper.find('[data-expanded]').text()).to.equal('Good Job')
    })
})
