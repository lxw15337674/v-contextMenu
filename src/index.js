import contextItem from './components/context-item';
import contextMenu from './components/context-menu'
export {
    contextItem,
    contextMenu
}
const plugin = {
    install(Vue, prefix = '') {
        Vue.component(`${prefix}contextItem`, contextItem);
        Vue.component(`${prefix}contextMenu`, contextMenu)
    },
};
export default plugin;
