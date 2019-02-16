<template>
    <div id="app">
        <ow-nav :selected.sync="selected">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-sub-nav>
                <template slot="title">About</template>
                <ow-nav-item name="team">Team</ow-nav-item>
                <ow-nav-item name="developer">Developer</ow-nav-item>
                <ow-nav-item name="company">company</ow-nav-item>
            </ow-sub-nav>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected: ['developer']
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
