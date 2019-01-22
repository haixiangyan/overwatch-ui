<template>
    <div id="app">
        <div>
            <ow-popover position="top" @click="yyy">
                <template slot="content">
                    <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                </template>
                <ow-button>Top</ow-button>
            </ow-popover>
        </div>
        <div>
            <ow-popover position="bottom" @click="yyy">
                <template slot="content">
                    <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                </template>
                <ow-button type="primary">Bottom</ow-button>
            </ow-popover>
        </div>
        <div>
            <ow-popover position="left" @click="yyy">
                <template slot="content">
                    <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                </template>
                <ow-button type="info">Left</ow-button>
            </ow-popover>
        </div>
        <div>
            <ow-popover position="right" @click="yyy">
                <template slot="content">
                    <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                </template>
                <ow-button type="danger">Right</ow-button>
            </ow-popover>
        </div>
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
        display: flex;
        height: 100vh;
        padding: 150px;
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        > div {
            margin: 0 30px;
        }
    }
</style>
