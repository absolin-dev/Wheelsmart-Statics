(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[139],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t(0);var r=t(521),n=t(531),l=t(519),s=t(154),o=t(51),i=t(43),c=t(8),d=t(216),u=t(3);function m(e){var a=Object(o.f)(),t=e.pageTitle,m=e.pageText,p=e.addModelTile,j=e.goBack,h=e.setIsModalVisible;return Object(u.jsx)(r.a,{span:24,children:Object(u.jsx)(n.a,{className:"hp-m-0",children:Object(u.jsxs)(l.a,{children:[Object(u.jsxs)(r.a,{span:18,children:[j&&Object(u.jsx)(i.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(u.jsx)(c.d,{className:"remix-icon",size:24})}),Object(u.jsxs)(l.a,{className:"hp-d-inline-block",children:[Object(u.jsx)(r.a,{span:24,children:t&&Object(u.jsx)("h2",{className:"hp-m-0",children:t})}),Object(u.jsx)(r.a,{span:24,children:m&&Object(u.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:m})})]})]}),Object(u.jsx)(r.a,{span:6,children:p&&Object(u.jsx)(s.a,{className:"hp-float-right",type:"primary",onClick:function(){return h(!0)},block:!0,icon:Object(u.jsx)(c.b,{className:"remix-icon",size:22}),children:!d.isMobile&&p})})]})})})}},537:function(e,a,t){"use strict";a.a=t.p+"static/media/empty-list.6fd5c5d1.svg"},665:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(25),l=t(10),s=t(0),o=t(524),i=t(526),c=t(519),d=t(521),u=t(531),m=t(677),p=t(215),j=t(556),h=t(154),b=t(202),f=t(676),x=t(32),O=t(19),v=t.n(O),D=t(534),g=t(537),_=t(183),C=t(15),P=t(8),Y=t(3),k=["file_format"],y=["file_format"];a.default=Object(x.b)((function(e){var a=e.reports,t=e.mini;return{modelName:a.modelName,reportParamsData:a.reportParamsData,reportDataList:a.reportDataList,loading:a.loading,columnsList:a.columnsList,allCountersList:t.allCountersList,miniCountersList:t.miniCountersList,purchaseAvaliableStockList:t.purchaseAvaliableStockList,purchaseAvailableStockParams:t.purchaseAvailableStockParams,reportView:a.reportView}}),{InputChangeValue:_.a,getReportList:_.f,clearData:_.d,getAllCounters:C.g,setPurchaseAvailableStockParams:C.dc,getPurchaseAvailableStock:C.ib,getMiniCounters:C.v})((function(e){var a,t,x,O,_=o.a.useForm(),C=Object(l.a)(_,1)[0];function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startDate:!1,endDate:!1},a=e.startDate,t=e.endDate;return function(e){var r=!0,n=!0;return a&&(r=e&&e<v()(a+" 00:00:01","YYYY-MM-DD HH:mm:ss")),t&&(n=e&&e>v()(v()(t).format("YYYY-MM-DD")+" 23:59:59","YYYY-MM-DD HH:mm:ss")),a&&r||t&&n}}Object(s.useEffect)((function(){e.getMiniCounters(),e.getAllCounters(),e.clearData()}),[]);var S=e.columnsList.map((function(e){return{title:e,dataIndex:e}}));S.unshift({title:"S.No",dataIndex:"index"});var L=e.reportDataList.map((function(e,a){return Object(r.a)(Object(r.a)({},e),{},{index:a+1})}));return Object(s.useEffect)((function(){var a,t,r,n,l;C.setFieldsValue({start_date:null===(a=e.reportParamsData)||void 0===a?void 0:a.start_date,end_date:null===(t=e.reportParamsData)||void 0===t?void 0:t.end_date,file_format:null===(r=e.reportParamsData)||void 0===r?void 0:r.file_format,tocounter_id:null===(n=e.reportParamsData)||void 0===n?void 0:n.tocounter_id,counter_id:null===(l=e.reportParamsData)||void 0===l?void 0:l.counter_id})}),[e.reportParamsData]),Object(Y.jsxs)(c.a,{gutter:[12,12],className:"hp-mt-32",children:[Object(Y.jsx)(D.a,{pageTitle:"Temporary Transfer Report",goBack:!0}),Object(Y.jsx)(d.a,{span:24,children:Object(Y.jsx)(u.a,{children:Object(Y.jsxs)(o.a,{form:C,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(){if("HRMS"==e.reportParamsData.file_format)var a=e.reportParamsData,t=a.file_format,l=Object(n.a)(a,k),s={file_format:2,model_name:"HRMS Daily Attendance"};else{var o=e.reportParamsData;t=o.file_format,l=Object(n.a)(o,y),s={file_format:t,model_name:"TemporaryTransfer"}}e.getReportList({objData:s,ParamsData:Object(r.a)(Object(r.a)({},l),{},{start_date:null!=l.start_date?v()(l.start_date).format("YYYY-MM-DD"):"",end_date:null!=l.end_date?v()(l.end_date).add(1,"days").format("YYYY-MM-DD"):""})})},children:[Object(Y.jsxs)(c.a,{gutter:[12,12],children:[Object(Y.jsx)(d.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"From Date",name:"start_date",rules:[{required:!0,message:"Please select Your From Date!"}],children:Object(Y.jsx)(m.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:M({endDate:v()()}),onChange:function(a){e.InputChangeValue({key:"start_date",value:null==a?"":a}),null==a&&e.InputChangeValue({key:"end_date",value:""})}})})}),Object(Y.jsx)(d.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"To Date",name:"end_date",rules:[{required:!0,message:"Please select Your To Date!"}],children:Object(Y.jsx)(m.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:M({endDate:v()().format("YYYY-MM-DD"),startDate:v()(null===(a=e.reportParamsData)||void 0===a?void 0:a.start_date).format("YYYY-MM-DD")}),disabled:null==e.reportParamsData.start_date||""==e.reportParamsData.start_date,onChange:function(a){e.InputChangeValue({key:"end_date",value:null==a?"":a})}})})}),Object(Y.jsx)(d.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"From Counter",name:"counter_id",rules:[{required:!0,message:"Please Select From Counter"}],hasFeedback:!0,children:Object(Y.jsx)(p.a,{showSearch:!0,placeholder:"Select From Counter",optionFilterProp:"Counter",filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onBlur:function(a){var t,n;e.getPurchaseAvailableStock(Object(r.a)(Object(r.a)({},e.purchaseAvailableStockParams),{},{counter:null===(t=e.reportParamsData)||void 0===t?void 0:t.counter_id,page:1})),e.setPurchaseAvailableStockParams(Object(r.a)(Object(r.a)({},e.purchaseAvailableStockParams),{},{counter:null===(n=e.reportParamsData)||void 0===n?void 0:n.counter_id,page:1}))},onChange:function(a){e.getPurchaseAvailableStock(),e.InputChangeValue({key:"counter_id",value:a})},value:null==e.reportParamsData.counter_id?"":null===(t=e.reportParamsData)||void 0===t?void 0:t.counter_id,children:e.miniCountersList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(d.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(o.a.Item,{label:"To Counter",name:"tocounter_id",rules:[{required:!0,message:"Please Select To Counter"}],hasFeedback:!0,children:Object(Y.jsx)(p.a,{showSearch:!0,placeholder:"Select To Counter",optionFilterProp:"Counter",filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onBlur:function(){!function(){var a;(null===(a=e.reportParamsData)||void 0===a?void 0:a.counter_id)==e.reportParamsData.tocounter_id&&(i.a.error({icon:Object(Y.jsx)("span",{className:"remix-icon",children:Object(Y.jsx)(P.c,{})}),title:Object(Y.jsx)("h5",{className:"hp-mb-0 hp-font-weight-500",children:"Error"}),content:Object(Y.jsx)("div",{children:Object(Y.jsx)("p",{className:"hp-p1-body hp-text-color-black-80",children:"Sorry! Not allowd to same counter"})})}),e.InputChangeValue({key:"tocounter_id",value:null}))}()},onChange:function(a){e.InputChangeValue({key:"tocounter_id",value:a})},value:null==e.reportParamsData.tocounter_id?"":null===(x=e.reportParamsData)||void 0===x?void 0:x.tocounter_id,children:e.allCountersList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(d.a,{span:24,xs:24,md:10,xl:10,children:Object(Y.jsx)(o.a.Item,{label:"Report Format",name:"file_format",rules:[{required:!0,message:"Please select Your Report Format!"}],children:Object(Y.jsxs)(j.a.Group,{name:"file_format",onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})},value:null===(O=e.reportParamsData)||void 0===O?void 0:O.file_format,children:[Object(Y.jsx)(j.a.Button,{value:0,children:"CSV"}),Object(Y.jsx)(j.a.Button,{value:2,children:"XLSX"}),Object(Y.jsx)(j.a.Button,{value:5,children:"VIEW"})]})})})]}),Object(Y.jsx)(c.a,{gutter:[12,12],children:Object(Y.jsxs)(d.a,{md:12,offset:12,children:[Object(Y.jsx)(h.a,{type:"secondary",className:"hp-submit-btn hp-float-right hp-mt-10 hp-ml-10",onClick:function(){e.clearData()},htmlType:"button",children:"Clear"}),Object(Y.jsx)(h.a,{type:"primary",className:"hp-submit-btn hp-float-right hp-mt-10",disabled:e.loading,loading:e.loading,onClick:function(){C.submit()},children:"Generate Report"})]})})]})})}),Object(Y.jsx)(d.a,{span:24,children:e.reportView&&Object(Y.jsx)(Y.Fragment,{children:0!=e.reportDataList.length&&5==e.reportParamsData.file_format?Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(u.a,{children:Object(Y.jsx)(c.a,{className:"hp-mb-12",children:Object(Y.jsx)(d.a,{span:24,children:Object(Y.jsx)(f.a,{columns:S,dataSource:L,scroll:{x:500},pagination:!1,size:"middle",loading:e.loading})})})})}):Object(Y.jsx)(u.a,{children:Object(Y.jsx)(b.a,{className:"hp-m-32",image:g.a,imageStyle:{height:160},description:Object(Y.jsx)("h5",{children:"Your Temporary Transfer is empty"})})})})})]})}))}}]);
//# sourceMappingURL=139.978a5981.chunk.js.map