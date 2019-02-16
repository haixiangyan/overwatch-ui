<template>
    <div class="ow-sub-nav" :class="{active: isActive}" v-click-outside="close">
        <span @click="onClickTitle" class="ow-sub-nav-title">
            <slot name="title"></slot>
        </span>
        <div v-show ="isOpen" class="ow-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutside from '../../directives/ClickOutside'

    export default {
        name: "OwSubNav",
        inject: ['root'],
        props: {
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
        computed: {
            isActive() {
                return this.root.namePath.indexOf(this.name) >= 0
            }
        },
        directives: {
            ClickOutside
        },
        methods: {
            close() {
                this.isOpen = false
            },
            onClickTitle() {
                this.isOpen = !this.isOpen
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name)
                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-sub-nav {
    position: relative;
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
    &-title {
        height: $--tab-height;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        transition: all .5s;
        &:hover {
            color: $--color-white;
            background: $--color-primary;
        }
    }
    &-popover {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: $--color-bg-dark;
        color: $--color-text-placeholder;
        white-space: nowrap;
        box-shadow: 0 1px 4px $--color-bg-dark;
        border-radius: $--border-radius-small;
    }
}
/*For Popover*/
.ow-sub-nav .ow-sub-nav .ow-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 4px;
}
</style>