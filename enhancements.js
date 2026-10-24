(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: .09, rootMargin: '0px 0px -30px 0px'});
  function watch() {
    document.querySelectorAll('.section-head,.split > div,.project-card,.credential-card,.timeline article,.journal-grid > *, .contact-method').forEach(el => {
      if (!el.classList.contains('reveal')) {el.classList.add('reveal');observer.observe(el);}
    });
  }
  watch();
  const grid = document.getElementById('projectGrid');
  const credentials = document.getElementById('credentialGrid');
  const journal = document.getElementById('journalGrid');
  [grid,credentials,journal].forEach(el => {if(el)new MutationObserver(watch).observe(el,{childList:true});});
  const portrait=document.getElementById('heroPortrait');
  if(portrait && matchMedia('(pointer:fine)').matches){
    portrait.addEventListener('pointermove',e=>{
      const r=portrait.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      portrait.style.transform=`perspective(1000px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-3px)`;
    });
    portrait.addEventListener('pointerleave',()=>{portrait.style.transform='';});
  }
})();
