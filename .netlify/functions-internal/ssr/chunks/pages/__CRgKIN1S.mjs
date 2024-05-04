import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, j as addAttribute, e as renderComponent } from '../astro_CE3JITfm.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$MainLayout } from './404_DoFke4ss.mjs';
import { $ as $$Tags } from './__CV-5EemL.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://techtotinker.com");
const $$CardComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardComponent;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <div class="article-wrapper"> <figure> <img${addAttribute("/images/" + article.data.image, "src")} alt=""> </figure> <div class="article-body"> <h4> <a${addAttribute("/" + article.collection + "/" + article.slug, "href")}>${article.data.title}</a> </h4> <!-- <p>
        {article.body}
      </p> --> <p>${article.body.split(" ").slice(0, 20).join(" ")}</p> <a${addAttribute("/" + article.collection + "/" + article.slug, "href")} class="read-more">
Read more <span class="sr-only">${article.data.title}</span> <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> <br> <br> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </div> </article>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/CardComponent.astro", void 0);

const $$Astro$1 = createAstro("https://techtotinker.com");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext, pages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pagination-container"> <a${addAttribute("/" + pages + "?page=" + (currentPage - 1), "href")}${addAttribute(disablePrevious ? "DisabledPagination" : "EnabledPagination", "class")}> <i class="fas fa-hand-point-left"></i> </a> ${Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;
    const isCurrent = pageNumber === currentPage;
    return renderTemplate`<a${addAttribute("/" + pages + "?page=" + pageNumber, "href")}${addAttribute(isCurrent ? "DisabledPagination" : "EnabledPagination", "class")}> ${isCurrent ? renderTemplate`<i class="fas fa-thumbs-up"></i>` : pageNumber} </a>`;
  })} <a${addAttribute("/" + pages + "?page=" + (currentPage + 1), "href")}${addAttribute(disableNext ? "DisabledPagination" : "EnabledPagination", "class")}> <i class="fas fa-hand-point-right"></i> </a> </div>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/Pagination.astro", void 0);

const ARTICLES_PER_PAGE = 5;

const $$Astro = createAstro("https://techtotinker.com");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blogs")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const allArchiveArticles = (await getCollection("archives")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const allTidbitArticles = (await getCollection("tidbits")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const allArticles = [
    ...allBlogArticles,
    ...allArchiveArticles,
    ...allTidbitArticles
  ];
  const tagArticles = allArticles.filter(
    (article) => article.data.tags.includes(tag)
  );
  const totalPages = Math.ceil(tagArticles.length / ARTICLES_PER_PAGE);
  const articlesForPage = tagArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="articles"> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "CardComponent", $$CardComponent, { "article": article })}`)} </section> <div class="bottom-container"> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages, "pages": "tags/" + tag })} </div> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tags/[...tag].astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/tags/[...tag].astro";
const $$url = "/tags/[...tag]";

const ____tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardComponent as $, ARTICLES_PER_PAGE as A, ____tag_ as _, $$Pagination as a };
