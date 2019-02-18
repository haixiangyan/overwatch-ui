<template>
    <div id="app">
        {{sortRules}}
        <ow-table
            :columns="columns"
            :loading="loading"
            :source="source"
            :sort-rules.sync="sortRules"
            @update:sortRules="x"
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
                    {label: 'Name', field: 'name'},
                    {label: 'Score', field: 'score'}
                ],
                sortRules: {
                    name: 'asc',
                    score: 'desc'
                },
                source: [
                    {id: 1, name: 'Jack', score: 100},
                    {id: 2, name: 'Marry', score: 200},
                    {id: 3, name: 'Xiaoming', score: 300},
                    {id: 4, name: 'Ani', score: 400},
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
