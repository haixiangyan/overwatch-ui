<template>
    <div id="app">
        <ow-slides :selected="selected">
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
        },
        created() {
            let n = 1
            setInterval(() => {
                if (n === 4) {
                    n = 1
                }
                this.selected = n.toString()
                n++
            }, 3000)
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 100px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;
        .box {
            height: 100px;
            width: 100px;
            background: #ddd;
            border: 1px solid red;
        }
    }
</style>
