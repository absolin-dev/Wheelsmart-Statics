(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[123],{534:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a(0);var s=a(521),i=a(531),n=a(519),c=a(154),l=a(51),r=a(43),o=a(8),d=a(216),u=a(3);function j(e){var t=Object(l.f)(),a=e.pageTitle,j=e.pageText,m=e.addModelTile,b=e.goBack,h=e.setIsModalVisible;return Object(u.jsx)(s.a,{span:24,children:Object(u.jsx)(i.a,{className:"hp-m-0",children:Object(u.jsxs)(n.a,{children:[Object(u.jsxs)(s.a,{span:18,children:[b&&Object(u.jsx)(r.b,{to:"#",onClick:function(){return t.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(u.jsx)(o.d,{className:"remix-icon",size:24})}),Object(u.jsxs)(n.a,{className:"hp-d-inline-block",children:[Object(u.jsx)(s.a,{span:24,children:a&&Object(u.jsx)("h2",{className:"hp-m-0",children:a})}),Object(u.jsx)(s.a,{span:24,children:j&&Object(u.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:j})})]})]}),Object(u.jsx)(s.a,{span:6,children:m&&Object(u.jsx)(c.a,{className:"hp-float-right",type:"primary",onClick:function(){return h(!0)},block:!0,icon:Object(u.jsx)(o.b,{className:"remix-icon",size:22}),children:!d.isMobile&&m})})]})})})}},558:function(e,t,a){"use strict";var s=a(10),i=a(0),n=a(32),c=(a(533),a(8)),l=a(524),r=a(215),o=a(154),d=a(526),u=a(519),j=a(521),m=a(550),b=a(89),h=a(15),p=a(3);t.a=Object(n.b)((function(e){var t=e.states,a=e.mini;return{selectedData:t.rowdata,model:t.model,miniCountryList:a.miniCountryList}}),{stateAdd:b.g,isModelVisible:b.f,InputChangeValue:b.a,getMinicountry:h.gb})((function(e){var t,a,n=l.a.useForm(),b=Object(s.a)(n,1)[0];Object(i.useEffect)((function(){e.getMinicountry()}),[]),console.log("miniCountryList",e.miniCountryList);var h=r.a.Option,O=function(){e.isModelVisible(!1)},x=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(p.jsx)(i.Fragment,{children:Object(p.jsx)(o.a,{onClick:function(){b.submit()},type:"primary",block:!0,children:"Add"})}):Object(p.jsx)(i.Fragment,{children:Object(p.jsx)(o.a,{type:"primary",onClick:function(){b.submit()},block:!0,children:"Update"})})},f=function(){return Object(p.jsx)(i.Fragment,{children:Object(p.jsx)(o.a,{onClick:function(){O()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},g=Object(p.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","State"]});return Object(i.useEffect)((function(){b.setFieldsValue({name:e.selectedData.name,country_id:e.selectedData.country_id})}),[e.selectedData]),Object(p.jsx)(d.a,{visible:e.model,title:g,onCancel:function(){O(),b.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(p.jsxs)(u.a,{justify:"center",children:[Object(p.jsx)(j.a,{span:12,className:"hp-pr-4",children:Object(p.jsx)(f,{})}),Object(p.jsx)(j.a,{span:12,className:"hp-pl-4",children:Object(p.jsx)(x,{})})]}),centered:!0,closeIcon:Object(p.jsx)(c.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(p.jsxs)(l.a,{layout:"vertical",form:b,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var t,a,s={id:0,country_id:null===(t=e.selectedData)||void 0===t?void 0:t.country_id,name:null===(a=e.selectedData)||void 0===a?void 0:a.name};null==s.name&&""!=s.name||e.stateAdd(s)}():function(){var t,a,s,i={id:e.selectedData.id,country_id:null==(null===(t=e.selectedData)||void 0===t?void 0:t.country_id)?e.selectedData.country.id:null===(a=e.selectedData)||void 0===a?void 0:a.country_id,name:null===(s=e.selectedData)||void 0===s?void 0:s.name};e.stateAdd(i)}()},children:[Object(p.jsx)(l.a.Item,{label:"Country Name:",name:"country_id",rules:[{required:!0,message:"Please select your Country Name!"}],hasFeedback:!0,children:Object(p.jsx)(r.a,{showSearch:!0,placeholder:"Select Country",optionFilterProp:"children",onChange:function(t){e.InputChangeValue({key:"country_id",value:t})},value:null==e.selectedData.country_id?"":null===(t=e.selectedData)||void 0===t?void 0:t.country_id,children:e.miniCountryList.map((function(e,t){return Object(p.jsx)(h,{value:e.id,children:e.name},t)}))})}),Object(p.jsx)(l.a.Item,{label:"State Name :",name:"name",rules:[{required:!0,message:"Please input your State Name!"}],hasFeedback:!0,children:Object(p.jsx)(m.a,{id:"State",name:"name",style:{width:"100%"},placeholder:"State Name",value:null===(a=e.selectedData)||void 0===a?void 0:a.name,onChange:function(t){e.InputChangeValue({key:t.target.name,value:t.target.value})}})})]})})}))},625:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(0),n=a(538),c=a(550),l=a(519),r=a(521),o=a(531),d=a(337),u=a(340),j=a(539),m=a(676),b=a(8),h=a(32),p=a(534),O=a(558),x=a(15),f=a(89),g=a(3);t.default=Object(h.b)((function(e){var t=e.states,a=e.system;return{stateslist:t.stateslist,noofpages:t.noofpages,listCount:t.listCount,stateParams:t.stateParams,loading:t.loading,userAccessList:a.userAccessList}}),{getStates:f.e,stateEdit:f.j,stateDelete:f.i,isModelVisible:f.f,SetStateParams:f.b,getMinicountry:x.gb})((function(e){var t,a,h;Object(i.useEffect)((function(){e.getStates({page:1,search:"",page_size:10})}),[]);var x=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"State Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Country Name",dataIndex:"countryname",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Actions",key:"action",width:"10%",render:function(t,a){var s,i;return Object(g.jsxs)(j.b,{size:"middle",children:[-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.change_state"))&&Object(g.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.stateEdit(t),e.isModelVisible(!0)}}),-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.delete_state"))&&Object(g.jsx)(n.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.stateDelete(a.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(g.jsx)(b.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(g.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],f=e.stateslist.map((function(t,a){return Object(s.a)(Object(s.a)({},t),{},{index:(e.stateParams.page-1)*e.stateParams.page_size+a+1,countryname:t.country.name})})),y=c.a.Search;return Object(g.jsxs)(l.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(g.jsx)(p.a,{pageTitle:"State Master",addModelTile:-1!==(null===(t=e.userAccessList)||void 0===t?void 0:t.indexOf("Masters.add_state"))&&"Add State",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(g.jsx)(r.a,{span:24,children:Object(g.jsx)(o.a,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(r.a,{span:12,xs:24,sm:24,md:12,className:"hp-mb-12",children:Object(g.jsx)(y,{placeholder:"Search...",allowClear:!0,onChange:function(t){""==t.target.value&&(e.getStates(Object(s.a)(Object(s.a)({},e.stateParams),{},{page:1,search:""})),e.SetStateParams(Object(s.a)(Object(s.a)({},e.stateParams),{},{page:1,search:""})))},onSearch:function(t){var a;a=t,e.SetStateParams(Object(s.a)(Object(s.a)({},e.stateParams),{},{search:a})),e.getStates(Object(s.a)(Object(s.a)({},e.stateParams),{},{search:a}))}})}),Object(g.jsx)(r.a,{span:24,children:Object(g.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(g.jsx)(m.a,{columns:x,dataSource:f,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(g.jsx)(r.a,{span:24,children:Object(g.jsx)(u.a,{size:"small",current:null===(a=e.stateParams)||void 0===a?void 0:a.page,pageSize:null===(h=e.stateParams)||void 0===h?void 0:h.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(t,a){e.SetStateParams(Object(s.a)(Object(s.a)({},e.stateParams),{},{page_size:a,page:0==t?1:t})),e.getStates(Object(s.a)(Object(s.a)({},e.stateParams),{},{page_size:a,page:0==t?1:t}))},className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(g.jsx)(O.a,{})]})}))}}]);
//# sourceMappingURL=123.bb06a4d6.chunk.js.map