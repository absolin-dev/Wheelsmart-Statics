(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[50],{534:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(0);var s=a(521),c=a(531),l=a(519),i=a(154),n=a(51),r=a(43),o=a(8),d=a(216),h=a(3);function p(e){var t=Object(n.f)(),a=e.pageTitle,p=e.pageText,u=e.addModelTile,j=e.goBack,m=e.setIsModalVisible;return Object(h.jsx)(s.a,{span:24,children:Object(h.jsx)(c.a,{className:"hp-m-0",children:Object(h.jsxs)(l.a,{children:[Object(h.jsxs)(s.a,{span:18,children:[j&&Object(h.jsx)(r.b,{to:"#",onClick:function(){return t.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(h.jsx)(o.d,{className:"remix-icon",size:24})}),Object(h.jsxs)(l.a,{className:"hp-d-inline-block",children:[Object(h.jsx)(s.a,{span:24,children:a&&Object(h.jsx)("h2",{className:"hp-m-0",children:a})}),Object(h.jsx)(s.a,{span:24,children:p&&Object(h.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:p})})]})]}),Object(h.jsx)(s.a,{span:6,children:u&&Object(h.jsx)(i.a,{className:"hp-float-right",type:"primary",onClick:function(){return m(!0)},block:!0,icon:Object(h.jsx)(o.b,{className:"remix-icon",size:22}),children:!d.isMobile&&u})})]})})})}},535:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a(1),c=a(550),l=a(3);function i(e){var t=e.value,a=e.onChange,i=e.onBlur;return Object(l.jsx)(c.a,Object(s.a)(Object(s.a)({},e),{},{onChange:function(t){var s=t.target.value;(/^-?\d*(\.\d*)?$/.test(s)||""===s||"-"===s)&&a({key:e.name,value:s})},onBlur:e.onBlur&&function(){var a=t;"."!==t.charAt(t.length-1)&&"-"!==t||(a=t.slice(0,-1)),i({key:e.name,value:a.replace(/0*(\d+)/,"$1")})}}))}},584:function(e,t,a){"use strict";var s=a(10),c=a(0),l=a(32),i=(a(533),a(8)),n=a(524),r=a(154),o=a(526),d=a(519),h=a(521),p=a(550),u=a(215),j=a(105),m=(a(535),a(3));t.a=Object(l.b)((function(e){var t=e.vehicletypes;return{selectedData:t.rowdata,model:t.model}}),{vehicletypesAdd:j.g,isModelVisible:j.f,InputChangeValue:j.a})((function(e){var t,a,l,j=n.a.useForm(),b=Object(s.a)(j,1)[0];var v=function(){e.isModelVisible(!1)},O=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(m.jsx)(c.Fragment,{children:Object(m.jsx)(r.a,{onClick:function(){b.submit()},type:"primary",block:!0,children:"Add"})}):Object(m.jsx)(c.Fragment,{children:Object(m.jsx)(r.a,{type:"primary",onClick:function(){b.submit()},block:!0,children:"Update"})})},x=function(){return Object(m.jsx)(c.Fragment,{children:Object(m.jsx)(r.a,{onClick:function(){v()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},f=Object(m.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","Vehicle Type"]});return Object(c.useEffect)((function(){b.setFieldsValue({name:e.selectedData.name,wheels:e.selectedData.wheels})}),[e.selectedData]),Object(m.jsx)(o.a,{visible:e.model,title:f,onCancel:function(){v(),b.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(m.jsxs)(d.a,{justify:"center",children:[Object(m.jsx)(h.a,{span:12,className:"hp-pr-4",children:Object(m.jsx)(x,{})}),Object(m.jsx)(h.a,{span:12,className:"hp-pl-4",children:Object(m.jsx)(O,{})})]}),centered:!0,closeIcon:Object(m.jsx)(i.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(m.jsxs)(n.a,{layout:"vertical",form:b,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var t,a,s={id:0,name:null===(t=e.selectedData)||void 0===t?void 0:t.name,wheels:null===(a=e.selectedData)||void 0===a?void 0:a.wheels};null==s.name&&""!=s.name||e.vehicletypesAdd(s)}():function(){var t,a,s={id:e.selectedData.id,name:null===(t=e.selectedData)||void 0===t?void 0:t.name,wheels:null===(a=e.selectedData)||void 0===a?void 0:a.wheels};e.vehicletypesAdd(s)}()},children:[Object(m.jsx)(n.a.Item,{label:"Vehicle Type:",name:"name",rules:[{required:!0,message:"Please input your Vehicle Type!"}],hasFeedback:!0,children:Object(m.jsx)(p.a,{id:"Vehicle Types",name:"name",style:{width:"100%"},placeholder:"Vehicle Type",value:null===(t=e.selectedData)||void 0===t?void 0:t.name,onChange:function(t){console.log("change Handeler ",t),e.InputChangeValue({key:t.target.name,value:t.target.value})}})}),Object(m.jsx)(n.a.Item,{label:"Wheels :",name:"wheels",rules:[{required:!0,message:"Please select your Wheels!"}],hasFeedback:!0,children:Object(m.jsx)(u.a,{showSearch:!0,filterOption:function(e,t){return t.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select  Wheels",optionFilterProp:"Wheels",onChange:function(t){e.InputChangeValue({key:"wheels",value:t})},value:null==(null===(a=e.selectedData)||void 0===a?void 0:a.wheels)?"":null===(l=e.selectedData)||void 0===l?void 0:l.wheels,children:[{id:1,name:"2 Wheeler"},{id:2,name:"3 Wheeler"},{id:3,name:"4 Wheeler"}].map((function(e,t){return Object(m.jsx)(Option,{value:e.id,children:e.name},t)}))})})]})})}))},650:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),l=a(538),i=a(550),n=a(519),r=a(521),o=a(531),d=a(337),h=a(340),p=a(539),u=a(676),j=a(8),m=a(32),b=a(534),v=a(105),O=a(584),x=a(3);t.default=Object(m.b)((function(e){var t=e.vehicletypes,a=e.system;return{vehicletypeslist:t.vehicletypeslist,noofpages:t.noofpages,listCount:t.listCount,vehicletypesParams:t.vehicletypesParams,loading:t.loading,userAccessList:a.userAccessList}}),{getVehicletypes:v.e,vehicletypesEdit:v.j,vehicletypesDelete:v.i,isModelVisible:v.f,SetVehicletypesParams:v.b})((function(e){var t,a,m;Object(c.useEffect)((function(){e.getVehicletypes({page:1,search:"",page_size:10})}),[]);var v=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"Vehicle Type",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Wheels",dataIndex:"wheels_name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Actions",key:"action",width:"10%",render:function(t,a){var s,c;return Object(x.jsxs)(p.b,{size:"middle",children:[-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.change_vehicletype"))&&Object(x.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.vehicletypesEdit(t),e.isModelVisible(!0)}}),-1!==(null===(c=e.userAccessList)||void 0===c?void 0:c.indexOf("Masters.delete_vehicletype"))&&Object(x.jsx)(l.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.vehicletypesDelete(a.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(x.jsx)(j.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(x.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],f=e.vehicletypeslist.map((function(t,a){return Object(s.a)(Object(s.a)({},t),{},{index:(e.vehicletypesParams.page-1)*e.vehicletypesParams.page_size+a+1})})),y=i.a.Search;return Object(x.jsxs)(n.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(x.jsx)(b.a,{pageTitle:"Vehicle Types Master",addModelTile:-1!==(null===(t=e.userAccessList)||void 0===t?void 0:t.indexOf("Masters.add_vehicletype"))&&"Add Vehicle Type",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(x.jsx)(r.a,{span:24,children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(n.a,{className:"hp-mb-12",children:[Object(x.jsx)(r.a,{span:12,xs:24,sm:24,md:14,className:"hp-mb-16",children:Object(x.jsx)(y,{placeholder:"Search...",allowClear:!0,onChange:function(t){""==t.target.value&&(e.getVehicletypes(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{page:1,search:""})),e.SetVehicletypesParams(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{page:1,search:""})))},onSearch:function(t){var a;a=t,e.SetVehicletypesParams(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{search:a})),e.getVehicletypes(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{search:a}))}})}),Object(x.jsx)(r.a,{span:24,children:Object(x.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(x.jsx)(u.a,{columns:v,dataSource:f,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(x.jsx)(r.a,{span:24,children:Object(x.jsx)(h.a,{size:"small",current:null===(a=e.vehicletypesParams)||void 0===a?void 0:a.page,pageSize:null===(m=e.vehicletypesParams)||void 0===m?void 0:m.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(t,a){e.SetVehicletypesParams(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{page_size:a,page:0==t?1:t})),e.getVehicletypes(Object(s.a)(Object(s.a)({},e.vehicletypesParams),{},{page_size:a,page:0==t?1:t}))},className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(x.jsx)(O.a,{})]})}))}}]);
//# sourceMappingURL=50.2965c65d.chunk.js.map