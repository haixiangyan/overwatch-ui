<template>
    <div class="ow-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div class="ow-uploader-input-wrapper" ref="inputWrapper"></div>
        <ol class="ow-uploader-filelist">
            <li class="ow-upload-item" v-for="file in fileList" :key="file.name">
                <div class="ow-upload-item-wrapper">
                    <img v-if="file.type.indexOf('image') >= 0" class="ow-upload-item-img" :src="file.url">
                    <img v-else src="../../assets/images/file-placeholder.jpg" class="ow-upload-item-img">
                    <div class="ow-upload-item-info">
                        <section>
                            <span class="ow-upload-item-name">{{file.name}}</span>
                            <span class="ow-upload-item-status" :class="getStatusClasses(file.status)" >{{file.status}}</span>
                        </section>
                        <span class="ow-upload-item-size">{{file.size}} Kb</span>
                    </div>
                    <div v-if="file.status === 'UPLOADING'" class="ow-upload-item-loading">
                        <ow-icon size="3em" color="white" name="loading" :is-loading="true"></ow-icon>
                    </div>
                </div>
                <ow-button class="ow-upload-item-remove-btn" type="danger" @click="onRemoveFile(file)">Remove</ow-button>
            </li>
        </ol>
    </div>
</template>

<script>
    import Utils from '../../assets/scripts/utils'
    import OwIcon from '../Icon/OwIcon'

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
            getPreviewUrl: {
                type: Function,
                required: true
            },
            onUploadError: {
                type: Function,
                default: () => {}
            },
            fileList: {
                type: Array,
                default: () => []
            },
            maxSize: {
                type: Number
            },
            accept: {
                type: String,
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                previewUrl: 'about:blank'
            }
        },
        methods: {
            getStatusClasses(status) {
                switch (status) {
                    case 'UPLOADING':
                        return ['warning']
                    case 'UPLOADED':
                        return ['success']
                    case 'FAIL':
                        return ['danger']
                }
            },
            onClickUpload() {
                // Create input
                let fileInput = this.createFileInput()
                // Listen to input
                fileInput.addEventListener('change', () => {
                    this.uploadFiles(fileInput.files)
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
                fileInput.multiple = this.multiple
                fileInput.accept = this.accept

                this.$refs.inputWrapper.innerHTML = ''
                this.$refs.inputWrapper.appendChild(fileInput)

                return fileInput
            },
            beforeUpload(files) {
                // Check if exceed file size
                for (let i = 0; i < files.length; i++) {
                    if (files[i].size > this.maxSize) {
                        this.onUploadError(`File exceeds ${(this.maxSize/1024/1024).toFixed(2)}Mb`)
                        return false
                    }
                }

                // Add loading state for new files
                let loadingFiles = Array.from(files).map((file) => {
                    return {...file.fileInfo, status: 'UPLOADING'}
                })

                this.$emit('update:fileList', [...this.fileList, ...loadingFiles])
                return true
            },
            uploadFile(file) {
                let fileInfo = file.fileInfo

                let formData = new FormData()
                formData.append(this.name, file)

                this.sendAjax(formData, (response) => {
                    const url = this.getPreviewUrl(response)

                    this.$emit('update:fileList', [...this.fileList, fileInfo])

                    this.afterUpload(fileInfo, url)
                }, (xhr) => {
                    this.uploadError(xhr, fileInfo)
                })
            },
            uploadFiles(files) {
                for (let i = 0; i < files.length; i++) {
                    files[i].fileInfo = this.getFileInfo(files[i])
                }

                // Add loading state and check if files can be uploaded
                if (!this.beforeUpload(files)) {
                    return
                }

                // Upload each file
                for (let i = 0; i < files.length; i++) {
                    this.uploadFile(files[i])
                }
            },
            afterUpload(fileInfo, url) {
                // Find uploaded file and its info
                const uploadedFileInfo = this.fileList.find(file => file.name === fileInfo.name)
                const uploadedFileIndex = this.fileList.indexOf(uploadedFileInfo)
                // Update uploaded file info
                let uploadedFileInfoCopy = Utils.deepClone(uploadedFileInfo)
                uploadedFileInfoCopy.url = url
                uploadedFileInfoCopy.status = 'UPLOADED'
                // Put the updated info in fileList
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(uploadedFileIndex, 1, uploadedFileInfoCopy)
                // Update whole fileList
                this.$emit('update:fileList', fileListCopy)
                this.$emit('uploaded')
            },
            uploadError(xhr, fileInfo) {
                let file = this.fileList.find(file => file.name === fileInfo.name)
                let index = this.fileList.indexOf(file)
                let fileCopy = Utils.deepClone(file)
                fileCopy.status = 'FAIL'

                let fileListCopy = Utils.deepClone(this.fileList)
                fileListCopy.splice(index, 1, fileCopy)

                this.$emit('update:fileList', fileListCopy)
                if (xhr.status === 0) {
                    this.onUploadError('No Internet')
                }
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
            sendAjax(formData, success, fail) {
                Utils.ajax[this.method.toLowerCase()](this.action, {
                    success,
                    fail,
                    data: formData
                })
            }
        },
        components: {
            OwIcon
        }
    }
</script>

<style scoped lang="scss">
.ow-uploader {
    &-input-wrapper {
        width: 0;
        height: 0;
        overflow: hidden;
    }
    &-filelist {
        margin-top: 4px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        .ow-upload-item {
            margin-right: 12px;
            margin-bottom: 12px;
            display: inline-flex;
            flex-direction: column;
            width: 280px;
            &-wrapper {
                position: relative;
            }
            &-img {
                display: inline-flex;
                width: 100%;
                border: none;
            }
            &-info {
                padding: 6px 8px;
                font-weight: bold;
                background: white;
                > section {
                    display: flex;
                    align-items: center;
                    margin-bottom: 2px;
                }
            }
            &-name {
                font-size: 1.2em;
                color: $--color-bg-dark;
            }
            &-status {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-left: 4px;
                padding: .2em .4em;
                color: $--color-white;
                font-size: .6em;
                border-radius: $--border-radius-small;
                background: $--color-primary;
                &.warning { background: $--color-warning; }
                &.success { background: $--color-success; }
                &.danger { background: $--color-danger; }
            }
            &-size {
                color: $--color-primary;
                font-size: .9em;
            }
            &-remove-btn {
                margin-top: 2px;
                width: 100%;
            }
            &-loading {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, .5);
            }
        }
    }
}
</style>