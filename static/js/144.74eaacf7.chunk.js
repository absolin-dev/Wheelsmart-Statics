(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[144],{694:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(0),r=a(550),o=a(538),s=a(519),l=a(521),c=a(154),d=a(531),u=a(337),m=a(340),p=a(539),h=a(676),j=a(32),b=a(350),v=a(235),O=a(361),f=a(536),D=a(543),w=a(8),x=a(19),g=a.n(x),M=a(216),C=a(63),P=a(15),V=a(183),y=a(10),_=a(524),S=a(527),Y=a(677),N=a(215),A=a(3),I=new Date;I.getFullYear(),I.getMonth();var L=Object(j.b)((function(e){var t=e.person,a=e.mini;return e.vehicles,{drawer:t.drawer,personParams:t.personParams,miniOccupationList:a.miniOccupationList,miniStatesList:a.miniStatesList,miniDistrictList:a.miniDistrictList,miniCityList:a.miniCityList,miniAreaList:a.miniAreaList}}),{isDrawerVisible:C.m,SetPersonParams:C.c,FilterInputChangeValue:C.a,getPerson:C.j,getMiniStates:P.U,getMiniDistrict:P.y,getMiniCity:P.q,getMiniArea:P.j,getMiniOccupation:P.L,getMiniStatesClearData:P.V,getMiniDistrictClearData:P.z,getMiniCityClearData:P.r,getMiniAreaClearData:P.k})((function(e){var t,a,r,o,d,u,m,p,h=_.a.useForm(),j=Object(y.a)(h,1)[0];Object(n.useEffect)((function(){e.getMiniStates(),e.getMiniDistrict(),e.getMiniCity(),e.getMiniArea(),e.getMiniOccupation()}),[]);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startDate:!1,endDate:!1},t=e.startDate,a=e.endDate;return function(e){var i=!0,n=!0;return t&&(i=e&&e<g()(t+" 00:00:01","YYYY-MM-DD HH:mm:ss")),a&&(n=e&&e>g()(g()(a).format("YYYY-MM-DD")+" 23:59:59","YYYY-MM-DD HH:mm:ss")),t&&i||a&&n}}return Object(n.useEffect)((function(){var t,a,i,n,r,o,s,l,c;j.setFieldsValue({start_date:null===(t=e.personParams)||void 0===t?void 0:t.start_date,end_date:null===(a=e.personParams)||void 0===a?void 0:a.end_date,occupation:null===(i=e.personParams)||void 0===i?void 0:i.occupation,state:null===(n=e.personParams)||void 0===n?void 0:n.state,district:null===(r=e.personParams)||void 0===r?void 0:r.district,city:null===(o=e.personParams)||void 0===o?void 0:o.city,area:null===(s=e.personParams)||void 0===s?void 0:s.area,housetype:null===(l=e.personParams)||void 0===l?void 0:l.housetype,qualification:null===(c=e.personParams)||void 0===c?void 0:c.qualification})}),[e.personParams]),Object(A.jsx)(s.a,{gutter:[24,24],children:Object(A.jsx)(l.a,{span:24,children:Object(A.jsx)(S.a,{title:"Filters",width:420,className:"hp-drawer-mobile",onClose:function(){e.isDrawerVisible(!1)},placement:"right",visible:e.drawer,bodyStyle:{paddingBottom:10},children:Object(A.jsxs)(_.a,{form:j,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(){e.SetPersonParams(Object(i.a)(Object(i.a)({},e.personParams),{},{start_date:e.personParams.start_date,end_date:e.personParams.end_date,page:1,search:"",page_size:10})),e.getPerson(Object(i.a)(Object(i.a)({},e.personParams),{},{start_date:null!=e.personParams.start_date&&""!=e.personParams.start_date?g()(e.personParams.start_date).format("YYYY-MM-DD"):"",end_date:null!=e.personParams.end_date&&""!=e.personParams.end_date?g()(e.personParams.end_date).add(1,"days").format("YYYY-MM-DD"):"",page:1,search:"",page_size:10})),e.isDrawerVisible(!1)},children:[Object(A.jsxs)(s.a,{gutter:[12,12],children:[Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"From Date",name:"start_date",children:Object(A.jsx)(Y.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:b({endDate:new Date}),onChange:function(t){e.FilterInputChangeValue({key:"start_date",value:null==t?"":t}),null==t&&e.FilterInputChangeValue({key:"end_date",value:""})}})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"To Date",name:"end_date",children:Object(A.jsx)(Y.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:b({endDate:g()().format("YYYY-MM-DD"),startDate:g()(null===(t=e.personParams)||void 0===t?void 0:t.start_date).format("YYYY-MM-DD")}),disabled:null==e.personParams.start_date||""==e.personParams.start_date,onChange:function(t){e.FilterInputChangeValue({key:"end_date",value:null==t?"":t})}})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"State :",name:"state",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select State",optionFilterProp:"state",onChange:function(t){e.getMiniDistrict({state:t}),e.getMiniDistrictClearData(),e.getMiniCityClearData(),e.getMiniAreaClearData(),e.FilterInputChangeValue({key:"state",value:t})},value:null==e.personParams.state_id?"":null===(a=e.personParams)||void 0===a?void 0:a.state_id,children:e.miniStatesList.map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"District :",name:"district",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select District",optionFilterProp:"district",onChange:function(t){e.getMiniCity({district:t}),e.getMiniCityClearData(),e.getMiniAreaClearData(),e.FilterInputChangeValue({key:"district",value:t})},value:null==e.personParams.district_id?"":null===(r=e.personParams)||void 0===r?void 0:r.district_id,children:e.miniDistrictList.map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"City :",name:"city",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select City",optionFilterProp:"city",onChange:function(t){e.getMiniArea({city:t}),e.getMiniAreaClearData(),e.FilterInputChangeValue({key:"city",value:t})},value:null==e.personParams.city_id?"":null===(o=e.personParams)||void 0===o?void 0:o.city_id,children:e.miniCityList.map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"Area :",name:"area",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Area",optionFilterProp:"area",onChange:function(t){e.FilterInputChangeValue({key:"area",value:t})},value:null==e.personParams.area_id?"":null===(d=e.personParams)||void 0===d?void 0:d.area_id,children:e.miniAreaList.map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"House Type",name:"housetype",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select House Type",optionFilterProp:"Housetype",onChange:function(t){e.FilterInputChangeValue({key:"housetype",value:t})},value:null==e.personParams.housetype?"":null===(u=e.personParams)||void 0===u?void 0:u.housetype,children:[{id:1,name:"Own"},{id:2,name:"Rent"}].map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"Qualification",name:"qualification",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,placeholder:"Select Qualification",optionFilterProp:"Qualification",filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},onChange:function(t){e.FilterInputChangeValue({key:"qualification",value:t})},value:null==e.personParams.qualification?"":null===(m=e.personParams)||void 0===m?void 0:m.qualification,children:[{id:1,name:"Illiterate"},{id:2,name:"10th/Ssc"},{id:3,name:"Intermediate"},{id:4,name:"Graduate"},{id:5,name:"Post Graduate"}].map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})}),Object(A.jsx)(l.a,{span:12,children:Object(A.jsx)(_.a.Item,{label:"Occupation :",name:"occupation",children:Object(A.jsx)(N.a,{showSearch:!0,allowClear:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Occupation",optionFilterProp:"occupation",onChange:function(t){e.FilterInputChangeValue({key:"occupation",value:t})},value:null==e.personParams.occupation_id?"":null===(p=e.personParams)||void 0===p?void 0:p.occupation_id,children:e.miniOccupationList.map((function(e,t){return Object(A.jsx)(Option,{value:e.id,children:e.name},t)}))})})})]}),Object(A.jsxs)(s.a,{gutter:[12,12],children:[Object(A.jsx)(l.a,{md:12,children:Object(A.jsx)(c.a,{block:!0,type:"secondary",className:"hp-submit-btn hp-mt-10",onClick:function(){e.SetPersonParams({start_date:"",end_date:"",page:1,search:"",page_size:10}),e.getPerson({start_date:"",end_date:"",page:1,search:"",page_size:10}),e.getMiniStates(),e.getMiniDistrict(),e.getMiniCity(),e.getMiniArea(),e.getMiniOccupation()},htmlType:"button",children:"Clear"})}),Object(A.jsx)(l.a,{md:12,children:Object(A.jsx)(c.a,{block:!0,type:"primary",className:"hp-submit-btn hp-mt-10",onClick:function(){j.submit()},children:"Apply"})})]})]})})})})})),k=(a(533),a(526)),F=a(532);var E=Object(j.b)((function(e){var t=e.person;return{viewModel:t.viewModel,customerViewData:t.customerViewData}}),{customerViewModel:C.h})((function(e){e.saletype;var t,a,i,n,r,o,c,d,u,m,p,h,j,b,v,O,f,D,x,M,C,P,V,S,Y,N,I,L,E,T,R,z,q,H,B,U,G,Q,K,J,W,X,Z,$,ee,te,ae,ie=_.a.useForm(),ne=Object(y.a)(ie,1)[0],re=[{title:"CODE",description:null==(null===(t=e.customerViewData)||void 0===t?void 0:t.code)?"none":e.customerViewData.code},{title:"FIRST NAME",description:null==(null===(a=e.customerViewData)||void 0===a?void 0:a.firstname)||""==(null===(i=e.customerViewData)||void 0===i?void 0:i.firstname)?"none":null===(n=e.customerViewData)||void 0===n?void 0:n.firstname},{title:"MIDDLE NAME",description:null==(null===(r=e.customerViewData)||void 0===r?void 0:r.middlename)||""==(null===(o=e.customerViewData)||void 0===o?void 0:o.middlename)?"none":null===(c=e.customerViewData)||void 0===c?void 0:c.middlename},{title:"LAST NAME",description:null==(null===(d=e.customerViewData)||void 0===d?void 0:d.lastname)||""==(null===(u=e.customerViewData)||void 0===u?void 0:u.lastname)?"none":null===(m=e.customerViewData)||void 0===m?void 0:m.lastname},{title:"MOBILE NUMBER",description:null==(null===(p=e.customerViewData)||void 0===p?void 0:p.mobile)||""==(null===(h=e.customerViewData)||void 0===h?void 0:h.mobile)?"none":null===(j=e.customerViewData)||void 0===j?void 0:j.mobile},{title:"AADHAR NUMBER",description:null==(null===(b=e.customerViewData)||void 0===b?void 0:b.aadharno)||""==(null===(v=e.customerViewData)||void 0===v?void 0:v.aadharno)?"none":null===(O=e.customerViewData)||void 0===O?void 0:O.aadharno},{title:"GENDER",description:null==(null===(f=e.customerViewData)||void 0===f?void 0:f.gender_name)||""==(null===(D=e.customerViewData)||void 0===D?void 0:D.gender_name)?"none":null===(x=e.customerViewData)||void 0===x?void 0:x.gender_name},{title:"DATE OF BIRTH",description:null==(null===(M=e.customerViewData)||void 0===M?void 0:M.dob)||""==(null===(C=e.customerViewData)||void 0===C?void 0:C.dob)?"none":g()(null===(P=e.customerViewData)||void 0===P?void 0:P.dob).format("DD-MM-YYYY")},{title:"MARITAL STATUS",description:e.customerViewData.maritalstatus?"YES":"NO"},{title:e.customerViewData.maritalstatus?"DATE OF MARRIAGE":null,description:e.customerViewData.maritalstatus?null==e.customerViewData.dom||""==(null===(V=e.customerViewData)||void 0===V?void 0:V.dom)?"none":g()(null===(S=e.customerViewData)||void 0===S?void 0:S.dom).format("DD-MM-YYYY"):null},{title:"QUALIFICATION",description:null==e.customerViewData.qualification_name||""==(null===(Y=e.customerViewData)||void 0===Y?void 0:Y.qualification_name)?"none":null===(N=e.customerViewData)||void 0===N?void 0:N.qualification_name},{title:"OCCUPATION",description:null==e.customerViewData.occupation?"none":null===(I=e.customerViewData)||void 0===I||null===(L=I.occupation)||void 0===L?void 0:L.name},{title:"HOUSE TYPE",description:null==e.customerViewData.housetype_name||""==(null===(E=e.customerViewData)||void 0===E?void 0:E.housetype_name)?"none":null===(T=e.customerViewData)||void 0===T?void 0:T.housetype_name},{title:"INCOME",description:null==e.customerViewData.income||""==(null===(R=e.customerViewData)||void 0===R?void 0:R.income)?"none":null===(z=e.customerViewData)||void 0===z?void 0:z.income},{title:"BANK",description:null==e.customerViewData.bank?"none":null===(q=e.customerViewData)||void 0===q||null===(H=q.bank)||void 0===H?void 0:H.name},{title:"ACCOUNT NUMBER",description:null==e.customerViewData.accono||""==e.customerViewData.accono?"none":null===(B=e.customerViewData)||void 0===B?void 0:B.accono},{title:"IFSC CODE",description:null==e.customerViewData.ifsccode||""==e.customerViewData.ifsccode?"none":null===(U=e.customerViewData)||void 0===U?void 0:U.ifsccode},{title:"STATE",description:null==e.customerViewData.state?"none":null===(G=e.customerViewData)||void 0===G||null===(Q=G.state)||void 0===Q?void 0:Q.name},{title:"DISTRICT",description:null==e.customerViewData.district?"none":null===(K=e.customerViewData)||void 0===K||null===(J=K.district)||void 0===J?void 0:J.name},{title:"CITY",description:null==e.customerViewData.city?"none":null===(W=e.customerViewData)||void 0===W||null===(X=W.city)||void 0===X?void 0:X.name},{title:"AREA",description:null==e.customerViewData.area?"none":null===(Z=e.customerViewData)||void 0===Z||null===($=Z.area)||void 0===$?void 0:$.name},{title:"PINCODE",description:null==e.customerViewData.pincode||""==e.customerViewData.pincode?"none":null===(ee=e.customerViewData)||void 0===ee?void 0:ee.pincode},{title:"ADDRESS LINE 1",description:null==e.customerViewData.addressline1||""==e.customerViewData.addressline1?"none":null===(te=e.customerViewData)||void 0===te?void 0:te.addressline1},{title:"ADDRESS LINE 2",description:null==e.customerViewData.addressline2||""==e.customerViewData.addressline2?"none":null===(ae=e.customerViewData)||void 0===ae?void 0:ae.addressline2}],oe=[];re.forEach((function(e){null!==e.title&&oe.push(e)}));var se=Object(A.jsx)("h5",{className:"modal-title",children:"Customer View"});return Object(A.jsx)(k.a,{visible:e.viewModel,title:se,onCancel:function(){ne.resetFields(),e.customerViewModel(!1),e.customerViewModel(!1)},className:"hp-modal-p-24",footer:Object(A.jsx)(A.Fragment,{}),centered:!0,closeIcon:Object(A.jsx)(w.k,{className:"remix-icon text-color-black-100",size:24}),width:816,children:Object(A.jsx)(s.a,{gutter:[12,12],children:Object(A.jsx)(l.a,{span:24,md:24,children:Object(A.jsx)(F.b,{grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:3},dataSource:oe,renderItem:function(e){return Object(A.jsx)(F.b.Item,{children:Object(A.jsx)(F.b.Item.Meta,{title:Object(A.jsx)("span",{children:e.title}),description:Object(A.jsx)("span",{children:e.description})})})}})})})})}));t.default=Object(j.b)((function(e){var t=e.person,a=e.system;return{personlist:t.personlist,noofpages:t.noofpages,listCount:t.listCount,personParams:t.personParams,loading:t.loading,userAccessList:a.userAccessList,viewModel:t.viewModel,model:t.model}}),{getPerson:C.j,SetPersonParams:C.c,getcustomerByID:C.k,personDelete:C.p,isModelVisible:C.n,getMiniDistrict:P.y,getMiniCity:P.q,getMiniArea:P.j,isDrawerVisible:C.m,customerViewModel:C.h,getReportList:V.f,clearPersonList:C.g})((function(e){var t,a,j,x,C=r.a.Search;Object(n.useEffect)((function(){e.getPerson({page:1,search:"",page_size:10})}),[]);var P="hp-p1-body hp-text-color-black-50 hp-text-color-dark-0 hp-font-weight-500 ",V=[{title:"S.No",dataIndex:"index",width:70,fixed:M.isMobile?null:"left"},{title:"Code",dataIndex:"code",key:"code",filterSearch:!0,width:120,fixed:M.isMobile?null:"left"},{title:"Date",filterMode:"tree",filterSearch:!0,width:"15%",render:function(e){return Object(A.jsx)("span",{className:P,children:g()(e.createdon).format("DD-MM-YYYY")})}},{title:"Customer Name",render:function(e){return Object(A.jsxs)("span",{className:P,children:[e.firstname," ",e.middlename," ",e.lastname]})},filterMode:"tree",filterSearch:!0,key:"firstname",sortDirections:["ascend","descend"],width:"20%"},{title:"Mobile",render:function(e){return Object(A.jsx)("span",{className:P,children:e.mobile})},filterMode:"tree",filterSearch:!0,width:120},{title:"Aadhar No",render:function(e){return Object(A.jsx)("span",{className:P,children:e.aadharno})},filterMode:"tree",filterSearch:!0,width:130},{title:"Gender",render:function(e){return Object(A.jsx)("span",{className:P,children:e.gender_name})},filterMode:"tree",filterSearch:!0,width:90},{title:"House Type",render:function(e){return Object(A.jsx)("span",{className:P,children:e.housetype_name})},filterMode:"tree",filterSearch:!0,width:90},{title:"Qualification",render:function(e){return Object(A.jsx)("span",{className:P,children:e.qualification_name})},filterMode:"tree",filterSearch:!0,width:120},{title:"Area",render:function(e){var t;return Object(A.jsx)("span",{className:P,children:null===(t=e.area)||void 0===t?void 0:t.name})},filterMode:"tree",filterSearch:!0,width:100},{title:"Occupation",render:function(e){var t;return Object(A.jsx)("span",{className:P,children:null===(t=e.occupation)||void 0===t?void 0:t.name})},filterMode:"tree",filterSearch:!0,width:120},{title:"Actions",key:"action",width:100,fixed:M.isMobile?null:"right",render:function(t,a){var i,n;return Object(A.jsxs)(p.b,{size:"middle",children:[-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.change_person"))&&Object(A.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.getcustomerByID({row:t,type:"update"})}}),-1!==(null===(n=e.userAccessList)||void 0===n?void 0:n.indexOf("Masters.delete_person"))&&Object(A.jsx)(o.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.personDelete(a.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(A.jsx)(w.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(A.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})}),Object(A.jsx)("i",{className:"ri-eye-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.getcustomerByID({row:t,type:"view"})}})]})}}],y=e.personlist.map((function(t,a){var n;return Object(i.a)(Object(i.a)({},t),{},{index:(e.personParams.page-1)*e.personParams.page_size+(a+1),mobile:t.mobile,aadharno:t.aadharno,gendername:t.gender_name,qualificationname:t.qualification_name,occupationname:null===(n=t.occupation)||void 0===n?void 0:n.name})}));return Object(A.jsxs)(s.a,{gutter:[12,12],children:[Object(A.jsx)(f.a,{pageTitle:"Customers"}),Object(A.jsx)(l.a,{span:24,children:Object(A.jsxs)(s.a,{gutter:[12,12],className:"hp-ecommerce-app-header ",children:[Object(A.jsx)(l.a,{span:24,xs:24,sm:24,md:14,className:"hp-ecommerce-app-header-search",children:Object(A.jsx)(C,{className:"hp-mb-12",placeholder:"Search...",allowClear:!0,onChange:function(t){""==t.target.value&&(e.getPerson(Object(i.a)(Object(i.a)({},e.personParams),{},{page:1,search:""})),e.SetPersonParams(Object(i.a)(Object(i.a)({},e.personParams),{},{page:1,search:""})))},onSearch:function(t){var a;a=t,e.getPerson(Object(i.a)(Object(i.a)({},e.personParams),{},{page:1,search:a})),e.SetPersonParams(Object(i.a)(Object(i.a)({},e.personParams),{},{page:1,search:a}))}})}),Object(A.jsx)(l.a,{span:24,xs:8,sm:8,md:3,children:Object(A.jsx)(c.a,{onClick:function(){e.isDrawerVisible(!0)},className:"hp-w-100 hp-p-12",icon:Object(A.jsx)(b.a,{className:"hp-mr-10"}),children:!M.isMobile&&"Filter"})}),-1!==(null===(t=e.userAccessList)||void 0===t?void 0:t.indexOf("Masters.add_person"))&&Object(A.jsx)(l.a,{span:24,xs:8,sm:8,md:4,children:Object(A.jsx)(c.a,{onClick:function(){e.isModelVisible(!0)},className:"hp-w-100 hp-p-12",icon:Object(A.jsx)(v.a,{className:"hp-mr-10"}),children:!M.isMobile&&"Add Customer"})}),-1!==(null===(a=e.userAccessList)||void 0===a?void 0:a.indexOf("Masters.export_person"))&&Object(A.jsx)(l.a,{span:24,xs:8,sm:8,md:3,children:Object(A.jsx)(o.a,{placement:"topRight",title:"Are you sure to export this Record?",onConfirm:function(){e.getReportList({objData:{file_format:0,model_name:"Person"},ParamsData:Object(i.a)(Object(i.a)({},e.personParams),{},{start_date:null!=e.personParams.start_date&&""!=e.personParams.start_date?g()(e.personParams.start_date).format("YYYY-MM-DD"):"",end_date:null!=e.personParams.end_date&&""!=e.personParams.end_date?g()(e.personParams.end_date).add(1,"days").format("YYYY-MM-DD"):""})})},okText:"Yes",cancelText:"No",icon:Object(A.jsx)(w.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(A.jsx)(c.a,{className:"hp-w-100 hp-p-12",icon:Object(A.jsx)(O.a,{className:"hp-mr-10"}),children:!M.isMobile&&"Export"})})})]})}),Object(A.jsx)(l.a,{span:24,children:Object(A.jsx)(d.a,{children:Object(A.jsxs)(s.a,{className:"hp-mb-12",children:[Object(A.jsx)(l.a,{span:24,children:Object(A.jsx)(u.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(A.jsx)(h.a,{columns:V,dataSource:y,scroll:{x:1300},pagination:!1,size:"middle",onChange:function(t,a,n,r){if("sort"==r.action){var o="",s="";n.columnKey&&n.order&&("descend"==n.order&&(s="-"),o=n.columnKey),e.getPerson(Object(i.a)(Object(i.a)({},e.personParams),{},{page:1,currentSort:o,sortOrder:s}))}}})})}),Object(A.jsx)(l.a,{span:24,children:Object(A.jsx)(m.a,{size:"small",current:null===(j=e.personParams)||void 0===j?void 0:j.page,pageSize:null===(x=e.personParams)||void 0===x?void 0:x.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(t,a){e.clearPersonList(),e.SetPersonParams(Object(i.a)(Object(i.a)({},e.personParams),{},{page_size:a,page:0==t?1:t})),e.getPerson(Object(i.a)(Object(i.a)({},e.personParams),{},{page_size:a,page:0==t?1:t}))},className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),e.model&&Object(A.jsx)(D.a,{}),Object(A.jsx)(L,{}),e.viewModel&&Object(A.jsx)(E,{})]})}))}}]);
//# sourceMappingURL=144.74eaacf7.chunk.js.map