import {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import OwSwitch from '../../../src/components/Switch/OwSwitch.vue'
import OwSwitchItem from '../../../src/components/Switch/OwSwitchItem.vue'
import OwIcon from '../../../src/components/Icon/OwIcon'
import {testProperty} from "../../utils"

const testData = {
    options: [
        {
            label: 'Genji',
            value: 'genji'
        },
        {
            label: 'Hanzo',
            value: 'hanzo'
        },
        {
            label: 'McCree',
            value: 'mccree'
        },
    ]
}

describe('OwSwitch.vue', () => {
    it('exists', () => {
        const OwSwitchWrapper = shallowMount(OwSwitch, {
            propsData: {
                value: 'genji',
                options: [...testData.options]
            }
        })
        expect(OwSwitchWrapper).to.exist
    })
    it('can go to prev item', (done) => {
        const OwSwitchWrapper = mount(OwSwitch, {
            propsData: {
                value: 'hanzo',
                options: [...testData.options]
            },
            listeners: {
                'input': (newValue) => {
                    expect(newValue).to.equal('genji')
                    done()
                }
            }
        })
        OwSwitchWrapper.findAll(OwIcon).at(0).trigger('click')
    })
    it('can go to next item', (done) => {
        const OwSwitchWrapper = mount(OwSwitch, {
            propsData: {
                value: 'hanzo',
                options: [...testData.options]
            },
            listeners: {
                'input': (newValue) => {
                    expect(newValue).to.equal('mccree')
                    done()
                }
            }
        })
        OwSwitchWrapper.findAll(OwIcon).at(1).trigger('click')
    })
    it('should switch in left range', () => {
        const eventHandler = sinon.stub()
        const OwSwitchWrapper = mount(OwSwitch, {
            propsData: {
                value: 'genji',
                options: [...testData.options]
            },
            listeners: {
                'input': eventHandler
            }
        })
        OwSwitchWrapper.findAll(OwIcon).at(0).trigger('click')
        expect(eventHandler.called).to.equal(false)
    })
    it('should switch in right range', () => {
        const eventHandler = sinon.stub()
        const OwSwitchWrapper = mount(OwSwitch, {
            propsData: {
                value: 'mccree',
                options: [...testData.options]
            },
            listeners: {
                'input': eventHandler
            }
        })
        OwSwitchWrapper.findAll(OwIcon).at(1).trigger('click')
        expect(eventHandler.called).to.equal(false)
    })
    it('can handle invalid value', () => {
        const OwSwitchWrapper = mount(OwSwitch, {
            propsData: {
                value: '1',
                options: [...testData.options]
            }
        })
        expect(['genji', 'hanzo', 'mccree'].indexOf(OwSwitchWrapper.attributes('data-value'))).to.equal(-1);
    })
})
