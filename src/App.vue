<template>
    <div id="app">
        <ow-cascader :source="source" :selected="selected" @update:selected="selected = $event"></ow-cascader>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                selected: [],
                source: [
                    {
                        name: '浙江',
                        children: [
                            {
                                name: '嘉兴',
                                children: [
                                    {name: '上城区'},
                                    {name: '中城区'},
                                    {name: '下城区'},
                                ]
                            },
                            {
                                name: '湖州',
                                children: [
                                    {name: '南湖'},
                                    {name: '秀洲'},
                                    {name: '北湖'},
                                ]
                            },
                        ]
                    },
                    {
                        name: '广东',
                        children: [
                            {name: '广州'},
                            {
                                name: '佛山',
                                children: [
                                    {name: '南海区'},
                                    {name: '顺德区'},
                                    {name: '禅城区'},
                                ]
                            },
                        ]
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 100px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;
    }
</style>
