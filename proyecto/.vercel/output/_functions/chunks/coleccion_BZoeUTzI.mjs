import { c as createComponent } from './astro-component_DjoV-yTG.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CQ4hGenQ.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navbar } from './Navbar_FH9kuHyG.mjs';
import { $ as $$Footer } from './Footer_CKMZhvip.mjs';

const $$Coleccion = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Mi Colección", "data-astro-cid-cjyqna34": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-cjyqna34": true })} ${maybeRenderHead()}<main class="con-nav" data-astro-cid-cjyqna34> <section class="cabecera-pagina" data-astro-cid-cjyqna34> <div class="contenedor" data-astro-cid-cjyqna34> <h1 class="titulo-pagina" data-astro-cid-cjyqna34>Mi <span class="titulo-verde" data-astro-cid-cjyqna34>Garage</span></h1> <p class="subtitulo-pagina" data-astro-cid-cjyqna34>Todo tu registro en un solo lugar</p> </div> </section> <section class="seccion-stats" data-astro-cid-cjyqna34> <div class="contenedor" data-astro-cid-cjyqna34> <div class="grilla-stats" data-astro-cid-cjyqna34> <div class="stat-card" data-astro-cid-cjyqna34> <span class="stat-numero verde" id="stat-total" data-astro-cid-cjyqna34>-</span> <span class="stat-label" data-astro-cid-cjyqna34>Autos en total</span> </div> <div class="stat-card" data-astro-cid-cjyqna34> <span class="stat-numero rojo" id="stat-favs" data-astro-cid-cjyqna34>-</span> <span class="stat-label" data-astro-cid-cjyqna34>Favoritos</span> </div> <div class="stat-card" data-astro-cid-cjyqna34> <span class="stat-numero azul" id="stat-jdm" data-astro-cid-cjyqna34>-</span> <span class="stat-label" data-astro-cid-cjyqna34>JDM</span> </div> <div class="stat-card" data-astro-cid-cjyqna34> <span class="stat-numero naranja" id="stat-rally" data-astro-cid-cjyqna34>-</span> <span class="stat-label" data-astro-cid-cjyqna34>Rally</span> </div> </div> </div> </section> <section class="seccion-actividad" data-astro-cid-cjyqna34> <div class="contenedor" data-astro-cid-cjyqna34> <div class="titulo-col-wrapper" data-astro-cid-cjyqna34> <h2 class="titulo-col" data-astro-cid-cjyqna34>🚗 Últimos autos agregados</h2> <a href="/autos" class="link-ver-todos" data-astro-cid-cjyqna34>Ver todos →</a> </div> <div class="lista-recientes" id="lista-recientes" data-astro-cid-cjyqna34> <p class="cargando" data-astro-cid-cjyqna34>Cargando...</p> </div> </div> </section> <section class="seccion-accesos" data-astro-cid-cjyqna34> <div class="contenedor" data-astro-cid-cjyqna34> <div class="grilla-accesos" data-astro-cid-cjyqna34> <a href="/autos" class="acceso-rapido" data-astro-cid-cjyqna34> <span class="acceso-icono" data-astro-cid-cjyqna34>🚗</span> <div data-astro-cid-cjyqna34> <p class="acceso-titulo" data-astro-cid-cjyqna34>Mis Autos</p> <p class="acceso-sub" id="acceso-sub-autos" data-astro-cid-cjyqna34>Tu garage</p> </div> <span class="acceso-flecha" data-astro-cid-cjyqna34>→</span> </a> <a href="/perfil" class="acceso-rapido" data-astro-cid-cjyqna34> <span class="acceso-icono" data-astro-cid-cjyqna34>👤</span> <div data-astro-cid-cjyqna34> <p class="acceso-titulo" data-astro-cid-cjyqna34>Mi Perfil</p> <p class="acceso-sub" data-astro-cid-cjyqna34>Editar cuenta</p> </div> <span class="acceso-flecha" data-astro-cid-cjyqna34>→</span> </a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-cjyqna34": true })} ` })}  ${renderScript($$result, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/coleccion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/coleccion.astro", void 0);

const $$file = "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/coleccion.astro";
const $$url = "/coleccion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Coleccion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
