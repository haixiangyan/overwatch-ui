<template>
    <div id="app">
        {{selected}}
        <ow-table :columns="columns" :source="source" :selected-items.sync="selected"></ow-table>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                columns: [
                    {label: 'Name', field: 'name'},
                    {label: 'Score', field: 'score'}
                ],
                source: [
                    {id: 1, name: 'Jack', score: 100},
                    {id: 2, name: 'Marry', score: 200},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                ],
                selected: []
            }
        },
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/bg.png") center center;
    }
</style>
