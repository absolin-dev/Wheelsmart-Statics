(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[102],{534:function(e,s,a){"use strict";a.d(s,"a",(function(){return j}));a(0);var t=a(521),r=a(531),c=a(519),o=a(154),d=a(51),i=a(43),n=a(8),l=a(216),p=a(3);function j(e){var s=Object(d.f)(),a=e.pageTitle,j=e.pageText,m=e.addModelTile,b=e.goBack,f=e.setIsModalVisible;return Object(p.jsx)(t.a,{span:24,children:Object(p.jsx)(r.a,{className:"hp-m-0",children:Object(p.jsxs)(c.a,{children:[Object(p.jsxs)(t.a,{span:18,children:[b&&Object(p.jsx)(i.b,{to:"#",onClick:function(){return s.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(p.jsx)(n.d,{className:"remix-icon",size:24})}),Object(p.jsxs)(c.a,{className:"hp-d-inline-block",children:[Object(p.jsx)(t.a,{span:24,children:a&&Object(p.jsx)("h2",{className:"hp-m-0",children:a})}),Object(p.jsx)(t.a,{span:24,children:j&&Object(p.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:j})})]})]}),Object(p.jsx)(t.a,{span:6,children:m&&Object(p.jsx)(o.a,{className:"hp-float-right",type:"primary",onClick:function(){return f(!0)},block:!0,icon:Object(p.jsx)(n.b,{className:"remix-icon",size:22}),children:!l.isMobile&&m})})]})})})}},578:function(e,s,a){"use strict";var t=a(10),r=a(0),c=a(32),o=(a(533),a(8)),d=a(524),i=a(154),n=a(526),l=a(519),p=a(521),j=a(550),m=a(99),b=a(3);s.a=Object(c.b)((function(e){var s=e.addressproof;return{selectedData:s.rowdata,model:s.model}}),{addressproofAdd:m.c,isModelVisible:m.k,InputChangeValue:m.a})((function(e){var s,a=d.a.useForm(),c=Object(t.a)(a,1)[0];var m=function(){e.isModelVisible(!1)},f=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(i.a,{onClick:function(){c.submit()},type:"primary",block:!0,children:"Add"})}):Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(i.a,{type:"primary",onClick:function(){c.submit()},block:!0,children:"Update"})})},u=function(){return Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(i.a,{onClick:function(){m()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},h=Object(b.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","Address Proof"]});return Object(r.useEffect)((function(){c.setFieldsValue({name:e.selectedData.name})}),[e.selectedData]),Object(b.jsx)(n.a,{visible:e.model,title:h,onCancel:function(){m(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(b.jsxs)(l.a,{justify:"center",children:[Object(b.jsx)(p.a,{span:12,className:"hp-pr-4",children:Object(b.jsx)(u,{})}),Object(b.jsx)(p.a,{span:12,className:"hp-pl-4",children:Object(b.jsx)(f,{})})]}),centered:!0,closeIcon:Object(b.jsx)(o.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(b.jsx)(d.a,{layout:"vertical",form:c,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var s,a={id:0,name:null===(s=e.selectedData)||void 0===s?void 0:s.name};null==a.name&&""!=a.name||e.addressproofAdd(a)}():function(){var s,a={id:e.selectedData.id,name:null===(s=e.selectedData)||void 0===s?void 0:s.name};e.addressproofAdd(a)}()},children:Object(b.jsx)(d.a.Item,{label:"Address Proof Name :",name:"name",rules:[{required:!0,message:"Please input Your Address Proof Name!"}],hasFeedback:!0,children:Object(b.jsx)(j.a,{id:"Country",name:"name",style:{width:"100%"},placeholder:"Address Proof Name",value:null===(s=e.selectedData)||void 0===s?void 0:s.name,onChange:function(s){e.InputChangeValue({key:s.target.name,value:s.target.value})}})})})})}))},644:function(e,s,a){"use strict";a.r(s);var t=a(1),r=a(0),c=a(539),o=a(538),d=a(550),i=a(519),n=a(521),l=a(531),p=a(337),j=a(676),m=a(340),b=a(8),f=a(32),u=a(534),h=a(99),O=a(578),x=a(3);s.default=Object(f.b)((function(e){var s=e.addressproof,a=e.system;return{addressprooflist:s.addressprooflist,noofpages:s.noofpages,listCount:s.listCount,addressproofParams:s.addressproofParams,loading:s.loading,userAccessList:a.userAccessList}}),{getAddressproofs:h.j,addressproofEdit:h.f,addressproofDelete:h.e,isModelVisible:h.k,SetAddressproofsParams:h.b})((function(e){var s,a,f;Object(r.useEffect)((function(){e.getAddressproofs({page:1,search:"",page_size:10})}),[]);var h=[{title:"S.No",dataIndex:"index",width:"10%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"Address Proof Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Actions",key:"action",width:"10%",render:function(s,a){var t,r;return Object(x.jsxs)(c.b,{size:"middle",children:[-1!==(null===(t=e.userAccessList)||void 0===t?void 0:t.indexOf("Masters.change_addressproof"))&&Object(x.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.addressproofEdit(s),e.isModelVisible(!0)}}),-1!==(null===(r=e.userAccessList)||void 0===r?void 0:r.indexOf("Masters.delete_addressproof"))&&Object(x.jsx)(o.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.addressproofDelete(a.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(x.jsx)(b.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(x.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],g=e.addressprooflist.map((function(s,a){return Object(t.a)(Object(t.a)({},s),{},{index:(e.addressproofParams.page-1)*e.addressproofParams.page_size+a+1})})),v=d.a.Search;return Object(x.jsxs)(i.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(x.jsx)(u.a,{pageTitle:"Address Proof Master",addModelTile:-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.add_addressproof"))&&"Add Address Proof Master",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(i.a,{className:"hp-mb-12",children:[Object(x.jsx)(n.a,{span:12,xs:24,sm:24,md:12,className:"hp-mb-16",children:Object(x.jsx)(v,{placeholder:"Search...",allowClear:!0,onChange:function(s){""==s.target.value&&(e.getAddressproofs(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{page:1,search:""})),e.SetAddressproofsParams(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{page:1,search:""})))},onSearch:function(s){var a;a=s,e.SetAddressproofsParams(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{search:a})),e.getAddressproofs(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{search:a}))}})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(p.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(x.jsx)(j.a,{columns:h,dataSource:g,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(x.jsx)(n.a,{span:24,children:Object(x.jsx)(m.a,{size:"small",current:null===(a=e.addressproofParams)||void 0===a?void 0:a.page,pageSize:null===(f=e.addressproofParams)||void 0===f?void 0:f.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(s,a){e.SetAddressproofsParams(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{page_size:a,page:0==s?1:s})),e.getAddressproofs(Object(t.a)(Object(t.a)({},e.addressproofParams),{},{page_size:a,page:0==s?1:s}))},on:!0,className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(x.jsx)(O.a,{})]})}))}}]);
//# sourceMappingURL=102.38cb2068.chunk.js.map