<template>
    <div id="app">
        <div class="present">
            <ow-switch v-model="value" :options="options"></ow-switch>
            {{value}}
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
                value: 'genji',
                options: [
                    {
                        label: 'Genji',
                        value: 'genji'
                    },
                    {
                        label: 'Hanzo',
                        value: 'hanzo'
                    },
                    {
                        label: 'McCree',
                        value: 'mccree'
                    },
                ]
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
