// mobile nav toggle and smooth scroll basics
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('mobile-toggle');
  const nav = document.querySelector('.desktop-nav');

  btn.addEventListener('click', ()=> {
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    })
  });
});
