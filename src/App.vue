<template>
    <div id="app">
        <ow-row>
            <ow-col></ow-col>
            <ow-col></ow-col>
        </ow-row>
        <ow-row>
            <ow-col></ow-col>
            <ow-col></ow-col>
            <ow-col></ow-col>
        </ow-row>
        <ow-row>
            <ow-col></ow-col>
            <ow-col></ow-col>
            <ow-col></ow-col>
            <ow-col></ow-col>
        </ow-row>
        <ow-row>
            <ow-col span="2"></ow-col>
            <ow-col span="22"></ow-col>
        </ow-row>
        <ow-row>
            <ow-col span="4"></ow-col>
            <ow-col span="20"></ow-col>
        </ow-row>
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
        /*background: url("./assets/images/bg.jpg") no-repeat center center;*/
        .item {
            margin: 10px;
        }
    }
</style>
