<template>
    <div id="app">
        <div class="present">
            <ow-label title="GRAPHICS QUALITY">
                <ow-select :width="300" v-model="labelValue1" :options="labelOptions1"></ow-select>
            </ow-label>
            <ow-label v-model="labelValue2" :wrappable="true" title="FIELD OF VIEW">
                <ow-slider :width="300" v-model="labelValue2"></ow-slider>
            </ow-label>
            <ow-label :wrappable="true" title="DISPLAY MODE">
                <ow-switch :width="300" v-model="labelValue3" :options="labelOptions3"></ow-switch>
            </ow-label>
            <ow-label :wrappable="true" title="NAME">
                <ow-input></ow-input>
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
                labelValue1: 'tracer',
                labelOptions1: [
                    { value: 'genji', label: 'Genji', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png', },
                    { value: 'hanzo', label: 'Hanzo', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png', },
                    { value: 'mccree', label: 'McCree', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png', },
                    { value: 'tracer', label: 'Tracer', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png', },
                    { value: 'zarya', label: 'Zarya', img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png', }
                ],
                labelValue2: 18,
                labelValue3: 'medium',
                labelOptions3: [
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
