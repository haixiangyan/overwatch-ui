import Vue from "vue"
// Import Components
import Components from './components/index'

// Import Plugins
import plugins from './plugins/index'

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default {
    Components,
    plugins
};
