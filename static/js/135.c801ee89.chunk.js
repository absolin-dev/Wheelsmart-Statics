(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[135],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t(0);var n=t(521),r=t(531),i=t(519),l=t(154),o=t(51),s=t(43),c=t(8),d=t(216),u=t(3);function m(e){var a=Object(o.f)(),t=e.pageTitle,m=e.pageText,p=e.addModelTile,j=e.goBack,h=e.setIsModalVisible;return Object(u.jsx)(n.a,{span:24,children:Object(u.jsx)(r.a,{className:"hp-m-0",children:Object(u.jsxs)(i.a,{children:[Object(u.jsxs)(n.a,{span:18,children:[j&&Object(u.jsx)(s.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(u.jsx)(c.d,{className:"remix-icon",size:24})}),Object(u.jsxs)(i.a,{className:"hp-d-inline-block",children:[Object(u.jsx)(n.a,{span:24,children:t&&Object(u.jsx)("h2",{className:"hp-m-0",children:t})}),Object(u.jsx)(n.a,{span:24,children:m&&Object(u.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:m})})]})]}),Object(u.jsx)(n.a,{span:6,children:p&&Object(u.jsx)(l.a,{className:"hp-float-right",type:"primary",onClick:function(){return h(!0)},block:!0,icon:Object(u.jsx)(c.b,{className:"remix-icon",size:22}),children:!d.isMobile&&p})})]})})})}},537:function(e,a,t){"use strict";a.a=t.p+"static/media/empty-list.6fd5c5d1.svg"},667:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(25),i=t(10),l=t(0),o=t(524),s=t(519),c=t(521),d=t(531),u=t(677),m=t(215),p=t(556),j=t(154),h=t(202),b=t(676),O=t(32),x=t(19),f=t.n(x),D=t(534),v=t(537),g=t(183),C=t(15),Y=t(3),_=["file_format"],y=["file_format"];a.default=Object(O.b)((function(e){var a=e.reports,t=e.mini;return{modelName:a.modelName,reportParamsData:a.reportParamsData,reportDataList:a.reportDataList,loading:a.loading,columnsList:a.columnsList,reportView:a.reportView,miniCountersList:t.miniCountersList,miniOccupationList:t.miniOccupationList,miniVersionList:t.miniVersionList}}),{InputChangeValue:g.a,getReportList:g.f,clearData:g.d,getMiniCounters:C.v,getMiniOccupation:C.L,getMiniVersion:C.cb})((function(e){var a,t,O,x,g,C,P=o.a.useForm(),L=Object(i.a)(P,1)[0];function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startDate:!1,endDate:!1},a=e.startDate,t=e.endDate;return function(e){var n=!0,r=!0;return a&&(n=e&&e<f()(a+" 00:00:01","YYYY-MM-DD HH:mm:ss")),t&&(r=e&&e>f()(f()(t).format("YYYY-MM-DD")+" 23:59:59","YYYY-MM-DD HH:mm:ss")),a&&n||t&&r}}Object(l.useEffect)((function(){e.clearData(),e.getMiniOccupation(),e.getMiniCounters(),e.getMiniVersion()}),[]);var V=e.columnsList.map((function(e){return{title:e,dataIndex:e}}));V.unshift({title:"S.No",dataIndex:"index"});var w=e.reportDataList.map((function(e,a){return Object(n.a)(Object(n.a)({},e),{},{index:a+1})}));return Object(l.useEffect)((function(){var a,t,n,r,i,l,o;L.setFieldsValue({start_date:null===(a=e.reportParamsData)||void 0===a?void 0:a.start_date,end_date:null===(t=e.reportParamsData)||void 0===t?void 0:t.end_date,file_format:null===(n=e.reportParamsData)||void 0===n?void 0:n.file_format,saletype:null===(r=e.reportParamsData)||void 0===r?void 0:r.saletype,occupation:null===(i=e.reportParamsData)||void 0===i?void 0:i.occupation,counter:null===(l=e.reportParamsData)||void 0===l?void 0:l.counter,version:null===(o=e.reportParamsData)||void 0===o?void 0:o.version})}),[e.reportParamsData]),Object(Y.jsxs)(s.a,{gutter:[12,12],className:"hp-mt-32",children:[Object(Y.jsx)(D.a,{pageTitle:"Sale Quotation Report",goBack:!0}),Object(Y.jsx)(c.a,{span:24,children:Object(Y.jsx)(d.a,{children:Object(Y.jsxs)(o.a,{form:L,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(){if(1==e.reportParamsData.saletype||2==e.reportParamsData.saletype)var a=e.reportParamsData,t=a.file_format,i=Object(r.a)(a,_),l={file_format:t,model_name:"SaleQuotation"};else{var o=e.reportParamsData;t=o.file_format,i=Object(r.a)(o,y),l={file_format:t,model_name:"OVFQuotation"}}e.getReportList({objData:l,ParamsData:Object(n.a)(Object(n.a)({},i),{},{start_date:null!=i.start_date?f()(i.start_date).format("YYYY-MM-DD"):"",end_date:null!=i.end_date?f()(i.end_date).add(1,"days").format("YYYY-MM-DD"):""})})},children:[Object(Y.jsxs)(s.a,{gutter:[12,12],children:[Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"From Date",name:"start_date",rules:[{required:!0,message:"Please select Your From Date!"}],children:Object(Y.jsx)(u.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:M({endDate:f()()}),onChange:function(a){e.InputChangeValue({key:"start_date",value:null==a?"":a}),null==a&&e.InputChangeValue({key:"end_date",value:""})}})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"To Date",name:"end_date",rules:[{required:!0,message:"Please select Your To Date!"}],children:Object(Y.jsx)(u.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:M({endDate:f()().format("YYYY-MM-DD"),startDate:f()(null===(a=e.reportParamsData)||void 0===a?void 0:a.start_date).format("YYYY-MM-DD")}),disabled:null==e.reportParamsData.start_date||""==e.reportParamsData.start_date,onChange:function(a){e.InputChangeValue({key:"end_date",value:null==a?"":a})}})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"Sale Type",name:"saletype",children:Object(Y.jsx)(m.a,{showSearch:!0,allowClear:!0,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Sale Type",optionFilterProp:"saletype",onChange:function(a){e.InputChangeValue({key:"saletype",value:a})},value:null==e.reportParamsData.saletype?"":null===(t=e.reportParamsData)||void 0===t?void 0:t.saletype,children:[{id:1,name:"Direct Sale"},{id:2,name:"Finance Sale"},{id:3,name:"OVF Sale"}].map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"Occupation :",name:"occupation",children:Object(Y.jsx)(m.a,{showSearch:!0,allowClear:!0,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Occupation",optionFilterProp:"occupation",onChange:function(a){e.InputChangeValue({key:"occupation",value:a})},value:null==e.reportParamsData.occupation_id?"":null===(O=e.reportParamsData)||void 0===O?void 0:O.occupation_id,children:e.miniOccupationList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"Counter :",name:"counter",children:Object(Y.jsx)(m.a,{showSearch:!0,allowClear:!0,placeholder:"Select a Counter",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onChange:function(a){e.InputChangeValue({key:"counter",value:a})},value:null==e.reportParamsData.counter_id?"":null===(x=e.reportParamsData)||void 0===x?void 0:x.counter_id,children:e.miniCountersList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"Version :",name:"version",children:Object(Y.jsx)(m.a,{showSearch:!0,allowClear:!0,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Version",optionFilterProp:"Version",onChange:function(a){e.InputChangeValue({key:"version",value:a})},value:null==e.reportParamsData.version_id?"":null===(g=e.reportParamsData)||void 0===g?void 0:g.version_id,children:e.miniVersionList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:10,xl:10,children:Object(Y.jsx)(o.a.Item,{label:"Report Format",name:"file_format",rules:[{required:!0,message:"Please select Your Report Format!"}],children:Object(Y.jsxs)(p.a.Group,{name:"file_format",onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})},value:null===(C=e.reportParamsData)||void 0===C?void 0:C.file_format,children:[Object(Y.jsx)(p.a.Button,{value:0,children:"CSV"}),Object(Y.jsx)(p.a.Button,{value:2,children:"XLSX"}),Object(Y.jsx)(p.a.Button,{value:5,children:"VIEW"})]})})})]}),Object(Y.jsx)(s.a,{gutter:[12,12],children:Object(Y.jsxs)(c.a,{md:12,offset:12,children:[Object(Y.jsx)(j.a,{type:"secondary",className:"hp-submit-btn hp-float-right hp-mt-10 hp-ml-10",onClick:function(){e.clearData()},htmlType:"button",children:"Clear"}),Object(Y.jsx)(j.a,{type:"primary",className:"hp-submit-btn hp-float-right hp-mt-10",disabled:e.loading,loading:e.loading,onClick:function(){L.submit()},children:"Generate Report"})]})})]})})}),Object(Y.jsx)(c.a,{span:24,children:e.reportView&&Object(Y.jsx)(Y.Fragment,{children:0!=e.reportDataList.length&&5==e.reportParamsData.file_format?Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(d.a,{children:Object(Y.jsx)(s.a,{className:"hp-mb-12",children:Object(Y.jsx)(c.a,{span:24,children:Object(Y.jsx)(b.a,{columns:V,dataSource:w,scroll:{x:500},pagination:!1,size:"middle",loading:e.loading})})})})}):Object(Y.jsx)(d.a,{children:Object(Y.jsx)(h.a,{className:"hp-m-32",image:v.a,imageStyle:{height:160},description:Object(Y.jsx)("h5",{children:"Your Sale Quotation is empty"})})})})})]})}))}}]);
//# sourceMappingURL=135.c801ee89.chunk.js.map