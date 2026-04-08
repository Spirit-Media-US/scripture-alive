import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_VBdQU1a7.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/8liesandobstacles.astro.mjs');
const _page2 = () => import('./pages/8reasonswhy.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/all-events.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/book-jeremy.astro.mjs');
const _page8 = () => import('./pages/booking.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/creative.astro.mjs');
const _page11 = () => import('./pages/endorsements.astro.mjs');
const _page12 = () => import('./pages/event-types.astro.mjs');
const _page13 = () => import('./pages/events.astro.mjs');
const _page14 = () => import('./pages/guestpreaching.astro.mjs');
const _page15 = () => import('./pages/how-to-book-jeremy-kluth-for-your-church.astro.mjs');
const _page16 = () => import('./pages/interviews.astro.mjs');
const _page17 = () => import('./pages/performances/books.astro.mjs');
const _page18 = () => import('./pages/performances/characters.astro.mjs');
const _page19 = () => import('./pages/performances/narratives.astro.mjs');
const _page20 = () => import('./pages/performances/stories.astro.mjs');
const _page21 = () => import('./pages/performances.astro.mjs');
const _page22 = () => import('./pages/performers.astro.mjs');
const _page23 = () => import('./pages/powersystem.astro.mjs');
const _page24 = () => import('./pages/ptr-what-is-the-power-system.astro.mjs');
const _page25 = () => import('./pages/referjeremy.astro.mjs');
const _page26 = () => import('./pages/resources.astro.mjs');
const _page27 = () => import('./pages/scripturealiveinfosheet.astro.mjs');
const _page28 = () => import('./pages/speaking/church-events.astro.mjs');
const _page29 = () => import('./pages/speaking/coaching.astro.mjs');
const _page30 = () => import('./pages/speaking/leadership.astro.mjs');
const _page31 = () => import('./pages/speaking/podcast.astro.mjs');
const _page32 = () => import('./pages/speaking.astro.mjs');
const _page33 = () => import('./pages/store.astro.mjs');
const _page34 = () => import('./pages/studio/_---params_.astro.mjs');
const _page35 = () => import('./pages/topicalverses.astro.mjs');
const _page36 = () => import('./pages/unsubscribed.astro.mjs');
const _page37 = () => import('./pages/videos.astro.mjs');
const _page38 = () => import('./pages/why-i-wrote-power-to-remember-scripture-memory-that-works.astro.mjs');
const _page39 = () => import('./pages/worksheet.astro.mjs');
const _page40 = () => import('./pages/workshops/advanced.astro.mjs');
const _page41 = () => import('./pages/workshops/discipleship.astro.mjs');
const _page42 = () => import('./pages/workshops/foundations.astro.mjs');
const _page43 = () => import('./pages/workshops.astro.mjs');
const _page44 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/8liesandobstacles.astro", _page1],
    ["src/pages/8reasonswhy.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/all-events.astro", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/book-jeremy.astro", _page7],
    ["src/pages/booking.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/creative.astro", _page10],
    ["src/pages/endorsements.astro", _page11],
    ["src/pages/event-types.astro", _page12],
    ["src/pages/events.astro", _page13],
    ["src/pages/guestpreaching.astro", _page14],
    ["src/pages/how-to-book-jeremy-kluth-for-your-church.astro", _page15],
    ["src/pages/interviews.astro", _page16],
    ["src/pages/performances/books.astro", _page17],
    ["src/pages/performances/characters.astro", _page18],
    ["src/pages/performances/narratives.astro", _page19],
    ["src/pages/performances/stories.astro", _page20],
    ["src/pages/performances.astro", _page21],
    ["src/pages/performers.astro", _page22],
    ["src/pages/powersystem.astro", _page23],
    ["src/pages/ptr-what-is-the-power-system.astro", _page24],
    ["src/pages/referjeremy.astro", _page25],
    ["src/pages/resources.astro", _page26],
    ["src/pages/scripturealiveinfosheet.astro", _page27],
    ["src/pages/speaking/church-events.astro", _page28],
    ["src/pages/speaking/coaching.astro", _page29],
    ["src/pages/speaking/leadership.astro", _page30],
    ["src/pages/speaking/podcast.astro", _page31],
    ["src/pages/speaking.astro", _page32],
    ["src/pages/store.astro", _page33],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page34],
    ["src/pages/topicalverses.astro", _page35],
    ["src/pages/unsubscribed.astro", _page36],
    ["src/pages/videos.astro", _page37],
    ["src/pages/why-i-wrote-power-to-remember-scripture-memory-that-works.astro", _page38],
    ["src/pages/worksheet.astro", _page39],
    ["src/pages/workshops/advanced.astro", _page40],
    ["src/pages/workshops/discipleship.astro", _page41],
    ["src/pages/workshops/foundations.astro", _page42],
    ["src/pages/workshops.astro", _page43],
    ["src/pages/index.astro", _page44]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1b70ab4f-c84f-4d7a-89de-888d7f564da2"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
