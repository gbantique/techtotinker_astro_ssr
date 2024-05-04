import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CE3JITfm.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './404_DoFke4ss.mjs';

const $$Astro = createAstro("https://techtotinker.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact", "description": "TechToTinker contact page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="default"> <p>Hello from contact</p> </section> ` })}`;
}, "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/contact.astro", void 0);

const $$file = "D:/WORKFILES/HTML/htdocs/astro/techtotinker_astro_ssr/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
