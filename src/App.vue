<template>
    <div id="app">
        <div class="present">
            <ow-badge class="badge-item" title="99+">
                <span>LOOTBOX</span>
            </ow-badge>

            <ow-badge class="badge-item" :is-dot="true">
                <span>LOOTBOX</span>
            </ow-badge>
            <ow-badge title="MESSAGE"></ow-badge>
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
        .badge-item {
            margin: 0 20px;
        }
    }
</style>
