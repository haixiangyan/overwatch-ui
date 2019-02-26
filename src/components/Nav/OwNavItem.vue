<template>
    <div class="ow-nav-item"
         :data-name="name"
         :class="{active: isActive, vertical: isVertical}"
         @click="onClickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwNavItem",
        inject: ['root', 'isVertical'],
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            onClickItem() {
                // Clear all active parent
                this.root.namePath = []
                // Then update name path recursively
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('update:selected', this.name)
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
    color: $--nav-item-color;
    font-size: $--nav-item-font-size;
    padding: 0 20px;
    transition: all .5s;
    &:not(.vertical) {
        &.active {
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
    &.vertical {
        &.active {
            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                border-right: 4px solid #01FFFF;
                height: 100%;
            }
        }
    }
    &:hover {
        color: $--color-white;
        background: $--color-primary;
    }
    &.active {
        background: $--color-primary;
        color: $--color-white;
    }
}
.ow-sub-nav .ow-nav-item.vertical {
    &.active {
        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            border-right: 4px solid #01FFFF;
            height: 100%;
        }
    }
}
a {
    color: inherit;
}
</style>