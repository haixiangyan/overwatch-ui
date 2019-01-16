<template>
    <div id="app">
        <div style="margin-right: 4px">
            <ow-button :icon="{name: 'add', position: 'left'}">
                寻找队伍
            </ow-button>
        </div>
        <div >
            <ow-button :icon="{name: 'subtract', position: 'right'}">
                不找队伍
            </ow-button>
        </div>
    </div>
</template>

<script>
    import Button from './components/Button'
    export default {
        name: 'app',
        components: {
            'ow-button': Button
        }
    }
</script>

<style lang="scss">
    #app {
        @include hvFlexCenter(flex);
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/bg.jpg") no-repeat center center;
    }
</style>
