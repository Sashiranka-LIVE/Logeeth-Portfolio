var LGS=[{"s": "./assets/images/logo-sml.webp", "bg": "#fff"}, {"s": "./assets/images/logo-fadna.webp", "bg": "#fff"}, {"s": "./assets/images/logo-inspire-college.webp", "bg": "#fff"}, {"s": "./assets/images/logo-salt-and-fade.webp", "bg": "#fff"}, {"s": "./assets/images/logo-amf-duty-free.webp", "bg": "rgb(12, 56, 81)"}, {"s": "./assets/images/logo-free-lanka-group.webp", "bg": "#fff"}];var m=document.getElementById("mq"),h="";for(var r=0;r<3;r++)LGS.forEach(function(l){h+='<span class="mlg" style="background:'+l.bg+'"><img alt="" src="'+l.s+'"></span>'});m.innerHTML=h+h;
var S=[["Adobe Illustrator",85],["Adobe Photoshop",80],["Adobe Premiere Pro",70],["CapCut",90],["Technical Knowledge",80]],o="";
S.forEach(function(s){o+='<div><div><span>'+s[0].replace("&","&amp;")+'</span><span class="pc" data-t="'+s[1]+'">0%</span></div><div class="bar"><i style="width:0" data-w="'+s[1]+'"></i></div></div>'});
document.getElementById("sk").innerHTML=o;
document.querySelectorAll(".chip").forEach(function(c){c.addEventListener("click",function(){c.setAttribute("aria-pressed",c.classList.toggle("on"))})});
document.getElementById("contact-form").addEventListener("submit",function(event){
  event.preventDefault();
  var b=document.getElementById("send"),g=function(i){return document.getElementById(i).value.trim()},say=function(t){document.getElementById("contact-status").textContent=t};
  if(!g("fn")||!g("em")){say("Please add your first name and email");return}
  var req=[].map.call(document.querySelectorAll(".chip.on"),function(c){return c.textContent}).join(", ");
  var body="Name: "+g("fn")+" "+g("ln")+"\nEmail: "+g("em")+"\nRequirement: "+req+"\n\n"+g("msg");
  var a=document.createElement("a");a.href="mailto:ahseenit02@gmail.com?subject="+encodeURIComponent("Portfolio enquiry from "+g("fn"))+"&body="+encodeURIComponent(body);a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();
  say("Opening your email app… or write to ahseenit02@gmail.com");
});

