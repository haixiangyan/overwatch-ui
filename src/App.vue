<template>
    <div id="app">
        <div>
            <ow-button-group>
                <ow-button icon-name="add" type="primary" icon-position="left">
                    Prev
                </ow-button>
                <ow-button icon-name="subtract" type="primary" icon-position="right">
                    Next
                </ow-button>
            </ow-button-group>
        </div>
        <div>
            <ow-button icon-name="setting" icon-position="right">
                Setting
            </ow-button>
        </div>
        <div>
            <ow-button type="danger" icon-name="remove">
                Remove
            </ow-button>
        </div>
        <div>
            <ow-button type="info" icon-name="notification">
                Info
            </ow-button>
        </div>
        <div>
            <ow-button
                @click="isLoading = !isLoading"
                icon-name="loading"
                :is-loading="isLoading"
                icon-position="right">
                Loading...
            </ow-button>
        </div>
        <div>
            <ow-icon name="setting" color="#fff"></ow-icon>
            <ow-icon name="loading" color="#fff" :is-loading="isLoading"></ow-icon>
        </div>
    </div>
</template>

<script>
    import Icon from './components/Icon'
    import Button from './components/Button'
    import ButtonGroup from './components/ButtonGroup'

    export default {
        name: 'app',
        data() {
            return {
                isLoading: true
            }
        },
        components: {
            'ow-button': Button,
            'ow-icon': Icon,
            'ow-button-group': ButtonGroup
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/bg.jpg") no-repeat center center;
        div {
            margin-right: 4px;
        }
    }

    div {
        @include hvFlexCenterMx(flex);
    }
</style>
