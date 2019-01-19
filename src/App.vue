<template>
    <div id="app">
        <div class="item">
            <ow-row gutter="20">
                <ow-col>
                   <div style="border: 1px solid green; height: 100%"></div>
                </ow-col>
                <ow-col>
                    <div style="border: 1px solid green; height: 100%"></div>
                </ow-col>
            </ow-row>
            <ow-row gutter="20">
                <ow-col></ow-col>
                <ow-col></ow-col>
                <ow-col></ow-col>
            </ow-row>
            <ow-row gutter="20">
                <ow-col></ow-col>
                <ow-col></ow-col>
                <ow-col></ow-col>
                <ow-col></ow-col>
            </ow-row>
            <ow-row gutter="20">
                <ow-col span="2"></ow-col>
                <ow-col offset="2" span="20"></ow-col>
            </ow-row>
            <ow-row gutter="20">
                <ow-col span="2"></ow-col>
                <ow-col span="22"></ow-col>
            </ow-row>
        </div>
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
        padding: 100px;
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        .item {
            margin: 10px;
            border: 1px solid black;
        }
    }
</style>
