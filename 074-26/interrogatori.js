const questions=[
['q1','Andrea Bellini','Perché hai ricevuto la chiamata delle 23:47?',['A','Marta sembrava agitata.','B','Non ricordo cosa disse.','C','Mi chiese di non richiamarla.']],
['q2','Andrea Bellini','Conoscevi il numero “L.”?',['A','Sì, era Lorenzo.','B','No.','C','Pensavo fosse un numero di lavoro.']],
['q3','Lorenzo Riva','Hai parlato con Marta alle 23:52?',['A','Sì, per circa due minuti.','B','No, non quella sera.','C','Ho ricevuto una chiamata persa.']],
['q4','Sara Conti','Quando hai visto Marta l’ultima volta?',['A','23:30 circa.','B','Prima delle 22:00.','C','Non lo so con precisione.']],
['q5','Andrea Bellini','Marta aveva paura di qualcuno?',['A','Non mi fece un nome.','B','Disse il nome Lorenzo.','C','Parlò di un incontro.']],
['q6','Lorenzo Riva','Dove eri alle 00:03?',['A','A casa.','B','In auto, senza ricordare il percorso.','C','Al lavoro.']],
['q7','Sara Conti','Hai mai visto il telefono di Marta quella sera?',['A','No.','B','Sì, prima delle 23:00.','C','Sì, dopo mezzanotte.']],
['q8','Andrea Bellini','Perché non hai richiamato Marta?',['A','Mi disse esplicitamente di non farlo.','B','Pensavo fosse uno scherzo.','C','Il telefono era spento.']]
];
if(localStorage.od_074_case!=='1') location.replace('fascicolo.html');
const answers=JSON.parse(localStorage.od_074_answers||'{}');
const box=document.getElementById('box');
questions.forEach(q=>{let html='<div class="q"><b>'+q[1]+'</b><p>'+q[2]+'</p>';for(let i=0;i<q[3].length;i+=2){html+='<label class="opt"><input type="radio" name="'+q[0]+'" value="'+q[3][i]+'" '+(answers[q[0]]===q[3][i]?'checked':'')+'> '+q[3][i]+' — '+q[3][i+1]+'</label>'}html+='</div>';box.insertAdjacentHTML('beforeend',html)});
box.addEventListener('change',e=>{if(e.target.matches('input')){answers[e.target.name]=e.target.value;localStorage.od_074_answers=JSON.stringify(answers)}});
document.getElementById('go').onclick=()=>{if(Object.keys(answers).length<questions.length){document.getElementById('msg').textContent='Acquisisci tutte le otto risposte prima di proseguire.';return}const unlock=[];if(answers.q2==='A')unlock.push('L-number');if(answers.q3==='A')unlock.push('L-call');if(answers.q6==='B')unlock.push('cell-route');if(answers.q7==='C')unlock.push('post-midnight');localStorage.od_074_unlocked=JSON.stringify(unlock);localStorage.od_074_interrogations='1';localStorage.od_074_progress='40';location.href='indizi.html'};