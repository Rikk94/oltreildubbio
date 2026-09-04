(function(){
  const fav=document.createElement('link');fav.rel='icon';fav.type='image/svg+xml';fav.href='/favicon.svg';document.head.appendChild(fav);
  const vcss=document.createElement('link');vcss.rel='stylesheet';vcss.href='/verdetto.css';document.head.appendChild(vcss);
  const parts=location.pathname.split('/').filter(Boolean),dir=parts[0]||'';
  const isCaseDir=/^(014|027|031|044|052|061|074)-26$/.test(dir),caseId=isCaseDir?dir:'014-26',root=isCaseDir?'../':'./';
  const phase=(location.pathname.split('/').pop()||'').replace('.html','');
  const labels={fascicolo:['01','INDAGINE','fascicolo.html'],interrogatori:['02','INTERROGATORI','interrogatori.html'],indizi:['03','INDIZI','indizi.html'],ricostruzione:['04','RICOSTRUZIONE','ricostruzione.html'],verdetto:['05','VERDETTO','verdetto.html'],archivio:['06','ARCHIVIO','archivio.html']};
  const names={'014-26':'La Stanza Chiusa','027-26':"L'Ultima Corsa",'031-26':'La Testimone','044-26':'Il Messaggio delle 23:17','052-26':'Senza Testimoni','061-26':'La Porta Aperta','074-26':"L'Ultima Telefonata"};
  document.body.classList.add('od-phase');
  document.querySelectorAll('.od-top,.od-casebar,.od-phase-nav,.od-footer').forEach(el=>el.remove());
  const oldMain=document.querySelector('main'),main=oldMain||document.body,title=names[caseId]||'';
  const bar=document.createElement('header');bar.className='od-top';bar.innerHTML='<a class="od-brand" href="'+root+'">⚖ OLTRE IL DUBBIO</a><nav class="od-nav"><a href="'+root+'casi.html">I CASI</a><a href="'+root+'social.html">SOCIAL</a><a href="'+root+'contatti.html">CONTATTI</a></nav>';
  document.body.insertBefore(bar,document.body.firstChild);
  const shell=document.createElement('div');shell.className='od-casebar';shell.innerHTML='<div class="od-kicker">PROCEDIMENTO '+caseId.replace('-','/')+' · '+(labels[phase]?('FASE '+labels[phase][0]+' · '+labels[phase][1]):'')+'</div><div class="od-title">'+title+'</div>';
  if(oldMain)oldMain.parentNode.insertBefore(shell,oldMain);else document.body.insertBefore(shell,document.body.children[1]||null);
  const nav=document.createElement('nav');nav.className='od-phase-nav';Object.keys(labels).forEach(k=>{const a=document.createElement('a');a.href=root+labels[k][2];a.textContent='FASE '+labels[k][0]+' · '+labels[k][1];if(k===phase)a.className='active';nav.appendChild(a)});main.insertBefore(nav,main.firstChild);
  const foot=document.createElement('footer');foot.className='od-footer';foot.textContent='OLTRE IL DUBBIO · PROCEDIMENTO '+caseId.replace('-','/')+' · AMBIENTE DI GIOCO';document.body.appendChild(foot);
  const audio=document.createElement('script');audio.src=root+'audio.js';document.body.appendChild(audio);
})();