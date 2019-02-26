import {expect} from 'chai'
import Utils from '../../../src/assets/scripts/utils'

describe('utils', () => {
    describe('findTreeNodeById', () => {
        it('can handle undefined', () => {
            const tree = {}
            expect(Utils.findTreeNodeById(tree, 0)).to.equal(undefined)
        })

        it('can find child by Id', () => {
            const tree = {
                children: [
                    {id: 1, value: 1},
                    {id: 2, value: 2, children: [
                            {id: 3, value: 3}
                    ]}
                ]
            }

            expect(Utils.findTreeNodeById(tree, 3).value).to.equal(3)
        })
    })
})
