(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[48],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));t(0);var s=t(521),o=t(531),c=t(519),n=t(154),i=t(51),l=t(43),r=t(8),d=t(216),m=t(3);function h(e){var a=Object(i.f)(),t=e.pageTitle,h=e.pageText,u=e.addModelTile,b=e.goBack,j=e.setIsModalVisible;return Object(m.jsx)(s.a,{span:24,children:Object(m.jsx)(o.a,{className:"hp-m-0",children:Object(m.jsxs)(c.a,{children:[Object(m.jsxs)(s.a,{span:18,children:[b&&Object(m.jsx)(l.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(m.jsx)(r.d,{className:"remix-icon",size:24})}),Object(m.jsxs)(c.a,{className:"hp-d-inline-block",children:[Object(m.jsx)(s.a,{span:24,children:t&&Object(m.jsx)("h2",{className:"hp-m-0",children:t})}),Object(m.jsx)(s.a,{span:24,children:h&&Object(m.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:h})})]})]}),Object(m.jsx)(s.a,{span:6,children:u&&Object(m.jsx)(n.a,{className:"hp-float-right",type:"primary",onClick:function(){return j(!0)},block:!0,icon:Object(m.jsx)(r.b,{className:"remix-icon",size:22}),children:!d.isMobile&&u})})]})})})}},535:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var s=t(1),o=t(550),c=t(3);function n(e){var a=e.value,t=e.onChange,n=e.onBlur;return Object(c.jsx)(o.a,Object(s.a)(Object(s.a)({},e),{},{onChange:function(a){var s=a.target.value;(/^-?\d*(\.\d*)?$/.test(s)||""===s||"-"===s)&&t({key:e.name,value:s})},onBlur:e.onBlur&&function(){var t=a;"."!==a.charAt(a.length-1)&&"-"!==a||(t=a.slice(0,-1)),n({key:e.name,value:t.replace(/0*(\d+)/,"$1")})}}))}},585:function(e,a,t){"use strict";var s=t(10),o=t(0),c=t(32),n=(t(533),t(8)),i=t(524),l=t(154),r=t(526),d=t(519),m=t(521),h=t(550),u=t(215),b=t(106),j=t(15),p=t(535),x=t(3);a.a=Object(c.b)((function(e){var a=e.showrooms,t=e.mini;return{selectedData:a.rowdata,model:a.model,miniBanksList:t.miniBanksList}}),{showroomsAdd:b.g,isModelVisible:b.f,InputChangeValue:b.a,getMiniBanks:j.l})((function(e){var a,t,c,b,j,f,O,v,g,w=i.a.useForm(),k=Object(s.a)(w,1)[0];function C(a){console.log("change Handeler ",a),e.InputChangeValue({key:a.target.name,value:a.target.value})}Object(o.useEffect)((function(){e.getMiniBanks()}),[]);var D=function(){e.isModelVisible(!1)},N=function(){return null==e.selectedData.id||0==e.selectedData.id?Object(x.jsx)(o.Fragment,{children:Object(x.jsx)(l.a,{onClick:function(){k.submit()},type:"primary",block:!0,children:"Add"})}):Object(x.jsx)(o.Fragment,{children:Object(x.jsx)(l.a,{type:"primary",onClick:function(){k.submit()},block:!0,children:"Update"})})},S=function(){return Object(x.jsx)(o.Fragment,{children:Object(x.jsx)(l.a,{onClick:function(){D()},type:"primary",block:!0,ghost:!0,children:"Cancel"})})},y=Object(x.jsxs)("h5",{className:"modal-title",children:[null==e.selectedData.id||0==e.selectedData.id?"Add":"Update"," ","Show Room"]});return Object(o.useEffect)((function(){k.setFieldsValue({name:e.selectedData.name,contact_number:e.selectedData.contact_number,location:e.selectedData.location,bank_id:e.selectedData.bank_id,accono:e.selectedData.accono,ifsccode:e.selectedData.ifsccode,address:e.selectedData.address})}),[e.selectedData]),Object(x.jsx)(r.a,{visible:e.model,title:y,onCancel:function(){D(),k.resetFields(),e.isModelVisible(!1)},className:"hp-modal-p-24",footer:Object(x.jsxs)(d.a,{justify:"center",children:[Object(x.jsx)(m.a,{span:12,className:"hp-pr-4",children:Object(x.jsx)(S,{})}),Object(x.jsx)(m.a,{span:12,className:"hp-pl-4",children:Object(x.jsx)(N,{})})]}),centered:!0,closeIcon:Object(x.jsx)(n.k,{className:"remix-icon text-color-black-100",size:24}),width:616,children:Object(x.jsx)(i.a,{layout:"vertical",form:k,autoComplete:"off",onFinish:function(){null==e.selectedData.id?function(){var a,t,s,o,c,n,i,l={id:0,code:null===(a=e.selectedData)||void 0===a?void 0:a.code,name:null===(t=e.selectedData)||void 0===t?void 0:t.name,contact_number:null===(s=e.selectedData)||void 0===s?void 0:s.contact_number,location:null===(o=e.selectedData)||void 0===o?void 0:o.location,address:null===(c=e.selectedData)||void 0===c?void 0:c.address,bank_id:e.selectedData.bank_id,accono:null===(n=e.selectedData)||void 0===n?void 0:n.accono,ifsccode:null===(i=e.selectedData)||void 0===i?void 0:i.ifsccode};null==l.name&&""!=l.name||e.showroomsAdd(l)}():function(){var a,t,s,o,c,n,i,l={id:e.selectedData.id,code:null===(a=e.selectedData)||void 0===a?void 0:a.code,name:null===(t=e.selectedData)||void 0===t?void 0:t.name,contact_number:null===(s=e.selectedData)||void 0===s?void 0:s.contact_number,location:null===(o=e.selectedData)||void 0===o?void 0:o.location,address:null===(c=e.selectedData)||void 0===c?void 0:c.address,bank_id:e.selectedData.bank_id,accono:null===(n=e.selectedData)||void 0===n?void 0:n.accono,ifsccode:null===(i=e.selectedData)||void 0===i?void 0:i.ifsccode};e.showroomsAdd(l)}()},children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Show Room Name:",name:"name",rules:[{required:!0,message:"Please input your Show Room Name!"},{pattern:new RegExp(/^[a-zA-Z][a-zA-Z\s]+$/i),message:"field does not accept numbers"}],hasFeedback:!0,children:Object(x.jsx)(h.a,{id:"Show Rooms",name:"name",maxLength:50,style:{width:"100%"},placeholder:"Show Room Name",value:null===(a=e.selectedData)||void 0===a?void 0:a.name,onChange:C})})}),Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Contact Number :",name:"contact_number",rules:[{required:!0,message:"Please input your Contact Number!"}],getValueProps:function(){},hasFeedback:!0,children:Object(x.jsx)(p.a,{id:"contact_number",name:"contact_number",style:{width:"100%"},placeholder:"Contact Number",maxLength:10,value:null==(null===(t=e.selectedData)||void 0===t?void 0:t.contact_number)?"":null===(c=e.selectedData)||void 0===c?void 0:c.contact_number,onChange:e.InputChangeValue})})}),Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Location:",name:"location",rules:[{required:!0,message:"Please input your Location!"}],hasFeedback:!0,children:Object(x.jsx)(h.a,{id:"Location",name:"location",maxLength:50,style:{width:"100%"},placeholder:"Location",value:null===(b=e.selectedData)||void 0===b?void 0:b.location,onChange:C})})}),Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Bank :",name:"bank_id",rules:[{required:!0,message:"Please select your Bank!"}],hasFeedback:!0,children:Object(x.jsx)(u.a,{showSearch:!0,placeholder:"Select Bank",optionFilterProp:"Bank",filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onChange:function(a){e.InputChangeValue({key:"bank_id",value:a})},value:null==e.selectedData.bank_id?"":null===(j=e.selectedData)||void 0===j?void 0:j.bank_id,children:e.miniBanksList.map((function(e,a){return Object(x.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Account Number:",name:"accono",rules:[{required:!0,message:"Please input your Account Number!"},{min:9,message:"Account Number Must be minimum 9 characters"}],getValueProps:function(){},hasFeedback:!0,children:Object(x.jsx)(p.a,{id:"Account",name:"accono",style:{width:"100%"},maxLength:18,placeholder:"Account Number",value:null==(null===(f=e.selectedData)||void 0===f?void 0:f.accono)?"":null===(O=e.selectedData)||void 0===O?void 0:O.accono,onChange:e.InputChangeValue})})}),Object(x.jsx)(m.a,{md:12,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"IFSC Code:",name:"ifsccode",rules:[{required:!0,message:"Please Enter Your IFSC Code!"},{pattern:new RegExp(/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/i),message:"field does not accept IFSC code"}],hasFeedback:!0,children:Object(x.jsx)(h.a,{id:"ifsccode",name:"ifsccode",maxLength:11,style:{width:"100%"},placeholder:"IFSC Code",value:null===(v=e.selectedData)||void 0===v?void 0:v.ifsccode,onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value.toUpperCase()})}})})}),Object(x.jsx)(m.a,{md:24,xs:24,className:"hp-pr-sm-0 hp-pr-12",children:Object(x.jsx)(i.a.Item,{label:"Address:",name:"address",rules:[{required:!0,message:"Please input your Address !"}],hasFeedback:!0,children:Object(x.jsx)(h.a.TextArea,{id:"Address ",name:"address",maxLength:150,style:{width:"100%"},placeholder:"Address",value:null===(g=e.selectedData)||void 0===g?void 0:g.address,onChange:C})})})]})})})}))},651:function(e,a,t){"use strict";t.r(a);var s=t(1),o=t(0),c=t(550),n=t(538),i=t(519),l=t(521),r=t(531),d=t(337),m=t(340),h=t(539),u=t(676),b=t(8),j=t(32),p=t(534),x=t(106),f=t(585),O=t(3);a.default=Object(j.b)((function(e){var a=e.showrooms,t=e.system;return{showroomslist:a.showroomslist,noofpages:a.noofpages,listCount:a.listCount,showroomsParams:a.showroomsParams,loading:a.loading,userAccessList:t.userAccessList}}),{getShowrooms:x.e,showroomsEdit:x.j,showroomsDelete:x.i,isModelVisible:x.f,SetShowroomsParams:x.b})((function(e){var a,t,j;Object(o.useEffect)((function(){e.getShowrooms({page:1,search:"",page_size:10})}),[]);var x=c.a.Search,v=[{title:"S.No",dataIndex:"index",width:70,fixed:"left"},{title:"Code",dataIndex:"code",filterSearch:!0,width:120,fixed:"left"},{title:"Show Room Name",dataIndex:"name",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Contact Number",dataIndex:"contact_number",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Location",dataIndex:"location",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Address",dataIndex:"address",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Bank",dataIndex:"bankname",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Account Number",dataIndex:"accono",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"IFSC Code",dataIndex:"ifsccode",filterMode:"tree",filterSearch:!0,width:"15%"},{title:"Actions",key:"action",width:100,fixed:"right",render:function(a,t){var s,o;return Object(O.jsxs)(h.b,{size:"middle",children:[-1!==(null===(s=e.userAccessList)||void 0===s?void 0:s.indexOf("Masters.change_showroom"))&&Object(O.jsx)("i",{className:"ri-edit-box-line hp-mr-2 ",style:{cursor:"pointer",color:"#fc6f03"},onClick:function(){e.showroomsEdit(a),e.isModelVisible(!0)}}),-1!==(null===(o=e.userAccessList)||void 0===o?void 0:o.indexOf("Masters.delete_showroom"))&&Object(O.jsx)(n.a,{placement:"topRight",title:"Are you sure to delete this Record?",onConfirm:function(){return e.showroomsDelete(t.id)},okText:"Yes",cancelText:"No",className:"hp-ml-8",icon:Object(O.jsx)(b.n,{className:"remix-icon hp-text-color-primary-1"}),children:Object(O.jsx)("i",{className:"ri-delete-bin-2-line ",style:{cursor:"pointer",color:"#ff0000"}})})]})}}],g=e.showroomslist.map((function(a,t){var o;return Object(s.a)(Object(s.a)({},a),{},{index:(e.showroomsParams.page-1)*e.showroomsParams.page_size+t+1,bankname:null===(o=a.bank)||void 0===o?void 0:o.name})}));return Object(O.jsxs)(i.a,{gutter:[32,32],className:"hp-mt-32",children:[Object(O.jsx)(p.a,{pageTitle:"Show Rooms Master",addModelTile:-1!==(null===(a=e.userAccessList)||void 0===a?void 0:a.indexOf("Masters.add_showroom"))&&"Add Show Room",goBack:!0,setIsModalVisible:e.isModelVisible,isModalVisible:e.model}),Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(r.a,{children:Object(O.jsxs)(i.a,{className:"hp-mb-12",children:[Object(O.jsx)(l.a,{span:12,xs:24,sm:24,md:14,className:"hp-mb-10",children:Object(O.jsx)(x,{placeholder:"Search...",allowClear:!0,onChange:function(a){""==a.target.value&&(e.getShowrooms(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{page:1,search:""})),e.SetShowroomsParams(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{page:1,search:""})))},onSearch:function(a){var t;t=a,e.SetShowroomsParams(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{search:t})),e.getShowrooms(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{search:t}))}})}),Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(d.a,{tip:"Loading...",spinning:e.loading,delay:500,children:Object(O.jsx)(u.a,{columns:v,dataSource:g,scroll:{x:1300},pagination:!1,size:"middle"})})}),Object(O.jsx)(l.a,{span:24,children:Object(O.jsx)(m.a,{size:"small",current:null===(t=e.showroomsParams)||void 0===t?void 0:t.page,pageSize:null===(j=e.showroomsParams)||void 0===j?void 0:j.page_size,total:e.listCount,showTotal:function(e){return"Total "+e+" items"},showSizeChanger:!0,onChange:function(a,t){e.SetShowroomsParams(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{page_size:t,page:0==a?1:a})),e.getShowrooms(Object(s.a)(Object(s.a)({},e.showroomsParams),{},{page_size:t,page:0==a?1:a}))},on:!0,className:"hp-mb-12 hp-mt-24 hp-float-right"})})]})})}),Object(O.jsx)(f.a,{})]})}))}}]);
//# sourceMappingURL=48.6f41d037.chunk.js.map