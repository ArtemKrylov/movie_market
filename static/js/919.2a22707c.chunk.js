"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[919],{1214:function(e,n,t){t.d(n,{Z:function(){return c}});var r,a=t(168),o=t(6444),i=(t(2791),t(4169)),s=t(184),c=(0,o.ZP)((function(e){var n=e.title,t=e.className,r=void 0===t?"section":t,a=e.children;return(0,s.jsx)("section",{className:"section ".concat(r),children:(0,s.jsxs)(i.W2,{className:"container",children:[n&&(0,s.jsx)("h3",{className:"".concat(r,"__title section-title"),children:n}),a]})})}))(r||(r=(0,a.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n\n  & .section-title {\n    margin-bottom: 5px;\n\n    text-align: center;\n    font-weight: 900;\n    font-family: 'Tourney', cursive;\n  }\n\n  "," {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n  "," {\n    padding-top: 25px;\n    padding-bottom: 25px;\n  }\n"])),(function(e){return e.theme.media.tablet}),(function(e){return e.theme.media.desktop}))},8919:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(5861),a=t(9439),o=t(4687),i=t.n(o),s=t(2791),c=t(1087),l=t(9014),u=t(4169);var d,p={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},m=t(168),h=t(6444),x=h.ZP.form(d||(d=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 15px;\n  padding: 30px 0;\n\n  "," {\n    flex-direction: row;\n  }\n\n  & .movieSearch__input {\n    padding: 5px 10px;\n    border: 1px solid ",";\n    border-radius: ",";\n    transition: box-shadow ",";\n\n    &:hover,\n    &:focus {\n      box-shadow: ",";\n      outline: none;\n    }\n  }\n"])),(function(e){return e.theme.media.desktop}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.cubic}),(function(e){return e.theme.shadows.boxAccent})),f=t(184);function g(e){var n=e.handleQuery;e.value;return(0,f.jsxs)(x,{name:"movieSearch",className:"movieSearch",onSubmit:function(e){e.preventDefault();var t=e.target.elements.queryInput.value;if(/^\s*$/.test(t))return l.Am.error("Empty query! Please write something!"),void e.target.reset();n(t),e.target.reset()},children:[(0,f.jsx)("input",{type:"text",name:"queryInput",className:"movieSearch__input",required:!0,autoFocus:!0}),(0,f.jsx)(u.zx,{type:"submit",className:"movieSearch__submit",children:"Search"})]})}var y,v,b=t(1214),_=t(1140),j=t(7689),w=t(9126),q=h.ZP.li(y||(y=(0,m.Z)(["\n  padding: 10px;\n  border: 1px solid ",";\n  border-radius: ",";\n  background-color: ",";\n\n  & .queryGalleryItem__link {\n    display: inline-block;\n    margin-left: 10px;\n    margin-bottom: 10px;\n    font-weight: 600;\n    transition: color ",";\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n\n  & .queryGalleryItem__vote {\n    margin-bottom: 5px;\n    margin-left: 5px;\n    font-size: 16px;\n    font-style: italic;\n  }\n\n  & .queryGalleryItem__overviewBtn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    margin: 0 auto;\n    font-size: 18px;\n    padding: 5px 10px;\n  }\n\n  & .queryGalleryItem__overview {\n    margin-top: 15px;\n    text-align: center;\n    font-size: 16px;\n    font-style: italic;\n  }\n"])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.accent2}),(function(e){return e.theme.cubic}),(function(e){return e.theme.colors.white}));function N(e){var n=e.data,t=(0,s.useState)(!1),r=(0,a.Z)(t,2),o=r[0],i=r[1],l=n.title,d=n.id,p=n.overview,m=n.vote_average,h=n.release_date,x=(0,j.TH)();return(0,f.jsxs)(q,{className:"queryGalleryItem",children:[(0,f.jsxs)(c.rU,{to:"/movies/".concat(d),state:{from:{location:x}},className:"queryGalleryItem__link",children:["\ud83c\udf7f ",l," (",h.slice(0,4),")"]}),(0,f.jsxs)("p",{className:"queryGalleryItem__vote",children:["Average vote: ",null!==m&&void 0!==m?m:"no votes"]}),(0,f.jsxs)(u.zx,{type:"button",onClick:function(){i((function(e){return!e}))},className:"queryGalleryItem__overviewBtn",children:[(0,f.jsx)("span",{children:"Overview"}),o?(0,f.jsx)(w.jnn,{}):(0,f.jsx)(w.F0C,{})]}),o&&(0,f.jsx)("p",{className:"queryGalleryItem__overview",children:null!==p&&void 0!==p?p:"no overview"})]})}var E=h.ZP.div(v||(v=(0,m.Z)(["\n  &.queryGallery--idle,\n  &.queryGallery--rejected,\n  &.queryGallery--pending,\n  &.queryGallery--nothingFound {\n    padding: 30px 0;\n    text-align: center;\n    font-weight: 700;\n    font-size: 24px;\n    color: ",";\n    text-shadow: ",";\n  }\n\n  & .queryGallery__list {\n    display: flex;\n\n    justify-content: center;\n    flex-direction: column;\n    gap: 25px;\n  }\n"])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.shadows.fontBlack})),G=t(4585);function S(e){var n=e.querySearchResults;switch(e.status){case p.IDLE:return(0,f.jsx)(E,{className:"queryGallery--idle",children:"Search something"});case p.PENDING:return(0,f.jsxs)(E,{className:"queryGallery--pending",children:[(0,f.jsx)("p",{children:"Pending..."}),(0,f.jsx)(G.Z,{})]});case p.REJECTED:return(0,f.jsx)(E,{className:"queryGallery--rejected",children:"Something went wrong! Please, try again!"});case p.RESOLVED:return 0===n.length?(0,f.jsx)(E,{className:"queryGallery--nothingFound",children:"Nothing found!"}):(0,f.jsx)(E,{className:"queryGallery",children:(0,f.jsx)("ul",{className:"queryGallery__list",children:n.map((function(e){return(0,f.jsx)(N,{data:e},e.id)}))})});default:throw new Error("Wrong status for STATUS_MACHINE")}}var Z,I=t(6048),k=t.n(I),D=h.ZP.div(Z||(Z=(0,m.Z)(["\n  & .searchQuery {\n    margin-bottom: 15px;\n    text-align: center;\n  }\n\n  & .pagination--movies {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 5px;\n    padding: 20px 10px;\n\n    & li {\n      padding: 5px;\n      border: 1px solid ",";\n      border-radius: ",";\n      cursor: pointer;\n\n      &.disabled {\n        position: absolute;\n        width: 1px;\n        height: 1px;\n        margin: -1px;\n        padding: 0;\n        overflow: hidden;\n        border: 0;\n        clip: rect(0 0 0 0);\n      }\n\n      &.selected {\n        padding: 7px;\n        background-color: ",";\n        color: ",";\n      }\n\n      &:hover,\n      &:focus {\n        background-color: ",";\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.accent2}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.accent2}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.accent2}),(function(e){return e.theme.colors.white}));function P(){var e,n=(0,s.useState)([]),t=(0,a.Z)(n,2),o=t[0],l=t[1],u=(0,s.useState)(1),d=(0,a.Z)(u,2),m=d[0],h=d[1],x=(0,s.useState)(p.IDLE),y=(0,a.Z)(x,2),v=y[0],j=y[1],w=(0,c.lr)(),q=(0,a.Z)(w,2),N=q[0],E=q[1],G=N.get("query"),Z=null!==(e=N.get("page"))&&void 0!==e?e:1;return(0,s.useEffect)((function(){function e(){return e=(0,r.Z)(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(p.PENDING),e.next=4,_.o.fetchByQuery(n,Z);case 4:t=e.sent,r=t.data,a=r.results,o=r.total_pages,l(a),E({query:n,page:Z}),h(o),j(p.RESOLVED),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),j(p.REJECTED);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),e.apply(this,arguments)}null!==G&&function(n){e.apply(this,arguments)}(G)}),[G,Z,E]),(0,f.jsx)(b.Z,{className:"section--movies",children:(0,f.jsxs)(D,{children:[(0,f.jsx)(g,{handleQuery:function(e){console.log("searchParams",G,Z),E({page:Z,query:e})},value:null!==G&&void 0!==G?G:""}),G&&(0,f.jsxs)("p",{className:"searchQuery",children:[(0,f.jsx)("b",{children:"Search query:"})," ",G]}),(0,f.jsx)(S,{querySearchResults:o,status:v}),m>1&&(0,f.jsx)(k(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var n=e.selected;E({query:G,page:n+1})},pageRangeDisplayed:5,pageCount:m,previousLabel:"< previous",renderOnZeroPageCount:null,className:"pagination--movies"})]})})}}}]);
//# sourceMappingURL=919.2a22707c.chunk.js.map