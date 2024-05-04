import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, j as addAttribute, e as renderComponent } from '../astro_CVMSNcoI.mjs';
import 'kleur/colors';
import { g as getEntry, a as getCollection, $ as $$MainLayout } from './404_dQL7e-FB.mjs';
import 'clsx';

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Astro$4 = createAstro("https://techtotinker.com");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${tags.map((tag) => renderTemplate`<span class="button-tags"> <a${addAttribute("/tags/" + tag, "href")}>#${capitalize(tag)} </a> </span>`)} </div>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/Tags.astro", void 0);

const $$Astro$3 = createAstro("https://techtotinker.com");
const $$RelatedArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RelatedArticle;
  const { articles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bottom-container"> <br> <hr> <h2>Related Articles</h2> <ul> ${articles.map(
    (article) => renderTemplate`<li> <a${addAttribute(`/${article.collection}/${article.slug}`, "href")}> ${article.data.title} </a> </li>`
  )} </ul> </div>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/RelatedArticle.astro", void 0);

const $$Astro$2 = createAstro("https://techtotinker.com");
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("archives", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const allArticles = await Promise.all([
    getCollection("blogs"),
    getCollection("archives"),
    getCollection("tidbits")
  ]);
  const flattenedArticles = allArticles.flat().sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const entryTags = entry.data.tags;
  const relatedArticles = flattenedArticles.filter(
    (article) => article.data.tags.some((tag) => entryTags.includes(tag))
  );
  const filteredRelatedArticles = relatedArticles.filter(
    (article) => article.slug !== slug
    // dynamic
    // (article) => article.slug != entry.slug,
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <hr> <a href="/archives">Back To Archives</a> <br> <br> <h2>${entry.data.title}</h2> <p>
Written by ${entry.data.author} on ${formatDate(entry.data.date)} </p> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image"> ${renderComponent($$result2, "Content", Content, {})} </section> ${renderComponent($$result2, "RelatedArticle", $$RelatedArticle, { "articles": filteredRelatedArticles })} ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/archives/[...slug].astro", void 0);

const $$file$2 = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/archives/[...slug].astro";
const $$url$2 = "/archives/[...slug]";

const ____slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://techtotinker.com");
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blogs", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const allArticles = await Promise.all([
    getCollection("blogs"),
    getCollection("archives"),
    getCollection("tidbits")
  ]);
  const flattenedArticles = allArticles.flat().sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const entryTags = entry.data.tags;
  const relatedArticles = flattenedArticles.filter(
    (article) => article.data.tags.some((tag) => entryTags.includes(tag))
  );
  const filteredRelatedArticles = relatedArticles.filter(
    (article) => article.slug !== slug
    // (article) => article.slug !== entry.slug,
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <hr> <a href="/blogs">Back To Blogs</a> <br> <br> <h2>${entry.data.title}</h2> <p>
Written by ${entry.data.author} on ${formatDate(entry.data.date)} </p> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image"> ${renderComponent($$result2, "Content", Content, {})} </section> ${renderComponent($$result2, "RelatedArticle", $$RelatedArticle, { "articles": filteredRelatedArticles })} ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/blogs/[...slug].astro", void 0);

const $$file$1 = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/blogs/[...slug].astro";
const $$url$1 = "/blogs/[...slug]";

const ____slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://techtotinker.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("tidbits", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const allArticles = await Promise.all([
    getCollection("blogs"),
    getCollection("archives"),
    getCollection("tidbits")
  ]);
  const flattenedArticles = allArticles.flat().sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const entryTags = entry.data.tags;
  const relatedArticles = flattenedArticles.filter(
    (article) => article.data.tags.some((tag) => entryTags.includes(tag))
  );
  const filteredRelatedArticles = relatedArticles.filter(
    (article) => article.slug !== slug
    // (article) => article.slug !== entry.slug,
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <hr> <a href="/tidbits">Back To Tidbits</a> <br> <br> <h2>${entry.data.title}</h2> <p>
Written by ${entry.data.author} on ${formatDate(entry.data.date)} </p> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image"> ${renderComponent($$result2, "Content", Content, {})} </section> ${renderComponent($$result2, "RelatedArticle", $$RelatedArticle, { "articles": filteredRelatedArticles })} ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tidbits/[...slug].astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tidbits/[...slug].astro";
const $$url = "/tidbits/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Tags as $, ____slug_$2 as _, ____slug_$1 as a, ____slug_ as b };
