<template>
    <div id="app">
        {{fileList}}
        <ow-uploader
            accpet="image/*"
            action="http://localhost:3000/upload"
            method="POST"
            :onUploaded="parse"
            :file-list.sync="fileList"
            name="file">
            <ow-button>Upload</ow-button>
            <template slot="hint">
                <p>Only accept file with 300Mb.</p>
            </template>
        </ow-uploader>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            parse(response) {
                let responseJson = JSON.parse(response)
                let url = `http://127.0.0.1:3000/preview/${responseJson.filename}`
                return url
            }
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
