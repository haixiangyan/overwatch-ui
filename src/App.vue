<template>
    <div id="app">
        <div class="present">
            <ow-select :max-height="100" v-model="value" :options="options"></ow-select>
            <span>{{value}}</span>
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
                options: [
                    {
                        value: 'genji',
                        label: 'Genji',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/genji/icon-portrait.png',
                    }, {
                        value: 'hanzo',
                        label: 'Hanzo',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'mccree',
                        label: 'McCree',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mccree/icon-portrait.png',
                    }, {
                        value: 'tracer',
                        label: 'Tracer',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/tracer/icon-portrait.png',
                        disabled: true
                    }, {
                        value: 'zarya',
                        label: 'Zarya',
                        img: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
                    },
                ],
                value: ''
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
