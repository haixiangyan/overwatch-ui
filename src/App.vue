<template>
    <div id="app">
        <div class="present">
            <ow-blood class="blood-item" :total="150"></ow-blood>
            <ow-blood class="blood-item" :total="200" :residual="blood"></ow-blood>
            <ow-blood class="blood-item" :total="250"></ow-blood>
            <ow-blood class="blood-item" :total="500" :residual="100"></ow-blood>
            <ow-blood class="blood-item" text-total-color="red" text-residual-color="yellow" :total="600"></ow-blood>
            <ow-blood class="blood-item" :total="200" :residual="100" residual-color="red" gone-color="green"></ow-blood>
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
                blood: 30
            }
        },
        methods: {
        },
        components: { Past },
        mounted() {
        }
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
        .blood-item {
            margin: 10px;
        }
    }
</style>
