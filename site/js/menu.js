
(function(){
 var nav=document.querySelector('nav.side'),btn=nav&&nav.querySelector('.menu-toggle');
 if(!btn)return;
 function set(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o?'true':'false');}
 btn.addEventListener('click',function(){set(!nav.classList.contains('open'));});
 nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
})();
