<template>
    <div id="app">
        <div class="present">
            <div>
                <ow-hero hero="mccree"></ow-hero>
                <ow-hero url="https://avatars2.githubusercontent.com/u/16954378?s=64&v=4"></ow-hero>
                <ow-hero :is-active="true" hero="hanzo"></ow-hero>
            </div>
            <div>
                <ow-hero @click="onClick" size="small" hero="mccree"></ow-hero>
                <ow-hero hero="genji"></ow-hero>
                <ow-hero size="large" hero="hanzo"></ow-hero>
            </div>
        </div>
        <past></past>
    </div>
</template>

<script>
    import Past from './Past'
    export default {
        name: 'app',
        data() {
            return {
            }
        },
        methods: {
            onClick() {
                console.log('jjj');
            }
        },
        components: { Past }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
        padding: 100px 100px;
        background: url("./assets/images/bg.png");
        .present {
            margin-bottom: 100vh;
        }
    }
</style>
