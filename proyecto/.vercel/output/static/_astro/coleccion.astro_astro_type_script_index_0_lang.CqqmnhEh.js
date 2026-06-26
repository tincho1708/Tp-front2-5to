import{s as a}from"./supabase.CynbzdV2.js";async function c(){const{data:{user:s}}=await a.auth.getUser(),n=document.getElementById("lista-recientes");if(!s){n.innerHTML='<p class="sin-sesion-msg"><a href="/login">Iniciá sesión</a> para ver tu colección.</p>',document.getElementById("stat-total").textContent="0",document.getElementById("stat-favs").textContent="0",document.getElementById("stat-jdm").textContent="0",document.getElementById("stat-rally").textContent="0";return}const{data:o}=await a.from("autos").select("*").order("created_at",{ascending:!1}),e=o||[];document.getElementById("stat-total").textContent=String(e.length),document.getElementById("stat-favs").textContent=String(e.filter(t=>t.favorito).length),document.getElementById("stat-jdm").textContent=String(e.filter(t=>t.estilo==="JDM").length),document.getElementById("stat-rally").textContent=String(e.filter(t=>t.estilo==="Rally").length);const l=document.getElementById("acceso-sub-autos");if(l.textContent=`${e.length} auto${e.length!==1?"s":""} en el garage`,e.length===0){n.innerHTML='<p class="cargando">Tu garage está vacío. <a href="/autos" style="color:var(--verde)">Agregá tu primer auto →</a></p>';return}n.innerHTML=e.slice(0,8).map(t=>`
      <div class="item-reciente">
        <div class="item-info">
          <span class="punto-color" style="background: ${t.color}"></span>
          <span class="item-titulo">${t.modelo}</span>
        </div>
        <span class="item-marca">${t.marca} ${t.favorito?"❤":""}</span>
      </div>
    `).join("")}c();
