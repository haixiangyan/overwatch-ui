<template>
    <div id="app">
        <div class="present">
            <ow-label title="GRAPHICS QUALITY">
                <ow-select v-model="labelValue" :options="labelOptions"></ow-select>
            </ow-label>
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
                labelValue: 'medium',
                labelOptions: [
                    {
                        label: 'EPIC',
                        value: 'epic'
                    },
                    {
                        label: 'MEDIUM',
                        value: 'medium'
                    },
                    {
                        label: 'LOW',
                        value: 'low'
                    }
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
