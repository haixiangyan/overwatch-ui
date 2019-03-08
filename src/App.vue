<template>
    <div id="app">
        <div class="present">
            <ow-select v-model="value" :options="options" :searchable="true"></ow-select>
            <p>{{value}}</p>
        </div>
        <past></past>
    </div>
</template>

<script>
    import Past from './Past'

    export default {
        name: 'app',
        data() {
            return {
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                value: ''
            }
        },
        methods: {
        },
        components: { Past },
        mounted() {
        }
    }
</script>

<style lang="scss">
    #app {
        position: relative;
        padding: 100px 100px;
        background: url("./assets/images/bg.png");
        .present {
            margin-bottom: 100vh;
        }
        .badge-item {
            margin: 0 20px;
        }
    }
</style>
