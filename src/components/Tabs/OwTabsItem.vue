<template>
    <div class="ow-tabs-item" :class="classes" @click="onClickItem">
        <div class="ow-tabs-item-content">
            <slot></slot>
        </div>
        <div class="ow-tabs-item-line"></div>
    </div>
</template>

<script>
    export default {
        name: "OwTabsItem",
        inject: ['eventHub'],
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
        computed: {
            classes() {
                return {'ow-tabs-item_active': this.active}
            }
        },
        created() {
            if (this.eventHub) {
                this.eventHub.$on('update:selected', (name) => {
                    this.active = (name === this.name)
                })
            }
        },
        methods: {
            onClickItem() {
                this.eventHub && this.eventHub.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-tabs-item {
    position: relative;
    height: 100%;
    flex-shrink: 0;

    &-content {
        @include hvFlexCenterMx(flex);
        height: 45px;
        padding: 0 1.2em;
    }

    &-line {
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 3px;
        width: 0;
        transform: translateX(-50%);
        background: #01FFFF;
        transition: width .3s;
    }

    // OwIcon
    svg {
        fill: $--tab-header-color;
    }

    &:hover, &_active {
        color: $--tab-header-color-active;
        background: $--tab-header-fill-active;

        .ow-tabs-item-content {
            border-right: 1px solid $--tab-header-fill-active;
        }

        .ow-tabs-item-line {
            width: 100%;
        }

        // OwIcon
        svg {
            fill: $--tab-header-color-active;
        }
    }
}
</style>