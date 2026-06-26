import { c as createComponent } from './astro-component_DjoV-yTG.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, l as renderComponent } from './entrypoint_CQ4hGenQ.mjs';
import { $ as $$Layout, a as $$Navbar } from './Navbar_FH9kuHyG.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_CKMZhvip.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="seccion-hero" data-astro-cid-bbe6dxrz> <div class="fondo-ruido" data-astro-cid-bbe6dxrz></div> <div class="lineas-fondo" data-astro-cid-bbe6dxrz></div> <div class="contenido-hero" data-astro-cid-bbe6dxrz> <p class="etiqueta-hero" data-astro-cid-bbe6dxrz>// tu garage, tu identidad</p> <h1 class="titulo-hero" data-astro-cid-bbe6dxrz>
REGISTRÁ<br data-astro-cid-bbe6dxrz> <span class="titulo-verde" data-astro-cid-bbe6dxrz>TU GARAGE</span> </h1> <p class="subtitulo-hero" data-astro-cid-bbe6dxrz>
Organizá tu colección de autos en un solo lugar.<br data-astro-cid-bbe6dxrz>
Simple. Rápido. Tuyo.
</p> <div class="botones-hero" data-astro-cid-bbe6dxrz> <a href="/registro" class="boton-primario" data-astro-cid-bbe6dxrz>Empezar gratis</a> <a href="#explorar" class="boton-secundario" data-astro-cid-bbe6dxrz>Ver demo →</a> </div> <div class="stats-hero" data-astro-cid-bbe6dxrz> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-numero" data-astro-cid-bbe6dxrz>1.2K</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Autos registrados</span> </div> <div class="divisor-stat" data-astro-cid-bbe6dxrz></div> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-numero" data-astro-cid-bbe6dxrz>340+</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Usuarios activos</span> </div> <div class="divisor-stat" data-astro-cid-bbe6dxrz></div> <div class="stat-item" data-astro-cid-bbe6dxrz> <span class="stat-numero" data-astro-cid-bbe6dxrz>80+</span> <span class="stat-label" data-astro-cid-bbe6dxrz>Marcas cargadas</span> </div> </div> </div> <div class="imagen-hero" data-astro-cid-bbe6dxrz> <div class="orbe-fondo" data-astro-cid-bbe6dxrz></div> <div class="tarjeta-flotante tarjeta-uno" data-astro-cid-bbe6dxrz> <div class="tarjeta-tag" data-astro-cid-bbe6dxrz>🚗 JDM</div> <div class="tarjeta-nombre" data-astro-cid-bbe6dxrz>Nissan Skyline R34</div> <div class="tarjeta-extra" data-astro-cid-bbe6dxrz>RB26DETT · 1999 · ❤ Favorito</div> </div> <div class="tarjeta-flotante tarjeta-dos" data-astro-cid-bbe6dxrz> <div class="tarjeta-tag" data-astro-cid-bbe6dxrz>🏁 Rally</div> <div class="tarjeta-nombre" data-astro-cid-bbe6dxrz>Subaru Impreza WRX STI</div> <div class="tarjeta-extra" data-astro-cid-bbe6dxrz>EJ207 · 2004</div> </div> <div class="tarjeta-flotante tarjeta-tres" data-astro-cid-bbe6dxrz> <div class="tarjeta-tag" data-astro-cid-bbe6dxrz>🔥 Muscle</div> <div class="tarjeta-nombre" data-astro-cid-bbe6dxrz>Ford Mustang GT500</div> <div class="tarjeta-extra" data-astro-cid-bbe6dxrz>427 V8 · 1967</div> </div> </div> </section>`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/components/Hero.astro", void 0);

const $$TarjetaAuto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TarjetaAuto;
  const { marca, modelo, anio, estilo, potencia, color, favorito = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="tarjeta-auto" data-astro-cid-xdt55v44> <div class="barra-color"${addAttribute(`background: ${color}`, "style")} data-astro-cid-xdt55v44></div> <div class="contenido-auto" data-astro-cid-xdt55v44> <div class="cabecera-auto" data-astro-cid-xdt55v44> <div class="info-estilo" data-astro-cid-xdt55v44> <span class="badge-estilo" data-astro-cid-xdt55v44>${estilo}</span> ${favorito && renderTemplate`<span class="badge-favorito" data-astro-cid-xdt55v44>❤ FAV</span>`} </div> <button class="boton-mas" data-astro-cid-xdt55v44>···</button> </div> <div class="nombre-auto" data-astro-cid-xdt55v44> <p class="marca-auto" data-astro-cid-xdt55v44>${marca}</p> <h3 class="modelo-auto" data-astro-cid-xdt55v44>${modelo}</h3> </div> <div class="specs-auto" data-astro-cid-xdt55v44> <div class="spec-fila" data-astro-cid-xdt55v44> <span class="spec-etiqueta" data-astro-cid-xdt55v44>Año</span> <span class="spec-valor" data-astro-cid-xdt55v44>${anio}</span> </div> ${potencia && renderTemplate`<div class="spec-fila" data-astro-cid-xdt55v44> <span class="spec-etiqueta" data-astro-cid-xdt55v44>Motor</span> <span class="spec-valor" data-astro-cid-xdt55v44>${potencia}</span> </div>`} <div class="spec-fila" data-astro-cid-xdt55v44> <span class="spec-etiqueta" data-astro-cid-xdt55v44>Color</span> <span class="muestra-color"${addAttribute(`background: ${color}`, "style")} data-astro-cid-xdt55v44></span> </div> </div> <div class="acciones-auto" data-astro-cid-xdt55v44> <button class="btn-ver-auto" data-astro-cid-xdt55v44>Ver detalle</button> <button class="btn-fav-auto" data-astro-cid-xdt55v44>${favorito ? "❤" : "♡"}</button> </div> </div> </article>`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/components/TarjetaAuto.astro", void 0);

