<template>
    <div id="app">
        <ow-cascader
            :source.sync="source"
            :selected.sync="selected"
            :on-click-item="loadData"
            placeholder="点击选择">
        </ow-cascader>
        <ow-cascader
            :source.sync="source"
            :selected.sync="selected"
            :on-click-item="loadData"
            placeholder="点击选择">
        </ow-cascader>
    </div>
</template>

<script>
    import db from './assets/data/district'

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parentId === parentId)
                result.forEach(node => {
                    node.isLeaf = db.filter(item => item.parentId === node.id).length <= 0
                })
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
            // this.source = [
            //     {
            //         name: '浙江',
            //         children: [
            //             {
            //                 name: '嘉兴',
            //                 isLeaf: false,
            //                 children: [
            //                     {name: '上城区'},
            //                     {name: '中城区'},
            //                     {name: '下城区'},
            //                 ]
            //             },
            //             {
            //                 name: '湖州',
            //                 isLeaf: false,
            //                 children: [
            //                     {name: '南湖'},
            //                     {name: '秀洲'},
            //                     {name: '北湖'},
            //                 ]
            //             },
            //         ]
            //     },
            //     {
            //         name: '广东',
            //         children: [
            //             {name: '广州', isLeaf: true},
            //             {
            //                 name: '佛山',
            //                 isLeaf: false,
            //                 children: [
            //                     {name: '南海区'},
            //                     {name: '顺德区'},
            //                     {name: '禅城区'},
            //                 ]
            //             },
            //         ]
            //     }
            // ]
        },
        methods: {
            loadData(clickedItem, updateSource) {
                ajax(clickedItem.id).then(updatedChildren => {
                    updateSource(updatedChildren)
                })
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
