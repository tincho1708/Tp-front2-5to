import { c as createComponent } from './astro-component_DjoV-yTG.mjs';
import 'piccolore';
import { n as createRenderInstruction, h as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CQ4hGenQ.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, descripcion = "GridVault - Tu colección de autos" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(descripcion, "content")}><title>${titulo} — GridVault</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">${renderHead()}</head> <body> <div class="pagina-wrapper"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="barra-nav" data-astro-cid-5blmo7yk> <div class="contenedor-nav" data-astro-cid-5blmo7yk> <a href="/" class="logo-marca" data-astro-cid-5blmo7yk> <span class="logo-icono" data-astro-cid-5blmo7yk>⚡</span> <span class="logo-texto" data-astro-cid-5blmo7yk>GRID<span class="logo-acento" data-astro-cid-5blmo7yk>VAULT</span></span> </a> <ul class="menu-links" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/" class="link-nav" data-astro-cid-5blmo7yk>Inicio</a></li> <li data-astro-cid-5blmo7yk><a href="/autos" class="link-nav" data-astro-cid-5blmo7yk>Autos</a></li> <li data-astro-cid-5blmo7yk><a href="/coleccion" class="link-nav" data-astro-cid-5blmo7yk>Mi Colección</a></li> </ul> <div class="acciones-nav" data-astro-cid-5blmo7yk> <!-- Estado sin sesión --> <a href="/login" class="boton-entrar" id="btn-entrar" data-astro-cid-5blmo7yk>Entrar</a> <!-- Estado con sesión (oculto por default, se muestra con JS) --> <div class="usuario-menu oculto" id="usuario-menu" data-astro-cid-5blmo7yk> <a href="/perfil" class="usuario-chip" id="chip-usuario" data-astro-cid-5blmo7yk> <span class="avatar-nav" id="avatar-nav" data-astro-cid-5blmo7yk>?</span> <span id="nombre-nav" data-astro-cid-5blmo7yk>Perfil</span> </a> <button class="btn-logout" id="btn-logout" title="Cerrar sesión" data-astro-cid-5blmo7yk>⏻</button> </div> <button class="boton-menu-movil" id="btn-hamburguesa" aria-label="Menu" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk></span><span data-astro-cid-5blmo7yk></span><span data-astro-cid-5blmo7yk></span> </button> </div> </div> <div class="menu-movil" id="menu-movil" data-astro-cid-5blmo7yk> <ul class="links-movil" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/" data-astro-cid-5blmo7yk>Inicio</a></li> <li data-astro-cid-5blmo7yk><a href="/autos" data-astro-cid-5blmo7yk>Autos</a></li> <li data-astro-cid-5blmo7yk><a href="/coleccion" data-astro-cid-5blmo7yk>Mi Colección</a></li> <li id="movil-auth-link" data-astro-cid-5blmo7yk><a href="/login" data-astro-cid-5blmo7yk>Entrar</a></li> </ul> </div> </nav>  ${renderScript($$result, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/components/Navbar.astro", void 0);

export { $$Layout as $, $$Navbar as a, renderScript as r };
