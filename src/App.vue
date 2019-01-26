<template>
    <div id="app">
        <h1>Button</h1>
        <div class="item">
            <div class="buttons">
                <ow-button icon-name="setting" class="button" type="primary">Primary</ow-button>
                <ow-button class="button" type="warning">Warning</ow-button>
                <ow-button class="button" type="info">Info</ow-button>
                <ow-button class="button" type="danger">Danger</ow-button>
                <ow-button icon-name="loading" icon-position="right" class="button" type="success">Success</ow-button>
            </div>
        </div>

        <div class="samples">
            <ow-button class="item" type="primary">Primary</ow-button>
            <ow-button class="item" type="warning">Warning</ow-button>
            <ow-button class="item" type="info">Info</ow-button>
            <ow-button class="item" type="danger">Danger</ow-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                visible: true,
                selectedTab: 'data',
                selectedCollapse: ["2"]
            }
        },
        methods: {
            showAlert(type) {
                this.$owAlert({
                    type: type,
                    title: 'SEARCHING FOR GAME',
                    message: 'ESTIMATE TIME: 0:0:2',
                    closeButton: {
                        text: 'OK',
                        callback(vm) {
                            console.log('Yes')
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 20px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;

            .button {
                margin-right: 8px;
            }
    }
</style>
