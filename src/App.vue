<template>
    <div id="app">
        <ow-button type="info" @click="showToast('info')">Show</ow-button>
        <ow-button type="primary" @click="showToast('loading')">Show</ow-button>
        <ow-button type="warning" @click="showToast('warning')">Show</ow-button>
        <ow-button type="danger" @click="showToast('danger')">Show</ow-button>
        <ow-button type="success" @click="showToast('success')">Show</ow-button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                visible: true
            }
        },
        methods: {
            showToast(type) {
                this.$owToast({
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
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        .sider {
            width: 200px;
            background: $--color-primary;
        }
        
        .content {
            background: $--color-danger;
        }
        
        .header, .footer {
            height: 100px;
            background: $--color-warning;
        }
    }
</style>
