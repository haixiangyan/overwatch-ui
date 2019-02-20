import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import OwUploader from '../../src/components/Uploader/OwUploader.vue'

import {initFiles} from "../utils"
import Utils from '../../src/assets/scripts/utils'

describe('OwUploader.vue', () => {
    it('exists', () => {
        expect(OwUploader).to.exist
    })

    it('can upload a file', (done) => {
        Utils.ajax.post = (url, options) => {
            setTimeout(() => {
                options.success('{"filename": "123123"}')
                expect(OwUploaderWrapper.find('.ow-upload-item-loading').exists()).to.equal(false)
                expect(OwUploaderWrapper.find('img').exists()).to.equal(true)
                expect(OwUploaderWrapper.find('img').attributes('src')).to.contains('file-placeholder')
            }, 500)
        }

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
                    expect(OwUploaderWrapper.find('use').exists()).to.equal(false)
                    expect(OwUploaderWrapper.props().fileList[0].url).to.equal('/preview/123123')
                    done()
                }
            }
        })
        OwUploaderWrapper.find('#uploadBtn').trigger('click')
        const inputWrapper = OwUploaderWrapper.find('input[type="file"]')
        const inputEl = initFiles(inputWrapper.element)

        expect(OwUploaderWrapper.find('use').attributes('href')).to.equal('#icon-loading')
    })
})
