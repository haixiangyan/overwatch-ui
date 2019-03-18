<template>
    <div id="app">
        <div class="present">
            <ow-button @click="checkboxValue = !checkboxValue">Toggle</ow-button>
            <ow-checkbox v-model="checkboxValue">DPS</ow-checkbox>

            <ow-button icon-name="up" icon-position="left">Up</ow-button>
            <ow-button icon-name="down" icon-position="right">Down</ow-button>
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
                checkboxValue: true
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
