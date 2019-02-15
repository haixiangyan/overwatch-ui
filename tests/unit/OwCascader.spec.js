import {expect} from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import OwCascader from '../../src/components/Cascader/OwCascader'
import OwCascaderList from '../../src/components/Cascader/OwCascaderList'

const testData = {
    source: [
        { name: '浙江', children: [ { name: '嘉兴', isLeaf: false, children: [ {name: '上城区'}, {name: '中城区'}, {name: '下城区'}, ] }, { name: '湖州', isLeaf: false, children: [ {name: '南湖'}, {name: '秀洲'}, {name: '北湖'}, ] }, ] },
        { name: '广东', children: [ {name: '广州', isLeaf: true}, { name: '佛山', isLeaf: false, children: [ {name: '南海区'}, {name: '顺德区'}, {name: '禅城区'}, ] }, ] }
    ],
    selected: [],
}

describe('OwCascader.vue', () => {

    it('exists', () => {
        const OwCascaderWrapper = shallowMount(OwCascader)
        expect(OwCascaderWrapper.exists()).to.eq(true)
    })

    it('has OwCascaderList', () => {
        const OwCascaderWrapper = mount(OwCascader)
        expect(OwCascaderWrapper.contains(OwCascaderList)).to.eq(true)
    })
})
