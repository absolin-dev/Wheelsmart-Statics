(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[113],{534:function(e,i,a){"use strict";a.d(i,"a",(function(){return u}));a(0);var s=a(521),n=a(531),t=a(519),o=a(154),c=a(51),l=a(43),r=a(8),d=a(216),j=a(3);function u(e){var i=Object(c.f)(),a=e.pageTitle,u=e.pageText,m=e.addModelTile,h=e.goBack,b=e.setIsModalVisible;return Object(j.jsx)(s.a,{span:24,children:Object(j.jsx)(n.a,{className:"hp-m-0",children:Object(j.jsxs)(t.a,{children:[Object(j.jsxs)(s.a,{span:18,children:[h&&Object(j.jsx)(l.b,{to:"#",onClick:function(){return i.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(j.jsx)(r.d,{className:"remix-icon",size:24})}),Object(j.jsxs)(t.a,{className:"hp-d-inline-block",children:[Object(j.jsx)(s.a,{span:24,children:a&&Object(j.jsx)("h2",{className:"hp-m-0",children:a})}),Object(j.jsx)(s.a,{span:24,children:u&&Object(j.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:u})})]})]}),Object(j.jsx)(s.a,{span:6,children:m&&Object(j.jsx)(o.a,{className:"hp-float-right",type:"primary",onClick:function(){return b(!0)},block:!0,icon:Object(j.jsx)(r.b,{className:"remix-icon",size:22}),children:!d.isMobile&&m})})]})})})}},573:function(e,i,a){"use strict";var s=a(10),n=a(0),t=a(32),o=(a(533),a(8)),c=a(524),l=a(154),r=a(526),d=a(519),j=a(521),u=a(215),m=a(550),h=a(128),b=a(15),p=a(3);i.a=Object(t.b)((function(e){var i=e.divisions,a=e.mini;return{rowdata:i.rowdata,model:i.model,miniZonesList:a.miniZonesList}}),{divisionAdd:h.e,isModelVisible:h.j,InputChangeValue:h.a,getMiniZones:b.eb})((function(e){var i,a,t=c.a.useForm(),h=Object(s.a)(t,1)[0];Object(n.useEffect)((function(){e.getMiniZones()}),[]);var b=function(){e.isModelVisible(!1)},v=function(){return null==e.rowdata.id||0==e.rowdata.id?Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(l.a,{onClick:function(){h.submit()},type:"primary",block:!0,children:"Add"})}):Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(l.a,{type:"primary",onClick:function(){h.submit()},block:!0,children:"Update"})})},O=function(){return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)(l.a,{onClick:function(){b()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},x=Object(p.jsxs)("h5",{className:"modal-title",children:[null==e.rowdata.id||0==e.rowdata.id?"Add":"Update"," ","Division"]});return Object(n.useEffect)((function(){h.setFieldsValue({name:e.rowdata.name,zone_id:e.rowdata.zone_id})}),[e.rowdata]),Object(p.jsx)(r.a,{visible:e.model,title:x,onCancel:function(){b(),h.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(p.jsxs)(d.a,{justify:"center",children:[Object(p.jsx)(j.a,{span:12,className:"hp-pr-4",children:Object(p.jsx)(O,{})}),Object(p.jsx)(j.a,{span:12,className:"hp-pl-4",children:Object(p.jsx)(v,{})})]}),centered:!0,closeIcon:Object(p.jsx)(o.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(p.jsxs)(c.a,{layout:"vertical",form:h,autoComplete:"off",onFinish:function(){null==e.rowdata.id?function(){var i,a={id:0,name:null===(i=e.rowdata)||void 0===i?void 0:i.name,zone_id:e.rowdata.zone_id};null==a.name&&""!=a.name||e.divisionAdd(a)}():function(){var i,a,s={id:null===(i=e.rowdata)||void 0===i?void 0:i.id,name:null===(a=e.rowdata)||void 0===a?void 0:a.name,zone_id:e.rowdata.zone_id};e.divisionAdd(s)}()},children:[Object(p.jsx)(c.a.Item,{label:"Zone Name :",name:"zone_id",rules:[{required:!0,message:"Please select your Zone Name!"}],hasFeedback:!0,children:Object(p.jsx)(u.a,{showSearch:!0,placeholder:"Select  Zone",optionFilterProp:"children",onSearch:function(e){console.log("search:",e)},filterOption:function(e,i){return i.children.toLowerCase().includes(e.toLowerCase())},onChange:function(i){e.InputChangeValue({key:"zone_id",value:i})},value:null==e.rowdata.zone_id?"":null===(i=e.rowdata)||void 0===i?void 0:i.zone_id,children:e.miniZonesList.map((function(e,i){return Object(p.jsx)(Option,{value:e.id,children:e.name},i)}))})}),Object(p.jsx)(c.a.Item,{label:"Division Name :",name:"name",rules:[{required:!0,message:"Please input your Division Name!"}],hasFeedback:!0,children:Object(p.jsx)(m.a,{id:"Zone",name:"name",style:{width:"100%"},placeholder:"Division Name",value:null===(a=e.rowdata)||void 0===a?void 0:a.name,onChange:function(i){e.InputChangeValue({key:i.target.name,value:i.target.value})}})})]})})}))},637:function(e,i,a){"use strict";a.r(i);var s=a(1),n=a(0),t=a(538),o=a(550),c=a(519),l=a(521),r=a(531),d=a(337),j=a(340),u=a(539),m=a(676),h=a(8),b=a(32),p=a(534),v=a(128),O=a(573),x=a(3);i.default=Object(b.b)((function(e){var i=e.divisions,a=e.system;return{divisionslist:i.divisionslist,noofpages:i.noofpages,listCount:i.listCount,divisionsParams:i.divisionsParams,loading:i.loading,userAccessList:a.userAccessList}}),{getDivisions:v.i,divisionsEdit:v.g,divisionDelete:v.f,isModelVisible:v.j,SetDivisionsParams:v.b})((function(e){var i,a,b;Object(n.useEffect)((function(){e.getDivisions({page:1,search:"",page_size:10})}),[]);var v=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"Division Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"zone Name",filterMode:"tree",filterSearch:!0,width:"20%",render:function(e){var i;return Object(x.jsx)("span",{className:"hp-p1-body hp-text-color-black-50 hp-text-color-dark-0 hp-font-weight-500 ",children:null===(i=e.zone)||void 0===i?void 0:i.name})}},{title:"Actions",key:"action",width:"10%",render:function(i,a){var s,n;return Object(x.jsxs)(u.b,{size:"middle",children:[-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.change_division"))&&Object(x.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.divisionsEdit(i),e.isModelVisible(!0)}}),-1!==(null===(n=e.userAccessList)||void 0===n?void 0:n.indexOf("Masters.delete_division"))&&Object(x.jsx)(t.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.divisionDelete(a.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(x.jsx)(h.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(x.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],f=e.divisionslist.map((function(i,a){return Object(s.a)(Object(s.a)({},i),{},{index:(e.divisionsParams.page-1)*e.divisionsParams.page_size+a+1})})),g=o.a.Search;return Object(x.jsxs)(c.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(x.jsx)(p.a,{pageTitle:"Divisions Master",addModelTile:-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.add_division"))&&"Add Divisions",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(r.a,{children:Object(x.jsxs)(c.a,{className:"hp-mb-12",children:[Object(x.jsx)(l.a,{span:12,xs:24,sm:24,md:14,className:"hp-mb-16",children:Object(x.jsx)(g,{placeholder:"Search...",allowClear:!0,onChange:function(i){""==i.target.value&&(e.getDivisions(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{page:1,search:""})),e.SetDivisionsParams(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{page:1,search:""})))},onSearch:function(i){var a;a=i,e.SetDivisionsParams(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{search:a})),e.getDivisions(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{search:a}))}})}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(x.jsx)(m.a,{columns:v,dataSource:f,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(j.a,{size:"small",current:null===(a=e.divisionsParams)||void 0===a?void 0:a.page,pageSize:null===(b=e.divisionsParams)||void 0===b?void 0:b.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(i,a){e.SetDivisionsParams(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{page_size:a,page:0==i?1:i})),e.getDivisions(Object(s.a)(Object(s.a)({},e.divisionsParams),{},{page_size:a,page:0==i?1:i}))},on:!0,className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(x.jsx)(O.a,{})]})}))}}]);
//# sourceMappingURL=113.c87c9954.chunk.js.map