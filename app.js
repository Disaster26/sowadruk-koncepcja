(function(){
  var b=document.getElementById('burger'),m=document.getElementById('mnav');
  if(b&&m){
    b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');document.body.classList.toggle('menu-open',o);});
    m.addEventListener('click',function(e){if(e.target.closest('a')){m.classList.remove('open');b.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}});
  }
  var mob=document.getElementById('mob'),cta=document.getElementById('heroCta');
  if(mob&&cta&&'IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){var show=!e.isIntersecting&&e.boundingClientRect.top<0;mob.classList.toggle('widac',show);mob.setAttribute('aria-hidden',!show);mob.querySelectorAll('a').forEach(function(a){a.tabIndex=show?0:-1;});});}).observe(cta);
  }
  var f=document.getElementById('form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('fmsg').classList.add('on');});}
})();
