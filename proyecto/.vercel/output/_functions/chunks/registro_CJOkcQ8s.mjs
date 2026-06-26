import { c as createComponent } from './astro-component_DjoV-yTG.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CQ4hGenQ.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navbar } from './Navbar_FH9kuHyG.mjs';

const $$Registro = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Registrarse", "data-astro-cid-ohowjl3i": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-ohowjl3i": true })} ${maybeRenderHead()}<main class="pagina-auth con-nav" data-astro-cid-ohowjl3i> <div class="contenedor-auth" data-astro-cid-ohowjl3i> <div class="card-auth" data-astro-cid-ohowjl3i> <div class="auth-cabecera" data-astro-cid-ohowjl3i> <a href="/" class="logo-auth" data-astro-cid-ohowjl3i>⚡ GRID<span class="verde" data-astro-cid-ohowjl3i>VAULT</span></a> <h1 class="titulo-auth" data-astro-cid-ohowjl3i>Crear cuenta</h1> <p class="subtitulo-auth" data-astro-cid-ohowjl3i>Gratis, sin drama</p> </div> <div id="error-msg" class="mensaje-error oculto" data-astro-cid-ohowjl3i></div> <div id="ok-msg" class="mensaje-ok oculto" data-astro-cid-ohowjl3i></div> <div class="formulario-auth" data-astro-cid-ohowjl3i> <div class="fila-campos" data-astro-cid-ohowjl3i> <div class="campo-form" data-astro-cid-ohowjl3i> <label class="etiqueta-campo" data-astro-cid-ohowjl3i>Nombre</label> <input type="text" class="input-form" placeholder="Tu nombre" id="campo-nombre" data-astro-cid-ohowjl3i> </div> <div class="campo-form" data-astro-cid-ohowjl3i> <label class="etiqueta-campo" data-astro-cid-ohowjl3i>Usuario</label> <input type="text" class="input-form" placeholder="@usuario" id="campo-usuario" data-astro-cid-ohowjl3i> </div> </div> <div class="campo-form" data-astro-cid-ohowjl3i> <label class="etiqueta-campo" data-astro-cid-ohowjl3i>Email</label> <input type="email" class="input-form" placeholder="vos@ejemplo.com" id="campo-email" data-astro-cid-ohowjl3i> </div> <div class="campo-form" data-astro-cid-ohowjl3i> <label class="etiqueta-campo" data-astro-cid-ohowjl3i>Contraseña</label> <input type="password" class="input-form" placeholder="Mínimo 8 caracteres" id="campo-pass" data-astro-cid-ohowjl3i> <div class="barra-fortaleza" id="barra-fortaleza" data-astro-cid-ohowjl3i> <div class="segmento-fortaleza" data-nivel="1" data-astro-cid-ohowjl3i></div> <div class="segmento-fortaleza" data-nivel="2" data-astro-cid-ohowjl3i></div> <div class="segmento-fortaleza" data-nivel="3" data-astro-cid-ohowjl3i></div> <div class="segmento-fortaleza" data-nivel="4" data-astro-cid-ohowjl3i></div> </div> </div> <div class="campo-form" data-astro-cid-ohowjl3i> <label class="etiqueta-campo" data-astro-cid-ohowjl3i>Repetir contraseña</label> <input type="password" class="input-form" placeholder="••••••••" id="campo-pass2" data-astro-cid-ohowjl3i> </div> <label class="checkbox-wrapper" data-astro-cid-ohowjl3i> <input type="checkbox" class="checkbox-real" id="terminos" data-astro-cid-ohowjl3i> <span class="checkbox-custom" data-astro-cid-ohowjl3i></span> <span class="checkbox-label" data-astro-cid-ohowjl3i>Acepto los <a href="#" class="link-terminos" data-astro-cid-ohowjl3i>términos y condiciones</a></span> </label> <button class="boton-submit" id="btn-registro" data-astro-cid-ohowjl3i>Crear cuenta</button> </div> <p class="link-alternativo" data-astro-cid-ohowjl3i>
¿Ya tenés cuenta? <a href="/login" data-astro-cid-ohowjl3i>Iniciar sesión</a> </p> </div> </div> </main> ` })}  ${renderScript($$result, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/registro.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/registro.astro", void 0);

const $$file = "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/registro.astro";
const $$url = "/registro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Registro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
