<template>
    <div id="app">
        <ow-slides :selected.sync="selected">
            <ow-slides-item name="1">
                <div class="box">1</div>
            </ow-slides-item>
            <ow-slides-item name="2">
                <div class="box">2</div>
            </ow-slides-item>
            <ow-slides-item name="3">
                <div class="box">3</div>
            </ow-slides-item>
        </ow-slides>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 100px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            height: 200px;
            background: #ddd;
        }
    }
</style>