const $$SeleccionColeccion = createComponent(($$result, $$props, $$slots) => {
  const autosEjemplo = [
    { marca: "Nissan", modelo: "Skyline R34 GT-R", anio: 1999, estilo: "JDM", potencia: "RB26 Twin Turbo", color: "#00cfff", favorito: true },
    { marca: "Toyota", modelo: "Supra MK4", anio: 1993, estilo: "JDM", potencia: "2JZ-GTE", color: "#ff6b35", favorito: false },
    { marca: "Mazda", modelo: "RX-7 FD", anio: 1992, estilo: "JDM", potencia: "13B Rotary", color: "#ff4444", favorito: false },
    { marca: "Subaru", modelo: "Impreza WRX STI", anio: 2004, estilo: "Rally", potencia: "EJ207", color: "#4488ff", favorito: true }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="seccion-coleccion" id="explorar" data-astro-cid-dkzu4l65> <div class="encabezado-seccion" data-astro-cid-dkzu4l65> <div class="titulo-seccion-wrapper" data-astro-cid-dkzu4l65> <span class="linea-acento" data-astro-cid-dkzu4l65></span> <h2 class="titulo-seccion" data-astro-cid-dkzu4l65>Tu Garage</h2> </div> <p class="descripcion-seccion" data-astro-cid-dkzu4l65>Los autos que más te gustan, todos en un lugar</p> </div> <div class="barra-filtros" data-astro-cid-dkzu4l65> <div class="filtros-izq" data-astro-cid-dkzu4l65> <button class="chip-filtro activo" data-astro-cid-dkzu4l65>Todos</button> <button class="chip-filtro" data-astro-cid-dkzu4l65>JDM</button> <button class="chip-filtro" data-astro-cid-dkzu4l65>Rally</button> <button class="chip-filtro" data-astro-cid-dkzu4l65>Favoritos</button> </div> <a href="/autos" class="boton-ver-todos" data-astro-cid-dkzu4l65>Ver todos →</a> </div> <div class="grilla-autos" data-astro-cid-dkzu4l65> ${autosEjemplo.map((auto) => renderTemplate`${renderComponent($$result, "TarjetaAuto", $$TarjetaAuto, { ...auto, "data-astro-cid-dkzu4l65": true })}`)} </div> </section>`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/components/SeleccionColeccion.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Inicio", "descripcion": "GridVault - Coleccioná tus autos favoritos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="con-nav"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "SeccionColeccion", $$SeleccionColeccion, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/index.astro", void 0);

const $$file = "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
