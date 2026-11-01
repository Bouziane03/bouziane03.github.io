/* Photos: block right-click / drag saving and show enlarged photos in an in-page viewer. */
(function(){
  document.addEventListener('contextmenu',function(e){ if(e.target.closest('img,.lb')) e.preventDefault(); });
  document.addEventListener('dragstart',function(e){ if(e.target.tagName==='IMG') e.preventDefault(); });
  var lb=document.createElement('div'); lb.className='lb'; lb.hidden=true; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true');
  lb.innerHTML='<div class="frame"><img alt=""><div class="shield"></div></div><button type="button">Close</button>';
  var big=lb.querySelector('img'), last=null;
  function open(a){ var i=a.querySelector('img'); big.src=a.getAttribute('data-full'); big.alt=i?i.alt:''; last=a; lb.hidden=false; lb.querySelector('button').focus(); }
  function close(){ lb.hidden=true; big.removeAttribute('src'); if(last) last.focus(); }
  document.addEventListener('DOMContentLoaded',function(){ document.body.appendChild(lb); });
  if(document.readyState!=='loading') document.body.appendChild(lb);
  document.addEventListener('click',function(e){ var a=e.target.closest('.zoom'); if(a){ e.preventDefault(); open(a); } else if(!lb.hidden && e.target.closest('.lb')) close(); });
  document.addEventListener('keydown',function(e){ var a=e.target.closest&&e.target.closest('.zoom'); if(a&&(e.key==='Enter'||e.key===' ')){ e.preventDefault(); open(a); } else if(e.key==='Escape'&&!lb.hidden) close(); });
})();