var P=["./assets/images/hero-01.webp", "./assets/images/hero-02.webp", "./assets/images/hero-03.webp", "./assets/images/hero-04.webp", "./assets/images/hero-05.webp", "./assets/images/hero-06.webp", "./assets/images/hero-07.webp", "./assets/images/hero-08.webp", "./assets/images/hero-09.webp", "./assets/images/hero-10.webp", "./assets/images/hero-11.webp", "./assets/images/hero-12.webp", "./assets/images/hero-13.webp"];
(function(){var w=document.getElementById("wall");for(var r=0;r<3;r++){var d=document.createElement("div");d.className="r";var h="";for(var k=0;k<2;k++)for(var i=0;i<P.length;i++)h+='<img alt="" src="'+P[(i*(r+2)+r*4)%P.length]+'">';d.innerHTML=h;w.appendChild(d)}})();
document.querySelectorAll(".ti").forEach(function(t,i){t.style.background="url("+P[[0,1,4,6,8][i]]+") center/cover";var sp=t.querySelector("span");if(sp)sp.remove()});
var ft=document.querySelectorAll(".ft"),tk=false;
function upd(){tk=false;var y=window.scrollY;ft.forEach(function(f,i){var r=parseFloat(f.style.getPropertyValue("--r"))||0;f.style.transform="translateY("+(Math.sin(y/500+i*1.7)*45)+"px) rotate("+(r+y*.01)+"deg)"})}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});upd();
(function(){
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches,mob=innerWidth<760,fine=matchMedia("(hover:hover)").matches;
var cl=function(v){return Math.min(1,Math.max(0,v))};
/* floating software logos (few, behind everything) */
var ICONS=["./assets/images/tool-01.webp", "./assets/images/tool-02.webp", "./assets/images/tool-03.webp", "./assets/images/tool-04.webp", "./assets/images/tool-05.webp", "./assets/images/tool-06.webp", "./assets/images/tool-07.webp", "./assets/images/tool-08.webp"];
var lay=document.createElement("div");lay.className="lgl";lay.setAttribute("aria-hidden","true");
var N=mob?3:5,LG=[],bag=ICONS.slice().sort(function(){return Math.random()-.5});
for(var i=0;i<N;i++){var d=.35+Math.random()*1.3,sz=Math.round((mob?28:36)+d*(mob?22:34)),e=document.createElement("div");
e.className="lg ic";e.style.width=e.style.height=sz+"px";e.style.left=(3+Math.random()*90)+"%";
e.style.animationDuration=(5+Math.random()*4)+"s";e.style.animationDelay=(-Math.random()*6)+"s";
e.style.opacity=(.38+Math.min(1,d/1.6)*(mob?.3:.42)).toFixed(2);
var im=document.createElement("img");im.src=bag[i];im.alt="";e.appendChild(im);
lay.appendChild(e);LG.push({el:e,d:d,y0:Math.random()*1200,r:Math.random()*36-18,ph:Math.random()*6})}
document.body.appendChild(lay);
function lgp(y){var H=innerHeight+240;LG.forEach(function(o){var yy=((o.y0-y*o.d*.45)%H+H)%H-120;o.el.style.transform="translate3d("+Math.sin(y/400+o.ph)*20*o.d+"px,"+yy+"px,0) rotate("+(o.r+y*o.d*.03)+"deg)"})}
/* liquid nav */
var nl=document.querySelector(".nl"),ind=nl.querySelector(".ind"),nls=[].slice.call(nl.querySelectorAll("a")),cur=null;
var hov=false,first=true;
function mv(a){if(!hov||!a||!nl.offsetWidth)return;if(first){first=false;ind.style.transition="opacity .3s";ind.style.left=a.offsetLeft+"px";ind.style.width=a.offsetWidth+"px";void ind.offsetWidth;ind.style.transition="";ind.style.opacity=1;return}ind.style.left=a.offsetLeft+"px";ind.style.width=a.offsetWidth+"px";ind.style.opacity=1}
nls.forEach(function(a){a.addEventListener("mouseenter",function(){hov=true;mv(a)});a.addEventListener("focus",function(){hov=true;mv(a)})});
nl.addEventListener("mouseleave",function(){hov=false;ind.style.opacity=0});
function spy(){var vh=innerHeight,f=inPage?nls[2]:nls[0];if(!inPage)nls.forEach(function(a){var s=document.querySelector(a.getAttribute("href"));if(s&&s.getBoundingClientRect().top<=vh*.45)f=a});
if(f!==cur){nls.forEach(function(a){a.classList.toggle("on",a===f)});cur=f;mv(f)}}
/* hero dive */
var wall=document.getElementById("wall"),ht=document.querySelectorAll("#home .eb,#home h1,#home .sig,#home .tag");
function dive(y){var p=cl(y/(innerHeight*.9));wall.style.transform="translate3d(0,0,0) rotate("+(-7+p*9)+"deg) scale("+(1+p*2.6)+")";wall.style.opacity=(.55*(1-Math.max(0,(p-.5)/.5))).toFixed(3);
wall.style.visibility=p>=1?"hidden":"visible";wall.classList.toggle("off",p>=1);
var o=Math.max(0,1-p*1.25);ht.forEach(function(e){e.style.scale=1+p*1.5;e.style.opacity=o})}
/* hero letters + mouse parallax */
var h1=document.querySelector("#home h1"),letters=[];
if(h1&&!rm){var ttl=h1.textContent;h1.setAttribute("aria-label",ttl);h1.textContent="";h1.classList.add("hl");ttl.split("").forEach(function(c,i){var sp=document.createElement("span");sp.style.setProperty("--i",i);sp.textContent=c;sp.setAttribute("aria-hidden","true");h1.appendChild(sp);letters.push(sp)});setTimeout(function(){h1.classList.add("hdone")},3600)}
if(fine&&!rm&&letters.length)addEventListener("pointermove",function(e){if(inPage||scrollY>innerHeight*.6)return;letters.forEach(function(sp){var r=sp.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),f=Math.max(0,1-Math.hypot(dx,dy)/170);sp.style.transform=f>0?"translateY("+(-f*26)+"px) scale("+(1+f*.2)+")":""})});
var wx=0,wy=0,wtx=0,wty=0,wrun=false;
function wl(){wx+=(wtx-wx)*.07;wy+=(wty-wy)*.07;wall.style.translate=wx+"px "+wy+"px";if(Math.abs(wtx-wx)>.2||Math.abs(wty-wy)>.2)requestAnimationFrame(wl);else wrun=false}
if(fine&&!rm)addEventListener("pointermove",function(e){if(inPage||scrollY>innerHeight)return;wtx=-(e.clientX/innerWidth-.5)*60;wty=-(e.clientY/innerHeight-.5)*40;if(!wrun){wrun=true;requestAnimationFrame(wl)}});
/* about: words light up as you read */
var wp=document.querySelector("#about .wrap>p"),words=[],wn=0;
if(wp&&!rm){var tw=document.createTreeWalker(wp,NodeFilter.SHOW_TEXT),tn=[],x;while(x=tw.nextNode())tn.push(x);
tn.forEach(function(n){var f=document.createDocumentFragment();n.nodeValue.split(/(\s+)/).forEach(function(z){if(!z)return;if(/^\s+$/.test(z))f.appendChild(document.createTextNode(z));else{var sp=document.createElement("span");sp.className="w";sp.textContent=z;f.appendChild(sp);words.push(sp)}});n.parentNode.replaceChild(f,n)})}
/* 3D reveal elements */
var els=[];
if(!rm)document.querySelectorAll(".head,#about .wrap>*,.card,.sk,.cc .panel,.fg>div,#reel .big,.tli,.stats>div").forEach(function(e,i){els.push({el:e,dir:i%2?1:-1,big:e.classList.contains("big")?1.6:1,top:0,h:0,s:-1});e.classList.add("rv")});
var lines=els.filter(function(o){return o.big>1}),wo=els.filter(function(o){return o.el===wp})[0],mq=document.querySelector(".mq"),wm=document.querySelector(".wm"),ct=document.getElementById("contact"),ctT=0,ctH=1;
var tls=els.filter(function(o){return o.el.classList.contains("tli")}),tl=document.getElementById("tl"),tlf=document.getElementById("tlf"),tlT=0,tlH=1;tls.forEach(function(o,i){o.dir=i%2?1:-1;o.tl=1});
function meas(){els.forEach(function(o){o.el.style.transform="none";o.s=-1});els.forEach(function(o){var r=o.el.getBoundingClientRect();o.top=r.top+scrollY;o.h=r.height});var r=ct.getBoundingClientRect();ctT=r.top+scrollY;ctH=r.height;var q=tl.getBoundingClientRect();tlT=q.top+scrollY;tlH=q.height}
function rvf(y){var vh=innerHeight,k=mob?.6:1;els.forEach(function(o){
var en=cl((y+vh-o.top)/(vh*.5)),ex=cl((o.top+o.h-y)/(vh*.3)),e=1-Math.pow(1-en,3);
if(e>.995&&ex>.995){if(o.s!==1){o.el.style.transform="none";o.el.style.opacity=1;o.el.style.willChange="auto";o.s=1}return}
if(o.s!==0){o.el.style.willChange="transform,opacity";o.s=0}
var s=1-e,t="perspective(1100px) translate3d(0,"+(s*70)+"px,"+(-s*480)+"px) rotateX("+(s*18*k)+"deg) rotateY("+((o.tl&&mob?1:o.dir)*s*26*o.big*k)+"deg)";
if(ex<1)t+=" translate3d(0,0,"+((1-ex)*160)+"px)";
o.el.style.transform=t;o.el.style.opacity=Math.min(e*1.2,ex)})}
var hot=null;
function extras(y,v){var vh=innerHeight;
if(wo&&words.length){var n=Math.round(cl((y+vh*.9-wo.top)/(vh*.6))*words.length);if(n!==wn){var a=Math.min(n,wn),b=Math.max(n,wn);for(var i=a;i<b;i++)words[i].classList.toggle("on",n>wn);wn=n}}
var best=null,bd=1e9;lines.forEach(function(o,i){var c=(o.top+o.h/2)-(y+vh/2);o.el.style.translate=((c/vh)*(i%2?1:-1)*130)+"px 0";var ad=Math.abs(c);if(ad<bd){bd=ad;best=o}});
if(best!==hot){if(hot)hot.el.classList.remove("hot");hot=best;if(hot&&bd<vh*.3)hot.el.classList.add("hot")}
if(mq)mq.style.transform="skewX("+Math.max(-9,Math.min(9,v*.1))+"deg)";
if(wm)wm.style.translate=(((y+vh-ctT)/(vh+ctH)-.5)*260)+"px 0";
if(tlf)tlf.style.transform="scaleY("+cl((y+vh*.6-tlT)/tlH)+")";tls.forEach(function(o){o.el.classList.toggle("on",y+vh*.6>o.top+30)})}
/* buttons, cards */
if(fine&&!rm){
document.querySelectorAll(".btn,.sub,.pill").forEach(function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.22)+"px "+((e.clientY-r.top-r.height/2)*.35)+"px"});b.addEventListener("pointerleave",function(){b.style.translate=""})});
document.querySelectorAll(".card").forEach(function(c){var th=c.querySelector(".thumb");
c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;c.style.setProperty("--mx",px*100+"%");c.style.setProperty("--my",py*100+"%");th.style.transform="perspective(600px) rotateY("+((px-.5)*16)+"deg) rotateX("+((.5-py)*16)+"deg) scale(1.04)"});
c.addEventListener("pointerleave",function(){th.style.transform=""})})}
/* skills fill + count up */
function fill(){document.querySelectorAll(".bar i").forEach(function(b,i){var t=+b.dataset.w,pc=b.parentNode.previousSibling.lastChild;
if(rm){b.style.width=t+"%";pc.textContent=t+"%";return}
b.style.transitionDelay=(i*90)+"ms";b.style.width=t+"%";
setTimeout(function(){var s0=performance.now();(function f(n){var k=cl((n-s0)/1300);pc.textContent=Math.round(t*(1-Math.pow(1-k,3)))+"%";if(k<1)requestAnimationFrame(f)})(s0)},i*90)})}
var sk=document.getElementById("sk");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){fill();io.disconnect()}},{threshold:.3});io.observe(sk)}else fill();
/* stats count-up */
var stt=document.querySelector(".stats");
function cs(){document.querySelectorAll(".stats [data-n]").forEach(function(e,i){var t=+e.dataset.n,sf=e.dataset.s||"";if(rm){e.textContent=t+sf;return}var s0=performance.now()+i*140;(function f(n){var k=cl((n-s0)/1400);e.textContent=Math.round(t*(1-Math.pow(1-k,3)))+sf;if(k<1)requestAnimationFrame(f)})(performance.now())})}
if("IntersectionObserver" in window){var i2=new IntersectionObserver(function(en){if(en[0].isIntersecting){cs();i2.disconnect()}},{threshold:.4});i2.observe(stt)}else cs();
/* mobile menu */
var nv=document.querySelector("nav"),bgb=document.getElementById("burger");
bgb.addEventListener("click",function(){var o=nv.classList.toggle("open");bgb.setAttribute("aria-expanded",o)});
nls.forEach(function(a){a.addEventListener("click",function(){nv.classList.remove("open");bgb.setAttribute("aria-expanded","false")})});
/* ---- works pages ---- */
var inPage=false,curKey=null,busy=false,lastN=0,cols=[],liI=0,homeY=0;
var DRIVE="https://drive.google.com/drive/folders/1VNSSyg3D92JFFdVuxlCNAdddOvlXLphO";
var G=[{"s": "./assets/images/work-01-food-beverage-show.webp", "t": "Food & Beverage Show", "g": "Event poster \u00b7 Highrise", "w": 720, "h": 900}, {"s": "./assets/images/work-02-kevin-smokio.webp", "t": "Kevin Smokio", "g": "Cover art", "w": 720, "h": 900}, {"s": "./assets/images/work-03-koombiyo.webp", "t": "Koombiyo", "g": "Film poster", "w": 720, "h": 900}, {"s": "./assets/images/work-04-manasick.webp", "t": "Manasick", "g": "Artist poster", "w": 720, "h": 900}, {"s": "./assets/images/work-05-channuka.webp", "t": "Channuka", "g": "Single cover art", "w": 720, "h": 900}, {"s": "./assets/images/work-06-cozzy.webp", "t": "Cozzy", "g": "Single cover art", "w": 720, "h": 900}, {"s": "./assets/images/work-07-one-shot.webp", "t": "One Shot", "g": "Cover art \u00b7 Ranjan Ramanayaka", "w": 720, "h": 900}, {"s": "./assets/images/work-08-ramesses-reezy.webp", "t": "Ramesses Reezy", "g": "Tour poster \u00b7 Iconography", "w": 720, "h": 900}, {"s": "./assets/images/work-09-yevan-david.webp", "t": "Yevan David", "g": "Athlete poster \u00b7 AIX Racing", "w": 720, "h": 900}, {"s": "./assets/images/work-10-hnb-assurance.webp", "t": "HNB Assurance", "g": "Social ad", "w": 900, "h": 900}, {"s": "./assets/images/work-11-inspire-college.webp", "t": "Inspire College", "g": "Social ad \u00b7 Learn without limits", "w": 720, "h": 900}, {"s": "./assets/images/work-12-inspire-college.webp", "t": "Inspire College", "g": "Social ad \u00b7 After O/Ls", "w": 900, "h": 900}, {"s": "./assets/images/work-13-inspire-college.webp", "t": "Inspire College", "g": "Festive post \u00b7 Eid Al-Adha", "w": 900, "h": 900}];
var WK={"work-designs":{n:"01",t:"Designs",d:"Designs that blend creativity and purpose to tell meaningful stories.",tg:["Photoshop","Illustrator","Affinity","Canva"],cols:3,real:1},
"work-videos":{n:"02",t:"Video Editing",d:"Videos that merge creativity and vision to bring stories to life.",tg:["Premiere Pro","After Effects","CapCut"],cols:2,ph:[16/9,16/9,16/9,16/9],ic:"▶"},
};
var hv=document.getElementById("homev"),wp=document.getElementById("wp"),curtain=document.getElementById("curtain"),gg=document.getElementById("gg"),de=document.documentElement,pio=null;
function nCols(k){var c=WK[k].cols;return mob?(c===2?1:2):c}
function setHero(k){var c=WK[k],pt=document.getElementById("pt");
pt.setAttribute("aria-label",c.t);pt.innerHTML="";c.t.split("").forEach(function(ch,i){var sp=document.createElement("span");sp.style.setProperty("--i",i);sp.textContent=ch===" "?"\u00a0":ch;sp.setAttribute("aria-hidden","true");pt.appendChild(sp)});
document.getElementById("pd").textContent=c.d;document.getElementById("pgh").textContent=c.n;
var tg=document.getElementById("ptags");tg.innerHTML="";c.tg.forEach(function(x){var sp=document.createElement("span");sp.textContent=x;tg.appendChild(sp)});
document.getElementById("pcnt").textContent=c.real?G.length+" works":"Coming soon";document.getElementById("drv").href=DRIVE;
var m=document.getElementById("pmq"),h="";for(var i=0;i<14;i++)h+="<span>"+c.t.toUpperCase().replace("&","&amp;")+"</span>";m.innerHTML=h;
var mc=document.getElementById("mc");mc.innerHTML="";Object.keys(WK).forEach(function(q){if(q===k)return;var a=document.createElement("a");a.href="#"+q;a.dataset.go=q;a.textContent=WK[q].t+" →";mc.appendChild(a)})}
function buildGallery(k){var c=WK[k],n=nCols(k);lastN=n;if(pio)pio.disconnect();gg.innerHTML="";gg.style.gridTemplateColumns="repeat("+n+",1fr)";cols=[];
for(var i=0;i<n;i++){var d=document.createElement("div");d.className="gc";gg.appendChild(d);cols.push(d)}
var items=c.real?G:c.ph,frs=[];
items.forEach(function(it,i){var f=document.createElement("div"),ci=i%n;f.className="fr"+(c.real?"":" ph");f.style.setProperty("--i",ci);f.style.setProperty("--d",ci-(n-1)/2);
if(c.real){var im=document.createElement("img");im.src=it.s;im.alt=it.t+" – "+it.g;im.decoding="async";im.loading=i<3?"eager":"lazy";im.width=it.w;im.height=it.h;im.style.aspectRatio=it.w+"/"+it.h;f.appendChild(im);
var cp=document.createElement("div");cp.className="cap";var b=document.createElement("b");b.textContent=it.t;var sp=document.createElement("span");sp.textContent=it.g;cp.appendChild(b);cp.appendChild(sp);f.appendChild(cp);
var no=document.createElement("em");no.className="no";no.textContent=(i<9?"0":"")+(i+1);f.appendChild(no);f.tabIndex=0;f.setAttribute("role","button");f.setAttribute("aria-label","Preview "+it.t);
f.addEventListener("click",function(){openLb(i)});f.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();openLb(i)}})}
else{var ph=document.createElement("div");ph.className="phi";ph.style.aspectRatio=it;ph.innerHTML="<b></b><small>Your work goes here</small>";ph.firstChild.textContent=c.ic;f.appendChild(ph)}
if(fine&&!rm)f.addEventListener("pointermove",function(e){var r=f.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;f.style.setProperty("--mx",px*100+"%");f.style.setProperty("--my",py*100+"%");f.style.transform="perspective(900px) rotateY("+((px-.5)*12)+"deg) rotateX("+((.5-py)*12)+"deg) scale(1.025)"});
if(fine&&!rm)f.addEventListener("pointerleave",function(){f.style.transform=""});
cols[ci].appendChild(f);frs.push(f)});
if(rm||!("IntersectionObserver" in window)){frs.forEach(function(f){f.classList.add("in")})}
else{pio=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");pio.unobserve(x.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});frs.forEach(function(f){pio.observe(f)})}}
var pgPo=wp.querySelectorAll(".po"),pgGh=document.getElementById("pgh"),pgT=document.getElementById("pt");
function pageFx(y){var p=cl(y/(innerHeight*.8)),sp=[-.05,.05,-.035];
cols.forEach(function(c,i){c.style.transform="translate3d(0,"+Math.max(-70,Math.min(70,y*sp[i%3]))+"px,0)"});
pgPo.forEach(function(o,i){o.style.translate="0 "+(y*(.12+i*.05))+"px"});pgGh.style.translate="0 "+(-y*.12)+"px";pgT.style.scale=1+p*.25;pgT.style.opacity=1-p*.9}
/* lightbox */
var lb=document.getElementById("lb"),lbi=document.getElementById("lbi"),lbc=document.getElementById("lbc"),lbk=document.getElementById("lbk"),lbbg=document.getElementById("lbbg");
function pad(n){return(n<10?"0":"")+n}
function setLb(d){var it=G[liI];lbi.src=it.s;lbi.alt=it.t;lbi.style.setProperty("--sx",d);lbi.style.animation="none";void lbi.offsetWidth;lbi.style.animation="";
lbc.innerHTML="";var b=document.createElement("b");b.textContent=it.t;var sp=document.createElement("span");sp.textContent=it.g;lbc.appendChild(b);lbc.appendChild(sp);
lbk.textContent=pad(liI+1)+" / "+pad(G.length);lbbg.style.backgroundImage="url("+it.s+")"}
var lbFocus=null;
function openLb(i){lbFocus=document.activeElement;liI=i;lb.hidden=false;de.style.overflow="hidden";setLb(0);document.getElementById("lbx").focus()}
function stepLb(d){liI=(liI+d+G.length)%G.length;setLb(d)}
function closeLb(){if(lb.hidden)return;lb.hidden=true;de.style.overflow="";if(lbFocus)lbFocus.focus()}
document.getElementById("lbx").addEventListener("click",closeLb);
document.getElementById("lbp").addEventListener("click",function(){stepLb(-1)});
document.getElementById("lbn").addEventListener("click",function(){stepLb(1)});
lb.addEventListener("click",function(e){if(e.target===lb||e.target===lbbg)closeLb()});
addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Tab"){var controls=[document.getElementById("lbx"),document.getElementById("lbp"),document.getElementById("lbn")];var ix=controls.indexOf(document.activeElement);e.preventDefault();controls[(ix+(e.shiftKey?-1:1)+controls.length)%controls.length].focus();return}if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")stepLb(-1);else if(e.key==="ArrowRight")stepLb(1)});
var tx=0;lb.addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)stepLb(dx<0?1:-1)},{passive:true});
/* routing + curtain wipe */
function iScroll(y){de.style.scrollBehavior="auto";scrollTo(0,y);de.style.scrollBehavior=""}
function showPage(k){if(!inPage)homeY=scrollY;inPage=true;curKey=k;hv.hidden=true;wp.hidden=false;document.body.classList.add("pg");setHero(k);buildGallery(k);iScroll(0);tgt=pos=0;pageFx(0);spy()}
function showHome(h){inPage=false;curKey=null;closeLb();wp.hidden=true;hv.hidden=false;document.body.classList.remove("pg");meas();var el=h&&document.getElementById(h);iScroll(el?el.getBoundingClientRect().top+scrollY:(h?0:homeY));tgt=pos=scrollY;if(!rm)apply(pos,0);spy();mv(cur)}
function route(){var h=location.hash.slice(1);if(WK[h]){if(curKey!==h)showPage(h);return}if(inPage)showHome(h)}
addEventListener("hashchange",route);
function go(k,x,y){if(busy)return;if(rm){location.hash=k;route();return}busy=true;curtain.style.visibility="visible";
var a=curtain.animate([{clipPath:"circle(0px at "+x+"px "+y+"px)"},{clipPath:"circle(150vmax at "+x+"px "+y+"px)"}],{duration:560,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"});
a.onfinish=function(){location.hash=k;route();requestAnimationFrame(function(){var b=curtain.animate([{clipPath:"circle(150vmax at "+x+"px "+y+"px)"},{clipPath:"circle(0px at "+x+"px "+y+"px)"}],{duration:640,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"});
b.onfinish=function(){a.cancel();b.cancel();curtain.style.visibility="hidden";busy=false}})}}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("[data-go]");if(!a)return;e.preventDefault();var r=a.getBoundingClientRect();go(a.dataset.go,e.clientX||r.left+r.width/2,e.clientY||r.top+r.height/2)});
/* cursor ring + scroll progress */
var spb=document.getElementById("sp");
function prog(){var m=document.documentElement.scrollHeight-innerHeight;spb.style.transform="scaleX("+(m>0?Math.min(1,scrollY/m):0)+")"}
/* smooth wheel + anchor + key scrolling (mouse wheels only; trackpads keep native inertia) */
var sT=scrollY,sC=scrollY,sRun=false,sMode=0,sA=0,sB=0,sT0=0,sDur=0,sLast=0,smooth=fine&&!rm;
if(smooth)de.classList.add("sm");
function sStep(ts){if(sMode===1){var k=Math.min(1,(ts-sT0)/sDur),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;sC=sA+(sB-sA)*e;scrollTo(0,sC);if(k>=1){sC=sT=sB;sRun=false;return}}
else{var dt=Math.min(64,ts-sLast||16),d=sT-sC;if(Math.abs(d)<.5){sC=sT;scrollTo(0,sC);sRun=false;return}sC+=d*(1-Math.exp(-dt/135));scrollTo(0,sC)}
sLast=ts;requestAnimationFrame(sStep)}
function sMax(){return de.scrollHeight-innerHeight}
function sGo(y){sT=Math.max(0,Math.min(sMax(),y));sMode=0;if(!sRun){sRun=true;sC=scrollY;sLast=performance.now();requestAnimationFrame(sStep)}}
function sJump(y){y=Math.max(0,Math.min(sMax(),y));sA=sRun?sC:scrollY;sB=sT=y;sMode=1;sT0=performance.now();sDur=Math.min(1500,550+Math.abs(sB-sA)*.18);if(!sRun){sRun=true;requestAnimationFrame(sStep)}}
if(smooth){
addEventListener("wheel",function(e){if(e.ctrlKey||!lb.hidden||busy)return;if(e.target.closest&&e.target.closest(".tiyo,textarea"))return;if(Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
var notch=e.deltaMode===1||(e.wheelDeltaY&&Math.abs(e.wheelDeltaY)%120===0);if(!notch)return;
var d=e.deltaMode===1?e.deltaY*40:e.deltaY;e.preventDefault();if(!sRun)sT=scrollY;sGo(sT+d)},{passive:false});
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a||a.hasAttribute("data-go")||inPage||e.defaultPrevented)return;var id=a.getAttribute("href").slice(1),t=id&&document.getElementById(id);if(!t||WK[id])return;e.preventDefault();sJump(id==="home"?0:t.getBoundingClientRect().top+scrollY-70);try{history.pushState(null,"","#"+id)}catch(_){}});
addEventListener("keydown",function(e){if(!lb.hidden||e.ctrlKey||e.metaKey||e.altKey)return;var t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(t.tagName)))return;
var vh=innerHeight,k=e.key,b=sRun?sT:scrollY,j=null,y=null;
if(k==="ArrowDown")y=b+110;else if(k==="ArrowUp")y=b-110;else if(k==="PageDown"||(k===" "&&!e.shiftKey))j=b+vh*.85;else if(k==="PageUp"||(k===" "&&e.shiftKey))j=b-vh*.85;else if(k==="Home")j=0;else if(k==="End")j=sMax();
if(j!==null){e.preventDefault();sJump(j)}else if(y!==null){e.preventDefault();sGo(y)}})}
/* smooth scroll-linked loop */
var tgt=scrollY,pos=scrollY,raf=0;
function apply(y,v){if(inPage){pageFx(y,v);lgp(y);return}dive(y);rvf(y);lgp(y);extras(y,v)}
function loop(){raf=0;var d=tgt-pos;if(Math.abs(d)<.3)pos=tgt;else pos+=d*.28;apply(pos,tgt-pos);if(pos!==tgt)raf=requestAnimationFrame(loop)}
addEventListener("scroll",function(){tgt=scrollY;if(!sRun){sT=sC=scrollY}spy();prog();if(!rm&&!raf)raf=requestAnimationFrame(loop)},{passive:true});
function boot(){mob=innerWidth<760;if(innerWidth>900){nv.classList.remove("open");bgb.setAttribute("aria-expanded","false")}if(!inPage)meas();if(inPage&&curKey&&nCols(curKey)!==lastN)buildGallery(curKey);tgt=pos=scrollY;if(!rm)apply(pos,0);spy();mv(cur);prog()}
addEventListener("resize",boot);addEventListener("load",boot);
boot();lgp(0);route();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(boot);
})();
