<template>
    <div id="app">
        <div class="row">

        </div>
    </div>
</template>

<script>
    import Components from './components/index'

    export default {
        name: 'app',
        data() {
            return {
                counter: 1
            }
        },
        components: {
            ...Components
        },
        methods: {
            increase() {
                this.counter += 1
            }
        }
    }
</script>

<style lang="scss">
    #app {
        @include hvFlexCenterMx(flex);
        height: 100vh;
        background-size: 100%;
        /*background: url("./assets/images/bg.jpg") no-repeat center center;*/
        .item {
            margin: 10px;
        }

        .col {
            height: 100px;
            width: 50%;
            background: $--color-primary;
        }
    }
</style>
