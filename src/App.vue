<template>
    <div id="app">
        <ow-cascader
            :source.sync="source"
            :selected.sync="selected"
            :on-click-item="loadData"
            placeholder="请输入">
        </ow-cascader>
    </div>
</template>

<script>
    import db from './assets/data/district'

    function ajax(parentId=0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parentId === parentId)
                success(result)
            }, 300)
        })
    }
    export default {
        name: 'app',
        data() {
            return {
                selected: [],
                source: []
            }
        },
        created() {
            ajax(0).then((lastSelectedItem) => {
                this.source = lastSelectedItem.map(item => {
                    item.children = item.children || []
                    return item
                })
            })
        },
        methods: {
            loadData(clickedItem, updateSource) {
                ajax(clickedItem.id).then(updatedChildren => {
                    updateSource(updatedChildren)
                })
            }
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100vh;
        padding: 100px 150px;
        background: url("./assets/images/ow-bg.jpg") center center;
    }
</style>
