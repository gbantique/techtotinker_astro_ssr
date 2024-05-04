import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BwCbe5r6.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Cs19z9hN.mjs');
const _page1 = () => import('./chunks/404_BZrcnIdJ.mjs');
const _page2 = () => import('./chunks/about_CmQbBrnD.mjs');
const _page3 = () => import('./chunks/search_CzJpV9g-.mjs');
const _page4 = () => import('./chunks/index_C8X7nFoX.mjs');
const _page5 = () => import('./chunks/_.._DTFSeE4y.mjs');
const _page6 = () => import('./chunks/index_CKxXGs9b.mjs');
const _page7 = () => import('./chunks/_.._D9mwPM_v.mjs');
const _page8 = () => import('./chunks/contact_DdDIpge0.mjs');
const _page9 = () => import('./chunks/search_Dg1ZA8Qt.mjs');
const _page10 = () => import('./chunks/_.._C45poAIS.mjs');
const _page11 = () => import('./chunks/index_D4I6K0vu.mjs');
const _page12 = () => import('./chunks/_.._wxBIslLS.mjs');
const _page13 = () => import('./chunks/index_5MCZ8UfR.mjs');
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
    "middlewareSecret": "a1690278-ad62-4d00-9ef2-21a616c81993"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
