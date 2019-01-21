<template>
    <div class="ow-tabs-item" :class="classes" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "OwTabsItem",
        inject: ['eventHub'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
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
            this.eventHub.$on('update:selected', (name) => {
                this.active = (name === this.name)
            })
        },
        methods: {
            xxx() {
                this.eventHub.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-tabs-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    flex-shrink: 0;
    border-left: 1px solid #323D5B;
    border-right: 1px solid #323D5B;
    transition: all .3s;

    &:hover {
        color: $--color-white;
        background: $--tab-item-bg-active;
        border-color: $--tab-item-bg-active;
    }
    
    &_active {
        background: red;
    }
}
</style>