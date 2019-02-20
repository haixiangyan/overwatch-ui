<template>
    <div class="ow-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div class="ow-uploader-input-wrapper" ref="inputWrapper"></div>
        <ol class="ow-uploader-preview">
            <li v-for="file in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    <p>Loading...</p>
                </template>
                <img :src="file.url">{{file.name}}
                {{file}}
                <ow-button type="danger" @click="onRemoveFile(file)">Remove</ow-button>
            </li>
        </ol>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'

    export default {
        name: "OwUploader",
        props: {
            name: {
                type: String,
                required: true
            },
            method: {
                type: String,
                default: 'POST'
            },
            action: {
                type: String,
                required: true
            },
            onUploaded: {
                type: Function,
                required: true
            },
            fileList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                previewUrl: 'about:blank'
            }
        },
        methods: {
            onClickUpload() {
                // Create input
                let fileInput = this.createFileInput()
                // Listen to input
                fileInput.addEventListener('change', (event) => {
                    // Get chosen file
                    let file = fileInput.files[0]
                    // Upload file
                    this.uploadFile(file)
                    // Remove this file input
                    fileInput.remove()
                })
                // Trigger input
                fileInput.click()
            },
            onRemoveFile(file) {
                let answer = window.confirm('Sure?')
                if (answer) {
                    let fileListCopy = [...this.fileList]
                    let index = fileListCopy.indexOf(file)
                    fileListCopy.splice(index, 1)
                    this.$emit('update:fileList', fileListCopy)
                }
            },
            createFileInput() {
                let fileInput = document.createElement('input')
                fileInput.type = 'file'
                this.$refs.inputWrapper.appendChild(fileInput)

                return fileInput
            },
            beforeUpload(fileInfo) {
                const {name, size, type} = fileInfo
                this.$emit('update:fileList', [...this.fileList, {name, size, type, status: 'uploading'}])
            },
            uploadFile(file) {
                const fileInfo = this.getFileInfo(file)
                const {name, size, type} = fileInfo

                this.beforeUpload(fileInfo)

                let formData = new FormData()
                formData.append(this.name, file)

                this.sendAjax(formData, (response) => {
                    const url = this.onUploaded(response)

                    // this.$emit('update:fileList', [...this.fileList, {name, size, type, url}])

                    this.afterUpload(fileInfo, url)
                })
            },
            afterUpload(fileInfo, url) {
                const {name, size, type} = fileInfo
                // Find uploaded file and its info
                const uploadedFileInfo = this.fileList.find(fileInfo => fileInfo.name === name)
                const uploadedFileIndex = this.fileList.indexOf(uploadedFileInfo)
                // Update uploaded file info
                let uploadedFileInfoCopy = Utils.deepClone(uploadedFileInfo)
                uploadedFileInfoCopy.url = url
                uploadedFileInfoCopy.status = 'uploaded'
                // Put the updated info in fileList
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(uploadedFileIndex, 1, uploadedFileInfoCopy)
                // Update whole fileList
                this.$emit('update:fileList', fileListCopy)
            },
            getFileInfo(file) {
                let {name, size, type} = file

                while (this.fileList.find((file) => file.name === name)) {
                    let dotIndex = name.lastIndexOf('.')
                    let prefix = name.substring(0, dotIndex)
                    let suffix = name.substring(dotIndex)
                    name = prefix + '(1)' + suffix
                }

                return {name, size, type}
            },
            sendAjax(formData, success) {
                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.onload = () => {
                    success(xhr.response)
                }
                xhr.send(formData)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-uploader {
    display: inline-flex;
    &-input-wrapper {
        width: 0;
        height: 0;
        overflow: hidden;
    }
    &-preview {
        img {
            width: 300px;
        }
    }
}
</style>