<template>
    <div class="ow-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div class="ow-uploader-input-wrapper" ref="inputWrapper"></div>
        <ol class="ow-uploader-preview">
            <li v-for="file in fileList" :key="file.id">
                <img :src="file.url">{{file.name}}
            </li>
        </ol>
    </div>
</template>

<script>
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
            uploaded: {
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
            createFileInput() {
                let fileInput = document.createElement('input')
                fileInput.type = 'file'
                this.$refs.inputWrapper.appendChild(fileInput)

                return fileInput
            },
            uploadFile(file) {
                const {name, size, type} = this.getFileInfo(file)

                let formData = new FormData()
                formData.append(this.name, file)

                this.sendAjax(formData, (response) => {
                    const url = this.uploaded(response)
                    this.$emit('update:fileList', [...this.fileList, {name, size, type, url}])
                })
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