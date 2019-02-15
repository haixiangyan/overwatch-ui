<template>
    <div id="app">
        <ow-nav :selected.sync="selected">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-nav-item name="about">About</ow-nav-item>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected: ['home']
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/ow-bg.jpg") center center;
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            height: 200px;
            background: #ddd;
        }
    }
</style>
