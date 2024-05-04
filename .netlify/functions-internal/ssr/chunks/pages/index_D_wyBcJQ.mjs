import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CE3JITfm.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$MainLayout } from './404_DoFke4ss.mjs';
import { A as ARTICLES_PER_PAGE, $ as $$CardComponent, a as $$Pagination } from './__CRgKIN1S.mjs';

const $$Astro$3 = createAstro("https://techtotinker.com");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allArchiveArticles = (await getCollection("archives")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const totalPages = Math.ceil(
    allArchiveArticles.length / ARTICLES_PER_PAGE
  );
  const articlesForPage = allArchiveArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Archives", "description": "This page contains old articles posted in the TechToTinker website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="articles"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "CardComponent", $$CardComponent, { "article": article })}`)} </section> <div class="bottom-container"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages, "pages": "archives" })} </div> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/archives/index.astro", void 0);

const $$file$3 = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/archives/index.astro";
const $$url$3 = "/archives";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://techtotinker.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blogs")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const totalPages = Math.ceil(
    allBlogArticles.length / ARTICLES_PER_PAGE
  );
  const articlesForPage = allBlogArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blogs", "description": "This page contains recent articles posted in the TechToTinker website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="articles"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "CardComponent", $$CardComponent, { "article": article })}`)} </section> <div class="bottom-container"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages, "pages": "blogs" })} </div> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/blogs/index.astro", void 0);

const $$file$2 = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/blogs/index.astro";
const $$url$2 = "/blogs";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://techtotinker.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allTidbitArticles = (await getCollection("tidbits")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const totalPages = Math.ceil(
    allTidbitArticles.length / ARTICLES_PER_PAGE
  );
  const articlesForPage = allTidbitArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tidbits", "description": "This page contains brief and short supporting information" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="articles"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "CardComponent", $$CardComponent, { "article": article })}`)} </section> <div class="bottom-container"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages, "pages": "tidbits" })} </div> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tidbits/index.astro", void 0);

const $$file$1 = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tidbits/index.astro";
const $$url$1 = "/tidbits";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://techtotinker.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <p>Hello from home</p> </section> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/index.astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
