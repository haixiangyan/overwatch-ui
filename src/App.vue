<template>
    <div id="app">
        <div>
            <ow-button icon-name="add">
                寻找队伍
            </ow-button>
        </div>
        <div>
            <ow-button icon-name="subtract" icon-position="right">
                不找队伍
            </ow-button>
        </div>
        <div >
            <ow-button
                @click="isLoading = !isLoading"
                icon-name="loading"
                :is-loading="isLoading"
                icon-position="right">
                加载中...
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
    export default {
        name: 'app',
        data() {
            return {
                isLoading: true
            }
        },
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
        div {
            margin-right: 4px;
        }
    }
    div {
        @include hvFlexCenter(flex);
    }
</style>
