(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[115],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));t(0);var i=t(521),s=t(531),c=t(519),n=t(154),r=t(51),l=t(43),d=t(8),o=t(216),m=t(3);function j(e){var a=Object(r.f)(),t=e.pageTitle,j=e.pageText,b=e.addModelTile,u=e.goBack,h=e.setIsModalVisible;return Object(m.jsx)(i.a,{span:24,children:Object(m.jsx)(s.a,{className:"hp-m-0",children:Object(m.jsxs)(c.a,{children:[Object(m.jsxs)(i.a,{span:18,children:[u&&Object(m.jsx)(l.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(m.jsx)(d.d,{className:"remix-icon",size:24})}),Object(m.jsxs)(c.a,{className:"hp-d-inline-block",children:[Object(m.jsx)(i.a,{span:24,children:t&&Object(m.jsx)("h2",{className:"hp-m-0",children:t})}),Object(m.jsx)(i.a,{span:24,children:j&&Object(m.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:j})})]})]}),Object(m.jsx)(i.a,{span:6,children:b&&Object(m.jsx)(n.a,{className:"hp-float-right",type:"primary",onClick:function(){return h(!0)},block:!0,icon:Object(m.jsx)(d.b,{className:"remix-icon",size:22}),children:!o.isMobile&&b})})]})})})}},565:function(e,a,t){"use strict";var i=t(10),s=t(0),c=t(32),n=(t(533),t(8)),r=t(524),l=t(154),d=t(526),o=t(519),m=t(521),j=t(550),b=t(92),u=t(3);a.a=Object(c.b)((function(e){var a=e.firm;return{selectedData:a.rowdata,model:a.model}}),{firmAdd:b.e,isModelVisible:b.k,InputChangeValue:b.a})((function(e){var a,t=r.a.useForm(),c=Object(i.a)(t,1)[0];var b=function(){e.isModelVisible(!1)},h=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(l.a,{onClick:function(){c.submit()},type:"primary",block:!0,children:"Add"})}):Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(l.a,{type:"primary",onClick:function(){c.submit()},block:!0,children:"Update"})})},f=function(){return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(l.a,{onClick:function(){b()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},p=Object(u.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","Firm"]});return Object(s.useEffect)((function(){c.setFieldsValue({name:e.selectedData.name})}),[e.selectedData]),Object(u.jsx)(d.a,{visible:e.model,title:p,onCancel:function(){b(),c.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(u.jsxs)(o.a,{justify:"center",children:[Object(u.jsx)(m.a,{span:12,className:"hp-pr-4",children:Object(u.jsx)(f,{})}),Object(u.jsx)(m.a,{span:12,className:"hp-pl-4",children:Object(u.jsx)(h,{})})]}),centered:!0,closeIcon:Object(u.jsx)(n.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(u.jsx)(r.a,{layout:"vertical",form:c,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var a,t={id:0,name:null===(a=e.selectedData)||void 0===a?void 0:a.name};null==t.name&&""!=t.name||e.firmAdd(t)}():function(){var a,t={id:e.selectedData.id,name:null===(a=e.selectedData)||void 0===a?void 0:a.name};e.firmAdd(t)}()},children:Object(u.jsx)(r.a.Item,{label:"Firm Name :",name:"name",rules:[{required:!0,message:"Please input your Firm Name!"}],hasFeedback:!0,children:Object(u.jsx)(j.a,{id:"Country",name:"name",style:{width:"100%"},placeholder:"Firm Name",value:null===(a=e.selectedData)||void 0===a?void 0:a.name,onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})}})})})})}))},629:function(e,a,t){"use strict";t.r(a);var i=t(1),s=t(0),c=t(550),n=t(538),r=t(519),l=t(521),d=t(531),o=t(337),m=t(340),j=t(539),b=t(676),u=t(8),h=t(32),f=t(534),p=t(565),O=t(92),x=t(3);a.default=Object(h.b)((function(e){var a=e.firm,t=e.system;return{firmlist:a.firmlist,noofpages:a.noofpages,listCount:a.listCount,firmParams:a.firmParams,loading:a.loading,userAccessList:t.userAccessList}}),{getFirm:O.j,firmEdit:O.h,firmDelete:O.g,isModelVisible:O.k,SetFirmParams:O.b})((function(e){var a,t,h;Object(s.useEffect)((function(){e.getFirm({page:1,search:"",page_size:10})}),[]);var O=c.a.Search,g=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"Firm Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Actions",key:"action",width:"10%",render:function(a,t){var i,s;return Object(x.jsxs)(j.b,{size:"middle",children:[-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.change_firm"))&&Object(x.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.firmEdit(a),e.isModelVisible(!0)}}),-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.delete_firm"))&&Object(x.jsx)(n.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.firmDelete(t.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(x.jsx)(u.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(x.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],v=e.firmlist.map((function(a,t){return Object(i.a)(Object(i.a)({},a),{},{index:(e.firmParams.page-1)*e.firmParams.page_size+t+1})}));return Object(x.jsxs)(r.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(x.jsx)(f.a,{pageTitle:"Firm",addModelTile:-1!==(null===(a=e.userAccessList)||void 0===a?void 0:a.indexOf("Masters.add_firm"))&&"Add Firm",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(r.a,{className:"hp-mb-12",children:[Object(x.jsx)(l.a,{span:12,xs:24,sm:24,md:14,className:"hp-mb-12",children:Object(x.jsx)(O,{placeholder:"Search...",allowClear:!0,onChange:function(a){""==a.target.value&&(e.getFirm(Object(i.a)(Object(i.a)({},e.firmParams),{},{page:1,search:""})),e.SetFirmParams(Object(i.a)(Object(i.a)({},e.firmParams),{},{page:1,search:""})))},onSearch:function(a){var t;t=a,e.SetFirmParams(Object(i.a)(Object(i.a)({},e.firmParams),{},{search:t})),e.getFirm(Object(i.a)(Object(i.a)({},e.firmParams),{},{search:t}))}})}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(o.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(x.jsx)(b.a,{columns:g,dataSource:v,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(x.jsx)(l.a,{span:24,children:Object(x.jsx)(m.a,{size:"small",current:null===(t=e.firmParams)||void 0===t?void 0:t.page,pageSize:null===(h=e.firmParams)||void 0===h?void 0:h.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(a,t){e.SetFirmParams(Object(i.a)(Object(i.a)({},e.firmParams),{},{page_size:t,page:0==a?1:a})),e.getFirm(Object(i.a)(Object(i.a)({},e.firmParams),{},{page_size:t,page:0==a?1:a}))},className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(x.jsx)(p.a,{})]})}))}}]);
//# sourceMappingURL=115.432acf85.chunk.js.map