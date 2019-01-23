<template>
   <div class="ow-collapse-group">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: "OwCollapseGroup"
    }
</script>

<style scoped lang="scss">
.ow-collapse-group {
    > div {
        margin: 10px;
    }
}
</style>