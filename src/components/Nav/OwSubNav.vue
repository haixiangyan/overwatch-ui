<template>
    <div class="ow-sub-nav" :class="{active: isActive}" v-click-outside="close">
        <span @click="onClickTitle" class="ow-sub-nav-title">
            <slot name="title"></slot>
            <span class="ow-sub-nav-icon" :class="{open: isOpen}">
                <ow-icon size=".8em" name="right"></ow-icon>
            </span>
        </span>
        <!--Show different template-->
        <template v-if="isVertical">
            <transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
                <div v-show ="isOpen" class="ow-sub-nav-popover vertical">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div v-show ="isOpen" class="ow-sub-nav-popover">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'
    import ClickOutside from '../../directives/ClickOutside'

    export default {
        name: "OwSubNav",
        inject: ['root', 'isVertical'],
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
            },
            enter(el, done) {
                el.style.height = 'auto'
                // Get popover height
                const {height} = el.getBoundingClientRect()
                el.style.height = 0
                // Force not to combine multiple changes
                el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterEnter(el) {
                el.style.height = 'auto'
            },
            leave(el, done) {
                const {height} = el.getBoundingClientRect()
                el.style.height = `${height}px`
                el.getBoundingClientRect()
                el.style.height = 0
                el.addEventListener('transitionend', () => {
                    done()
                })
            },
            afterLeave(el) {
                el.style.height = 'auto'
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
        transition: all .5s;
        z-index: 1;
        &.vertical {
            position: static;
            border-radius: 0;
            box-shadow: none;
            overflow: hidden;
        }
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
        &.vertical {
            margin-left: 8px;
        }
    }
}
</style>