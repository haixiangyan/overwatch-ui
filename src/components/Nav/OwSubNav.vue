<template>
    <div class="ow-sub-nav" :class="{active: isActive}" v-click-outside="close">
        <span @click="onClickTitle" class="ow-sub-nav-title">
            <slot name="title"></slot>
            <span class="ow-sub-nav-icon" :class="{open: isOpen}">
                <ow-icon size=".8em" name="right"></ow-icon>
            </span>
        </span>
        <div v-show ="isOpen" class="ow-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
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
            },
        },
        directives: {
            ClickOutside
        },
        components: {
            OwIcon
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
    &-icon {
        display: none;
    }
    &-title {
        height: $--tab-height;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        transition: all .5s;
        svg {
            fill: $--color-text-placeholder;
            transition: all .3s;
        }
        &:hover {
            color: $--color-white;
            background: $--color-primary;
            svg {
                fill: $--color-white;
            }
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
.ow-sub-nav .ow-sub-nav {
    &.active {
        &::after {
            display: none;
        }
        svg {
            fill: $--color-white;
        }
    }
    .ow-sub-nav-icon {
        margin-left: 8px;
        display: inline-flex;
        transition: transform .5s;
        &.open {
            transform: rotate(180deg);
        }
    }
    .ow-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 4px;
    }
}
</style>