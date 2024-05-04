import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, A as AstroError, f as UnknownContentCollectionError, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, u as unescapeHTML, j as addAttribute, k as renderHead, l as renderSlot } from '../astro_CVMSNcoI.mjs';
import 'kleur/colors';
import 'clsx';
import pLimit from 'p-limit';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

const $$Astro$7 = createAstro("https://techtotinker.com");
const $$HeaderSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeaderSection;
  return renderTemplate`${maybeRenderHead()}<header class="header"> <h2 style="color:whitesmoke;">Hero Banner</h2><br> <p>Scroll down to see the sticky effect.</p> </header>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/HeaderSection.astro", void 0);

const $$Astro$6 = createAstro("https://techtotinker.com");
const $$SearchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SearchForm;
  return renderTemplate`${maybeRenderHead()}<div class="search-box"> <form id="search-form" action="/search"> <i class="fas fa-search fa-xs"></i> <div class="input-box"> <input type="text" id="query" name="query" placeholder="Search..." required> </div> </form> </div>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/SearchForm.astro", void 0);

const $$Astro$5 = createAstro("https://techtotinker.com");
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<nav id="myTopnav"> <div class="navbar"> <i class="fas fa-bars fa-menu"></i> <div id="topbar-logo"> <a href="/"> <img src="/src/assets/site/logo_h220.png" alt="TechToTinker logo" height="50px"> </a> </div> <div class="nav-links"> <div class="sidebar-logo"> <span class="logo-name"></span> <i class="fas fa-times fa-xs fa-x"></i> </div> <ul class="links"> <li><a href="/">HOME</a></li> <li> <a href="/pages">PAGES</a> <i class="fas fa-chevron-down htmlcss-arrow arrow"></i> <ul class="htmlCss-sub-menu sub-menu"> <li><a href="/archives">Archives</a></li> <li><a href="/blogs">Blogs</a></li> <li><a href="/tidbits">Tidbits</a></li> </ul> </li> <li><a href="/about">ABOUT</a></li> <li><a href="/contact">CONTACT</a></li> </ul> </div> ${renderComponent($$result, "SearchForm", $$SearchForm, {})} <!-- <i onclick="toggleTheme()" id="mode-icon" class="fas fa-moon"></i> --> <i id="mode-icon" class="fas fa-moon"></i> </div> </nav>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/NavBar.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://techtotinker.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/archives/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_DsoYENjq.mjs'),"/src/content/archives/cannon-excellence.md": () => import('../cannon-excellence_CsVPsabw.mjs'),"/src/content/archives/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_Caoy876B.mjs'),"/src/content/archives/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_De2V7CJK.mjs'),"/src/content/archives/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_CROlDpzG.mjs'),"/src/content/archives/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_CYx0HCCF.mjs'),"/src/content/archives/world-of-drones.md": () => import('../world-of-drones_DmHtmRfZ.mjs'),"/src/content/blogs/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_DdCJ2JUs.mjs'),"/src/content/blogs/cannon-excellence.md": () => import('../cannon-excellence_CgqcBwVT.mjs'),"/src/content/blogs/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_BRmRTlF3.mjs'),"/src/content/blogs/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_BeYKzHn0.mjs'),"/src/content/blogs/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_Z5EkpWhP.mjs'),"/src/content/blogs/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_BEmk3rGY.mjs'),"/src/content/blogs/world-of-drones.md": () => import('../world-of-drones_JcqxyUw3.mjs'),"/src/content/tidbits/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_BNn-Wexm.mjs'),"/src/content/tidbits/cannon-excellence.md": () => import('../cannon-excellence_CMN83Yi_.mjs'),"/src/content/tidbits/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_xL8RNHTF.mjs'),"/src/content/tidbits/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_vrBIoSup.mjs'),"/src/content/tidbits/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_B-q6KrrI.mjs'),"/src/content/tidbits/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_yB1WVqMV.mjs'),"/src/content/tidbits/world-of-drones.md": () => import('../world-of-drones_DmGX36JA.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"archives":{"type":"content","entries":{"capturing-lifes-moments-with-canon-excellence":"/src/content/archives/cannon-excellence.md","the-best-laptops-for-developers-in-2024":"/src/content/archives/best-laptops-for-developers.md","elevate-your-mobile-experience-with-samsung":"/src/content/archives/elevate-your-mobile-experience.md","unleash-creativity-with-these-cutting-edge-tablets":"/src/content/archives/cutting-edge-tablets.md","guardian-of-the-digital-realm-web-security":"/src/content/archives/guardian-of-the-digital-realm.md","immerse-in-the-virtual-world-vr-development":"/src/content/archives/immerse-in-the-virtual-world.md","soaring-to-new-heights-the-world-of-drones":"/src/content/archives/world-of-drones.md"}},"blogs":{"type":"content","entries":{"the-best-laptops-for-developers-in-2024":"/src/content/blogs/best-laptops-for-developers.md","capturing-lifes-moments-with-canon-excellence":"/src/content/blogs/cannon-excellence.md","unleash-creativity-with-these-cutting-edge-tablets":"/src/content/blogs/cutting-edge-tablets.md","elevate-your-mobile-experience-with-samsung":"/src/content/blogs/elevate-your-mobile-experience.md","guardian-of-the-digital-realm-web-security":"/src/content/blogs/guardian-of-the-digital-realm.md","immerse-in-the-virtual-world-vr-development":"/src/content/blogs/immerse-in-the-virtual-world.md","soaring-to-new-heights-the-world-of-drones":"/src/content/blogs/world-of-drones.md"}},"tidbits":{"type":"content","entries":{"the-best-laptops-for-developers-in-2024":"/src/content/tidbits/best-laptops-for-developers.md","capturing-lifes-moments-with-canon-excellence":"/src/content/tidbits/cannon-excellence.md","unleash-creativity-with-these-cutting-edge-tablets":"/src/content/tidbits/cutting-edge-tablets.md","elevate-your-mobile-experience-with-samsung":"/src/content/tidbits/elevate-your-mobile-experience.md","guardian-of-the-digital-realm-web-security":"/src/content/tidbits/guardian-of-the-digital-realm.md","immerse-in-the-virtual-world-vr-development":"/src/content/tidbits/immerse-in-the-virtual-world.md","soaring-to-new-heights-the-world-of-drones":"/src/content/tidbits/world-of-drones.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/archives/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_D3_BQ6FK.mjs'),"/src/content/archives/cannon-excellence.md": () => import('../cannon-excellence_C2tmDRh7.mjs'),"/src/content/archives/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_CbvL2lU4.mjs'),"/src/content/archives/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_74pWYGH2.mjs'),"/src/content/archives/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_DczSdzEB.mjs'),"/src/content/archives/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_BPB0fFtj.mjs'),"/src/content/archives/world-of-drones.md": () => import('../world-of-drones_DUf7MGP3.mjs'),"/src/content/blogs/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_DY1wxo6u.mjs'),"/src/content/blogs/cannon-excellence.md": () => import('../cannon-excellence_Dlt0-Fqn.mjs'),"/src/content/blogs/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_9_tzAIFd.mjs'),"/src/content/blogs/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_CBZsoGmM.mjs'),"/src/content/blogs/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_DH855Mtb.mjs'),"/src/content/blogs/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_WiL7EE5i.mjs'),"/src/content/blogs/world-of-drones.md": () => import('../world-of-drones_wNjVTwE1.mjs'),"/src/content/tidbits/best-laptops-for-developers.md": () => import('../best-laptops-for-developers_CNfwdWVn.mjs'),"/src/content/tidbits/cannon-excellence.md": () => import('../cannon-excellence_D1fk2m1s.mjs'),"/src/content/tidbits/cutting-edge-tablets.md": () => import('../cutting-edge-tablets_CrYu2rQz.mjs'),"/src/content/tidbits/elevate-your-mobile-experience.md": () => import('../elevate-your-mobile-experience_DBc2base.mjs'),"/src/content/tidbits/guardian-of-the-digital-realm.md": () => import('../guardian-of-the-digital-realm_DhJjh_AJ.mjs'),"/src/content/tidbits/immerse-in-the-virtual-world.md": () => import('../immerse-in-the-virtual-world_Cp4ITOYM.mjs'),"/src/content/tidbits/world-of-drones.md": () => import('../world-of-drones_DpQUqyw8.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$4 = createAstro("https://techtotinker.com");
const $$TagsSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TagsSection;
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
  const tags = allArticles.flatMap((article) => article.data.tags);
  const tagCounts = /* @__PURE__ */ new Map();
  tags.forEach((tag) => {
    tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
  });
  const uniqueTagsWithCounts = Object.entries(tagCounts).map(
    ([tagName, count]) => ({ tagName, count })
  );
  return renderTemplate`${maybeRenderHead()}<ul> ${uniqueTagsWithCounts.map(({ tagName, count }) => renderTemplate`<li> <a${addAttribute("/tags/" + tagName, "href")}> <span class="tags-icon"> <i class="fas fa-tags"></i> </span> ${tagName} <span class="tag-count">${count}</span> </a> </li>`)} </ul>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/TagsSection.astro", void 0);

const $$Astro$3 = createAstro("https://techtotinker.com");
const $$AsideSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AsideSection;
  return renderTemplate`${maybeRenderHead()}<aside> <div class="aside-card"> <h2>About Me</h2> <div class="fakeimg" style="height:100px;">Image</div> <p>Some text about me in culpa qui officia deserunt mollit anim..</p> </div> <div class="aside-card"> <h3>Popular Post</h3> <div class="fakeimg">Image</div><br> <div class="fakeimg">Image</div><br> <div class="fakeimg">Image</div> </div> <div class="aside-card"> <h3>Categories</h3> <p>Some text..</p> </div> <div class="aside-card"> <h3>Series</h3> <p>Some text..</p> </div> <div class="aside-card"> <h3>Tags</h3> ${renderComponent($$result, "TagsSection", $$TagsSection, {})} </div> </aside>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/AsideSection.astro", void 0);

