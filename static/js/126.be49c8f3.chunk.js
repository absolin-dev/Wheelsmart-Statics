(this["webpackJsonpwheelsmart-admin-react"]=this["webpackJsonpwheelsmart-admin-react"]||[]).push([[126],{534:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t(0);var r=t(521),n=t(531),l=t(519),i=t(154),s=t(51),o=t(43),c=t(8),m=t(216),d=t(3);function u(e){var a=Object(s.f)(),t=e.pageTitle,u=e.pageText,p=e.addModelTile,j=e.goBack,h=e.setIsModalVisible;return Object(d.jsx)(r.a,{span:24,children:Object(d.jsx)(n.a,{className:"hp-m-0",children:Object(d.jsxs)(l.a,{children:[Object(d.jsxs)(r.a,{span:18,children:[j&&Object(d.jsx)(o.b,{to:"#",onClick:function(){return a.goBack()},className:"action-icon text-primary  hp-mr-12 hp-d-inline-block",children:Object(d.jsx)(c.d,{className:"remix-icon",size:24})}),Object(d.jsxs)(l.a,{className:"hp-d-inline-block",children:[Object(d.jsx)(r.a,{span:24,children:t&&Object(d.jsx)("h2",{className:"hp-m-0",children:t})}),Object(d.jsx)(r.a,{span:24,children:u&&Object(d.jsx)("p",{className:"hp-mb-0 hp-p1-body",children:u})})]})]}),Object(d.jsx)(r.a,{span:6,children:p&&Object(d.jsx)(i.a,{className:"hp-float-right",type:"primary",onClick:function(){return h(!0)},block:!0,icon:Object(d.jsx)(c.b,{className:"remix-icon",size:22}),children:!m.isMobile&&p})})]})})})}},537:function(e,a,t){"use strict";a.a=t.p+"static/media/empty-list.6fd5c5d1.svg"},660:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(25),l=t(10),i=t(0),s=t(524),o=t(519),c=t(521),m=t(531),d=t(556),u=t(677),p=t(215),j=t(154),h=t(676),_=t(202),b=t(32),f=t(19),x=t.n(f),O=t(537),D=t(534),v=t(183),g=t(15),Y=t(3),y=["file_format"],M=["file_format"];a.default=Object(b.b)((function(e){var a=e.reports,t=e.mini;return{modelName:a.modelName,reportParamsData:a.reportParamsData,reportDataList:a.reportDataList,loading:a.loading,columnsList:a.columnsList,miniFirmList:t.miniFirmList,reportView:a.reportView}}),{InputChangeValue:v.a,getReportList:v.f,clearData:v.d,getMiniFirm:g.E})((function(e){var a,t,b,f,v,g=s.a.useForm(),C=Object(l.a)(g,1)[0];function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{startDate:!1,endDate:!1},a=e.startDate,t=e.endDate;return function(e){var r=!0,n=!0;return a&&(r=e&&e<x()(a+" 00:00:01","YYYY-MM-DD HH:mm:ss")),t&&(n=e&&e>x()(x()(t).format("YYYY-MM-DD")+" 23:59:59","YYYY-MM-DD HH:mm:ss")),a&&r||t&&n}}Object(i.useEffect)((function(){e.clearData(),e.getMiniFirm()}),[]);var P=e.columnsList.map((function(e){return{title:e,dataIndex:e}}));P.unshift({title:"S.No",dataIndex:"index"});var F=e.reportDataList.map((function(e,a){return Object(r.a)(Object(r.a)({},e),{},{index:a+1})}));return Object(i.useEffect)((function(){var a,t,r,n,l;C.setFieldsValue({start_date:null===(a=e.reportParamsData)||void 0===a?void 0:a.start_date,end_date:null===(t=e.reportParamsData)||void 0===t?void 0:t.end_date,file_format:null===(r=e.reportParamsData)||void 0===r?void 0:r.file_format,clockout__auto_out_time:null===(n=e.reportParamsData)||void 0===n?void 0:n.clockout__auto_out_time,user__employee__firm:null===(l=e.reportParamsData)||void 0===l?void 0:l.user__employee__firm})}),[e.reportParamsData]),Object(Y.jsxs)(o.a,{gutter:[12,12],className:"hp-mt-32",children:[Object(Y.jsx)(D.a,{pageTitle:"DailyAttendance Report",goBack:!0}),Object(Y.jsx)(c.a,{span:24,children:Object(Y.jsx)(m.a,{children:Object(Y.jsxs)(s.a,{form:C,layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(){if("HRMS"==e.reportParamsData.file_format)var a=e.reportParamsData,t=a.file_format,l=Object(n.a)(a,y),i={file_format:0,model_name:"HRMS Daily Attendance"};else{var s=e.reportParamsData;t=s.file_format,l=Object(n.a)(s,M),i={file_format:t,model_name:"Daily Attendance"}}e.getReportList({objData:i,ParamsData:Object(r.a)(Object(r.a)({},l),{},{start_date:null!=l.start_date?"HRMS Daily Attendance"==i.model_name?x()(l.start_date).startOf("month").format("YYYY-MM-DD"):x()(l.start_date).format("YYYY-MM-DD"):"",end_date:"HRMS Daily Attendance"==i.model_name?x()(l.start_date).endOf("month").format("YYYY-MM-DD"):null!=l.end_date?x()(l.end_date).add(1,"days").format("YYYY-MM-DD"):""})})},children:[Object(Y.jsxs)(o.a,{gutter:[12,12],children:[Object(Y.jsx)(c.a,{span:24,xs:24,md:24,xl:24,children:Object(Y.jsx)(s.a.Item,{label:"Report Format",name:"file_format",rules:[{required:!0,message:"Please select Your Report Format!"}],children:Object(Y.jsxs)(d.a.Group,{name:"file_format",onChange:function(a){e.InputChangeValue({key:a.target.name,value:a.target.value})},value:null===(a=e.reportParamsData)||void 0===a?void 0:a.file_format,children:[Object(Y.jsx)(d.a.Button,{value:0,children:"CSV"}),Object(Y.jsx)(d.a.Button,{value:2,children:"XLSX"}),Object(Y.jsx)(d.a.Button,{value:"HRMS",children:"HRMS CSV"}),Object(Y.jsx)(d.a.Button,{value:5,children:"VIEW"})]})})}),"HRMS"==e.reportParamsData.file_format?Object(Y.jsxs)(Y.Fragment,{children:[" ",Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"Select Month",name:"start_date",rules:[{required:!0,message:"Please select Month!"}],children:Object(Y.jsx)(u.a,{style:{width:"100%"},picker:"month",placeholder:"Choose Date",format:"MM-YYYY",disabledDate:k({endDate:x()()}),onChange:function(a){e.InputChangeValue({key:"start_date",value:null==a?"":a}),null==a&&e.InputChangeValue({key:"end_date",value:""})}})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"Select Firm",name:"user__employee__firm",rules:[{required:!0,message:"Please select Month!"}],children:Object(Y.jsx)(p.a,{showSearch:!0,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Enquiry Type",optionFilterProp:"user__employee__firm",onChange:function(a){e.InputChangeValue({key:"user__employee__firm",value:a})},value:null==e.reportParamsData.user__employee__firm?"":null===(t=e.reportParamsData)||void 0===t?void 0:t.user__employee__firm,children:e.miniFirmList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})})]}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"From Date",name:"start_date",rules:[{required:!0,message:"Please select Your From Date!"}],children:Object(Y.jsx)(u.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:k({endDate:x()()}),onChange:function(a){e.InputChangeValue({key:"start_date",value:null==a?"":a}),null==a&&e.InputChangeValue({key:"end_date",value:""})}})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"To Date",name:"end_date",rules:[{required:!0,message:"Please select Your To Date!"}],children:Object(Y.jsx)(u.a,{style:{width:"100%"},picker:"date",placeholder:"Choose Date",format:"DD-MM-YYYY",disabledDate:k({endDate:x()().format("YYYY-MM-DD"),startDate:x()(null===(b=e.reportParamsData)||void 0===b?void 0:b.start_date).format("YYYY-MM-DD")}),disabled:null==e.reportParamsData.start_date||""==e.reportParamsData.start_date,onChange:function(a){e.InputChangeValue({key:"end_date",value:null==a?"":a})}})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"Select Firm",name:"user__employee__firm",children:Object(Y.jsx)(p.a,{showSearch:!0,filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},placeholder:"Select Firm",optionFilterProp:"user__employee__firm",onChange:function(a){e.InputChangeValue({key:"user__employee__firm",value:a})},value:null==e.reportParamsData.user__employee__firm?"":null===(f=e.reportParamsData)||void 0===f?void 0:f.user__employee__firm,children:e.miniFirmList.map((function(e,a){return Object(Y.jsx)(Option,{value:e.id,children:e.name},a)}))})})}),Object(Y.jsx)(c.a,{span:24,xs:24,md:8,xl:6,children:Object(Y.jsx)(s.a.Item,{label:"Auto Checkout",name:"clockout__auto_out_time",children:Object(Y.jsx)(p.a,{showSearch:!0,allowClear:!0,placeholder:"Select Auto Checkout",optionFilterProp:"approvalstatus",filterOption:function(e,a){return a.children.toLowerCase().includes(e.toLowerCase())},onChange:function(a){e.InputChangeValue({key:"clockout__auto_out_time",value:a})},value:null==e.reportParamsData.clockout__auto_out_time?"":null===(v=e.reportParamsData)||void 0===v?void 0:v.clockout__auto_out_time,children:[{value:!0,name:"Yes"},{value:!1,name:"No"}].map((function(e,a){return Object(Y.jsx)(Option,{value:e.value,children:e.name},a)}))})})})]})]}),Object(Y.jsx)(o.a,{gutter:[12,12],children:Object(Y.jsxs)(c.a,{md:12,offset:12,children:[Object(Y.jsx)(j.a,{type:"secondary",className:"hp-submit-btn hp-float-right hp-mt-10 hp-ml-10",onClick:function(){e.clearData()},htmlType:"button",children:"Clear"}),Object(Y.jsx)(j.a,{type:"primary",className:"hp-submit-btn hp-float-right hp-mt-10",disabled:e.loading,loading:e.loading,onClick:function(){C.submit()},children:"Generate Report"})]})})]})})}),Object(Y.jsx)(c.a,{span:24,children:e.reportView&&Object(Y.jsx)(Y.Fragment,{children:0!=e.reportDataList.length&&5==e.reportParamsData.file_format?Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(m.a,{children:Object(Y.jsx)(o.a,{className:"hp-mb-12",children:Object(Y.jsx)(c.a,{span:24,children:Object(Y.jsx)(h.a,{columns:P,dataSource:F,scroll:{x:500},pagination:!1,size:"middle",loading:e.loading})})})})}):Object(Y.jsx)(m.a,{children:Object(Y.jsx)(_.a,{className:"hp-m-32",image:O.a,imageStyle:{height:160},description:Object(Y.jsx)("h5",{children:"Your DailyAttendance Report is empty"})})})})})]})}))}}]);
//# sourceMappingURL=126.be49c8f3.chunk.js.map