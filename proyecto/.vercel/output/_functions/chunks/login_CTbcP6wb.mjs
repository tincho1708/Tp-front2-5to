import { c as createComponent } from './astro-component_DjoV-yTG.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CQ4hGenQ.mjs';
import { $ as $$Layout, r as renderScript, a as $$Navbar } from './Navbar_FH9kuHyG.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "Iniciar sesión", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-sgpqyurt": true })} ${maybeRenderHead()}<main class="pagina-auth con-nav" data-astro-cid-sgpqyurt> <div class="contenedor-auth" data-astro-cid-sgpqyurt> <div class="card-auth" data-astro-cid-sgpqyurt> <div class="auth-cabecera" data-astro-cid-sgpqyurt> <a href="/" class="logo-auth" data-astro-cid-sgpqyurt>⚡ GRID<span class="verde" data-astro-cid-sgpqyurt>VAULT</span></a> <h1 class="titulo-auth" data-astro-cid-sgpqyurt>Bienvenido de vuelta</h1> <p class="subtitulo-auth" data-astro-cid-sgpqyurt>Ingresá a tu colección</p> </div> <div id="error-msg" class="mensaje-error oculto" data-astro-cid-sgpqyurt></div> <div class="formulario-auth" data-astro-cid-sgpqyurt> <div class="campo-form" data-astro-cid-sgpqyurt> <label class="etiqueta-campo" data-astro-cid-sgpqyurt>Email</label> <input type="email" class="input-form" placeholder="vos@ejemplo.com" id="campo-email" data-astro-cid-sgpqyurt> </div> <div class="campo-form" data-astro-cid-sgpqyurt> <label class="etiqueta-campo" data-astro-cid-sgpqyurt>Contraseña</label> <div class="input-password-wrapper" data-astro-cid-sgpqyurt> <input type="password" class="input-form" placeholder="••••••••" id="campo-pass" data-astro-cid-sgpqyurt> <button class="btn-toggle-pass" id="btn-ver-pass" type="button" data-astro-cid-sgpqyurt>👁</button> </div> </div> <div class="fila-opciones" data-astro-cid-sgpqyurt> <label class="checkbox-wrapper" data-astro-cid-sgpqyurt> <input type="checkbox" class="checkbox-real" data-astro-cid-sgpqyurt> <span class="checkbox-custom" data-astro-cid-sgpqyurt></span> <span class="checkbox-label" data-astro-cid-sgpqyurt>Recordarme</span> </label> <a href="#" class="link-olvidaste" data-astro-cid-sgpqyurt>¿Olvidaste tu contraseña?</a> </div> <button class="boton-submit" id="btn-login" data-astro-cid-sgpqyurt>Iniciar sesión</button> </div> <p class="link-alternativo" data-astro-cid-sgpqyurt>
¿No tenés cuenta? <a href="/registro" data-astro-cid-sgpqyurt>Registrate gratis</a> </p> </div> </div> </main> ` })}  ${renderScript($$result, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/login.astro", void 0);

const $$file = "C:/Users/safar/OneDrive/Documentos/GitHub/Tp-front2-5to/proyecto/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