const $$Astro$2 = createAstro("https://techtotinker.com");
const $$FooterSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterSection;
  return renderTemplate`${maybeRenderHead()}<footer> <div class="content"> <div class="top"> <div class="logo-details"> <a href="/"> <img src="/src/assets/site/logo_h220.png" height="40px" alt=""> </a> </div> <div class="media-icons"> <a href="https://facebook.com/gbantique/" target="_blank"><i class="fab fa-facebook-f"></i></a> <a href="https://github.com/gbantique/" target="_blank"><i class="fab fa-github"></i></a> <a href="https://youtube.com/c/TechToTinker/" target="_blank"><i class="fab fa-youtube"></i></a> <a href="mailto:gbantique@gmail.com" target="_blank"><i class="fa fa-envelope"></i></a> </div> </div> <div class="link-boxes"> <ul class="box"> <li class="link_name">Company</li> <li><a href="#">Home</a></li> <li><a href="#">Contact us</a></li> <li><a href="#">About us</a></li> <li><a href="#">Get started</a></li> </ul> <ul class="box"> <li class="link_name">Services</li> <li><a href="#">App design</a></li> <li><a href="#">Web design</a></li> <li><a href="#">Logo design</a></li> <li><a href="#">Banner design</a></li> </ul> <ul class="box"> <li class="link_name">Account</li> <li><a href="#">Profile</a></li> <li><a href="#">My account</a></li> <li><a href="#">Prefrences</a></li> <li><a href="#">Purchase</a></li> </ul> <ul class="box"> <li class="link_name">Courses</li> <li><a href="#">HTML & CSS</a></li> <li><a href="#">JavaScript</a></li> <li><a href="#">Photography</a></li> <li><a href="#">Photoshop</a></li> </ul> <ul class="box input-box"> <li class="link_name">Subscribe</li> <li><input type="text" placeholder="Enter your email"></li> <li><input type="button" value="Subscribe"></li> </ul> </div> </div> <div class="bottom-details"> <div class="bottom_text"> <span class="copyright_text">Copyright © <span id="copyright"></span> <a href="/">techtotinker.com</a> | All rights reserved</span> <span class="policy_terms"> <a href="#">Privacy policy</a> <a href="#">Terms & condition</a> </span> </div> </div> </footer> `;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/components/FooterSection.astro", void 0);

