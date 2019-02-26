<template>
    <div id="app">
        <ow-nav :selected.sync="selected">
            <ow-nav-item name="home">Home</ow-nav-item>
            <ow-nav-item name="team">Team</ow-nav-item>
            <ow-nav-item name="developer">Developer</ow-nav-item>
            <ow-nav-item name="career">Career</ow-nav-item>
        </ow-nav>

        <ow-tabs :selected="selectedTab">
            <ow-tabs-head>
                <ow-tabs-item name="data">Data</ow-tabs-item>
                <ow-tabs-item name="career">Career</ow-tabs-item>
                <ow-tabs-item name="avatar">Avatar</ow-tabs-item>
            </ow-tabs-head>

            <ow-tabs-body>
                <ow-tabs-pane class="pane" name="data">Data</ow-tabs-pane>
                <ow-tabs-pane class="pane" name="career">Career</ow-tabs-pane>
                <ow-tabs-pane class="pane" name="avatar">Avatar</ow-tabs-pane>
            </ow-tabs-body>
        </ow-tabs>

        <ow-date-picker :value.sync="date" @input="date = $event" :range="range"></ow-date-picker>
        <p>Hello</p>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                date: new Date(),
                range: [new Date(2019, 1), new Date(2019, 2)],
                selected: 'home',
                selectedTab: 'data'
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
