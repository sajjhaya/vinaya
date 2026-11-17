
(function(){
 var box=document.getElementById('q'),out=document.getElementById('hits');
 if(!box)return;
 function fold(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
 var idx=null;
 function build(){
  if(idx)return idx;
  if(window.SEARCH_INDEX){idx=window.SEARCH_INDEX.map(function(e){return{t:e[0],u:e[1],x:e[2],f:fold(e[2])};});}
  else{idx=[].map.call(document.querySelectorAll('section.page'),function(s){
   var h=s.querySelector('h1,h2'),x=s.textContent;return{t:h?h.textContent:s.id,u:'#'+s.id,x:x,f:fold(x)};});}
  return idx;}
 box.addEventListener('input',function(){
  var q=fold(box.value.trim());out.innerHTML='';if(q.length<2)return;
  var w=q.split(/\s+/),n=0;
  build().forEach(function(e){
   if(n>=40)return;
   for(var i=0;i<w.length;i++)if(e.f.indexOf(w[i])<0)return;
   var p=e.f.indexOf(w[0]),a=Math.max(0,p-60),sn=e.x.slice(a,p+120).replace(/\s+/g,' ');
   var li=document.createElement('li'),l=document.createElement('a'),s=document.createElement('small');
   l.href=e.u;l.textContent=e.t;s.textContent=(a?'…':'')+sn+'…';li.appendChild(l);li.appendChild(s);out.appendChild(li);n++;});
  if(!n)out.innerHTML='<li>No match.</li>';});
})();
