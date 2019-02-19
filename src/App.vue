<template>
    <div id="app">
        <ow-uploader
            accpet="image/*"
            action="http://localhost:3000/upload"
            method="POST"
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
