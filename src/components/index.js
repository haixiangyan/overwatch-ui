import Vue from "vue"
import OwButton from "./OwButton.vue"
import OwButtonGroup from "./OwButtonGroup.vue"
import OwIcon from './OwIcon.vue'
import OwInput from './OwInput.vue'
import OwRow from './OwRow.vue'
import OwCol from'./OwCol.vue'
import OwLayout from './OwLayout.vue'
import OwHeader from './OwHeader.vue'
import OwContent from './OwContent.vue'
import OwFooter from './OwFooter.vue'
import OwSider from './OwSider.vue'

const Components = {
    OwButton,
    OwButtonGroup,
    OwIcon,
    OwInput,
    OwRow,
    OwCol,
    OwLayout,
    OwHeader,
    OwContent,
    OwFooter,
    OwSider
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
