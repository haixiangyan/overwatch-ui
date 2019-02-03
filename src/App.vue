<template>
    <div id="app">
        <ow-cascader
            :source="source"
            :selected.sync="selected"
            placeholder="请输入">
        </ow-cascader>
    </div>
</template>

<script>
    import db from './assets/data/district'

    function ajax(parentId=0, level) {
        return db.filter((item) => item.parentId === parentId)
    }
    export default {
        name: 'app',
        data() {
            return {
                selected: [],
                source: ajax()
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
