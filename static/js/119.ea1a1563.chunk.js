(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[119],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t(0);var c=t(521),i=t(531),s=t(519),n=t(154),o=t(51),l=t(43),r=t(8),d=t(216),u=t(3);function p(e){var a=Object(o.f)(),t=e.pageTitle,p=e.pageText,j=e.addModelTile,b=e.goBack,m=e.setIsModalVisible;return Object(u.jsx)(c.a,{span:24,children:Object(u.jsx)(i.a,{className:"hp-m-0",children:Object(u.jsxs)(s.a,{children:[Object(u.jsxs)(c.a,{span:18,children:[b&&Object(u.jsx)(l.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(u.jsx)(r.d,{className:"remix-icon",size:24})}),Object(u.jsxs)(s.a,{className:"hp-d-inline-block",children:[Object(u.jsx)(c.a,{span:24,children:t&&Object(u.jsx)("h2",{className:"hp-m-0",children:t})}),Object(u.jsx)(c.a,{span:24,children:p&&Object(u.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:p})})]})]}),Object(u.jsx)(c.a,{span:6,children:j&&Object(u.jsx)(n.a,{className:"hp-float-right",type:"primary",onClick:function(){return m(!0)},block:!0,icon:Object(u.jsx)(r.b,{className:"remix-icon",size:22}),children:!d.isMobile&&j})})]})})})}},567:function(e,a,t){"use strict";var c=t(10),i=t(0),s=t(32),n=(t(533),t(8)),o=t(524),l=t(154),r=t(526),d=t(519),u=t(521),p=t(550),j=t(95),b=t(3);a.a=Object(s.b)((function(e){var a=e.occupations;return{selectedData:a.rowdata,model:a.model}}),{occupationAdd:j.g,isModelVisible:j.f,InputChangeValue:j.a})((function(e){var a,t=o.a.useForm(),s=Object(c.a)(t,1)[0];var j=function(){e.isModelVisible(!1)},m=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(l.a,{onClick:function(){s.submit()},type:"primary",block:!0,children:"Add"})}):Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(l.a,{type:"primary",onClick:function(){s.submit()},block:!0,children:"Update"})})},h=function(){return Object(b.jsx)(i.Fragment,{children:Object(b.jsx)(l.a,{onClick:function(){j()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},O=Object(b.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","Occupation"]});return Object(i.useEffect)((function(){s.setFieldsValue({name:e.selectedData.name})}),[e.selectedData]),Object(b.jsx)(r.a,{visible:e.model,title:O,onCancel:function(){j(),s.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(b.jsxs)(d.a,{justify:"center",children:[Object(b.jsx)(u.a,{span:12,className:"hp-pr-4",children:Object(b.jsx)(h,{})}),Object(b.jsx)(u.a,{span:12,className:"hp-pl-4",children:Object(b.jsx)(m,{})})]}),centered:!0,closeIcon:Object(b.jsx)(n.k,{className:"remix-icon text-color-black-100",size:24}),width:416,children:Object(b.jsx)(o.a,{layout:"vertical",form:s,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var a,t={id:0,name:null===(a=e.selectedData)||void 0===a?void 0:a.name};null==t.name&&""!=t.name||e.occupationAdd(t)}():function(){var a,t={id:e.selectedData.id,name:null===(a=e.selectedData)||void 0===a?void 0:a.name};e.occupationAdd(t)}()},children:Object(b.jsx)(o.a.Item,{label:"Occupation  Name :",name:"name",rules:[{required:!0,message:"Please input your Occupation  Name!"},{pattern:new RegExp(/^[a-zA-Z][a-zA-Z\s]+$/i),message:"field does not accept numbers"}],hasFeedback:!0,children:Object(b.jsx)(p.a,{id:"Country",name:"name",style:{width:"100%"},placeholder:"Occupation  Name",value:null===(a=e.selectedData)||void 0===a?void 0:a.name,onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})}})})})})}))},632:function(e,a,t){"use strict";t.r(a);var c=t(1),i=t(0),s=t(550),n=t(538),o=t(519),l=t(521),r=t(531),d=t(337),u=t(340),p=t(539),j=t(676),b=t(8),m=t(32),h=t(534),O=t(95),x=t(567),f=t(3);a.default=Object(m.b)((function(e){var a=e.occupations,t=e.system;return{occupationslist:a.occupationslist,noofpages:a.noofpages,listCount:a.listCount,occupationsParams:a.occupationsParams,loading:a.loading,userAccessList:t.userAccessList}}),{getOccupations:O.e,occupationEdit:O.j,occupationDelete:O.i,isModelVisible:O.f,SetOccupationsParams:O.b})((function(e){var a,t,m,O=s.a.Search;Object(i.useEffect)((function(){e.getOccupations({page:1,search:"",page_size:10})}),[]);var g=[{title:"S.No",dataIndex:"index",width:"5%"},{title:"Code",dataIndex:"code",filterSearch:!0,width:"35%"},{title:"Occupation Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"40%"},{title:"Actions",key:"action",sorter:!1,width:"10%",render:function(a,t){var c,i;return Object(f.jsxs)(p.b,{size:"middle",children:[-1!==(null===(c=e.userAccessList)||void 0===c?void 0:c.indexOf("Masters.change_occupation"))&&Object(f.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.occupationEdit(a),e.isModelVisible(!0)}}),-1!==(null===(i=e.userAccessList)||void 0===i?void 0:i.indexOf("Masters.delete_occupation"))&&Object(f.jsx)(n.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.occupationDelete(t.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(f.jsx)(b.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(f.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],v=e.occupationslist.map((function(a,t){return Object(c.a)(Object(c.a)({},a),{},{index:(e.occupationsParams.page-1)*e.occupationsParams.page_size+t+1})}));return Object(f.jsxs)(o.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(f.jsx)(h.a,{pageTitle:"Occupations Master",addModelTile:-1!==(null===(a=e.userAccessList)||void 0===a?void 0:a.indexOf("Masters.add_occupation"))&&"Add Occupation",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(f.jsx)(l.a,{span:24,children:Object(f.jsx)(r.a,{children:Object(f.jsxs)(o.a,{className:"hp-mb-12",children:[Object(f.jsx)(l.a,{span:12,children:Object(f.jsx)(O,{placeholder:"Search...",allowClear:!0,onChange:function(a){""==a.target.value&&(e.getOccupations(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{page:1,search:""})),e.SetOccupationsParams(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{page:1,search:""})))},onSearch:function(a){var t;t=a,e.SetOccupationsParams(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{search:t})),e.getOccupations(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{search:t}))}})}),Object(f.jsx)(l.a,{span:24,children:Object(f.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(f.jsx)(j.a,{columns:g,dataSource:v,scroll:{x:500},pagination:!1,size:"middle"})})}),Object(f.jsx)(l.a,{span:24,children:Object(f.jsx)(u.a,{size:"small",current:null===(t=e.occupationsParams)||void 0===t?void 0:t.page,pageSize:null===(m=e.occupationsParams)||void 0===m?void 0:m.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(a,t){e.SetOccupationsParams(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{page_size:t,page:0==a?1:a})),e.getOccupations(Object(c.a)(Object(c.a)({},e.occupationsParams),{},{page_size:t,page:0==a?1:a}))},on:!0,className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(f.jsx)(x.a,{})]})}))}}]);
//# sourceMappingURL=119.ea1a1563.chunk.js.map