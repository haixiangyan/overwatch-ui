import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import OwUploader from '../../../src/components/Uploader/OwUploader.vue'

import {initFiles} from "../../utils"
import Utils from '../../../src/assets/scripts/utils'

describe('OwUploader.vue', () => {
    it('exists', () => {
        const OwUploaderWrapper = mount(OwUploader, {
            propsData: {
                name: 'file',
                method: 'post',
                action: '/upload',
                accept: 'image/*',
                getPreviewUrl: (response) => {
                    let responseJson = JSON.parse(response)
                    return `/preview/${responseJson.filename}`
                },
                fileList: [],
                slots: {
                    default: `<button id="uploadBtn">Upload</button>`
                },
            }
        })
        expect(OwUploaderWrapper).to.exist
    })

    it('can upload a file', (done) => {
        let stub = sinon.stub(Utils.ajax, 'post').callsFake((url, options) => {
            setTimeout(() => {
                options.success('{"filename": "123123"}')
                expect(OwUploaderWrapper.find('.ow-upload-item-loading').exists()).to.equal(false)
                done()
            }, 500)
        })

        const OwUploaderWrapper = mount(OwUploader, {
            propsData: {
                name: 'file',
                method: 'post',
                action: '/upload',
                accept: 'image/*',
                getPreviewUrl: (response) => {
                    let responseJson = JSON.parse(response)
                    return `/preview/${responseJson.filename}`
                },
                fileList: []
            },
            slots: {
                default: `<button id="uploadBtn">Upload</button>`
            },
            listeners: {
                'update:fileList': (fileList) => {
                    OwUploaderWrapper.setProps({fileList})
                },
                'uploaded': () => {
                    expect(OwUploaderWrapper.props().fileList[0].url).to.equal('/preview/123123')
                    stub.restore()
                }
            }
        })
        OwUploaderWrapper.find('#uploadBtn').trigger('click')
        const inputWrapper = OwUploaderWrapper.find('input[type="file"]')
        const inputEl = initFiles(inputWrapper.element)
    })
})
