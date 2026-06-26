import{s as c}from"./supabase.CynbzdV2.js";let n=[];const h=document.getElementById("grilla-autos"),E=document.getElementById("contador-autos"),C=document.getElementById("sin-resultados"),k=document.getElementById("sin-sesion"),m=document.getElementById("overlay-modal"),B=document.getElementById("modal-titulo"),y=document.getElementById("edit-id"),b=document.getElementById("input-marca"),L=document.getElementById("input-modelo"),g=document.getElementById("input-anio"),I=document.getElementById("input-estilo"),$=document.getElementById("input-motor"),A=document.getElementById("input-color"),d=document.getElementById("error-modal"),r=document.getElementById("btn-guardar");function w(t){return`
      <article class="card-auto" data-estilo="${t.estilo}" data-nombre="${(t.marca+" "+t.modelo).toLowerCase()}" data-id="${t.id}">
        <div class="barra-top" style="background: ${t.color}"></div>
        <div class="card-contenido">
          <div class="card-cabecera">
            <div class="badges-auto">
              <span class="badge-estilo">${t.estilo||"Otro"}</span>
              ${t.favorito?'<span class="badge-fav">❤ FAV</span>':""}
            </div>
            <button class="btn-menu-card" data-id="${t.id}">
              ···
              <div class="dropdown-menu" id="drop-${t.id}">
                <button class="dropdown-item editar" data-id="${t.id}">✏ Editar</button>
                <button class="dropdown-item eliminar" data-id="${t.id}">✕ Eliminar</button>
              </div>
            </button>
          </div>
          <div class="card-nombre">
            <p class="card-marca">${t.marca}</p>
            <h3 class="card-modelo">${t.modelo}</h3>
          </div>
          <div class="card-specs">
            <div class="spec-fila">
              <span class="spec-key">Año</span>
              <span class="spec-val">${t.anio||"-"}</span>
            </div>
            <div class="spec-fila">
              <span class="spec-key">Motor</span>
              <span class="spec-val">${t.motor||"-"}</span>
            </div>
            <div class="spec-fila">
              <span class="spec-key">Color</span>
              <span class="muestra-color" style="background: ${t.color}"></span>
            </div>
          </div>
          <div class="card-acciones">
            <button class="btn-fav" data-id="${t.id}" data-fav="${t.favorito}">${t.favorito?"❤":"♡"}</button>
          </div>
        </div>
      </article>
    `}function v(t){h.innerHTML=t.map(w).join(""),E.textContent=`${t.length} auto${t.length!==1?"s":""} registrado${t.length!==1?"s":""}`,q()}function q(){document.querySelectorAll(".btn-menu-card").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation();const o=t.dataset.id,a=document.getElementById(`drop-${o}`);document.querySelectorAll(".dropdown-menu.visible").forEach(s=>{s!==a&&s.classList.remove("visible")}),a?.classList.toggle("visible")})}),document.querySelectorAll(".dropdown-item.editar").forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation();const o=t.dataset.id,a=n.find(s=>s.id===o);a&&S(a)})}),document.querySelectorAll(".dropdown-item.eliminar").forEach(t=>{t.addEventListener("click",async e=>{e.stopPropagation();const o=t.dataset.id;confirm("¿Eliminar este auto?")&&(await c.from("autos").delete().eq("id",o),n=n.filter(a=>a.id!==o),v(n),l())})}),document.querySelectorAll(".btn-fav").forEach(t=>{t.addEventListener("click",async()=>{const e=t.dataset.id,o=t.dataset.fav==="true";await c.from("autos").update({favorito:!o}).eq("id",e);const a=n.find(s=>s.id===e);a&&(a.favorito=!o),v(n),l()})})}document.addEventListener("click",()=>{document.querySelectorAll(".dropdown-menu.visible").forEach(t=>t.classList.remove("visible"))});function x(){y.value="",B.textContent="Agregar Auto",b.value="",L.value="",g.value="",I.value="",$.value="",A.value="#39ff14",d.classList.add("oculto"),m.classList.remove("oculto")}function S(t){y.value=t.id,B.textContent="Editar Auto",b.value=t.marca,L.value=t.modelo,g.value=String(t.anio||""),I.value=t.estilo||"",$.value=t.motor||"",A.value=t.color||"#39ff14",d.classList.add("oculto"),m.classList.remove("oculto")}function f(){m.classList.add("oculto")}document.getElementById("btn-abrir-modal")?.addEventListener("click",x);document.getElementById("btn-cerrar-modal")?.addEventListener("click",f);document.getElementById("btn-cancelar")?.addEventListener("click",f);m.addEventListener("click",t=>{t.target===m&&f()});r.addEventListener("click",async()=>{const t=b.value.trim(),e=L.value.trim();if(!t||!e){d.textContent="Marca y modelo son obligatorios.",d.classList.remove("oculto");return}r.disabled=!0,r.textContent="Guardando...",d.classList.add("oculto");const{data:{user:o}}=await c.auth.getUser();if(!o){d.textContent="Debés iniciar sesión para guardar.",d.classList.remove("oculto"),r.disabled=!1,r.textContent="Guardar";return}const a={marca:t,modelo:e,anio:g.value?parseInt(g.value):null,estilo:I.value||null,motor:$.value.trim()||null,color:A.value},s=y.value;if(s){const{error:u}=await c.from("autos").update(a).eq("id",s);if(u)d.textContent="Error al actualizar. Intentá de nuevo.",d.classList.remove("oculto");else{const i=n.findIndex(p=>p.id===s);i!==-1&&(n[i]={...n[i],...a}),f(),v(n),l()}}else{const{data:u,error:i}=await c.from("autos").insert({...a,user_id:o.id}).select().single();i?(d.textContent="Error al guardar. Intentá de nuevo.",d.classList.remove("oculto")):(n.unshift(u),f(),v(n),l())}r.disabled=!1,r.textContent="Guardar"});function l(){const t=document.querySelector(".chip.activo")?.getAttribute("data-filtro")||"todos",e=document.getElementById("buscador")?.value.toLowerCase()||"",o=document.querySelectorAll(".card-auto");let a=0;o.forEach(s=>{const u=s.getAttribute("data-estilo")||"",i=s.getAttribute("data-nombre")||"",p=(t==="todos"||u===t)&&i.includes(e);s.style.display=p?"":"none",p&&a++}),C.classList.toggle("oculto",a>0||n.length===0)}document.querySelectorAll(".chip[data-filtro]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".chip[data-filtro]").forEach(e=>e.classList.remove("activo")),t.classList.add("activo"),l()})});document.getElementById("buscador")?.addEventListener("input",l);async function M(){const{data:{user:t}}=await c.auth.getUser();if(!t){k.classList.remove("oculto"),E.textContent="Sin sesión";return}const{data:e,error:o}=await c.from("autos").select("*").order("created_at",{ascending:!1});if(o||!e){E.textContent="Error al cargar autos";return}n=e,v(n),l()}M();
