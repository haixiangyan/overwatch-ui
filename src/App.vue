<template>
    <div id="app">
        <ow-tabs :selected.sync="selectedTab">
            <ow-tabs-head>
                <template slot="actions">
                    <ow-button>设置</ow-button>
                </template>
                <ow-tabs-item name="social">
                    <ow-icon name="setting"></ow-icon>
                    <span>社交</span>
                </ow-tabs-item>
                <ow-tabs-item name="data" disabled>数据</ow-tabs-item>
                <ow-tabs-item name="career">生涯</ow-tabs-item>
                <ow-tabs-item name="avatar">头像</ow-tabs-item>
            </ow-tabs-head>

            <ow-tabs-body>
                <ow-tabs-pane name="social">我的社交</ow-tabs-pane>
                <ow-tabs-pane name="data">我的数据</ow-tabs-pane>
                <ow-tabs-pane name="career">我的生涯</ow-tabs-pane>
                <ow-tabs-pane name="avatar">我的头像</ow-tabs-pane>
            </ow-tabs-body>
        </ow-tabs>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selectedTab: 'data'
            }
        },
        methods: {
            showToast(type) {
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
