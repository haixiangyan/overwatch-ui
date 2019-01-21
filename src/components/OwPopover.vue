<template>
    <div class="ow-popover" @click="onClick">
        <div v-if="visible" class="ow-popover-content-wrapper">
            <slot name="content"></slot>
        </div>
        <!--Trigger-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            onClick() {
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-popover {
    position: relative;
    display: inline-block;
    vertical-align: top;

    &-content-wrapper {
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid red;
    }
}
</style>