(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(t,e,r){"use strict";r.r(e);var o={components:{},computed:{ticketsUrl:function(){return"https://www.woutick.es/evento/516/entradas-pulpocon-19"}}},n=r(5),c=Object(n.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"hero"}},[e("a",{attrs:{id:"home"}}),this._v(" "),e("div",{staticClass:"cover"}),this._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid-1440"},[this._m(0),this._v(" "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#tickets",expression:"'#tickets'"}],staticClass:"btn btn-uppercase btn-lg",attrs:{href:"/#tickets"}},[e("i",{staticClass:"fa fa-ticket-alt"}),this._v(" "+this._s(this.$t("buy-tickets-cta"))+"\n        ")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"hero-title"},[e("img",{attrs:{src:"/logoHoriz.png",alt:"PHPulpo Con 2019"}})])}],!1,null,null,null).exports,l={components:{}},v=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section",attrs:{id:"hype"}},[r("div",{staticClass:"container-fluid-900"},[r("h2",{staticClass:"section-title"},[t._v("\n      "+t._s(t.$t("comingSoon"))+"\n    ")]),t._v(" "),r("div",{staticClass:"late-motiv",domProps:{innerHTML:t._s(t.$t("lateMotiv"))}}),t._v(" "),r("h3",{staticClass:"section-subtitle"},[t._v("\n      "+t._s(t.$t("stayConnected"))+"\n    ")]),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-row contact"},[e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"mailto:hello@pulpocon.es"}},[e("i",{staticClass:"fa fa-envelope"}),this._v(" hello@pulpocon.es\n        ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"https://twitter.com/phpulpocon"}},[e("i",{staticClass:"fab fa-twitter"}),this._v(" PHPulpocon\n        ")])])])}],!1,null,null,null).exports,_={components:{}},d=Object(n.a)(_,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section",attrs:{id:"presentation"}},[r("div",{staticClass:"container-fluid-900"},[r("div",{staticClass:"late-motiv",domProps:{innerHTML:t._s(t.$t("lateMotiv"))}}),t._v(" "),r("h3",{staticClass:"section-subtitle"},[t._v("\n      "+t._s(t.$t("stayConnected"))+"\n    ")]),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-row contact"},[e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"mailto:hello@pulpocon.es"}},[e("i",{staticClass:"fa fa-envelope"}),this._v(" hello@pulpocon.es\n        ")])]),this._v(" "),e("div",{staticClass:"col-xs-12 col-sm-6"},[e("a",{attrs:{href:"https://twitter.com/phpulpocon"}},[e("i",{staticClass:"fab fa-twitter"}),this._v(" PHPulpocon\n        ")])])])}],!1,null,null,null).exports,h={name:"Sponsor",props:{sponsor:{type:Object,required:!0}}},m=Object(n.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sponsor"},[e("a",{attrs:{href:this.sponsor.url,title:this.sponsor.name,target:"_blank"}},[e("img",{attrs:{src:this.sponsor.logo,alt:this.sponsor.name}})])])},[],!1,null,null,null).exports,f={components:{Sponsor:m},computed:{sponsors:function(){return this.$store.state.sponsors}}},C=Object(n.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"sponsors"}},[e("div",{staticClass:"container-fluid-1440"},[e("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:3,"per-page-custom":[[0,1],[769,3]]}},this._l(this.sponsors.diamond,function(t,r){return e("slide",{key:r},[e("sponsor",{attrs:{sponsor:t}})],1)}),1)],1)])},[],!1,null,null,null).exports,k={components:{Sponsor:m},computed:{sponsors:function(){return this.$store.state.sponsors},images:function(){return this.$store.state.locationImages}}},w=Object(n.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section blue",attrs:{id:"location"}},[r("div",{staticClass:"container-fluid-1440"},[r("h2",{staticClass:"section-title"},[r("i",{staticClass:"fa fa-map-pin"}),t._v("  "+t._s(t.$t("menu.location"))+"\n      ")])]),t._v(" "),r("div",{staticClass:"content-wrapper container-fluid-1440"},[t._m(0),t._v(" "),r("div",{staticClass:"grid-row"},[r("div",{staticClass:"col-xs-12 col-sm-6"},[r("div",{staticClass:"gallery grid-row"},t._l(t.images,function(t,e){return r("div",{key:e,staticClass:"col-xs-6 mb-2"},[r("img",{attrs:{src:t.src,alt:"Auditorio Sede Afundación"}})])}),0)]),t._v(" "),r("div",{staticClass:"col-xs-12 col-sm-6"},[r("div",{staticClass:"map-wrapper"},[r("no-ssr",[r("iframe",{attrs:{width:"100%",height:"407",src:"https://maps.google.com/maps?width=100%&height=600&hl=es&q=Sede%20Afundacion%20Vigo+(PHPulpo%20Con)&ie=UTF8&t=&z=17&iwloc=B&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}},[r("a",{attrs:{href:"https://www.mapsdirections.info/calcular-ruta.html"}},[t._v("mapas y direcciones")])])])],1)])]),t._v(" "),t._m(1)])]),t._v(" "),r("section",{staticClass:"section"},[r("div",{staticClass:"container-fluid-1440"},[r("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:5,"per-page-custom":[[0,1],[769,5]]}},t._l(t.sponsors.bronze.slice(0,5),function(t,e){return r("slide",{key:e},[r("sponsor",{attrs:{sponsor:t}})],1)}),1),t._v(" "),t.sponsors.bronze.slice(5,10).length>0?r("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:5,"per-page-custom":[[0,1],[769,5]]}},t._l(t.sponsors.bronze.slice(5,10),function(t,e){return r("slide",{key:e},[r("sponsor",{attrs:{sponsor:t}})],1)}),1):t._e()],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("h3",[e("a",{attrs:{href:"https://www.afundacion.org/es/centros/centro/centro_social_afundacion_vigo",target:"_blank"}},[this._v("\n            Auditorio Sede Afundación Vigo\n            "),e("i",{staticClass:"fa fa-info-circle"})])]),this._v(" "),e("h4",[this._v("\n          c/ Policarpo Sanz, 24 - 26, Vigo. 36202, Pontevedra\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("ul",[e("li",{staticClass:"bybus"},[e("i",{staticClass:"fa fa-bus"}),this._v(" "),e("strong",[this._v("Autobús urbano")]),this._v(" "),e("br"),this._v("\n            Líneas: C3, CAC, C7, L11, 12B, C4A, C5A, C4B, L8, C5B, 12A, C9A. L17, C9A, C15C. "),e("a",{attrs:{href:"https://moovitapp.com/?to=R%C3%BAa%20Policarpo%20Sanz%2024&tll=42.237556_-8.722738&customerId=5546&metroId=3841&lang=es"}},[this._v("Calcular ruta")])])])])}],!1,null,null,null).exports,y={components:{}},$=Object(n.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"schedule"}},[e("div",{staticClass:"container-fluid-1440"},[e("h2",{staticClass:"section-title"},[this._v("\n      "+this._s(this.$t("menu.schedule"))+"\n    ")])]),this._v(" "),this._m(0)])},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid-900"},[r("div",{staticClass:"schedule-wrapper"},[r("table",[r("tbody",[r("tr",{staticClass:"break"},[r("td",{staticClass:"time"},[t._v("\n              09:00"),r("br"),t._v("10:00\n            ")]),t._v(" "),r("td",[t._v("\n              Badge pickup & Desayuno\n            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              10:00"),r("br"),t._v("10:10\n            ")]),t._v(" "),r("td",[t._v("\n              Apertura\n            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              10:10"),r("br"),t._v("10:50\n            ")]),t._v(" "),r("td",[r("h4",[t._v("Mi aplicación es un monolito… ¡y qué!")]),t._v(" "),r("a",{attrs:{href:"#rolando-caldas"}},[t._v("Rolando Caldas")])])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              11:00"),r("br"),t._v("11:50\n            ")]),t._v(" "),r("td",[r("h4",{staticClass:"tbc"},[t._v("Título por confirmar")]),t._v(" "),r("a",{attrs:{href:"#isabel-garrido"}},[t._v("Isabel Garrido")])])]),t._v(" "),r("tr",{staticClass:"break"},[r("td",{staticClass:"time"},[t._v("\n              12:00"),r("br"),t._v("12:30\n            ")]),t._v(" "),r("td",[t._v("\n              Descanso\n            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              12:30"),r("br"),t._v("13:20\n            ")]),t._v(" "),r("td",[r("h4",{staticClass:"tbc"},[t._v("Título por confirmar")]),t._v(" "),r("a",{attrs:{href:"#jose-corral"}},[t._v("José Corral")])])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              13:30"),r("br"),t._v("14:20\n            ")]),t._v(" "),r("td",[r("h4",{staticClass:"tbc"},[t._v("Título por confirmar")]),t._v(" "),r("a",{attrs:{href:"#javier-ferrer"}},[t._v("Javier Ferrer")]),t._v(" & "),r("a",{attrs:{href:"#rafa-gomez"}},[t._v("Rafa Gómez")])])]),t._v(" "),r("tr",{staticClass:"break"},[r("td",{staticClass:"time"},[t._v("\n              14:30"),r("br"),t._v("16:00\n            ")]),t._v(" "),r("td",[t._v("\n              Comida\n            ")])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              16:00"),r("br"),t._v("16:50\n            ")]),t._v(" "),r("td",[r("h4",[t._v("Be SMART my tests")]),t._v(" "),r("a",{attrs:{href:"#mavi-jimenez"}},[t._v("Mavi Jimenez")])])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              17:00"),r("br"),t._v("17:50\n            ")]),t._v(" "),r("td",[r("h4",{staticClass:"tbc"},[t._v("Título por confirmar")]),t._v(" "),r("a",{attrs:{href:"#carlos-buenosvinos"}},[t._v("Carlos Buenosvinos")])])]),t._v(" "),r("tr",[r("td",{staticClass:"time"},[t._v("\n              18:00\n            ")]),t._v(" "),r("td",[t._v("\n              Clausura\n            ")])])])])])])}],!1,null,null,null).exports,x={computed:{ticketsUrl:function(){return"https://www.woutick.es/evento/516/entradas-pulpocon-19"}}},P=Object(n.a)(x,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section blue",attrs:{id:"tickets"}},[r("div",{staticClass:"container-fluid-1440"},[r("h2",{staticClass:"section-title"},[r("i",{staticClass:"fa fa-ticket-alt"}),t._v(" "+t._s(t.$t("menu.tickets"))+"\n      ")])]),t._v(" "),r("div",{staticClass:"content-wrapper container-fluid-1440"},[r("div",{staticClass:"summary"},[r("p",{domProps:{innerHTML:t._s(t.$t("section.tickets"))}}),t._v(" "),r("div",{staticClass:"cta"},[r("a",{staticClass:"btn btn-alt btn-uppercase btn-xlg",attrs:{href:t.ticketsUrl}},[t._v("\n            "+t._s(t.$t("buy-tickets"))+"\n          ")]),t._v(" "),t._m(0)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"woutick"},[this._v("\n            Servicio proporcionado por "),e("img",{attrs:{src:"/i/woutick.png",alt:"WouTick"}})])}],!1,null,null,null).exports,S={},E=Object(n.a)(S,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"section blue",attrs:{id:"sponsorization"}},[r("div",{staticClass:"container-fluid-1440"},[r("h2",{staticClass:"section-title"},[r("i",{staticClass:"fas fa-award"}),t._v(" "+t._s(t.$t("sponsorization"))+"\n      ")])]),t._v(" "),r("div",{staticClass:"content-wrapper container-fluid-1440"},[r("div",{staticClass:"summary center"},[r("p",{domProps:{innerHTML:t._s(t.$t("section.sponsorization"))}}),t._v(" "),r("div",{staticClass:"cta"},[r("a",{staticClass:"btn btn-alt btn-uppercase btn-xlg",attrs:{href:"http://bit.ly/dossierPulpoCon19"}},[r("i",{staticClass:"fa fa-download"}),t._v(" "+t._s(t.$t("download-dossier"))+"\n          ")])])])])])])},[],!1,null,null,null).exports,j={web:"fa fa-globe"},z={name:"Speaker",filters:{toFontAwesome:function(t){return t?t=void 0!==j[t]?j[t]:"fab fa-".concat(t):""}},props:{speaker:{type:Object,required:!0}},data:function(){return{showMore:!1,readmoreText:this.$t("read-more")}},methods:{readmoreToggle:function(){this.showMore=!this.showMore,this.readmoreText=this.showMore?this.$t("read-less"):this.$t("read-more")}}},A={name:"Speakers",components:{Speaker:Object(n.a)(z,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"speaker"},[r("a",{staticClass:"anchor",attrs:{name:t.speaker.id}}),t._v(" "),r("div",{staticClass:"grid-row"},[r("div",{staticClass:"aside-wrapper col-xs-12 col-sm-3"},[r("div",{staticClass:"picture-wrapper"},[r("span",{staticClass:"picture-mask"}),t._v(" "),r("img",{staticClass:"picture",attrs:{src:t.speaker.picture,alt:t.speaker.name}})]),t._v(" "),t.speaker.links?r("ul",{staticClass:"links"},t._l(t.speaker.links,function(link,e){return r("li",{key:e},[r("a",{staticClass:"link",attrs:{href:link,target:"_blank"}},[r("i",{class:t._f("toFontAwesome")(e)})])])}),0):t._e()]),t._v(" "),r("div",{staticClass:"content-wrapper col-xs-12 col-sm-9"},[r("h3",{staticClass:"name"},[t._v("\n        "+t._s(t.speaker.name)+"\n      ")]),t._v(" "),r("h4",{staticClass:"position"},[t._v("\n        "+t._s(t.speaker.position)+"\n      ")]),t._v(" "),r("div",{class:{"bio-wrapper":!0,collapsed:!t.showMore}},[r("div",{staticClass:"bio"},t._l(t.speaker.bio,function(e,o){return r("p",{key:o},[t._v("\n            "+t._s(e)+"\n          ")])}),0),t._v(" "),t.speaker.bio.length>0?r("span",{staticClass:"read-more",on:{click:t.readmoreToggle}},[t._v("\n          "+t._s(t.readmoreText)+"\n        ")]):t._e()])])])])},[],!1,null,null,null).exports,Sponsor:m},computed:{speakers:function(){return this.$store.state.speakers},sponsors:function(){return this.$store.state.sponsors}}},T={components:{Sponsor:m},computed:{sponsors:function(){return this.$store.state.sponsors}}},O={components:{Hype:v,Presentation:d,Location:w,Tickets:P,Sponsorization:E,Sponsors:C,Hero:c,Schedule:$,Speakers:Object(n.a)(A,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section",attrs:{id:"speakers"}},[r("div",{staticClass:"container-fluid-1440"},[r("h2",{staticClass:"section-title"},[t._v("\n      "+t._s(t.$t("menu.speakers"))+"\n    ")]),t._v(" "),r("div",{staticClass:"grid-row"},t._l(t.speakers.slice(0,2),function(t,e){return r("div",{key:e,staticClass:"col-xs-12 col-sm-6"},[r("speaker",{attrs:{speaker:t}})],1)}),0),t._v(" "),r("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:3,"per-page-custom":[[0,1],[769,3]]}},t._l(t.sponsors.gold.slice(0,3),function(t,e){return r("slide",{key:e},[r("sponsor",{attrs:{sponsor:t}})],1)}),1),t._v(" "),r("div",{staticClass:"grid-row"},t._l(t.speakers.slice(2,4),function(t,e){return r("div",{key:e,staticClass:"col-xs-12 col-sm-6"},[r("speaker",{attrs:{speaker:t}})],1)}),0),t._v(" "),r("carousel",{staticClass:"sponsors sponsors-2",attrs:{autoplay:!0,perPage:2,"per-page-custom":[[0,1],[769,2]]}},t._l(t.sponsors.gold.slice(3,5),function(t,e){return r("slide",{key:e},[r("sponsor",{attrs:{sponsor:t}})],1)}),1),t._v(" "),r("div",{staticClass:"grid-row"},t._l(t.speakers.slice(4,9999),function(t,e){return r("div",{key:e,staticClass:"col-xs-12 col-sm-6"},[r("speaker",{attrs:{speaker:t}})],1)}),0)],1)])},[],!1,null,null,null).exports,Supporters:Object(n.a)(T,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"supporters"}},[e("div",{staticClass:"container-fluid-1440"},[e("h3",[this._v(this._s(this.$t("sponsors.supporter")))]),this._v(" "),e("carousel",{staticClass:"sponsors",attrs:{autoplay:!0,perPage:6,"per-page-custom":[[0,1],[769,6]]}},this._l(this.sponsors.supporter,function(t,r){return e("slide",{key:r},[e("sponsor",{attrs:{sponsor:t}})],1)}),1)],1)])},[],!1,null,null,null).exports},data:function(){return{show:{hype:!1,presentation:!0,tickets:!0,sponsorization:!0,sponsors:!0,speakers:!0,location:!0,schedule:!0,supporters:!0}}},head:function(){return{meta:[{hid:"og:title",property:"og:title",content:"PulpoCon 19"},{hid:"og:description",property:"og:description",content:"Pulpo Con es una conferencia que se celebrará en Vigo el 7 de Septiembre de 2019 que acercará el movimiento “crafter” y el “clean code” a la comunidad de desarrolladores de Galicia y su área de influencia."},{hid:"og:image",property:"og:image",content:"https://pulpocon.es/og-image.jpg"},{property:"twitter:card",content:"summary_large_image"}]}}},M=Object(n.a)(O,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"web-wrapper"},[r("hero"),t._v(" "),t.show.sponsors?r("sponsors"):t._e(),t._v(" "),t.show.hype?r("hype"):t._e(),t._v(" "),t.show.presentation?r("presentation"):t._e(),t._v(" "),t.show.sponsorization?r("sponsorization"):t._e(),t._v(" "),t.show.speakers?r("speakers"):t._e(),t._v(" "),t.show.location?r("location"):t._e(),t._v(" "),t.show.schedule?r("schedule"):t._e(),t._v(" "),t.show.tickets?r("tickets"):t._e(),t._v(" "),t.show.supporters?r("supporters"):t._e()],1)},[],!1,null,null,null);e.default=M.exports}}]);