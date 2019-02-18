<template>
    <div id="app">
        <ow-table
            :columns="columns"
            :loading="loading"
            :source="source"
            :sort-rules.sync="sortRules"
            @update:sortRules="x"
            :height="400"
            expand-field="description"
            :selected.sync="selected">
        </ow-table>
        <ow-button @click="loading = !loading">Button</ow-button>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                columns: [
                    {label: 'Name', field: 'name', width: 300},
                    {label: 'Score', field: 'score'}
                ],
                sortRules: {
                    name: 'asc',
                    score: 'desc'
                },
                source: [
                    {id: 1, name: 'Jack', score: 100, description: 'Good Job'},
                    {id: 2, name: 'Marry', score: 200, description: 'Nice Job'},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
                    {id: 5, name: 'Jack', score: 100},
                    {id: 6, name: 'Marry', score: 200},
                    {id: 7, name: 'Xiaoming', score: 300},
                    {id: 8, name: 'Ani', score: 400},
                    {id: 9, name: 'Jack', score: 100},
                    {id: 10, name: 'Marry', score: 200},
                    {id: 11, name: 'Xiaoming', score: 300},
                    {id: 12, name: 'Ani', score: 400},
                    {id: 13, name: 'Jack', score: 100},
                    {id: 14, name: 'Marry', score: 200},
                    {id: 15, name: 'Xiaoming', score: 300},
                    {id: 16, name: 'Ani', score: 400},
                ],
                selected: [],
                loading: false
            }
        },
        methods: {
            x(newOrder) {
                this.source = this.source.sort((a, b) => {
                    if (newOrder.score === 'asc') {
                        return a.score - b.score
                    }
                    if (newOrder.score === 'desc') {
                        return b.score - a.score
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 10px 15px;
        background: url("./assets/images/bg.png") center center;
    }
</style>
