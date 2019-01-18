<template>
    <div id="app">
        <div>
            <ow-button icon-name="add" icon-position="left">Add</ow-button>
            <ow-button type="primary" icon-name="add" >添加</ow-button>
            <ow-input
                value="Hello"
                placeholder="World"
                hint="Error: Invalid Password."
                hintType="danger"
                @change="inputChange"
                icon-name="cancel">
            </ow-input>
            <ow-input value="Hello" placeholder="World" hint="Error: Invalid Password." hintType="warning" icon-name="warning"></ow-input>
            <ow-input value="Hello" placeholder="World" hint="Error: Invalid Password." hintType="info" icon-name="notification"></ow-input>
        </div>
    </div>
</template>

<script>
    import Components from './components/index'

    export default {
        name: 'app',
        data() {
            return {
                isLoading: true
            }
        },
        components: {
            ...Components
        },
        methods: {
            inputChange(event) {
                console.log(event)
            }
        }
    }
</script>

<style lang="scss">
    #app {
        @include hvFlexCenterMx(flex);
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/bg.jpg") no-repeat center center;
    }
</style>
