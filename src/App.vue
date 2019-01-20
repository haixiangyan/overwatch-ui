<template>
    <div id="app">
        <ow-button @click="showToast">Show</ow-button>
        <ow-button type="success" @click="showToast">Show</ow-button>
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
            showToast() {
                this.$owToast({
                    type: 'success',
                    title: 'Searching For Game',
                    message: 'Estimate Time: 0:0:2'
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
