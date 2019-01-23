<template>
    <div class="ow-collapse">
        <div class="ow-collapse-title">
            <span class="ow-collapse-title-text">{{title}}</span>
            <ow-button
                @click="toggle"
                type="primary"
                class="ow-collapse-title-button"
                icon-name="add">
            </ow-button>
        </div>
        <div v-if="isOpen" class="ow-collapse-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OwCollapse",
        inject: ['eventHub'],
        props: {
            title: {
                type: String
            },
            name: {
                type: [String, Number]
            }
        },
        data() {
            return {
                isOpen: false
            }
        },
        mounted() {
            this.eventHub.$on('update:selected', (names) => {
                // Check if this Collapse is selected
                this.isOpen = names.indexOf(this.name) > -1;
            })
        },
        methods: {
            toggle() {
                if (this.isOpen) {
                    this.eventHub.$emit('remove:selected', this.name)
                }
                else {
                    this.eventHub.$emit('add:selected', this.name)
                }
            },
        }
    }
</script>

<style scoped lang="scss">
.ow-collapse {
    &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $--color-text-shallow;
        height: $--height-base;
        width: 100%;
        &-text {
            flex-grow: 1;
            display: flex;
            align-items: center;
            padding-left: 10px;
            background: $--color-bg;
            height: 100%;
            opacity: $--less-opacity;
        }
        &-button {
            margin-left: 10px;
            border-radius: 0;
        }
    }
}
</style>