<template>
    <div id="app">
        <div class="present">
            <div>
                <ow-radio v-model="radioValue" radioKey="genji" :options="radioOptions">
                    <ow-icon name="setting"></ow-icon>
                    GENJI
                </ow-radio>
            </div>
            <div>
                <ow-radio v-model="radioValue" radioKey="hanzo" :options="radioOptions">HANZO</ow-radio>
            </div>
            <div>
                <ow-radio v-model="radioValue" radioKey="widowmaker" :options="radioOptions">WIDOWMAKER</ow-radio>
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
                radioValue: 'genji',
                radioOptions: [
                    {
                        value: 'genji'
                    },
                    {
                        value: 'hanzo'
                    },
                    {
                        value: 'widowmaker'
                    }
                ]
            }
        },
        methods: {
            onRadioChange(checkedOption) {
                console.log(checkedOption);
            }
        },
        components: { Past },
        mounted() {
        }
    }
</script>

<style lang="scss">
    * {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
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
