<template>
    <div class="ow-nav-item" :class="{active}" @click="onClickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwNavItem",
        inject: ['root'],
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        methods: {
            onClickItem() {
                this.$emit('add:selected', this.name)
            }
        },
        created() {
            this.root.addItem(this)
        }
    }
</script>

<style scoped lang="scss">
.ow-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    height: $--tab-height;
    padding: 0 20px;
    transition: all .5s;
    &:hover {
        color: $--color-white;
        background: $--color-primary;
    }
    &.active {
        background: $--color-primary;
        color: $--color-white;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 100%;
            border-bottom: 4px solid #01FFFF;
            width: 100%;
        }
    }
}
.ow-sub-nav .ow-nav-item {
    &.active {
        &::after {
            display: none;
        }
    }
}
</style>