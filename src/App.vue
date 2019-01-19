<template>
    <div id="app">
        <div class="item">
            <ow-row gutter="20">
                <ow-col span="2">
                   <div class="col-item">
                       英雄列表
                   </div>
                </ow-col>
                <ow-col span="4">
                    <div class="col-item">
                        我的技能
                    </div>
                </ow-col>
            </ow-row>

            <ow-row gutter="20">
                <ow-col span="2">
                    <div class="col-item">
                        英雄列表
                    </div>
                </ow-col>
                <ow-col span="4">
                    <div class="col-item">
                        我的技能
                    </div>
                </ow-col>
                <ow-col span="4">
                    <div class="col-item">
                        我的技能
                    </div>
                </ow-col>
            </ow-row>
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
        padding: 100px;
        height: 100vh;
        background-size: 100%;
        background: url("./assets/images/ow-bg.jpg") no-repeat center center;
        .col-item {
            height: 100px;
            background: $--color-warning;
        }
    }
</style>
