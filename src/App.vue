<template>
    <div id="app">
        <ow-date-picker :value="date" @input="date = $event">
        </ow-date-picker>
        <p>Hello</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date()
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
