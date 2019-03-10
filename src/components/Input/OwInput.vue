<template>
    <div class="ow-input-wrapper" :class="wrapperClasses">
        <input
            :value="value"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            :style="inputStyles"
            @change="$emit('change', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            :type="type">
        <p class="ow-input-hint" v-if="hint">
            <ow-icon class="ow-input-hint-icon" :name="iconName" :color="iconColor"></ow-icon>
            <small>{{hint}}</small>
        </p>
    </div>
</template>

<script>
    import OwIcon from '../Icon/OwIcon'

    export default {
    name: "OwInput",
    props: {
        value: {
            type: [String, Number, Date]
        },
        iconName: {
            type: String
        },
        placeholder: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        hint: {
            type: String
        },
        hintType: {
            type: String,
            validator(hintType) {
                return ['info', 'warning', 'danger', 'success'].indexOf(hintType) > -1
            }
        },
        type: {
            type: String,
            default: 'text'
        },
        width: {
            type: Number,
            default: 200
        }
    },
    computed: {
        wrapperClasses() {
            return [
                `ow-input-wrapper-${this.hintType}`
            ]
        },
        inputStyles() {
            return {
                width: this.width + 'px'
            }
        },
        iconColor() {
            const colors = {
                info: '#909399',
                warning: '#FFC429',
                danger: '#DE4561',
                success: '#33A03D'
            }
            return colors[this.hintType]
        }
    },
    components: {
        OwIcon
    }
}
</script>

<style scoped lang="scss">
.ow-input {
    &-wrapper {
        display: inline-block;
        > input {
            padding: $--input-padding-horizontal;
            height: $--input-height;
            outline: none;
            border: 1px solid $--input-border-color;
            border-radius: $--border-radius-base;
            transition: background-color .3s;
            background: rgba(255, 255, 255, 0.9);
            font-size: 1em;

            &:hover, &:active, &:focus {
                background: rgba(255, 255, 255, 1);
                z-index: 1;
            }
            &[disabled] {
                background: $--input-disabled-fill;
            }
        }

        &-danger  {
            > input { border-color: $--color-danger; }
            & small { color: $--color-danger; }
        }
        &-warning  {
            > input { border-color: $--color-warning; }
            & small { color: $--color-warning; }
        }
        &-info {
            > input { border-color: $--color-info; }
            & small { color: $--color-info; }
        }
        &-success {
            > input { border-color: $--color-success; }
            & small { color: $--color-success; }
        }
    }
    &-hint {
        display: flex;
        align-items: center;
        &-icon { margin-right: 4px; }
    }
}
</style>