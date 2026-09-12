
const dominiosPermitidos=/^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
function validarCorreo(correo){return dominiosPermitidos.test(correo)}
function validarRUN(run){
 run=run.toUpperCase().replace(/[^0-9K]/g,'');
 if(run.length<7||run.length>9)return false;
 let cuerpo=run.slice(0,-1), dv=run.slice(-1), suma=0,multiplicador=2;
 for(let i=cuerpo.length-1;i>=0;i--){suma+=parseInt(cuerpo[i])*multiplicador;multiplicador=multiplicador===7?2:multiplicador+1}
 let resto=11-(suma%11);let esperado=resto===11?'0':resto===10?'K':String(resto);
 return dv===esperado;
}
document.getElementById('registroForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const correo=document.getElementById('correo').value;
 const run=document.getElementById('run').value;
 const msg=document.getElementById('registroMensaje');
 if(!validarCorreo(correo)){msg.textContent='Correo no permitido. Usa @duoc.cl, @profesor.duoc.cl o @gmail.com';return}
 if(!validarRUN(run)){msg.textContent='El RUN ingresado no es válido.';return}
 msg.textContent='Registro validado correctamente.';
});
document.getElementById('loginForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const correo=document.getElementById('loginCorreo').value;
 const msg=document.getElementById('loginMensaje');
 msg.textContent=validarCorreo(correo)?'Inicio de sesión validado correctamente.':'Correo no permitido.';
});
document.getElementById('contactoForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const correo=document.getElementById('contactCorreo').value;
 const comentario=document.getElementById('comentario').value;
 const msg=document.getElementById('contactoMensaje');
 msg.textContent=validarCorreo(correo)&&comentario.trim().length>0?'Mensaje enviado correctamente.':'Revisa el correo y el comentario.';
});
