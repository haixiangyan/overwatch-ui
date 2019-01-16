<template>
    <div id="app">
        <ow-button></ow-button>
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
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: black;
    }
</style>
