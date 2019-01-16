<template>
    <div id="app">
        <div style="margin-right: 4px">
            <ow-button icon-name="add">
                寻找队伍
            </ow-button>
        </div>
        <div >
            <ow-button icon-name="subtract" icon-position="right">
                不找队伍
            </ow-button>
        </div>
        <div>
            <ow-icon name="setting"></ow-icon>
        </div>
    </div>
</template>

<script>
    import Icon from './components/Icon'
    import Button from './components/Button'
    export default {
        name: 'app',
        components: {
            'ow-button': Button,
            'ow-icon': Icon
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/bg.jpg") no-repeat center center;
    }
    div {
        @include hvFlexCenter(flex);
    }
</style>
