(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[28],{536:function(e,c,t){"use strict";t.d(c,"a",(function(){return p}));t(0);var l=t(521),a=t(519),o=t(154),s=t(51),n=t(43),i=t(8),h=t(216),r=t(3);function p(e){var c=Object(s.f)(),t=e.pageTitle,p=e.pageText,d=e.goBack,b=e.addModelTile,j=e.addModelTile2,m=e.setIsModalVisible,x=e.setIsModalVisible2;return Object(r.jsx)(l.a,{span:24,className:"hp-mt-12",children:Object(r.jsxs)(a.a,{children:[Object(r.jsxs)(l.a,{span:16,xs:16,md:12,xl:16,children:[d&&Object(r.jsx)(n.b,{to:"#",onClick:function(){c.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(r.jsx)(i.d,{className:"remix-icon",size:24})}),Object(r.jsxs)(a.a,{className:"hp-d-inline-block",children:[Object(r.jsx)(l.a,{span:24,children:t&&Object(r.jsx)("h3",{className:"hp-mb-2 hp-mt-4",children:t})}),Object(r.jsx)(l.a,{span:24,children:p&&Object(r.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:p})})]})]}),Object(r.jsx)(l.a,{span:8,xs:8,md:12,xl:8,children:Object(r.jsxs)("div",{className:"hp-float-right hp-d-inline-block",children:[b&&Object(r.jsx)("div",{className:"hp-pl-4 hp-d-inline-block",children:Object(r.jsx)(o.a,{className:"",type:"primary",onClick:function(){return m(!0)},icon:Object(r.jsx)(i.b,{className:"remix-icon",size:22}),children:!h.isMobile&&b})}),j&&Object(r.jsx)("div",{className:"hp-pl-4 hp-d-inline-block",children:Object(r.jsx)(o.a,{className:"hp-pr-12",type:"primary",onClick:function(){return x(!0)},icon:Object(r.jsx)(i.b,{className:"remix-icon",size:22}),children:!h.isMobile&&j})})]})})]})})}},540:function(e,c,t){"use strict";c.a=t.p+"static/media/broken_img.203310e1.png"},542:function(e,c,t){"use strict";c.a=t.p+"static/media/noimg.b2f3d4d2.png"},554:function(e,c,t){"use strict";t.d(c,"a",(function(){return l})),t.d(c,"b",(function(){return a}));function l(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function a(e){var c=e.getBoundingClientRect(),t=document.documentElement;return{left:c.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:c.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}},593:function(e,c,t){"use strict";var l=t(140);c.a=l.a},674:function(e,c,t){"use strict";t.r(c);var l=t(0),a=t(525),o=t(519),s=t(521),n=t(531),i=t(682),h=t(681),r=t(154),p=t(610),d=t(51),b=t(32),j=(t(19),t(542)),m=t(536),x=t(172),k=(t(8),t(540)),u=t(173),v=t(158),O=t(3);c.default=Object(b.b)((function(e){var c=e.stock;return{stockData:c.stockData,stockImages:c.stockImages}}),{getStockById:x.f})((function(e){var c,t,b,x,f,g,N,w,y,D,T,I,B,M,V,C,E,z,F,L,P,R,S,_,A,H,J,Y,G,U=Object(d.h)().id,W=Object(l.useRef)(),X=a.a.Text,q=(a.a.Link,a.a.Title);console.log("UserParams",U),Object(l.useEffect)((function(){e.getStockById(U)}),[]);var K={width:"100%",height:"350px",object_fit:"contain"};return console.log("props.stockImages",e.stockImages),Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{pageTitle:"Stock View",goBack:!0}),Object(O.jsx)(o.a,{className:"hp-ecommerce-app-detail hp-mb-10 hp-mt-16",children:Object(O.jsx)(s.a,{span:24,children:Object(O.jsx)(n.a,{className:"hp-border-color-black-40",title:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(q,{className:"hp-p-0",level:5,children:null===(c=e.stockData.counter)||void 0===c?void 0:c.name}),Object(O.jsxs)(X,{type:"secondary",children:["Mobile:"," ",null!=(null===(t=e.stockData.counter)||void 0===t?void 0:t.mobile)&&""!=(null===(b=e.stockData.counter)||void 0===b?void 0:b.mobile)?null===(x=e.stockData.counter)||void 0===x?void 0:x.mobile:"None"]})]}),children:Object(O.jsxs)(o.a,{gutter:[24,24],children:[Object(O.jsxs)(s.a,{lg:14,span:24,className:"hp-ecommerce-app-detail-slider hp-mt-sm-24 hp-border-shadow hp-mb-md-32",children:[Object(O.jsx)(i.a.PreviewGroup,{children:Object(O.jsx)(h.a,{autoplay:!0,arrows:!0,effect:"fade",ref:W,draggble:!0,children:e.stockImages.map((function(e,c){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"hp-text-center hp-m-8 ",children:Object(O.jsx)(q,{className:"hp-p-0",level:4,children:e.imageType})}),Object(O.jsx)("div",{className:"hp-slick-slide-item hp-mx-4 hp-d-flex-full-center",children:null!=e.file?Object(O.jsx)(i.a,{src:e.file,style:K,preview:!0,onError:function(e){var c=e.currentTarget;c.onerror=null,c.src=k.a}}):Object(O.jsx)(i.a,{src:j.a,preview:!1,style:K})},c)]})}))})}),Object(O.jsxs)("div",{className:"hp-m-10 hp-text-center",children:[Object(O.jsx)(r.a,{onClick:function(){W.current.prev()},className:"hp-mr-10",children:Object(O.jsx)(u.a,{size:24})}),Object(O.jsx)(r.a,{onClick:function(){W.current.next()},children:Object(O.jsx)(v.a,{size:24})})]})]}),Object(O.jsx)(s.a,{lg:10,span:24,children:Object(O.jsx)(n.a,{title:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(q,{className:"hp-p-0",level:5,children:[null===(f=e.stockData.vehicle)||void 0===f?void 0:f.vehicleno," "]}),Object(O.jsx)(X,{type:"secondary",children:null===(g=e.stockData.vehicle)||void 0===g||null===(N=g.version)||void 0===N?void 0:N.name})]}),extra:Object(O.jsx)(p.a,{color:e.stockData.availability?"green":"red",children:e.stockData.availability?"Available":"Not Available"}),children:Object(O.jsxs)(o.a,{gutter:[24,16],children:[Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Document Number :"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:e.stockData.code})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Brand :"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(w=e.stockData.vehicle)||void 0===w||null===(y=w.version)||void 0===y||null===(D=y.brand)||void 0===D?void 0:D.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Brand Family:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(T=e.stockData.vehicle)||void 0===T||null===(I=T.version)||void 0===I||null===(B=I.brandfamily)||void 0===B?void 0:B.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Vehicle Model:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(M=e.stockData.vehicle)||void 0===M||null===(V=M.version)||void 0===V||null===(C=V.model)||void 0===C?void 0:C.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Vehicle Year:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(E=e.stockData.vehicle)||void 0===E?void 0:E.year})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Vehicle Type:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(z=e.stockData.vehicle)||void 0===z||null===(F=z.version)||void 0===F||null===(L=F.vehicletype)||void 0===L?void 0:L.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Emission Name:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(P=e.stockData.vehicle)||void 0===P||null===(R=P.emission)||void 0===R?void 0:R.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Vehicle Priority:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(S=e.stockData.vehicle)||void 0===S||null===(_=S.version)||void 0===_||null===(A=_.priority)||void 0===A?void 0:A.name})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Engine Number:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(H=e.stockData.vehicle)||void 0===H?void 0:H.engineno})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Chassis Number:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(J=e.stockData.vehicle)||void 0===J?void 0:J.chassisno})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Vehicle Reading:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:e.stockData.vehiclereading})]}),Object(O.jsxs)(s.a,{md:12,span:24,children:[Object(O.jsx)("p",{className:"hp-mb-0 hp-caption hp-font-weight-400 hp-text-color-black-80 hp-text-color-dark-30",children:"Fuel Type:"}),Object(O.jsx)("span",{className:"hp-d-block hp-p1-body hp-font-weight-600 hp-text-color-black-100 hp-text-color-dark-0",children:null===(Y=e.stockData.vehicle)||void 0===Y||null===(G=Y.version)||void 0===G?void 0:G.fueltype_name})]})]})})})]})})})})]})}))}}]);
//# sourceMappingURL=28.745d6bcf.chunk.js.map