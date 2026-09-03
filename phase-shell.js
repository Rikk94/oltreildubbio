(function(){
  const root='../';
  const dir=location.pathname.split('/').filter(Boolean)[0]||'';
  const m=dir.match(/^(027|031|044|052)-26$/);
  const caseId=m?m[0]:'014-26';
  const phase=location.pathname.split('/').filter(Boolean).pop().replace('.html','');
  const labels={fascicolo:['01','INDAGINE','fascicolo.html'],interrogatori:['02','INTERROGATORI','interrogatori.html'],indizi:['03','INDIZI','indizi.html'],ricostruzione:['04','RICOSTRUZIONE','ricostruzione.html'],verdetto:['05','VERDETTO','verdetto.html'],archivio:['06','ARCHIVIO','archivio.html']};
  const names={'014-26':'La Stanza Chiusa','027-26':"L'Ultima Corsa",'031-26':'La Testimone','044-26':'Il Messaggio delle 23:17','052-26':'Senza Testimoni'};
  document.body.classList.add('od-phase');
  const oldMain=document.querySelector('main');
  const main=oldMain||document.body;
  const title=names[caseId]||'';
  const bar=document.createElement('header');bar.className='od-top';bar.innerHTML='<a class="od-brand" href="'+root+'">⚖ OLTRE IL DUBBIO</a><nav class="od-nav"><a href="'+root+'casi.html">I CASI</a><a href="'+root+'social.html">SOCIAL</a><a href="'+root+'contatti.html">CONTATTI</a></nav>';
  document.body.insertBefore(bar,document.body.firstChild);
  const shell=document.createElement('div');shell.className='od-casebar';shell.innerHTML='<div class="od-kicker">PROCEDIMENTO '+caseId.replace('-','/')+' · '+(labels[phase]?('FASE '+labels[phase][0]+' · '+labels[phase][1]):'')+'</div><div class="od-title">'+title+'</div>';
  if(oldMain){oldMain.parentNode.insertBefore(shell,oldMain);oldMain.classList.add('od-shell-main');}else{document.body.insertBefore(shell,document.body.children[1]||null);}
  const nav=document.createElement('nav');nav.className='od-phase-nav';
  Object.keys(labels).forEach(function(k){const a=document.createElement('a');a.href=labels[k][2];a.textContent='FASE '+labels[k][0]+' · '+labels[k][1];if(k===phase)a.className='active';nav.appendChild(a);});
  const target=oldMain||document.body;target.insertBefore(nav,target.firstChild);
  const foot=document.createElement('footer');foot.className='od-footer';foot.textContent='OLTRE IL DUBBIO · PROCEDIMENTO '+caseId.replace('-','/')+' · AMBIENTE DI GIOCO';document.body.appendChild(foot);
})();