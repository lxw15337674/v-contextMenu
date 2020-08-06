import base from './rollup.base';
import { merge } from 'lodash';
const config = merge(base, {
    output: {
        name: 'contextMenu',
        file: 'dist/v-tooltip.esm.js',
        format: 'es',
    },
});
export default config;
