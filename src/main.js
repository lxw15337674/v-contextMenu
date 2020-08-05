import contextItem from './components/context-item';
import contextMenu from './components/context-menu'
export {
    contextItem,
    contextMenu
}
const plugin = {
    install(Vue, prefix = '') {
        Vue.component(`${prefix}ContextItem`, contextItem);
        Vue.component(`${prefix}ContextMenu`, contextMenu)
    },
};
export default plugin;
