var gn=Object.defineProperty;var fn=(t,e,n)=>e in t?gn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var N=(t,e,n)=>(fn(t,typeof e!="symbol"?e+"":e,n),n);var ne,j=window,z=j.trustedTypes,ce=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,te="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+w,pn=`<${ue}>`,S=document,M=()=>S.createComment(""),L=t=>t===null||typeof t!="object"&&typeof t!="function",de=Array.isArray,mn=t=>de(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",re=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ge=/-->/g,fe=/>/g,R=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,me=/"/g,ve=/^(?:script|style|textarea|title)$/i,vn=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),f=vn(1),G=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),_e=new WeakMap,I=S.createTreeWalker(S,129,null,!1),_n=(t,e)=>{let n=t.length-1,r=[],s,i=e===2?"<svg>":"",o=O;for(let a=0;a<n;a++){let l=t[a],d,u,c=-1,g=0;for(;g<l.length&&(o.lastIndex=g,u=o.exec(l),u!==null);)g=o.lastIndex,o===O?u[1]==="!--"?o=ge:u[1]!==void 0?o=fe:u[2]!==void 0?(ve.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=R):u[3]!==void 0&&(o=R):o===R?u[0]===">"?(o=s??O,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?R:u[3]==='"'?me:pe):o===me||o===pe?o=R:o===ge||o===fe?o=O:(o=R,s=void 0);let D=o===R&&t[a+1].startsWith("/>")?" ":"";i+=o===O?l+pn:c>=0?(r.push(d),l.slice(0,c)+te+l.slice(c)+w+D):l+w+(c===-2?(r.push(void 0),a):D)}let h=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ce!==void 0?ce.createHTML(h):h,r]},k=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0,h=e.length-1,a=this.parts,[l,d]=_n(e,n);if(this.el=k.createElement(l,r),I.currentNode=this.el.content,n===2){let u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(s=I.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes()){let u=[];for(let c of s.getAttributeNames())if(c.endsWith(te)||c.startsWith(w)){let g=d[o++];if(u.push(c),g!==void 0){let D=s.getAttribute(g.toLowerCase()+te).split(w),y=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:y[2],strings:D,ctor:y[1]==="."?be:y[1]==="?"?Ee:y[1]==="@"?we:P})}else a.push({type:6,index:i})}for(let c of u)s.removeAttribute(c)}if(ve.test(s.tagName)){let u=s.textContent.split(w),c=u.length-1;if(c>0){s.textContent=z?z.emptyScript:"";for(let g=0;g<c;g++)s.append(u[g],M()),I.nextNode(),a.push({type:2,index:++i});s.append(u[c],M())}}}else if(s.nodeType===8)if(s.data===ue)a.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(w,u+1))!==-1;)a.push({type:7,index:i}),u+=w.length-1}i++}}static createElement(e,n){let r=S.createElement("template");return r.innerHTML=e,r}};function T(t,e,n=t,r){var s,i,o,h;if(e===G)return e;let a=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl,l=L(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(t),a._$AT(t,n,r)),r!==void 0?((o=(h=n)._$Co)!==null&&o!==void 0?o:h._$Co=[])[r]=a:n._$Cl=a),a!==void 0&&(e=T(t,a._$AS(t,e.values),a,r)),e}var Ae=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;let{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:S).importNode(r,!0);I.currentNode=i;let o=I.nextNode(),h=0,a=0,l=s[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new H(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new De(o,this,e)),this._$AV.push(d),l=s[++a]}h!==(l==null?void 0:l.index)&&(o=I.nextNode(),h++)}return I.currentNode=S,i}v(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},H=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cp=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=T(this,e,n),L(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):mn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var n;let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=k.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{let o=new Ae(i,this),h=o.u(this.options);o.v(r),this.$(h),this._$AH=o}}_$AC(e){let n=_e.get(e.strings);return n===void 0&&_e.set(e.strings,n=new k(e)),n}T(e){de(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,s=0;for(let i of e)s===n.length?n.push(r=new H(this.k(M()),this.k(M()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},P=class{constructor(e,n,r,s,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){let i=this.strings,o=!1;if(i===void 0)e=T(this,e,n,0),o=!L(e)||e!==this._$AH&&e!==G,o&&(this._$AH=e);else{let h=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=T(this,h[r+a],n,a),l===G&&(l=this._$AH[a]),o||(o=!L(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}o&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},be=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},bn=z?z.emptyScript:"",Ee=class extends P{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,bn):this.element.removeAttribute(this.name)}},we=class extends P{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=T(this,e,n,0))!==null&&r!==void 0?r:p)===G)return;let s=this._$AH,i=e===p&&s!==p||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){T(this,e)}},Se=j.litHtmlPolyfillSupport;Se==null||Se(k,H),((ne=j.litHtmlVersions)!==null&&ne!==void 0?ne:j.litHtmlVersions=[]).push("2.7.4");var m=(t,e,n)=>{var r,s;let i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e,o=i._$litPart$;if(o===void 0){let h=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new H(e.insertBefore(M(),h),h,void 0,n??{})}return o._$AI(t),o};var Re=[{id:"10",title:"Lichtdurchflutete 3-Zimmer-Wohnung im Loft-Style",teaserTitle:"Exklusive, lichtdurchflutete 3-Zimmer-Wohnung",teaserText:"Die exklusive Dachgeschosswohnung",shortDescription:["Die exklusive Dachgeschosswohnung verfügt über ein großzügiges Wohn- und Esszimmer und weckt dank der luxuriösen Innenausstattung Loft-Gefühle. Durch X Dachgauben sind alle Zimmer lichtdurchflutet. Abgerundet wird die Wohnung durch ein voll-ausgestattetes Tageslichtbad mit großer Regendusche und einer separaten Gästetoilette.","Dank nachhaltiger Bauweise mit Zertifizierung als Effizienzhaus 40-plus kann man von stabilen, dauerhaft niedrigen Nebenkosten ausgehen. Machen Sie dieses seltene Fundstück zu Ihrem Wohlfühlzuhause!","Die Ausstattung mit Eichenparkett, Fußbodenheizung und Lüftungsanlage mit Wärmerückgewinnung, sowie die gute Raumaufteilung machen diese Neubauwohnungen zu etwas ganz besonderem.","Schauen Sie sich die Wohnung einfach an und überzeugen Sie sich selbst von dieser wunderschönen Immobilie in einer gut angebundenen, grünen Lage."],address:"Leienfelsstraße 21, 81243 München",previewImg:"/img/DSC_7890.NEF.jpg",rooms:"3",squareMeter:"106,07",available:!0,priceBase:"2.400",priceOverall:"2.600",surety:"7.800",availableAt:"1.8.2023",images:["/img/20230514_175151.jpg","/img/20230514_175156.jpg","/img/20230514_175206.jpg","/img/20230514_175259.jpg","/img/DSC_7889.NEF.jpg","/img/DSC_7890.NEF.jpg","/img/DSC_7892.NEF.jpg"],tags:["Südbalkon","Kellerabteil","Gartenmitbenutzung","Gäste-WC","Stellplatz"],facets:{type:"Dachgeschosswohnung",bathrooms:"2",pets:"Ja",parkingSpot:"100 €",additionalCosts:"160 €",surety:"3 x Kaltmiete"},interiorImg:"/img/interior.png",interior:["6,00 m² Südbalkon","elegantes, modernes Tageslichtbad mit Regendusche und separater Badewanne","direkter, innenliegender Zugang zum eigenen Einzeltiefgaragenstellplatz ","Fußbodenheizung in allen Räumen (kann im sommer zum Kühlen genutzt werden)","Wärmepumpe durch Photovoltaik auf dem Hausdach betrieben","Wohnungszentrale Lüftungsanlage mit Wärmerückgewinnung","durchgängiges,hochwertiges, helles Eichenparkett in allen Wohnräumen","helle Fliesen in Küche und Diele","elektrische Rolläden","LAN-Anschluss in jedem Wohnraum","Zugang zu Fahrradstellplätzen und Gartenfläche","Kellerabteil","KFW 40plus","KFW Nachhaltiges Bauen"],location:["Der Standort im Stadtteil Aubing liegt in einem ruhigen Wohngebiet an einer Bogenstraße ohneDurchgangsverkehr. In direkter Nachbarschaft befindet sich eine große Grünanlage mit zwei sehr schönenSpielplätzen. Der Park erstreckt sich nach Norden bis zur Langwieder Haide, die zu ausgedehnten Spaziergängen und Sportaktivitäten direkt vor der Haustür startend einlädt.",'Eine Minute entfernt hält die S4 Leienfelsstraße in Richtung Hauptbahnhof und Geltendorf. Mit der S-Bahnerreichen Sie Pasing mit Anbindung an den Fernverkehr, dem Einkaufszentrum “Pasing Arcaden" in nur 3 Minuten. Die Münchner Innenstadt und der Hauptbahnhof sind mit der S-Bahn nur 16 Minuten entfernt. Fußläufig erreichen Sie Bäckerei Mayer (5 min), einen Getränkemarkt (5 min), das Paul-Ottmann-Zentrum (15 min, mit EDEKA, PENNY, Rackls Backstubn, Café mit Außenplätzen, Apotheke, Sanitätshaus, Ärztehaus, großer Kita, großer Stadtbibliothek, Kiosk, Friseur und Juwelier) und das Aubinger Ortszentrum mit weiteren Ladengeschäften (15 min). Ebenso gibt es in Laufnähe mehrere Kitas, Kindergärten und Schulen.',"Über Grünstreifen und Nebenstraßen erreichen Sie mit dem Fahrrad ampelfrei den Fahrrad-Schnellweg in Richtung Innenstadt.","E-Ladestationen für PKW der Stadtwerke München befinden sich 2 min entfernt.","Im benachbarten Stadtteil Freiham befinden sich ein Möbelhaus, ein Küchenstudio, Baumärkte und zahlreiche Fachgeschäfte. Eine moderne Boulderhalle und Tennisplätze ergänzen das Angebot an Sportmöglichkeiten."]},{id:"7",teaserTitle:"Neugebaute Erdgeschosswohnung mit Süd- und Ost-Terrasse",teaserText:"Die zwei zusätzlichen Souterrainzimmer",previewImg:"/img/DSC_7889.NEF.jpg",rooms:"4",squareMeter:"100",available:!1},{id:"3",teaserTitle:"Exklusive 2-Zimmer-Wohnung mit zwei Balkonen",teaserText:"Das großzügige Wohnzimmer mit Süd- und Ostbalkon",previewImg:"/img/DSC_7892.NEF.jpg",rooms:"2",squareMeter:"70",available:!1}];function Ie(){return new Promise(t=>t(Re))}function $e(t){return new Promise(e=>e(Re.find(n=>n.id===t)))}var ye=class extends HTMLElement{constructor(){super(...arguments);N(this,"flats",[])}connectedCallback(){this.render(),this.loadData()}loadData(){Ie().then(e=>{this.flats=e,this.render()})}render(){return m(f`
            <section>
                <h1 id="rental">Wohnungen</h1>
                <div class="cards">
                    ${this.flats.map(e=>e.available?f`
                        <a class="card" href="/rentals/${e.id}">
                            <img class="teaser-image" src="${e.previewImg}">
                            <h2 class="teaser-title">${e.teaserTitle}</h2>
                            <p class="teaser-text">${e.teaserText}</p>
                            <p class="rooms">${e.rooms} Zimmer</p>
                            <p class="squareMeter">${e.squareMeter} m²</p>
                        </a>
                    `:f`
                        <div class="card not-available">
                            <img class="teaser-image" src="${e.previewImg}">
                            <h2 class="teaser-title">${e.teaserTitle}</h2>
                            <p class="teaser-text">${e.teaserText}</p>
                            <p class="rooms">${e.rooms} Zimmer</p>
                            <p class="squareMeter">${e.squareMeter} m²</p>
                        </div>
                    `)}
                </div>
            </section>
        `,this)}};customElements.define("wohnfels-rentals",ye);var Ne=class extends HTMLElement{constructor(){super(...arguments);N(this,"flatId",null);N(this,"flat",null);N(this,"slideIndex",1)}connectedCallback(){this.flatId=V.location.params.flatId,this.render(),this.loadData()}loadData(){this.flatId&&$e(this.flatId).then(e=>{this.flat=e,this.selectedImage=this.flat.previewImg,this.render()})}selectImage(e){this.selectedImage=e,this.render()}renderInterior(e){return f`
            <ul>
                ${e.map(n=>Array.isArray(n)?this.renderInterior(n):f`<li>${n}</li>`)}
            </ul>`}render(){let e=this.flat?f`
    
            <section>
                <h1>${this.flat.title}</h1>
            </section>
            <section class="gallery">
                <div class="preview-container">
                    <img class="preview" src="${this.selectedImage}" @click="${n=>this.openModal(this.selectedImage)}">    
                </div>
                
