import Vue from "vue"
import OwButton from "./OwButton.vue"
import OwButtonGroup from "./OwButtonGroup.vue"
import OwIcon from './OwIcon.vue'
import OwInput from './OwInput.vue'
import OwRow from './OwRow.vue'
import OwCol from'./OwCol.vue'

const Components = {
    OwButton,
    OwButtonGroup,
    OwIcon,
    OwInput,
    OwRow,
    OwCol
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
