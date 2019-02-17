<template>
    <div id="app">
        <ow-pager :total="20" :current.sync="current"></ow-pager>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                current: 1
            }
        },
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/ow-bg.jpg") center center;
    }
</style>
