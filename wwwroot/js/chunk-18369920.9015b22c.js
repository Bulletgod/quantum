(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18369920"],{"1d86":function(t,a,e){},3467:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t._self._c;return a("div",[a("div",[a("Form",{attrs:{"label-width":80},nativeOn:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),t.LoadTaskGroup(1))}}},[a("Row",[a("Col",{attrs:{span:"4"}},[a("FormItem",{attrs:{label:"搜索"}},[a("Input",{attrs:{placeholder:"输入搜索关键字"},model:{value:t.QueryForm.Key,callback:function(a){t.$set(t.QueryForm,"Key",a)},expression:"QueryForm.Key"}})],1)],1),t._v("\n         \n        "),a("Button",{attrs:{type:"info"},on:{click:function(a){return t.LoadTaskGroup(1)}}},[a("Icon",{attrs:{type:"md-search"}}),t._v(" 搜索\n        ")],1)],1)],1)],1),a("div",{staticStyle:{margin:"20px 0"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.editTaskGroup(-1)}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(" 添加\n    ")],1)],1),a("Table",{ref:"EnvTable",attrs:{stripe:"",border:"",columns:t.TaskGroupColumns,data:t.TaskGroupData}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:t.PageInfo.Total,current:t.QueryForm.PageIndex,"page-size":t.QueryForm.PageSize,"show-sizer":!0,"show-total":!0,"page-size-opts":t.PageInfo.PageSizeOpts},on:{"on-page-size-change":t.pageSizeChange,"on-change":t.LoadTaskGroup}})],1)]),a("Modal",{attrs:{"mask-closable":!1,title:t.EditTaskGroupModal.Title,width:600},model:{value:t.EditTaskGroupModal.Show,callback:function(a){t.$set(t.EditTaskGroupModal,"Show",a)},expression:"EditTaskGroupModal.Show"}},[a("Form",{ref:"editTaskGroupForm",attrs:{model:t.EditTaskGroupModal.Data,rules:t.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"名称",prop:"Name"}},[a("Input",{attrs:{placeholder:"输入分组名称"},model:{value:t.EditTaskGroupModal.Data.Name,callback:function(a){t.$set(t.EditTaskGroupModal.Data,"Name",a)},expression:"EditTaskGroupModal.Data.Name"}})],1),a("FormItem",{attrs:{label:"编码",prop:"Code"}},[a("Input",{attrs:{type:"text",disabled:t.EditTaskGroupModal.Data.Id,placeholder:"编码只能是字母+数字组合，创建后编码不可修改"},model:{value:t.EditTaskGroupModal.Data.Code,callback:function(a){t.$set(t.EditTaskGroupModal.Data,"Code",a)},expression:"EditTaskGroupModal.Data.Code"}})],1),a("FormItem",{attrs:{label:"仓库地址",prop:"Repository"}},[a("Input",{attrs:{placeholder:"输入仓库地址"},model:{value:t.EditTaskGroupModal.Data.Repository,callback:function(a){t.$set(t.EditTaskGroupModal.Data,"Repository",a)},expression:"EditTaskGroupModal.Data.Repository"}})],1),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.EditTaskGroupModal.Data.Remark,callback:function(a){t.$set(t.EditTaskGroupModal.Data,"Remark",a)},expression:"EditTaskGroupModal.Data.Remark"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){return t.handleCancel()}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(a){return t.handleSubmit("editTaskGroupForm")}}},[t._v("提交")])],1)],1)],1)},r=[],n=(e("7f7f"),e("7087")),i={data:function(){var t=this;return{TaskGroupColumns:[{type:"selection",width:60,align:"center"},{width:80,type:"index",title:"序号",align:"center"},{title:"名称",key:"Name",width:180},{title:"编码",key:"Code",minWidth:180},{title:"仓库地址",key:"Repository",minWidth:180},{title:"最后更新时间",key:"LastUpdateTime",minWidth:180},{title:"备注",key:"Remark"},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){var o=[];return o.push(a("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){t.editTaskGroup(e.index)}}})),o.push(a("i",{class:"fa fa-download",style:{color:"#ff6a00"},on:{click:function(){t.updateTaskGroup(e.row.Id)}}})),o.push(a("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){t.delete([e.row.Id])}}})),a("div",o)}}],QueryForm:{PageIndex:1,PageSize:10},PageInfo:{Total:0,PageSizeOpts:[10,20,50,100]},QLPanels:[],TaskGroupData:[],EditTaskGroupModal:{Show:!1,Title:"添加脚本指令分组",Data:{Enable:!0,EnableAll:!1,EnvType:"",Weight:1}},ruleValidate:{Name:[{required:!0,message:"分组名称不能为空",trigger:"blur"}],Code:[{required:!0,message:"分组编码不能为空",trigger:"blur"},{type:"string",pattern:/^[a-zA-Z][a-zA-Z0-9_]{3,64}$/,message:"只能包含数字和字母下划线长度3-12位",trigger:"blur"}]}}},methods:{EnvTypeChange:function(){this.SelectAllQL=1==this.EnvType,this.SelectAllQLChange()},handleSubmit:function(t){var a=this;this.$refs[t].validate((function(t){if(t){var e=JSON.parse(JSON.stringify(a.EditTaskGroupModal.Data));Object(n["c"])(e).then((function(t){t&&(a.$Message.success(a.EditTaskGroupModal.Title+"成功！"),a.EditTaskGroupModal.Show=!1,a.LoadTaskGroup(1))}))}}))},handleCancel:function(){this.EditTaskGroupModal.Show=!1},SelectAllQLChange:function(){for(var t=0;t<this.EditTaskGroupModal.Data.QLPanelEnvs.length;t++)this.EditTaskGroupModal.Data.QLPanelEnvs[t].Enable=this.SelectAllQL},updateTaskGroup:function(t){var a=this;this.$Modal.confirm({title:"删除确认",content:"确认通过脚本库地址更新该分组脚本？",okText:"确认",cancelText:"取消",closable:!0,onOk:function(){Object(n["d"])(t).then((function(t){a.$Message.success(t)}))}})},editTaskGroup:function(t){t>-1?(this.EditTaskGroupModal.Title="修改脚本指令分组",this.EditTaskGroupModal.Data=JSON.parse(JSON.stringify(this.TaskGroupData[t])),this.EditTaskGroupModal.Data.QLPanelEnvs=[]):(this.EditTaskGroupModal.Data={Key:"",Message:"",CommunicationType:null,MessageType:1,Enable:!0},this.EditTaskGroupModal.Title="添加脚本指令分组"),this.EditTaskGroupModal.Show=!0},delete:function(t){var a=this;this.$Modal.confirm({title:"删除确认",content:"删除分组后该分组下脚本指令保留",okText:"确认",cancelText:"取消",closable:!0,onOk:function(){Object(n["a"])(t).then((function(t){a.LoadTaskGroup(1)}))}})},pageSizeChange:function(t){this.QueryForm.PageSize=t,this.LoadTaskGroup(1)},LoadTaskGroup:function(t){var a=this;this.QueryForm.PageIndex=t,Object(n["b"])(this.QueryForm).then((function(t){a.TaskGroupData=t.Data,a.PageInfo.Total=t.TotalCount}))}},mounted:function(){this.LoadTaskGroup(1)}},s=i,l=(e("ba02"),e("2877")),u=Object(l["a"])(s,o,r,!1,null,null,null);a["default"]=u.exports},7087:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i})),e.d(a,"d",(function(){return s}));var o=e("66df"),r=function(t){return o["a"].request({url:"/api/TaskGroup",params:t,method:"get"})},n=function(t){return o["a"].request({url:"/api/TaskGroup",data:t,method:"post"})},i=function(t){return o["a"].request({url:"/api/TaskGroup",data:t,method:"delete"})},s=function(t){return o["a"].request({url:"/api/TaskGroup/UpdateRepository/"+t,method:"get"})}},ba02:function(t,a,e){"use strict";e("1d86")}}]);