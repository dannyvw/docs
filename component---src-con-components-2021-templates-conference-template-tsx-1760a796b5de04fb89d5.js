(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0sn9":function(e,t,a){"use strict";var n=a("zLVn"),r=a("q1tI"),l=a.n(r),c=a("TSYQ"),i=a.n(c),s=["children","className","empty","disabled","to","size","external"];t.a=function(e){var t=e.children,a=e.className,r=e.empty,c=e.disabled,o=e.to,m=e.size,u=void 0===m?"large":m,d=e.external,f=void 0!==d&&d,p=Object(n.a)(e,s),h=i()("conf__button",{small:"small"===u,empty:r,disabled:c},a);return o?l.a.createElement("a",Object.assign({className:h,href:o},f?{target:"_blank",rel:"noopener noreferrer"}:{}),t):l.a.createElement("div",Object.assign({className:h},p),t)}},"78kH":function(e,t,a){},DRRC:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TJpk"),c=a("DZGb"),i=a("TSYQ"),s=a.n(i),o=a("0sn9"),m=a("thtY"),u=a("v46D"),d=a("vxqf");a("78kH");t.a=function(e){var t=e.extraContent,a=e.trackSubtitle,n=e.pageContext,i=n.html,f=n.title,p=n.speakers,h=n.start,v=n.end,g=n.date,E=Object(m.a)(p);return r.a.createElement("div",{className:"conf__conference"},r.a.createElement(l.Helmet,null,r.a.createElement("title",null,f),r.a.createElement("meta",{property:"og:title",content:f}),r.a.createElement("meta",{name:"twitter:title",content:f})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"conference__header"},r.a.createElement(c.a,{dark:!0,lined:!0,h1:!0,small:50<f.length},r.a.createElement("strong",null,f)),r.a.createElement(r.a.Fragment,null,a,g?r.a.createElement("p",{className:"header__date"},Object(u.a)(g,h,v)):null)),r.a.createElement("div",{className:"conference__content"},r.a.createElement("div",{className:s()("conference__speaker",{minified:1<E.length})},E.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(d.a,{speaker:e,hoverable:!1,social:!1}),r.a.createElement(o.a,{className:"white square",size:"small",to:e.slug},"See speaker details"))}))),r.a.createElement("div",{className:"conference__abstract dotted-corner corner-bottom"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),t))))}},DZGb:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TSYQ"),c=a.n(l);t.a=function(e){var t=e.children,a=e.dark,n=void 0!==a&&a,l=e.lined,i=void 0!==l&&l,s=e.h1,o=void 0!==s&&s,m=e.small,u=void 0!==m&&m;return r.a.createElement("div",{className:c()("conf__section-title",{dark:n,small:u})},o?r.a.createElement("h1",{className:"h2 title__layer"},t):r.a.createElement("h2",{className:"title__layer"},t),r.a.createElement("div",{className:c()("h2",{lined:i})},t))}},KPLa:function(e,t,a){"use strict";t.a=[{id:"EN",type:"English-speaking track",date:"10 sep, 2021"},{id:"FR",type:"French-speaking track",date:"10 sep, 2021"}]},SU53:function(e,t,a){"use strict";var n=a("q1tI"),r=Object(n.createContext)(null);t.a=r},Tz3w:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.speaker,a=t.github,n=t.twitter;return r.a.createElement("div",{className:"social__list"},a&&r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-github"})),n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"})))}},rhpq:function(e,t,a){"use strict";a("K/os");var n=a("q1tI"),r=a.n(n),l=a("Wgwc"),c=a.n(l),i=a("TJpk"),s=a.n(i),o={logoLink:"/",backLink:{to:"/con/",text:"Back to current edition"},links:[{to:"/con/2021/",text:"Home",mobileOnly:!0},{to:"/con/2021/speakers",text:"Speakers"},{to:"/con/2021/#schedule",text:"Schedule"},{to:"/con/2021/#venue",text:"Venue"},{to:"/con/2021/review",text:"Review"}]},m=[{title:"The event",links:[{title:"Speakers",link:"/con/2021/speakers"},{title:"Schedule",link:"/con/2021/#schedule"},{title:"Venue",link:"/con/2021/#venue"},{title:"Current edition",link:"/con/2022/"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2021/code-of-conduct"},{title:"FAQ",link:"/con/2021/faq"},{title:"Transparency",link:"/con/2021/transparency"}]}],u=[{id:1,title:"On-site edition",languages:"French and english-speaking tracks",offers:[{title:"Early bird",limitDate:"2021-04-30",price:69},{title:"Regular ticket",limitDate:"2021-08-20",price:89},{title:"Late bird",limitDate:"2021-09-09",price:109}]},{id:2,title:"Online edition",languages:"English-speaking track",offers:[{title:"Online ticket",limitDate:"2021-09-08",price:39}]}],d=a("3nhQ"),f=a("SU53"),p=a("YwZP"),h={TITLE:"API Platform Conference 2021",DESCRIPTION:"The first international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook.png",URL:"https://api-platform.com/con/2021/"},v=a("RHlq");t.a=function(e){var t=e.logoAlwaysVisible,a=e.children,l=u.map((function(e){var t=e.offers.sort((function(e,t){return c()(e.limitDate).isAfter(c()(t.limitDate))?1:c()(t.limitDate).isAfter(c()(e.limitDate))?-1:0})),a=t.find((function(e){return c()(e.limitDate).isAfter(c()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:a.price+".00",name:1===e.offers.length?e.title:e.title+" - "+a.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2021-tickets-146559873527",validFrom:"2021-03-19"}})),i={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2021",description:"The first international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2021/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2021-09-10",endDate:"2021-09-10",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2021/"}],image:h.OG_IMAGE,offers:l},g=Object(p.useLocation)().pathname,E=Object(n.useState)([]),k=E[0],b=E[1],y=Object(n.useMemo)((function(){var e=null==k?void 0:k[k.length-1];return e&&"home"!==e&&k.length?g+"#"+k[k.length-1]:g}),[k,g]);return Object(n.useEffect)((function(){window.history.replaceState({},"",y)}),[y]),r.a.createElement(d.a.Provider,{value:{nav:o,activeLink:y,edition:"2021"}},r.a.createElement(f.a.Provider,{value:{sectionsVisibles:k,setSectionsVisibles:b}},r.a.createElement(s.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(i)),r.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),r.a.createElement(v.a,{edition:"2021",meta:h,logoAlwaysVisible:t,footer:m},a)))}},thtY:function(e,t,a){"use strict";var n=a("q1tI"),r=a("3nhQ"),l=a("Wbzz");t.a=function(e){var t=Object(n.useContext)(r.a).edition;return Object(l.useStaticQuery)("3395815452").allMarkdownRemark.nodes.filter((function(t){return!e||e.includes(t.frontmatter.id)})).filter((function(e){return e.fields.collection==="con"+t})).map((function(e){return Object.assign({},e.frontmatter,{slug:"/con/"+t+e.fields.slug})}))}},v46D:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return m}));var n=a("Wgwc"),r=a.n(n),l=function(e,t){var a=e.start?r()(e.date+"T"+e.start):r()(),n=t.start?r()(t.date+"T"+t.start):r()();return a.isBefore(n)?-1:a.isAfter(n)?1:0},c=function(e){return r()(e).format("ll")},i=function(e,t){return r()(e+"T"+t).format("HH:mm A")},s=function(e){return e&&12>=parseInt(e.split(":")[0],10)},o=function(e,t,a){return t&&a?i(e,t)+" - "+i(e,a):c(e)},m=function(e,t,a){return t&&a?c(e)+" · "+o(e,t,a):c(e)}},vxqf:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("TJpk"),c=a.n(l),i=a("TSYQ"),s=a.n(i),o=a("Wbzz"),m=a("f0fW"),u=a("Tz3w");t.a=function(e){var t=e.speaker,a=e.social,n=void 0===a||a,l=e.hoverable,i=void 0===l||l,d=t.id,f=t.name,p=t.job,h=t.company,v=Object(o.useStaticQuery)("2760183193").allFile.nodes.find((function(e){return e.name===d})),g=v&&Object(m.j)(v),E={"@context":"http://schema.org","@type":"Person",name:t.name,jobTitle:t.job+" "+(t.company?"@ "+t.company:"")};return r.a.createElement("div",{className:"conf__speaker-resume"},r.a.createElement(c.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E))),r.a.createElement("a",{className:s()("conf__speaker-content",{hoverable:i}),href:t.slug},r.a.createElement("div",{className:"circle__effect"},r.a.createElement("div",{className:"circle"},r.a.createElement(m.a,{image:g,className:"circle__picture",alt:f}),r.a.createElement("svg",{className:"circle__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 281.49 281.49"},r.a.createElement("path",{d:"M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z"}),r.a.createElement("path",{d:"M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z"})))),r.a.createElement("div",{className:"infos"},r.a.createElement("h3",{className:"h5"},f),r.a.createElement("p",{className:"overline lined"},p,r.a.createElement("br",null),h?r.a.createElement(r.a.Fragment,null,"@ ",r.a.createElement("strong",null,h)):null))),n&&r.a.createElement(u.a,{speaker:t}))}},x3sr:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("DRRC"),c=a("rhpq"),i=a("KPLa");t.default=function(e){var t=e.pageContext,a=t.track&&i.a.find((function(e){return e.id===t.track}));return r.a.createElement(c.a,{logoAlwaysVisible:!0},r.a.createElement(l.a,Object.assign({},e,{trackSubtitle:r.a.createElement("p",{className:"overline header__subtitle"},r.a.createElement("strong",null,"Track #"+t.track+" "),"- "+a.type)})))}}}]);
//# sourceMappingURL=component---src-con-components-2021-templates-conference-template-tsx-1760a796b5de04fb89d5.js.map