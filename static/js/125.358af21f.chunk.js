(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[125],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t(0);var i=t(521),n=t(531),s=t(519),r=t(154),o=t(51),c=t(43),l=t(8),d=t(216),m=t(3);function u(e){var a=Object(o.f)(),t=e.pageTitle,u=e.pageText,j=e.addModelTile,h=e.goBack,b=e.setIsModalVisible;return Object(m.jsx)(i.a,{span:24,children:Object(m.jsx)(n.a,{className:"hp-m-0",children:Object(m.jsxs)(s.a,{children:[Object(m.jsxs)(i.a,{span:18,children:[h&&Object(m.jsx)(c.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(m.jsx)(l.d,{className:"remix-icon",size:24})}),Object(m.jsxs)(s.a,{className:"hp-d-inline-block",children:[Object(m.jsx)(i.a,{span:24,children:t&&Object(m.jsx)("h2",{className:"hp-m-0",children:t})}),Object(m.jsx)(i.a,{span:24,children:u&&Object(m.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:u})})]})]}),Object(m.jsx)(i.a,{span:6,children:j&&Object(m.jsx)(r.a,{className:"hp-float-right",type:"primary",onClick:function(){return b(!0)},block:!0,icon:Object(m.jsx)(l.b,{className:"remix-icon",size:22}),children:!d.isMobile&&j})})]})})})}},564:function(e,a,t){"use strict";var i=t(10),n=t(0),s=t(32),r=(t(533),t(8)),o=t(524),c=t(154),l=t(526),d=t(519),m=t(521),u=t(215),j=t(550),h=t(126),b=t(15),p=t(3);a.a=Object(s.b)((function(e){var a=e.zones,t=e.mini;return{rowdata:a.rowdata,model:a.model,miniStatesList:t.miniStatesList,miniFirmList:t.miniFirmList}}),{zoneAdd:h.g,isModelVisible:h.f,InputChangeValue:h.a,getMiniFirm:b.E,getMiniStates:b.U})((function(e){var a,t,s,h=o.a.useForm(),b=Object(i.a)(h,1)[0];Object(n.useEffect)((function(){e.getMiniFirm(),e.getMiniStates()}),[]),console.log("props.rowdata",e.rowdata);var f=function(){e.isModelVisible(!1)},O=function(){return null==e.rowdata.id||0==e.rowdata.id?Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(c.a,{onClick:function(){b.submit()},type:"primary",block:!0,children:"Add"})}):Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(c.a,{type:"primary",onClick:function(){b.submit()},block:!0,children:"Update"})})},x=function(){return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(c.a,{onClick:function(){f()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},g=Object(p.jsxs)("h5",{className:"modal-title",children:[null==e.rowdata.id||0==e.rowdata.id?"Add":"Update"," ","Zone"]}),v=function(e){console.log("search:",e)};return Object(n.useEffect)((function(){b.setFieldsValue({name:e.rowdata.name,firm_id:e.rowdata.firm_id,state_id:e.rowdata.state_id})}),[e.rowdata]),Object(p.jsx)(l.a,{visible:e.model,title:g,onCancel:function(){f(),b.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(p.jsxs)(d.a,{justify:"center",children:[Object(p.jsx)(m.a,{span:12,className:"hp-pr-4",children:Object(p.jsx)(x,{})}),Object(p.jsx)(m.a,{span:12,className:"hp-pl-4",children:Object(p.jsx)(O,{})})]}),centered:!0,closeIcon:Object(p.jsx)(r.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(p.jsxs)(o.a,{layout:"vertical",form:b,autoComplete:"off",onFinish:function(){null==e.rowdata.id?function(){var a,t={id:0,name:null===(a=e.rowdata)||void 0===a?void 0:a.name,state_id:e.rowdata.state_id,firm_id:e.rowdata.firm_id};null==t.name&&""!=t.name||e.zoneAdd(t)}():function(){var a,t,i={id:null===(a=e.rowdata)||void 0===a?void 0:a.id,name:null===(t=e.rowdata)||void 0===t?void 0:t.name,state_id:e.rowdata.state_id,firm_id:e.rowdata.firm_id};e.zoneAdd(i)}()},children:[Object(p.jsx)(o.a.Item,{label:"Firm Name:",name:"firm_id",rules:[{required:!0,message:"Please select your Firm Name!"}],hasFeedback:!0,children:Object(p.jsx)(u.a,{showSearch:!0,placeholder:"Select Firm",optionFilterProp:"children",onSearch:v,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onChange:function(a){e.InputChangeValue({key:"firm_id",value:a})},value:null==e.rowdata.firm_id?"":null===(a=e.rowdata)||void 0===a?void 0:a.firm_id,children:e.miniFirmList.map((function(e,a){return Object(p.jsx)(Option,{value:e.id,children:e.name},a)}))})}),Object(p.jsx)(o.a.Item,{label:"State :",name:"state_id",rules:[{required:!0,message:"Please select your State Name!"}],hasFeedback:!0,children:Object(p.jsx)(u.a,{showSearch:!0,placeholder:"Select state",optionFilterProp:"children",onSearch:v,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onChange:function(a){e.InputChangeValue({key:"state_id",value:a})},value:null==e.rowdata.state_id?"":null===(t=e.rowdata)||void 0===t?void 0:t.state_id,children:e.miniStatesList.map((function(e,a){return Object(p.jsx)(Option,{value:e.id,children:e.name},a)}))})}),Object(p.jsx)(o.a.Item,{label:"Zone Name :",name:"name",rules:[{required:!0,message:"Please input your Zone Name!"}],hasFeedback:!0,children:Object(p.jsx)(j.a,{id:"Zone",name:"name",style:{width:"100%"},placeholder:"Zone Name",value:null===(s=e.rowdata)||void 0===s?void 0:s.name,onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})}})})]})})}))},628:function(e,a,t){"use strict";t.r(a);var i=t(1),n=t(0),s=t(538),r=t(550),o=t(519),c=t(521),l=t(531),d=t(337),m=t(340),u=t(539),j=t(676),h=t(8),b=t(32),p=t(534),f=t(564),O=t(126),x=t(3);a.default=Object(b.b)((function(e){var a=e.zones,t=e.system;return{zoneslist:a.zoneslist,noofpages:a.noofpages,listCount:a.listCount,zoneParams:a.zoneParams,loading:a.loading,userAccessList:t.userAccessList}}),{getZones:O.e,zonesEdit:O.i,zoneDelete:O.h,isModelVisible:O.f,SetZoneParams:O.b})((function(e){var a,t,b;Object(n.useEffect)((function(){e.getZones({page:1,search:"",page_size:10})}),[]),console.log("loding",e.loading);var O="hp-p1-body hp-text-color-black-50 hp-text-color-dark-0 hp-font-weight-500 ",g=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"15%"},{title:"Zone Name",render:function(e){return Object(x.jsx)("span",{className:O,children:e.name})},filterMode:"tree",filterSearch:!0,width:"20%"},{title:"State Name",filterMode:"tree",filterSearch:!0,width:"20%",render:function(e){var a;return Object(x.jsx)("span",{className:O,children:null===(a=e.state)||void 0===a?void 0:a.name})}},{title:"Firm Name",filterMode:"tree",filterSearch:!0,width:"20%",render:function(e){var a;return Object(x.jsx)("span",{className:O,children:null===(a=e.firm)||void 0===a?void 0:a.name})}},{title:"Actions",key:"action",width:"10%",render:function(a,t){var i,n;return Object(x.jsxs)(u.b,{size:"middle",children:[-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.change_zone"))&&Object(x.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.zonesEdit(a),e.isModelVisible(!0)}}),-1!==(null===(n=e.userAccessList)||void 0===n?void 0:n.indexOf("Masters.delete_zone"))&&Object(x.jsx)(s.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.zoneDelete(t.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(x.jsx)(h.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(x.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],v=e.zoneslist.map((function(a,t){return Object(i.a)(Object(i.a)({},a),{},{index:(e.zoneParams.page-1)*e.zoneParams.page_size+t+1})})),w=r.a.Search;return Object(x.jsxs)(o.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(x.jsx)(p.a,{pageTitle:"Zone Master",addModelTile:-1!==(null===(a=e.userAccessList)||void 0===a?void 0:a.indexOf("Masters.add_zone"))&&"Add Zone",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(x.jsx)(c.a,{span:24,children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(o.a,{className:"hp-mb-12",children:[Object(x.jsx)(c.a,{span:12,xs:24,sm:24,md:14,className:"hp-mb-16",children:Object(x.jsx)(w,{placeholder:"Search...",allowClear:!0,onChange:function(a){""==a.target.value&&(e.getZones(Object(i.a)(Object(i.a)({},e.zoneParams),{},{page:1,search:""})),e.SetZoneParams(Object(i.a)(Object(i.a)({},e.zoneParams),{},{page:1,search:""})))},onSearch:function(a){var t;t=a,e.SetZoneParams(Object(i.a)(Object(i.a)({},e.zoneParams),{},{search:t})),e.getZones(Object(i.a)(Object(i.a)({},e.zoneParams),{},{search:t}))}})}),Object(x.jsx)(c.a,{span:24,children:Object(x.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(x.jsx)(j.a,{columns:g,dataSource:v,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(x.jsx)(c.a,{span:24,children:Object(x.jsx)(m.a,{size:"small",current:null===(t=e.zoneParams)||void 0===t?void 0:t.page,pageSize:null===(b=e.zoneParams)||void 0===b?void 0:b.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(a,t){e.SetZoneParams(Object(i.a)(Object(i.a)({},e.zoneParams),{},{page_size:t,page:0==a?1:a})),e.getZones(Object(i.a)(Object(i.a)({},e.zoneParams),{},{page_size:t,page:0==a?1:a}))},className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(x.jsx)(f.a,{})]})}))}}]);
//# sourceMappingURL=125.358af21f.chunk.js.map