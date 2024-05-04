import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CE3JITfm.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './404_DoFke4ss.mjs';

const $$Astro = createAstro("https://techtotinker.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "About TechToTinker" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <p>Hello from about</p> </section> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/about.astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
