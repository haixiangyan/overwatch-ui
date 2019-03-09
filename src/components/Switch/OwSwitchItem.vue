<template>
    <transition name="slide-all-left">
        <div v-if="isShow" class="ow-switch-item" :class="{reverse: isReverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "OwSwitchItem",
        props: {
            name: {
                type: [String, Number, Boolean],
                required: true
            },
            isReverse: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                value: null,
            }
        },
        computed: {
            isShow() {
                return this.value === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
.ow-switch-item {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
