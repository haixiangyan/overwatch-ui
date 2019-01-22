<template>
    <div id="app">
        <div class="item">
            <div>
                <ow-popover position="top">
                    <template slot="content" slot-scope="{close}">
                        <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                        <ow-button @click="close">Cancel</ow-button>
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
        <div class="item">
            <div>
                <ow-popover trigger="hover" position="top" @click="yyy">
                    <template slot="content">
                        <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                    </template>
                    <ow-button>Top</ow-button>
                </ow-popover>
            </div>
            <div>
                <ow-popover trigger="hover" position="bottom" @click="yyy">
                    <template slot="content">
                        <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                    </template>
                    <ow-button type="primary">Bottom</ow-button>
                </ow-popover>
            </div>
            <div>
                <ow-popover trigger="hover" position="left" @click="yyy">
                    <template slot="content">
                        <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                    </template>
                    <ow-button type="info">Left</ow-button>
                </ow-popover>
            </div>
            <div>
                <ow-popover trigger="hover" position="right" @click="yyy">
                    <template slot="content">
                        <div>Popoverjklajdklfjaklsfjlkasjfkljaslkfjlksjfljsdlfjlskjdf</div>
                    </template>
                    <ow-button type="danger">Right</ow-button>
                </ow-popover>
            </div>
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
        height: 100vh;
        padding: 150px;
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        .item {
            display: flex;
            > div {
                margin: 30px;
            }
        }
    }
</style>
