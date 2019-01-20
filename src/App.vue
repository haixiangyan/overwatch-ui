<template>
    <div id="app">
        <ow-layout style="height: 100vh;">
            <ow-sider class="demo">Sider</ow-sider>
            <ow-layout>
                <ow-header class="demo">Header</ow-header>
                <ow-content class="demo">Content</ow-content>
                <ow-footer class="demo">Footer</ow-footer>
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
                counter: 1
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
        .demo {
            height: 100px;
            border: 1px solid black;
        }
    }
</style>
