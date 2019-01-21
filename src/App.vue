<template>
    <div id="app">
        <ow-popover>
            <template slot="content">
                <div>Popover Content</div>
            </template>
            <ow-button >Click Me</ow-button>
        </ow-popover>

        <ow-button type="danger">Cancel</ow-button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
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
    }
</style>
