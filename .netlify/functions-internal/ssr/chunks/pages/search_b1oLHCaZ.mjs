import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CE3JITfm.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$MainLayout } from './404_DoFke4ss.mjs';
import { $ as $$CardComponent } from './__CRgKIN1S.mjs';

const $$Astro = createAstro("https://techtotinker.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allArchiveArticles = await getCollection("archives");
  const allBlogArticles = await getCollection("blogs");
  const allTidbitArticles = await getCollection("tidbits");
  const allArticles = [
    ...allBlogArticles,
    ...allArchiveArticles,
    ...allTidbitArticles
  ];
  const searchResults = allArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <h2>
Results for <strong style="color:var(--primary-color);"> ${query} :</strong> </h2> <br> </section> <section class="articles"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "CardComponent", $$CardComponent, { "article": article })}`)} </section> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/search.astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