<!--                <div class="thumbnail-container">-->
                    ${this.flat.images.map((n,r)=>f`<img class="thumbnail" @click="${s=>this.selectImage(n)}" src="${n}">`)}    
<!--                </div>-->
            </section>
            
            <section>
                
                ${this.flat.shortDescription.map(n=>f`<p>${n}</p>`)}
             

                <div class="short-facts">
                    <span>${this.flat.priceBase} €</span>
                    <span>Kaltmiete</span>
                    <span>${this.flat.squareMeter} qm</span>
                    <span>Fläche</span>
                    <span>${this.flat.rooms}</span>
                    <span>Zimmer</span>
                    <span>${this.flat.priceOverall} €</span>
                    <span>Warmmiete</span>
                    <span>${this.flat.availableAt}</span>
                    <span>Verfügbar ab</span>
                </div>
                
                <div class="tags">
                    ${this.flat.tags.map(n=>f`<span>${n}</span> `)}
                </div>
                
                <div class="facets">
                    <span>Typ</span>
                    <span>${this.flat.facets.type}</span>
                    <span>Badezimmer</span>
                    <span>${this.flat.facets.bathrooms}</span>
                    
                    <span>Haustiere</span>
                    <span>${this.flat.facets.pets}</span>
                    <span>Tiefgaragenstellplatz</span>
                    <span>${this.flat.facets.parkingSpot}</span>
                    
                    <span>Nebenkosten</span>
                    <span>${this.flat.facets.additionalCosts}</span>
                    <span>Kaution</span>
                    <span>${this.flat.facets.surety}</span>
                </div>
            </section>

            <section class="section">
                <h1>Ausstattung</h1>
                <img class="interior-preview" src="${this.flat.interiorImg}">
                ${this.renderInterior(this.flat.interior)}
            </section>
                        
            <section>
                <h1>Lage</h1>
                ${this.flat.location.map(n=>f`<p>${n}</p>`)}
            </section>
            

            <section class="overlay images" @click="${n=>this.onClickOverlay(n)}">
                <div class="modal">
                    <div class="slideshow-container">
                        ${this.flat.images.map((n,r)=>f`
                            <div class="mySlides fade">
                                <div class="numbertext">${r+1} / ${this.flat.images.length}</div>
                                <img src="${n}">
                                <div class="text">Gang</div>
                            </div>
                        `)}
                        <a class="prev" @click="${n=>this.plusSlides(-1)}">&#10094;</a>
                        <a class="next" @click="${n=>this.plusSlides(1)}">&#10095;</a>
                    </div>
                    <br>
                    <div style="text-align:center">
                        ${this.flat.images.map((n,r)=>f`<span class="dot" @click="${s=>this.currentSlide(r)}"></span>`)}
                    </div>
                </div>
            </section>

            <wohnfels-contact></wohnfels-contact>
            
        `:f`no flat`;m(e,this),this.overlay=this.querySelector(".overlay")}onClickOverlay(e){e.target===this.overlay&&this.overlay.classList.contains("visible")&&(this.overlay.classList.remove("visible"),e.stopPropagation())}openModal(e){this.overlay.classList.add("visible"),this.currentSlide(e)}plusSlides(e){this.showSlides(this.slideIndex+=e)}currentSlide(e){this.showSlides(this.slideIndex=e)}showSlides(e){let n,r=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("dot");for(e>r.length&&(this.slideIndex=1),e<1&&(this.slideIndex=r.length),n=0;n<r.length;n++)r[n].style.display="none";for(n=0;n<s.length;n++)s[n].className=s[n].className.replace(" active","");r[this.slideIndex-1].style.display="block",s[this.slideIndex-1].className+=" active"}};customElements.define("wohnfels-rentals-detail",Ne);var ze=class extends HTMLElement{connectedCallback(){this.render()}render(){return m(f`
            <div class="background">&nbsp;</div>
            <wohnfels-overus class="component"></wohnfels-overus>
            <wohnfels-rentals class="component"></wohnfels-rentals>
            <wohnfels-contact class="component"></wohnfels-contact>
        `,this)}};customElements.define("wohnfels-start",ze);var ke=class extends HTMLElement{connectedCallback(){this.render()}render(){return m(f`
            <section id="terms">
                <h1>Impressum</h1>
                <p>Bak Braß Falk Stößer GbR</strong><br/>
                    Saldenburgstr. 14 <br/>
                    81245 München<br/>
                    Telefon: 015771528374<br/>
                    E-Mail: wohnfels@gmail.com
                </p>
                
            </section>
            <section id="data-privacy">
                <h1>Datenschutzerklärung</h1>

                <h2>1. Datenschutz auf einen Blick</h2>
                <h3>Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                    persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                    Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

                <h3>Datenerfassung auf dieser Website</h3>
                <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                    können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
                    entnehmen.</p>

                <h3>Wie erfassen wir Ihre Daten?</h3>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                    Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
                    Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
                    des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>

                <h3>Wofür nutzen wir Ihre Daten?</h3>
                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                    Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

                <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                    Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                    können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                    bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
                <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

                <h2>2. Hosting</h2>
                <h3>Externes Hosting</h3>
                <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die
                    auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
                    a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                    Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                    bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
                    Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                    Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
                    von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
                    Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                    erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
                <p>Wir setzen folgenden Hoster ein:</p>
                <p>GitHub Inc<br>
                    88 Colin P Kelly Jr Street<br>
                    San Francisco, CA 94107<br>
                    United States</p>

                <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3>Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung.</p>
                <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                    Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                    und zu welchem Zweck das geschieht.</p>
                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                    Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                    möglich.</p>

                <h3>Hinweis zur verantwortlichen Stelle</h3>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>Michael Stößer<br>
                    Saldenburgstr. 14<br>
                    81245 München<br>
                    Telefon: +49 (0) 1577 152 83 74<br>
                    E-Mail: michael@stits.dev
                </p>

                <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
                    die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                    entscheidet.</p>
                <h3>Speicherdauer</h3>
                <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                    Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                    berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                    werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                    personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                    letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

                <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                    nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
                    personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                    49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
                    Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
                    auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                    Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                    Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
                    zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
                    Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
                    DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
                    Absätzen dieser Datenschutzerklärung informiert.</p>

                <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                    bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                    Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                    Direktwerbung (Art. 21 DSGVO)
                    WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                    ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                    SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                    WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                    PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
                    ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
                    WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
                    SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                    NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
                    VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
                    RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
                    SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
                    BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                    EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
                    VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
                    ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                    NACH ART. 21 ABS. 2 DSGVO).</p>

                <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                    oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

                <h3>Recht auf Datenübertragbarkeit</h3>
                <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                    aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                    verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

                <h3>Auskunft, Löschung und Berichtigung</h3>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                    zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

                <h3>Recht auf Einschränkung der Verarbeitung</h3>
                <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                    folgenden Fällen:</p>
                <ul>
                    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
                        in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                        statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                        Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                        Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                        Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                        überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                        zu verlangen.</li>
                </ul>
                <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                    ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                    Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
                    juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
                    eines Mitgliedstaats verarbeitet werden.</p>
            </section>
        `,this)}};customElements.define("wohnfels-impressum",ke);var Te=class extends HTMLElement{connectedCallback(){this.render()}render(){m(f`
            <section>
                <h1 id="contact">Kontakt</h1>
                <div class="contact-container">
                    <div class="contact-text">
                        <h2>Bei Interesse oder Rückfragen</h2>
                        <h2>kontaktieren Sie uns gerne direkt per Mail.</h2>
                    </div>
                    <a  class="contact-mail" href="mailto:wohnfels@gmail.com">wohnfels@gmail.com</a>
                </div>
            </section>
        `,this)}};customElements.define("wohnfels-contact",Te);var He=class extends HTMLElement{connectedCallback(){this.render()}render(){m(f`
            <section>
                <h1>Herzlich Willkommen</h1>
                <p class="overus">Wir sind...</p>
                <p class="overus">... bei unserem Herzensprojekt für mehr Wohnraum mit nachhaltiger Bauweise. Wir sind vier Erwachsene, Julia
                    Bak, Eva Braß, Ralph Falk und Michael Stößer, die vor fünf Jahren vor einem Grundstück standen mit zwei
                    baufälligen bzw. renovierungsbedürftigen Häusern. Daraus entstand der Wunsch etwas gegen die Wohnungsnot
                    in Münchener Wohnraum zu tun und dabei gleichzeitig in nachhaltiges Bauen und Wohnen zu investieren.</p>

                <p class="overus">Die kleine Wohnanlage in der Leienfelsstr. 21/21a besteht aus zwei separaten Mietshäusern mit je fünf
                    Wohneinheiten und einem Einfamilienhaus, in dem wir wohnen. Bei allen Wohnungen handelt es sich um
                    Erstbezug nach Neubau. Die nachhaltiger Holzständerbauweise als Effizienzhaus 40-plus entspricht den
                    neuesten technischen und energetischen Standards. Neben dem 40-plus-Standard ist das Haus auch mit dem
                    neuen Standard “Nachhaltigem Bauen” Zertifiziert. Das ökologische und hochdämmende ÖvoNaturTherm-Materia
                    der Außenwändel ist die Basis für ein energieeffizientes und gesundes Wohnen. Das Material steht für
                    seine hervorragende Raumluftqualität, die sogar mit "wohnmedizinisch empfohlen" ausgezeichnet wurde.
                </p>
            </section>
        `,this)}};customElements.define("wohnfels-overus",He);function x(t){return t=t||[],Array.isArray(t)?t:[t]}function v(t){return`[Vaadin.Router] ${t}`}function En(t){if(typeof t!="object")return String(t);let e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}var Z="module",K="nomodule",ie=[Z,K];function Be(t){if(!t.match(/.+\.[m]?js$/))throw new Error(v(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Ce(t){if(!t||!_(t.path))throw new Error(v('Expected route config to be an object with a "path" string property, or an array of such objects'));let e=t.bundle,n=["component","redirect","bundle"];if(!$(t.action)&&!Array.isArray(t.children)&&!$(t.children)&&!q(e)&&!n.some(r=>_(t[r])))throw new Error(v(`Expected route config "${t.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(e)if(_(e))Be(e);else if(ie.some(r=>r in e))ie.forEach(r=>r in e&&Be(e[r]));else throw new Error(v('Expected route bundle to include either "'+K+'" or "'+Z+'" keys, or both'));t.redirect&&["bundle","component"].forEach(r=>{r in t&&console.warn(v(`Route config "${t.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function We(t){x(t).forEach(e=>Ce(e))}function Me(t,e){let n=document.head.querySelector('script[src="'+t+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",t),e===Z?n.setAttribute("type",Z):e===K&&n.setAttribute(K,""),n.async=!0),new Promise((r,s)=>{n.onreadystatechange=n.onload=i=>{n.__dynamicImportLoaded=!0,r(i)},n.onerror=i=>{n.parentNode&&n.parentNode.removeChild(n),s(i)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&r()})}function wn(t){return _(t)?Me(t):Promise.race(ie.filter(e=>e in t).map(e=>Me(t[e],e)))}function U(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function q(t){return typeof t=="object"&&!!t}function $(t){return typeof t=="function"}function _(t){return typeof t=="string"}function Le(t){let e=new Error(v(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}var B=new class{};function An(t){let e=t.port,n=t.protocol,i=n==="http:"&&e==="80"||n==="https:"&&e==="443"?t.hostname:t.host;return`${n}//${i}`}function Oe(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target,n=t.composedPath?t.composedPath():t.path||[];for(let h=0;h<n.length;h++){let a=n[h];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||An(e))!==window.location.origin)return;let{pathname:s,search:i,hash:o}=e;U("go",{pathname:s,search:i,hash:o})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}var Dn={activate(){window.document.addEventListener("click",Oe)},inactivate(){window.document.removeEventListener("click",Oe)}},Sn=/Trident/.test(navigator.userAgent);Sn&&!$(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n.state=e.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function Ge(t){if(t.state==="vaadin-router-ignore")return;let{pathname:e,search:n,hash:r}=window.location;U("go",{pathname:e,search:n,hash:r})}var Rn={activate(){window.addEventListener("popstate",Ge)},inactivate(){window.removeEventListener("popstate",Ge)}},C=Pe,In=se,yn=$n,Nn=Ue,zn=Fe,je="/",Ve="./",kn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function se(t,e){for(var n=[],r=0,s=0,i="",o=e&&e.delimiter||je,h=e&&e.delimiters||Ve,a=!1,l;(l=kn.exec(t))!==null;){var d=l[0],u=l[1],c=l.index;if(i+=t.slice(s,c),s=c+d.length,u){i+=u[1],a=!0;continue}var g="",D=t[s],y=l[2],ln=l[3],hn=l[4],F=l[5];if(!a&&i.length){var ee=i.length-1;h.indexOf(i[ee])>-1&&(g=i[ee],i=i.slice(0,ee))}i&&(n.push(i),i="",a=!1);var cn=g!==""&&D!==void 0&&D!==g,un=F==="+"||F==="*",dn=F==="?"||F==="*",le=g||o,he=ln||hn;n.push({name:y||r++,prefix:g,delimiter:le,optional:dn,repeat:un,partial:cn,pattern:he?Tn(he):"[^"+A(le)+"]+?"})}return(i||s<t.length)&&n.push(i+t.substr(s)),n}function $n(t,e){return Ue(se(t,e))}function Ue(t){for(var e=new Array(t.length),n=0;n<t.length;n++)typeof t[n]=="object"&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(r,s){for(var i="",o=s&&s.encode||encodeURIComponent,h=0;h<t.length;h++){var a=t[h];if(typeof a=="string"){i+=a;continue}var l=r?r[a.name]:void 0,d;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(d=o(l[u],a),!e[h].test(d))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(u===0?a.prefix:a.delimiter)+d}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(d=o(String(l),a),!e[h].test(d))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');i+=a.prefix+d;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Tn(t){return t.replace(/([=!:$/()])/g,"\\$1")}function xe(t){return t&&t.sensitive?"":"i"}function Hn(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function Bn(t,e,n){for(var r=[],s=0;s<t.length;s++)r.push(Pe(t[s],e,n).source);return new RegExp("(?:"+r.join("|")+")",xe(n))}function Cn(t,e,n){return Fe(se(t,n),e,n)}function Fe(t,e,n){n=n||{};for(var r=n.strict,s=n.start!==!1,i=n.end!==!1,o=A(n.delimiter||je),h=n.delimiters||Ve,a=[].concat(n.endsWith||[]).map(A).concat("$").join("|"),l=s?"^":"",d=t.length===0,u=0;u<t.length;u++){var c=t[u];if(typeof c=="string")l+=A(c),d=u===t.length-1&&h.indexOf(c[c.length-1])>-1;else{var g=c.repeat?"(?:"+c.pattern+")(?:"+A(c.delimiter)+"(?:"+c.pattern+"))*":c.pattern;e&&e.push(c),c.optional?c.partial?l+=A(c.prefix)+"("+g+")?":l+="(?:"+A(c.prefix)+"("+g+"))?":l+=A(c.prefix)+"("+g+")"}}return i?(r||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(r||(l+="(?:"+o+"(?="+a+"))?"),d||(l+="(?="+o+"|"+a+")")),new RegExp(l,xe(n))}function Pe(t,e,n){return t instanceof RegExp?Hn(t,e):Array.isArray(t)?Bn(t,e,n):Cn(t,e,n)}C.parse=In;C.compile=yn;C.tokensToFunction=Nn;C.tokensToRegExp=zn;var{hasOwnProperty:Wn}=Object.prototype,ae=new Map;ae.set("|false",{keys:[],pattern:/(?:)/});function Ze(t){try{return decodeURIComponent(t)}catch(e){return t}}function Mn(t,e,n,r,s){n=!!n;let i=`${t}|${n}`,o=ae.get(i);if(!o){let l=[];o={keys:l,pattern:C(t,l,{end:n,strict:t===""})},ae.set(i,o)}let h=o.pattern.exec(e);if(!h)return null;let a=Object.assign({},s);for(let l=1;l<h.length;l++){let d=o.keys[l-1],u=d.name,c=h[l];(c!==void 0||!Wn.call(a,u))&&(d.repeat?a[u]=c?c.split(d.delimiter).map(Ze):[]:a[u]=c&&Ze(c))}return{path:h[0],keys:(r||[]).concat(o.keys),params:a}}function Ke(t,e,n,r,s){let i,o,h=0,a=t.path||"";return a.charAt(0)==="/"&&(n&&(a=a.substr(1)),n=!0),{next(l){if(t===l)return{done:!0};let d=t.__children=t.__children||t.children;if(!i&&(i=Mn(a,e,!d,r,s),i))return{done:!1,value:{route:t,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;h<d.length;){if(!o){let c=d[h];c.parent=t;let g=i.path.length;g>0&&e.charAt(g)==="/"&&(g+=1),o=Ke(c,e.substr(g),n,i.keys,i.params)}let u=o.next(l);if(!u.done)return{done:!1,value:u.value};o=null,h++}return{done:!0}}}}function Ln(t){if($(t.route.action))return t.route.action(t)}function On(t,e){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}function Gn(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`,n=(t.route||{}).path;return n&&(e+=` Resolution had failed on route: '${n}'`),e}function Pn(t,e){let{route:n,path:r}=e;if(n&&!n.__synthetic){let s={path:r,route:n};if(!t.chain)t.chain=[];else if(n.parent){let i=t.chain.length;for(;i--&&t.chain[i].route&&t.chain[i].route!==n.parent;)t.chain.pop()}t.chain.push(s)}}var W=class{constructor(e,n={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||Ln,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){We(e);let n=[...x(e)];this.root.__children=n}addRoutes(e){return We(e),this.root.__children.push(...x(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){let n=Object.assign({},this.context,_(e)?{pathname:e}:e),r=Ke(this.root,this.__normalizePathname(n.pathname),this.baseUrl),s=this.resolveRoute,i=null,o=null,h=n;function a(l,d=i.value.route,u){let c=u===null&&i.value.route;return i=o||r.next(c),o=null,!l&&(i.done||!On(d,i.value.route))?(o=i,Promise.resolve(B)):i.done?Promise.reject(Le(n)):(h=Object.assign(h?{chain:h.chain?h.chain.slice(0):[]}:{},n,i.value),Pn(h,i.value),Promise.resolve(s(h)).then(g=>g!=null&&g!==B?(h.result=g.result||g,h):a(l,d,g)))}return n.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{let d=Gn(h);if(l?console.warn(d):l=new Error(d),l.context=l.context||h,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return h.result=this.errorHandler(l),h;throw l})}static __createUrl(e,n){return new URL(e,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;let n=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,n).href;if(r.slice(0,n.length)===n)return r.slice(n.length)}};W.pathToRegexp=C;var{pathToRegexp:qe}=W,Je=new Map;function Xe(t,e,n){let r=e.name||e.component;if(r&&(t.has(r)?t.get(r).push(e):t.set(r,[e])),Array.isArray(n))for(let s=0;s<n.length;s++){let i=n[s];i.parent=e,Xe(t,i,i.__children||i.children)}}function Qe(t,e){let n=t.get(e);if(n&&n.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return n&&n[0]}function Ye(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Un(t,e={}){if(!(t instanceof W))throw new TypeError("An instance of Resolver is expected");let n=new Map;return(r,s)=>{let i=Qe(n,r);if(!i&&(n.clear(),Xe(n,t.root,t.root.__children),i=Qe(n,r),!i))throw new Error(`Route "${r}" not found`);let o=Je.get(i.fullPath);if(!o){let a=Ye(i),l=i.parent;for(;l;){let g=Ye(l);g&&(a=g.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}let d=qe.parse(a),u=qe.tokensToFunction(d),c=Object.create(null);for(let g=0;g<d.length;g++)_(d[g])||(c[d[g].name]=!0);o={toPath:u,keys:c},Je.set(a,o),i.fullPath=a}let h=o.toPath(s,e)||"/";if(e.stringifyQueryParams&&s){let a={},l=Object.keys(s);for(let u=0;u<l.length;u++){let c=l[u];o.keys[c]||(a[c]=s[c])}let d=e.stringifyQueryParams(a);d&&(h+=d.charAt(0)==="?"?d:`?${d}`)}return h}}var en=[];function Fn(t){en.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),en=t}var jn=t=>{let e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},Vn=(t,e)=>{let n=()=>{t.removeEventListener("animationend",n),e()};t.addEventListener("animationend",n)};function nn(t,e){return t.classList.add(e),new Promise(n=>{if(jn(t)){let r=t.getBoundingClientRect(),s=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;t.setAttribute("style",`position: absolute; ${s}`),Vn(t,()=>{t.classList.remove(e),t.removeAttribute("style"),n()})}else t.classList.remove(e),n()})}var xn=256;function oe(t){return t!=null}function Zn(t){let e=Object.assign({},t);return delete e.next,e}function b({pathname:t="",search:e="",hash:n="",chain:r=[],params:s={},redirectFrom:i,resolver:o},h){let a=r.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:t,search:e,hash:n,routes:a,route:h||a.length&&a[a.length-1]||null,params:s,redirectFrom:i,getUrl:(l={})=>J(E.pathToRegexp.compile(tn(a))(Object.assign({},s,l)),o)}}function rn(t,e){let n=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:n}}}function Kn(t,e){e.location=b(t);let n=t.chain.map(r=>r.route).indexOf(t.route);return t.chain[n].element=e,e}function X(t,e,n){if($(t))return t.apply(n,e)}function sn(t,e,n){return r=>{if(r&&(r.cancel||r.redirect))return r;if(n)return X(n[t],e,n)}}function qn(t,e){if(!Array.isArray(t)&&!q(t))throw new Error(v(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];let n=x(t);for(let r=0;r<n.length;r++)Ce(n[r]),e.__children.push(n[r])}function Q(t){if(t&&t.length){let e=t[0].parentNode;for(let n=0;n<t.length;n++)e.removeChild(t[n])}}function J(t,e){let n=e.__effectiveBaseUrl;return n?e.constructor.__createUrl(t.replace(/^\//,""),n).pathname:t}function tn(t){return t.map(e=>e.path).reduce((e,n)=>n.length?e.replace(/\/$/,"")+"/"+n.replace(/^\//,""):e,"")}var E=class extends W{constructor(e,n){let r=document.head.querySelector("base"),s=r&&r.getAttribute("href");super([],Object.assign({baseUrl:s&&W.__createUrl(s,document.URL).pathname.replace(/[^\/]*$/,"")},n));this.resolveRoute=o=>this.__resolveRoute(o);let i=E.NavigationTrigger;E.setTriggers.apply(E,Object.keys(i).map(o=>i[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=b({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){let n=e.route,r=Promise.resolve();$(n.children)&&(r=r.then(()=>n.children(Zn(e))).then(i=>{!oe(i)&&!$(n.children)&&(i=n.children),qn(i,n)}));let s={redirect:i=>rn(e,i),component:i=>{let o=document.createElement(i);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(e))return X(n.action,[e,s],n)}).then(i=>{if(oe(i)&&(i instanceof HTMLElement||i.redirect||i===B))return i;if(_(n.redirect))return s.redirect(n.redirect);if(n.bundle)return wn(n.bundle).then(()=>{},()=>{throw new Error(v(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(i=>{if(oe(i))return i;if(_(n.component))return s.component(n.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),n||this.__onNavigationEvent(),this.ready}render(e,n){let r=++this.__lastStartedRenderId,s=Object.assign({search:"",hash:""},_(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(s).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){let o=this.__previousContext;if(i===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=b(i),n&&this.__updateBrowserHistory(i,r===1),U("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,o),this.__previousContext=i,this.location;this.__addAppearingContent(i,o);let h=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,o),h.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(r===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(s),Q(this.__outlet&&this.__outlet.children),this.location=b(Object.assign(s,{resolver:this})),U("error",Object.assign({router:this,error:i},s)),i}),this.ready}__fullyResolveChain(e,n=e){return this.__findComponentContextAfterAllRedirects(n).then(r=>{let i=r!==n?r:e,h=J(tn(r.chain),r.resolver)===r.pathname,a=(l,d=l.route,u)=>l.next(void 0,d,u).then(c=>c===null||c===B?h?l:d.parent!==null?a(l,d.parent,c):c:c);return a(r).then(l=>{if(l===null||l===B)throw Le(i);return l&&l!==B&&l!==r?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){let n=e.result;return n instanceof HTMLElement?(Kn(e,n),Promise.resolve(e)):n.redirect?this.__redirect(n.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(v(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${En(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(n=>n===this.__previousContext||n===e?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(e){let n=this.__previousContext||{},r=n.chain||[],s=e.chain,i=Promise.resolve(),o=()=>({cancel:!0}),h=a=>rn(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,s.length)&&!(r[a].route!==s[a].route||r[a].path!==s[a].path&&r[a].element!==s[a].element||!this.__isReusableElement(r[a].element,s[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=s.length===r.length&&e.__divergedChainIndex==s.length&&this.__isReusableElement(e.result,n.result),e.__skipAttach){for(let a=s.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},r[a]);for(let a=0;a<s.length;a++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:h},s[a]),r[a].element.location=b(e,r[a].route)}else for(let a=r.length-1;a>=e.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},r[a])}if(!e.__skipAttach)for(let a=0;a<s.length;a++)a<e.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=b(e,r[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:h},s[a]),s[a].element&&(s[a].element.location=b(e,s[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,n,r,s){let i=b(n);return e.then(o=>{if(this.__isLatestRender(n))return sn("onBeforeLeave",[i,r,this],s.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,n,r,s){let i=b(n,s.route);return e.then(o=>{if(this.__isLatestRender(n))return sn("onBeforeEnter",[i,r,this],s.element)(o)})}__isReusableElement(e,n){return e&&n?this.__createdByRouter.get(e)&&this.__createdByRouter.get(n)?e.localName===n.localName:e===n:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,n,r){if(n>xn)throw new Error(v(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(v(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:n="",hash:r=""},s){if(window.location.pathname!==e||window.location.search!==n||window.location.hash!==r){let i=s?"replaceState":"pushState";window.history[i](null,document.title,e+n+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,n){let r=this.__outlet;for(let s=0;s<e.__divergedChainIndex;s++){let i=n&&n.chain[s].element;if(i)if(i.parentNode===r)e.chain[s].element=i,r=i;else break}return r}__addAppearingContent(e,n){this.__ensureOutlet(),this.__removeAppearingContent();let r=this.__copyUnchangedElements(e,n);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let s=r;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){let o=e.chain[i].element;o&&(s.appendChild(o),this.__addedByRouter.set(o,!0),s===r&&this.__appearingContent.push(o),s=o)}}__removeDisappearingContent(){this.__disappearingContent&&Q(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Q(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,n){if(!!n)for(let r=n.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){let s=n.chain[r].element;if(!!s)try{let i=b(e);X(s.onAfterLeave,[i,{},n.resolver],s)}finally{this.__disappearingContent.indexOf(s)>-1&&Q(s.children)}}}__runOnAfterEnterCallbacks(e){for(let n=e.__divergedChainIndex;n<e.chain.length&&this.__isLatestRender(e);n++){let r=e.chain[n].element||{},s=b(e,e.chain[n].route);X(r.onAfterEnter,[s,{},e.resolver],r)}}__animateIfNeeded(e){let n=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],s=[],i=e.chain,o;for(let h=i.length;h>0;h--)if(i[h-1].route.animate){o=i[h-1].route.animate;break}if(n&&r&&o){let h=q(o)&&o.leave||"leaving",a=q(o)&&o.enter||"entering";s.push(nn(n,h)),s.push(nn(r,a))}return Promise.all(s).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){let{pathname:n,search:r,hash:s}=e?e.detail:window.location;_(this.__normalizePathname(n))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:n,search:r,hash:s},!0))}static setTriggers(...e){Fn(e)}urlForName(e,n){return this.__urlForName||(this.__urlForName=Un(this)),J(this.__urlForName(e,n),this)}urlForPath(e,n){return J(E.pathToRegexp.compile(e)(n),this)}static go(e){let{pathname:n,search:r,hash:s}=_(e)?this.__createUrl(e,"http://a"):e;return U("go",{pathname:n,search:r,hash:s})}},Jn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Y=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Xn(){function t(){return!0}return an(t)}function nt(){try{return Qn()?!0:Yn()?Y?!et():!Xn():!1}catch(t){return!1}}function Qn(){return localStorage.getItem("vaadin.developmentmode.force")}function Yn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function et(){return!!(Y&&Object.keys(Y).map(e=>Y[e]).filter(e=>e.productionMode).length>0)}function an(t,e){if(typeof t!="function")return;let n=Jn.exec(t.toString());if(n)try{t=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return t(e)}window.Vaadin=window.Vaadin||{};var on=function(t,e){if(window.Vaadin.developmentMode)return an(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=nt());function tt(){}var rt=function(){if(typeof on=="function")return on(tt)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});rt();E.NavigationTrigger={POPSTATE:Rn,CLICK:Dn};var it=document.querySelector("output"),V=new E(it);V.setRoutes([{path:"/",component:"wohnfels-start"},{path:"/rentals/",component:"wohnfels-rentals"},{path:"/rentals/:flatId",component:"wohnfels-rentals-detail"},{path:"/contact",component:"wohnfels-contact"},{path:"/impressum",component:"wohnfels-impressum"}]);export{V as router};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=app.js.map
