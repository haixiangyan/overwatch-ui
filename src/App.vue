<template>
    <div id="app">
        <div>
            <div class="item">
                <ow-button @click="increase" icon-name="add" icon-position="left">Add</ow-button>
            </div>
            <div class="item">
                <ow-button @click="increase" type="primary" icon-name="add" >添加</ow-button>
            </div>
            <div class="item">
                <ow-input
                    value="Hello"
                    placeholder="World"
                    hint="Error: Invalid Password."
                    hintType="danger"
                    icon-name="cancel">
                </ow-input>
            </div>
            <div class="item">
                <ow-input
                    value="Hello"
                    placeholder="World"
                    hint="Error: Invalid Password."
                    hintType="warning"
                    icon-name="warning">
                </ow-input>
            </div>
            <div class="item">
                <ow-input
                    placeholder="World"
                    hint="Error: Invalid Password."
                    hintType="info"
                    v-model="counter"
                    icon-name="notification">
                </ow-input>
                <p>{{counter}}</p>
            </div>
            <div class="item">
                <ow-icon color="#000" name="loading" :is-loading="true"></ow-icon>
            </div>
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
    }
</style>
