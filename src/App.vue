<template>
    <div id="app">
        <ow-popover @click="yyy">
            <template slot="content">
                <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
            </template>
            <ow-button>Click Me</ow-button>
        </ow-popover>

        <ow-button type="danger">Cancel</ow-button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {
            yyy() {
                console.log('yyy')
            }
        }
    }
</script>

<style lang="scss">
    #app {
        /*height: 100vh;*/
        padding: 150px;
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        border: 1px solid blue;
    }
</style>
