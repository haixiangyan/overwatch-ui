<template>
    <div class="ow-uploader">
        <div @click="onClickUpload" ref="trigger">
            <slot></slot>
        </div>
        <div class="ow-uploader-input-wrapper" ref="inputWrapper"></div>
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
            }
        },
        methods: {
            onClickUpload() {
                let input = document.createElement('input')
                input.type = 'file'
                this.$refs.inputWrapper.appendChild(input)
                input.addEventListener('change', (event) => {
                    let file = input.files[0]
                    input.remove()

                    let formData = new FormData()
                    formData.append(this.name, file)

                    let xhr = new XMLHttpRequest()
                    xhr.open(this.method, this.action)
                    xhr.onload = function () {
                        console.log(xhr.response)
                        // img.src = 'https://upload-node-server.herokuapp.com/preview/' + JSON.parse(xhr.response).key
                    }
                    xhr.send(formData)
                })
                input.click()
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
}
</style>