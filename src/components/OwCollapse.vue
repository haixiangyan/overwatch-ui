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
                type: String,
                required: true
            },
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
        mounted() {
            this.eventHub && this.eventHub.$on('update:selected', (name) => {
                if (name !== this.name) {
                    this.close()
                }
                else {
                    this.open()
                }
            })
        },
        methods: {
            toggle() {
                if (this.isOpen) {
                    this.close()
                }
                else {
                    this.eventHub && this.eventHub.$emit('update:selected', this.name)
                }
            },
            open() {
                this.isOpen = true
            },
            close() {
                this.isOpen = false
            }
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