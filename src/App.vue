<template>
    <div id="app">
        <ow-layout style="height: 100vh;">
            <ow-sider :visible="visible" class="sider">
                Sider
                <ow-button @click="visible = visible">Close</ow-button>
            </ow-sider>
            <ow-layout>
                <ow-header class="header">Header</ow-header>
                <ow-content class="content">Content</ow-content>
                <ow-footer class="footer">Footer</ow-footer>
            </ow-layout>
        </ow-layout>
    </div>
</template>

<script>
    import Components from './components/index'

    export default {
        name: 'app',
        data() {
            return {
                visible: true
            }
        },
        components: {
            ...Components
        },
        methods: {
            increase() {
                this.counter += 1
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