const $$Astro$1 = createAstro("https://techtotinker.com");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "TechToTinker",
    description = "Where technology is explored and shared"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link href="/src/assets/site/icon.svg" rel="icon" type="image/x-icon"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"><link rel="stylesheet" href="../css/global_style.css"><link rel="stylesheet" href="../css/utility_style.css"><link rel="stylesheet" href="../css/card_style.css"><link rel="stylesheet" href="../css/header_style.css"><link rel="stylesheet" href="../css/navbar_style.css"><link rel="stylesheet" href="../css/main_style.css"><link rel="stylesheet" href="../css/aside_style.css"><link rel="stylesheet" href="../css/footer_style.css"><title>TechToTinker - ${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "HeaderSection", $$HeaderSection, {})} ${renderComponent($$result, "NavBar", $$NavBar, {})} <!-- <BreadcrumbsSection /> --> <!-- CONTENT Container --> <div class="content"> <main> <!-- 
        <div class="top-container">
        </div>
        <section class="default">
        </section>
        <section class="articles">
        </section>
        <div class="bottom-container">
        </div>
        --> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "AsideSection", $$AsideSection, {})} </div> ${renderComponent($$result, "FooterSection", $$FooterSection, {})}   </body> </html>`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://techtotinker.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404: Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <p>Sorry, we couldn't find the page you were looking for.</p> <br> <a href="/" style="text-decoration: none;">Return back to homepage <span style="width: 24px;
      height: 24px;
      fill: currentColor;
      display: inline-block;
      vertical-align: middle;"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg> </span></a> </section> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/404.astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _404 as _, getCollection as a, getEntry as g };
