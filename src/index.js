import test from './components/test.vue';
const plugin = {
    install(Vue, options) {
        const finalOptions = Object.assign({ refix: '', options })
        Vue.component(`test`, test);
    },
};
export default plugin;
