import Vue from "vue";
import OwButton from "./Button.vue";
import OwButtonGroup from "./ButtonGroup.vue";
import OwIcon from './Icon.vue'

const Components = {
    OwButton,
    OwButtonGroup,
    OwIcon
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
