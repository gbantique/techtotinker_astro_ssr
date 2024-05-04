import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DaaPSfpa.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DCvj_nCT.mjs');
const _page1 = () => import('./chunks/404_a-N5-nSa.mjs');
const _page2 = () => import('./chunks/about_-ycNFT2m.mjs');
const _page3 = () => import('./chunks/search_BXXPFF0K.mjs');
const _page4 = () => import('./chunks/index_C1BeLecw.mjs');
const _page5 = () => import('./chunks/_.._QRH7kfqQ.mjs');
const _page6 = () => import('./chunks/index_LIp0QtLi.mjs');
const _page7 = () => import('./chunks/_.._DsUKqHGe.mjs');
const _page8 = () => import('./chunks/contact_WhItX9Dv.mjs');
const _page9 = () => import('./chunks/search_Czo72a9o.mjs');
const _page10 = () => import('./chunks/_.._D0QcT5ys.mjs');
const _page11 = () => import('./chunks/index_siPsJILf.mjs');
const _page12 = () => import('./chunks/_.._bLdgRF7y.mjs');
const _page13 = () => import('./chunks/index_DE_ew5jc.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/search.json.ts", _page3],
    ["src/pages/archives/index.astro", _page4],
    ["src/pages/archives/[...slug].astro", _page5],
    ["src/pages/blogs/index.astro", _page6],
    ["src/pages/blogs/[...slug].astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/search.astro", _page9],
    ["src/pages/tags/[...tag].astro", _page10],
    ["src/pages/tidbits/index.astro", _page11],
    ["src/pages/tidbits/[...slug].astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "bfe6fe79-5236-4125-8fba-c0af62026c9c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
