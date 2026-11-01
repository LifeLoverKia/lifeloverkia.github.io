'use strict';
const DATA=JSON.parse(document.getElementById('site-data').textContent);
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lang=['en','es','it'].includes(new URLSearchParams(location.search).get('lang'))?new URLSearchParams(location.search).get('lang'):'en';
const page=document.body.dataset.page;
const ui={
 en:{nav:['Research','Publications','Conferences','Projects','Outreach','Academic','Contact'],label:'Cognitive neuroscience · Consciousness · Neuroethics',cta:'Explore my research ↓',cv:'Download CV · PDF ↓',education:'Education',open:'Full list ↗',pubintro:'Recent publications. Explore the complete bibliography in a dedicated page.',confintro:'Conference contributions, including co-authored work and postgraduate research.',more:'Show all',less:'Show less',home:'← Home',pubtitle:'Publications',conftitle:'Conferences',projecttitle:'Projects & collaborations',outreach:'Outreach',academic:'Teaching & academic service',contact:'Contact',memberships:'Scientific societies & networks',teaching:'Postgraduate teaching',service:'Academic service & editorial work',mentoring:'Research supervision & mentoring',reviews:'Grant & fellowship evaluation',footer:'Academic website · Always updated',pubarchive:'Articles, chapters, published abstracts and proceedings. Titles remain in their original language.',confarchive:'Posters, oral presentations and symposia. The coloured labels distinguish the format and my role; co-authorship does not imply attendance or presenting.',actarchive:'Invited talks, schools, public engagement and policy discussions.',alloutreach:'Explore all outreach events →',featured:'Science beyond the laboratory',penne:'Connecting scientists and schoolchildren through correspondence, from Chile to Italy.',viewevent:'See event →',since:'Since',current:'present',actiondates:'Action dates',participation:'Participation',poster:'Poster / materials',slides:'Slides',abstract:'Abstract / proceedings',event:'Programme',published:'Publication',article:'Related article',rg:'PDF · ResearchGate',fulltext:'Full text',source:'Source',preprint:'Preprint',student:'With postgraduate students',presenter:'Presenter',ownoral:'My oral presentation',ownposter:'Poster presented by me',coauthor:'Co-author',author:'Author · presenter unspecified',virtual:'My virtual poster',records:'records',print:'Print / PDF',oralvirtual:'My virtual presentation'},
 es:{nav:['Investigación','Publicaciones','Congresos','Proyectos','Divulgación','Academia','Contacto'],label:'Neurociencia cognitiva · Conciencia · Neuroética',cta:'Explorar mi investigación ↓',cv:'Descargar CV · PDF ↓',education:'Formación',open:'Lista completa ↗',pubintro:'Publicaciones recientes. La bibliografía completa está en una página dedicada.',confintro:'Contribuciones a congresos, incluidas coautorías y trabajos con estudiantes de posgrado.',more:'Mostrar todo',less:'Mostrar menos',home:'← Inicio',pubtitle:'Publicaciones',conftitle:'Congresos',projecttitle:'Proyectos y colaboraciones',outreach:'Divulgación',academic:'Docencia y servicio académico',contact:'Contacto',memberships:'Sociedades científicas y redes',teaching:'Docencia de posgrado',service:'Servicio académico y editorial',mentoring:'Supervisión y formación en investigación',reviews:'Evaluación de proyectos y becas',footer:'Sitio académico · Siempre actualizado',pubarchive:'Artículos, capítulos, resúmenes publicados y actas. Los títulos conservan su idioma original.',confarchive:'Pósteres, comunicaciones orales y simposios. Las etiquetas distinguen el formato y mi función; la coautoría no implica asistencia ni presentación.',actarchive:'Charlas invitadas, escuelas, divulgación y participación en políticas públicas.',alloutreach:'Ver todos los eventos de divulgación →',featured:'Ciencia más allá del laboratorio',penne:'Correspondencia entre científicos y estudiantes escolares, desde Chile hasta Italia.',viewevent:'Ver evento →',since:'Desde',current:'actualidad',actiondates:'Fechas de la Action',participation:'Participación',poster:'Póster / materiales',slides:'Diapositivas',abstract:'Resumen / actas',event:'Programa',published:'Publicación',article:'Artículo relacionado',rg:'PDF · ResearchGate',fulltext:'Texto completo',source:'Fuente',preprint:'Preprint',student:'Con estudiantes de posgrado',presenter:'Presenta',ownoral:'Mi presentación oral',ownposter:'Póster presentado por mí',coauthor:'Coautora',author:'Autora · ponente no confirmado',virtual:'Mi póster virtual',records:'registros',print:'Imprimir / PDF',oralvirtual:'Mi presentación virtual'},
 it:{nav:['Ricerca','Pubblicazioni','Congressi','Progetti','Divulgazione','Accademia','Contatti'],label:'Neuroscienze cognitive · Coscienza · Neuroetica',cta:'Esplora la mia ricerca ↓',cv:'Scarica CV · PDF ↓',education:'Formazione',open:'Elenco completo ↗',pubintro:'Pubblicazioni recenti. La bibliografia completa è in una pagina dedicata.',confintro:'Contributi congressuali, comprese coautorie e ricerche con studenti post-laurea.',more:'Mostra tutto',less:'Mostra meno',home:'← Home',pubtitle:'Pubblicazioni',conftitle:'Congressi',projecttitle:'Progetti e collaborazioni',outreach:'Divulgazione',academic:'Didattica e servizio accademico',contact:'Contatti',memberships:'Società scientifiche e reti',teaching:'Didattica post-laurea',service:'Servizio accademico e attività editoriale',mentoring:'Supervisione e formazione alla ricerca',reviews:'Valutazione di progetti e borse',footer:'Sito accademico · Sempre aggiornato',pubarchive:'Articoli, capitoli, abstract pubblicati e atti congressuali. I titoli mantengono la lingua originale.',confarchive:'Poster, comunicazioni orali e simposi. Le etichette distinguono formato e mio ruolo; la coautoria non implica presenza o presentazione.',actarchive:'Conferenze su invito, scuole, divulgazione e partecipazione alle politiche pubbliche.',alloutreach:'Esplora tutti gli eventi di divulgazione →',featured:'La scienza oltre il laboratorio',penne:'Corrispondenza fra scienziati e classi scolastiche, dal Cile all’Italia.',viewevent:'Vedi evento →',since:'Dal',current:'in corso',actiondates:'Date dell’Action',participation:'Partecipazione',poster:'Poster / materiali',slides:'Diapositive',abstract:'Abstract / atti',event:'Programma',published:'Pubblicazione',article:'Articolo collegato',rg:'PDF · ResearchGate',fulltext:'Testo completo',source:'Fonte',preprint:'Preprint',student:'Con studenti post-laurea',presenter:'Presenta',ownoral:'Mia presentazione orale',ownposter:'Poster presentato da me',coauthor:'Coautrice',author:'Autrice · relatrice non confermata',virtual:'Mio poster virtuale',records:'voci',print:'Stampa / PDF',oralvirtual:'Mia presentazione virtuale'}
};
Object.assign(ui.en,{video:'Video',arsicRome:'ARSIC in Rome',arsicVenue:'Presidency of the Council of Ministers'});
Object.assign(ui.es,{video:'Vídeo',arsicRome:'ARSIC en Roma',arsicVenue:'Presidencia del Consejo de Ministros'});
Object.assign(ui.it,{video:'Video',arsicRome:'ARSIC a Roma',arsicVenue:'Presidenza del Consiglio dei Ministri'});
Object.assign(ui.en,{evidence:'Evidence PDF'});
Object.assign(ui.es,{evidence:'Evidencia PDF'});
Object.assign(ui.it,{evidence:'Evidenza PDF'});
Object.assign(ui.en,{selectedEvents:'Featured events',programmePDF:'Programme · PDF',fullProceedings:'Full proceedings · PDF'});
Object.assign(ui.es,{selectedEvents:'Eventos destacados',programmePDF:'Programa · PDF',fullProceedings:'Libro completo · PDF'});
Object.assign(ui.it,{selectedEvents:'Eventi in evidenza',programmePDF:'Programma · PDF',fullProceedings:'Libro completo · PDF'});
const t=k=>ui[lang][k]||k,tr=k=>(labels[k]||[k,k,k])[['en','es','it'].indexOf(lang)];
const date=s=>!s?'':s==='Current'?t('current'):/^\d{4}$/.test(String(s))?String(s):String(s).slice(0,10).split('-').reverse().join('/');
const safe=u=>/^https?:\/\//i.test(u||'')?u:'';
const doi=u=>String(u||'').replace(/\\_/g,'_');
const route=(p,hash='')=>p+'?lang='+lang+(hash?'#'+hash:'');
const anchor=x=>'record-'+x.id.replace(/[^a-zA-Z0-9]/g,'-');
const link=(url,label,cls='')=>safe(url)?`<a class="${esc(cls)}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:'';
const badge=(label,cls)=>`<span class="tag ${cls||'type-other'}">${esc(label)}</span>`;
const typeClass={'Journal article':'type-article','Conference paper':'type-paper','Conference abstract':'type-abstract','Book chapter':'type-chapter','Preprint':'type-preprint','Doctoral thesis':'type-thesis','Conference poster':'type-poster','Oral presentation':'type-oral','Symposium':'type-symposium','Conference contribution':'type-other'};
const typeBadge=s=>badge(tr(s),typeClass[s]);
function pubLinks(x){
 let html=x.doi?link('https://doi.org/'+doi(x.doi),'DOI'):'';
 if(x.fulltext_url)html+=link(x.fulltext_url,t('fulltext'));
 if(x.researchgate_url)html+=link(x.researchgate_url,t('rg'));
 if(x.preprint_url&&x.type!=='Preprint')html+=link(x.preprint_url,t('preprint'));
 if(!x.doi&&!x.fulltext_url&&!x.researchgate_url){const source=x.sources?.find(u=>safe(u)&&!u.includes('orcid.org'));if(source)html+=link(source,t('source'));}
 return html;
}
function pubHTML(x){return `<article class="entry publication-entry" id="${anchor(x)}"><div class="tags">${typeBadge(x.type)}</div><h3>${esc(x.title)} <span class="entry-year">(${x.year})</span></h3>${x.authors?`<p class="authors">${esc(x.authors)}</p>`:''}<p class="venue"><i>${esc(x.venue)}</i></p><div class="linkrow">${pubLinks(x)}</div></article>`;}
function roleBadge(x){
 if(x.role==='Co-author')return badge(t('coauthor'),'role-coauthor');
 if(x.role==='Presenter')return badge(t(x.format==='Conference poster'?'ownposter':'ownoral'),'role-presenter');
 if(x.role==='Virtual presenter / co-author')return badge(t(x.format==='Conference poster'?'virtual':'oralvirtual'),'role-virtual');
 return badge(t('author'),'role-author');
}
function materialLinks(x){
 return [...(x.evidence_links||[]),...(x.extra_links||[])].map(item=>link(item.url,item.label?.[lang]||t('evidence'))).join('');
}
function confLinks(x){let html=materialLinks(x)+[['poster_url','poster'],['abstract_url','abstract'],['slides_url','slides'],['event_url','event']].map(([k,l])=>link(x[k],t(l))).join('');
 const p=DATA.publications?.find(p=>p.id===x.publication_id);
 if(p&&!x.abstract_url)html+=p.doi?link('https://doi.org/'+doi(p.doi),t('published')):`<a href="${route('publications.html',anchor(p))}" target="_blank" rel="noopener">${t('published')} ↗</a>`;
 if(x.related_article_doi)html+=link('https://doi.org/'+doi(x.related_article_doi),t('article'));return html;
}
function confHTML(x){const image=page!=='home'?activityImage(x):'';return `<article class="entry conference-entry ${image?'has-image':''}" id="${anchor(x)}">${image}<div class="conference-body"><div class="tags">${typeBadge(x.format)}${roleBadge(x)}</div><h3>${esc(x.title)} <span class="entry-year">(${x.year})</span></h3>${x.authors?`<p class="authors">${esc(x.authors)}</p>`:''}<p class="venue"><strong>${esc(x.event)}</strong><br>${date(x.start)}${x.end?' – '+date(x.end):''}${x.location?' · '+esc(x.location):''}</p>${page!=='home'&&x.presenter?`<p class="meta">${t('presenter')}: ${esc(x.presenter)}</p>`:''}${x.student_collaboration?`<p class="meta student-note">${t('student')}</p>`:''}${page!=='home'&&x.description?.[lang]?`<p class="description">${esc(x.description[lang])}</p>`:''}<div class="linkrow">${confLinks(x)}</div></div></article>`;}
function pdfMaterialURL(x){
 if(!safe(x.abstract_url))return '';
 const pageNumber=Number(x.abstract_page);
 return Number.isInteger(pageNumber)&&pageNumber>0?x.abstract_url.split('#')[0]+'#page='+pageNumber:x.abstract_url;
}
function activityLinks(x){
 let html=materialLinks(x)+link(x.url,x.url_label?.[lang]||t('source'));
 if(safe(x.video_url)){
  const seconds=Number(new URL(x.video_url).searchParams.get('t'));
  const stamp=seconds>0?' · '+Math.floor(seconds/3600)+':'+String(Math.floor(seconds%3600/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0'):'';
  html+=link(x.video_url,t('video')+stamp);
 }
 if(x.abstract_url)html+=link(pdfMaterialURL(x),t('abstract')+(x.abstract_pages?' · pp. '+x.abstract_pages:''));
 if(x.programme_url)html+=link(x.programme_url,t('programmePDF'));
 if(x.proceedings_url)html+=link(x.proceedings_url,t('fullProceedings'));
 if(x.slides_url)html+=link(x.slides_url,t('slides'));
 return html;
}
function activityImage(x){
 const src=safe(x.image_url)||(/^assets\/[a-zA-Z0-9_./-]+$/.test(x.image_url||'')?x.image_url:'');
 if(!src)return '';
 return `<div class="activity-image"><img src="${esc(src)}" alt="${esc(x.image_alt?.[lang]||(typeof x.title==='string'?x.title:x.title[lang]))}" loading="lazy"></div>`;
}
function activityHTML(x){const image=activityImage(x);return `<article class="entry activity-entry ${image?'has-image':''}" id="${anchor(x)}">${image}<div class="activity-body"><div class="tags">${activityCategoryBadge(x)}</div><h3>${esc(x.title[lang])}</h3><p class="venue">${date(x.start)}${x.end?' – '+date(x.end):''}${x.organiser?' · '+esc(x.featured_organiser?.[lang]||x.organiser):''}</p><p class="description">${esc(x.description[lang])}</p>${x.location?`<p class="meta">${esc(x.location)}</p>`:''}<div class="linkrow">${activityLinks(x)}</div></div></article>`;}
function projectHTML(x){return `<article class="project-card"><div class="tags">${badge(tr(x.status),x.status==='Ongoing'?'status-ongoing':'status-completed')}${x.grant?badge(x.grant,'type-article'):''}</div><h3>${esc(x.titles?.[lang]||x.title)}</h3><p class="project-role">${esc(tr(x.role))}</p><p class="meta">${x.date_scope==='action'?t('actiondates'):t('participation')}: ${date(x.start)}${x.end?' – '+date(x.end):x.status==='Ongoing'&&x.date_scope!=='contribution'?' – '+t('current'):''}</p><p class="description">${esc(x.description[lang])}</p><div class="card-link">${link(x.url,t('source'))}</div></article>`;}
function homeLists(){
 const pubs=DATA.publications,confs=DATA.conferences;
 for(const [prefix,rows,html] of [['pub',pubs,pubHTML],['conf',confs,confHTML]]){
  $(prefix+'-list').innerHTML=rows.slice(0,4).map(html).join('');
  $(prefix+'-extra-list').innerHTML=rows.slice(4).map(html).join('')+`<button class="button collapse-list" id="${prefix}-less" type="button">${t('less')} ↑</button>`;
  const d=$(prefix+'-extra'),summary=$(prefix+'-more');
  const update=()=>{summary.textContent=d.open?t('less'):t('more')+' ('+rows.length+')';};update();d.ontoggle=update;
  $(prefix+'-less').onclick=()=>{d.open=false;update();summary.focus({preventScroll:true});summary.scrollIntoView({block:'center',behavior:'instant'});};
  $(prefix+'-open').textContent=t('open')+' · '+rows.length;$(prefix+'-open').href=route(prefix==='pub'?'publications.html':'conferences.html');
 }
}
function activityCategoryBadge(x){
 const colors={'Public outreach':'outreach-public','School engagement':'outreach-school','Teacher training':'outreach-training','Invited talk':'outreach-talk','Academic event':'outreach-academic','Institutional representation':'outreach-institutional','Policy engagement':'outreach-policy'};
 return badge(tr(x.category),colors[x.category]||'type-other');
}
function featuredEventsHTML(){
 const events=DATA.activities.filter(x=>x.featured===true).sort((a,b)=>b.start.localeCompare(a.start)||a.id.localeCompare(b.id));
 const cards=events.map(x=>`<a class="featured-event-card ${x.image_url?'':'without-image'}" href="${route('outreach.html',anchor(x))}">
  ${x.image_url?`<div class="featured-event-image"><img src="${esc(x.image_url)}" alt="${esc(x.image_alt?.[lang]||x.title[lang])}" loading="lazy"></div>`:''}
  <div class="featured-event-copy"><div class="featured-event-meta"><time datetime="${esc(x.start)}">${date(x.start)}</time>${activityCategoryBadge(x)}</div>
  <p class="featured-event-organiser">${esc(x.featured_organiser?.[lang]||x.organiser||'')}</p><h3>${esc(x.title[lang])}</h3><span class="featured-event-action">${t('viewevent')}</span></div></a>`).join('');
 return `${events.length?`<div class="featured-events-heading"><p class="eyebrow">${t('selectedEvents')}</p></div><div class="featured-events-grid ${events.length===1?'single-feature':''}">${cards}</div>`:''}<a class="button primary outreach-button" href="${route('outreach.html')}">${t('alloutreach')} <span>${DATA.activities.length} ${t('records')}</span></a>`;
}
function renderHome(){const c=DATA.content[lang];
 for(const [id,key] of [['hero-label','label'],['research-cta','cta'],['cv-download','cv'],['education-title','education'],['pub-title','pubtitle'],['conf-title','conftitle'],['project-title','projecttitle'],['outreach-title','outreach'],['academic-title','academic'],['memberships-title','memberships'],['pub-intro','pubintro'],['conf-intro','confintro']])$(id).textContent=t(key);
 $('research-title').textContent=ui[lang].nav[0];$('question').textContent=c.question;$('intro').textContent=c.intro;$('bio').textContent=c.bio;$('cv-download').href=c.cv_url;
 $('research-grid').innerHTML=c.research.map((x,i)=>`<article class="research-item"><span class="research-mark" aria-hidden="true">${['◒','∿','◌'][i]}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></div></article>`).join('');
 $('background-list').innerHTML=c.background.map(x=>`<li>${esc(x)}</li>`).join('');homeLists();$('project-list').innerHTML=DATA.projects.map(projectHTML).join('');
 $('outreach-banner').innerHTML=featuredEventsHTML();
 $('academic-grid').innerHTML=[['teaching',c.service[0]],['service',c.service.slice(1).join('\n\n')],['mentoring',c.mentoring],['reviews',c.grant_reviews]].map(([title,text])=>`<article class="academic-card"><h3>${t(title)}</h3>${text.split('\n\n').map(p=>`<p>${esc(p)}</p>`).join('')}</article>`).join('');
 $('membership-grid').innerHTML=DATA.memberships.map(x=>`<article class="membership-card"><div class="membership-top"><span class="membership-acronym">${esc(x.acronym)}</span><span>${t('since')} ${date(x.start)}</span></div><h4>${link(x.url,x.names?.[lang]||x.name)}</h4><p>${esc(x.role[lang])}</p></article>`).join('');
}
function renderArchive(){const kind=page==='publications'?'pub':page==='conferences'?'conf':'act',rows=kind==='pub'?DATA.publications:kind==='conf'?DATA.conferences:DATA.activities,html=kind==='pub'?pubHTML:kind==='conf'?confHTML:activityHTML;
 $('back-home').textContent=t('home');$('back-home').href=route('index.html',kind==='pub'?'publications':kind==='conf'?'conferences':'engagement');$('archive-label').textContent='Chiara Saracini · '+rows.length+' '+t('records');$('archive-title').textContent=t(kind==='pub'?'pubtitle':kind==='conf'?'conftitle':'outreach');$('archive-intro').textContent=t(kind==='pub'?'pubarchive':kind==='conf'?'confarchive':'actarchive');
 const year=x=>kind==='act'?x.start.slice(0,4):String(x.year),years=[...new Set(rows.map(year))].sort().reverse();
 $('year-index').innerHTML=years.map(y=>`<a href="#year-${y}">${y}</a>`).join('');
 $('archive-list').innerHTML=years.map(y=>`<section class="year-group" id="year-${y}"><h2>${y}</h2><div>${rows.filter(x=>year(x)===y).map(html).join('')}</div></section>`).join('');
 $('archive-print').hidden=kind!=='act';$('archive-print').textContent=t('print');$('archive-print').onclick=()=>window.print();
 document.title='Chiara Saracini | '+t(kind==='pub'?'pubtitle':kind==='conf'?'conftitle':'outreach');
}
function render(){document.documentElement.lang=lang;
 const ids=['research','publications','conferences','projects','engagement','teaching','contact'];$('nav').innerHTML=ids.map((id,i)=>`<a href="${page==='home'?'#'+id:((page==='publications'&&id==='publications')||(page==='conferences'&&id==='conferences')||(page==='outreach'&&id==='engagement')?'#main':route('index.html',id))}" ${((page==='publications'&&id==='publications')||(page==='conferences'&&id==='conferences')||(page==='outreach'&&id==='engagement'))?'aria-current="page"':''}>${ui[lang].nav[i]}</a>`).join('');
 document.querySelector('.wordmark').href=page==='home'?'#main':route('index.html');
 document.querySelectorAll('[data-lang]').forEach(a=>{a.setAttribute('aria-current',String(a.dataset.lang===lang));const u=new URL(location.href);u.searchParams.set('lang',a.dataset.lang);a.href=u.pathname+u.search+u.hash;});
 $('contact-title').textContent=t('contact');$('footer-note').textContent=t('footer');page==='home'?renderHome():renderArchive();
 document.querySelectorAll('a[href]').forEach(a=>{if(/^(https?:|mailto:)/i.test(a.getAttribute('href'))){a.target='_blank';a.rel='noopener noreferrer';}});
}
document.querySelectorAll('[data-lang]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();lang=a.dataset.lang;history.replaceState(null,'',a.href);render();}));
window.addEventListener('popstate',()=>{lang=new URLSearchParams(location.search).get('lang')||'en';if(!ui[lang])lang='en';render();});
render();
if(page==='home')$('cv-download').addEventListener('click',e=>{e.currentTarget.href=DATA.content[lang].cv_url+'&_='+Date.now();});
if(location.hash)requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
