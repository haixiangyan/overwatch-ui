<template>
    <div id="app">
        <ow-uploader
            style="width: 950px;"
            accpet="image/*"
            action="http://localhost:3000/upload"
            method="POST"
            :getPreviewUrl="parse"
            :onUploadError="fail"
            :file-list.sync="fileList"
            :multiple="true"
            name="file">
            <ow-button icon-name="upload" icon-position="right">Upload</ow-button>
        </ow-uploader>
        <p>Only accept 300Mb file.</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                fileList: [
                    {name: 'Jack', size: 13, type: 'ok', status: 'UPLOADING'},
                    {name: 'Mary', size: 13, type: 'ok', status: 'UPLOADED'},
                    {name: 'Jeney', size: 13, type: 'ok', status: 'FAIL'},
                ]
            }
        },
        methods: {
            parse(response) {
                let responseJson = JSON.parse(response)
                let url = `http://127.0.0.1:3000/preview/${responseJson.filename}`
                return url
            },
            fail(errorMsg) {
                alert(errorMsg)
            },
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/bg.png") center center;
    }
</style>
