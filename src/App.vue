<template>
    <div id="app">
        <ow-date-picker :value.sync="date" @input="date = $event" :range="range">
        </ow-date-picker>
        <p>Hello</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date(),
                range: [new Date(2019, 1), new Date(2019, 2)]
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
        height: 100vh;
        padding: 100px 100px;
        background: url("./assets/images/bg.png");
    }
</style>
