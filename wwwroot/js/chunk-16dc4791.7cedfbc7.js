(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16dc4791"],{"0f37":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("66df"),l=function(){return a["a"].request({url:"/api/Enum",method:"get"})}},ad8c:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return s}));var a=n("66df"),l=function(){return a["a"].request({url:"/api/QLPanel",method:"get"})},o=function(t){return a["a"].request({url:"/api/QLPanel",data:t,method:"post"})},i=function(t){return a["a"].request({url:"/api/QLPanel/"+t,method:"delete"})},r=function(){return a["a"].request({url:"/api/QLPanel/RefreshToken",method:"get"})},s=function(){return a["a"].request({url:"/api/QLPanel/RefreshLogin",method:"get"})}},b4c8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("Form",{attrs:{"label-width":80},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.loadEnvs(1))}}},[n("Row",[n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"搜索"}},[n("Input",{attrs:{placeholder:"输入搜索关键字"},model:{value:t.QueryForm.Key,callback:function(e){t.$set(t.QueryForm,"Key",e)},expression:"QueryForm.Key"}})],1)],1),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"青龙面板"}},[n("Select",{attrs:{clearable:""},model:{value:t.QueryForm.PanelId,callback:function(e){t.$set(t.QueryForm,"PanelId",e)},expression:"QueryForm.PanelId"}},t._l(t.QLPanels,(function(e){return n("Option",{key:e.Id,attrs:{value:e.Id}},[t._v(t._s(e.Name))])})),1)],1)],1),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"启用状态"}},[n("Select",{attrs:{clearable:""},model:{value:t.QueryForm.Enable,callback:function(e){t.$set(t.QueryForm,"Enable",e)},expression:"QueryForm.Enable"}},[n("Option",{attrs:{value:"true"}},[t._v("启用")]),n("Option",{attrs:{value:"false"}},[t._v("禁用")])],1)],1)],1),n("Col",{attrs:{span:"4"}},[n("FormItem",{attrs:{label:"变量类型"}},[n("Select",{attrs:{clearable:""},model:{value:t.QueryForm.EnvType,callback:function(e){t.$set(t.QueryForm,"EnvType",e)},expression:"QueryForm.EnvType"}},t._l(t.AllEnums.EnvType,(function(e){return n("Option",{key:e.Value,attrs:{value:e.Value}},[t._v("\n                "+t._s(e.Key)+"\n              ")])})),1)],1)],1),t._v("\n         \n        "),n("Button",{attrs:{type:"info"},on:{click:function(e){return t.loadEnvs(1)}}},[n("Icon",{attrs:{type:"md-search"}}),t._v(" 搜索\n        ")],1)],1)],1)],1),n("div",{staticStyle:{margin:"20px 0"}},[n("Button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.editQLPanel(-1)}}},[n("Icon",{attrs:{type:"md-add"}}),t._v(" 添加\n    ")],1),t._v("\n     \n    "),n("Button",{attrs:{type:"success",size:"small"},on:{click:t.enableEnvs}},[n("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}}),t._v("\n      启用\n    ")]),t._v("\n     \n    "),n("Button",{attrs:{type:"warning",size:"small"},on:{click:t.disableEnvs}},[n("i",{staticClass:"fa fa-ban",attrs:{"aria-hidden":"true"}}),t._v(" 禁用\n    ")]),t._v("\n     \n    "),n("Button",{attrs:{type:"primary",size:"small"},on:{click:t.SyncEnv}},[n("Icon",{attrs:{type:"md-refresh"}}),t._v(" 同步\n    ")],1),t._v("\n     \n    "),n("Button",{attrs:{type:"warning",size:"small"},on:{click:t.appointQLPanel}},[n("Icon",{attrs:{type:"md-cog"}}),t._v(" 指定容器\n    ")],1),t._v("\n     \n    "),n("Button",{attrs:{type:"error",size:"small"},on:{click:t.deleteSelection}},[n("Icon",{attrs:{type:"md-trash"}}),t._v(" 删除\n    ")],1)],1),n("Table",{ref:"EnvTable",attrs:{stripe:"",border:"",columns:t.EnvColumns,data:t.EnvData}}),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{total:t.PageInfo.Total,current:t.QueryForm.PageIndex,"page-size":t.QueryForm.PageSize,"page-size-opts":t.PageInfo.PageSizeOpts},on:{"on-change":t.loadEnvs}})],1)]),n("Modal",{attrs:{"mask-closable":!1,title:t.EditEnvModal.Title,width:600},model:{value:t.EditEnvModal.Show,callback:function(e){t.$set(t.EditEnvModal,"Show",e)},expression:"EditEnvModal.Show"}},[n("Form",{ref:"EditQLPanelForm",attrs:{model:t.EditEnvModal.Data,rules:t.ruleValidate,"label-width":80}},[n("FormItem",{attrs:{label:"变量名称",prop:"Name"}},[n("Input",{attrs:{maxlength:18,placeholder:"输入环境变量名称"},model:{value:t.EditEnvModal.Data.Name,callback:function(e){t.$set(t.EditEnvModal.Data,"Name",e)},expression:"EditEnvModal.Data.Name"}})],1),n("FormItem",{attrs:{label:"变量值",prop:"Value"}},[n("Input",{model:{value:t.EditEnvModal.Data.Value,callback:function(e){t.$set(t.EditEnvModal.Data,"Value",e)},expression:"EditEnvModal.Data.Value"}})],1),n("FormItem",{attrs:{label:"变量类型",prop:"EnvType"}},[n("Select",{on:{"on-change":t.EnvTypeChange},model:{value:t.EditEnvModal.Data.EnvType,callback:function(e){t.$set(t.EditEnvModal.Data,"EnvType",e)},expression:"EditEnvModal.Data.EnvType"}},t._l(t.AllEnums.EnvType,(function(e){return n("Option",{key:e.Value,attrs:{value:e.Value}},[t._v("\n            "+t._s(e.Key)+"\n          ")])})),1)],1),t.EditEnvModal.Data.EnvType<3?n("FormItem",{attrs:{label:"容器指定"}},[n("Checkbox",{on:{"on-change":t.SelectAllQLChange},model:{value:t.SelectAllQL,callback:function(e){t.SelectAllQL=e},expression:"SelectAllQL"}},[t._v("\n          全选\n        ")]),t._l(t.EditEnvModal.Data.QLPanelEnvs,(function(e){return n("div",{key:e.QLPanelId,staticStyle:{float:"left","margin-right":"10px"}},[n("Checkbox",{model:{value:e.Enable,callback:function(n){t.$set(e,"Enable",n)},expression:"data.Enable"}},[t._v("\n            "+t._s(e.QLPanelName)+"\n          ")])],1)}))],2):t._e(),n("FormItem",{attrs:{label:"排序权重",prop:"Weight"}},[n("Input",{attrs:{type:"number"},model:{value:t.EditEnvModal.Data.Weight,callback:function(e){t.$set(t.EditEnvModal.Data,"Weight",e)},expression:"EditEnvModal.Data.Weight"}})],1),n("FormItem",{attrs:{label:"开关选项"}},[n("Checkbox",{model:{value:t.EditEnvModal.Data.Enable,callback:function(e){t.$set(t.EditEnvModal.Data,"Enable",e)},expression:"EditEnvModal.Data.Enable"}},[t._v("启用")])],1),2==t.EditEnvModal.Data.EnvType?n("FormItem",{attrs:{label:"用户Id"}},[n("Input",{model:{value:t.EditEnvModal.Data.UserId,callback:function(e){t.$set(t.EditEnvModal.Data,"UserId",e)},expression:"EditEnvModal.Data.UserId"}})],1):t._e(),2==t.EditEnvModal.Data.EnvType?n("FormItem",{attrs:{label:"用户备注"}},[n("Input",{attrs:{type:"textarea"},model:{value:t.EditEnvModal.Data.UserRemark,callback:function(e){t.$set(t.EditEnvModal.Data,"UserRemark",e)},expression:"EditEnvModal.Data.UserRemark"}})],1):t._e(),n("FormItem",{attrs:{label:"系统备注"}},[n("Input",{attrs:{type:"textarea"},model:{value:t.EditEnvModal.Data.Remark,callback:function(e){t.$set(t.EditEnvModal.Data,"Remark",e)},expression:"EditEnvModal.Data.Remark"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleCancel()}}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("EditQLPanelForm")}}},[t._v("提交")])],1)],1),n("Modal",{attrs:{"mask-closable":!1,title:t.appointModal.Title,width:600},model:{value:t.appointModal.Show,callback:function(e){t.$set(t.appointModal,"Show",e)},expression:"appointModal.Show"}},[n("Form",{attrs:{model:t.appointModal.Data,"label-width":80}},[n("FormItem",{attrs:{label:"容器指定"}},t._l(t.appointModal.Data.QLPanelEnvs,(function(e){return n("div",{key:e.QLPanelId,staticStyle:{float:"left","margin-right":"10px"}},[n("Checkbox",{model:{value:e.Enable,callback:function(n){t.$set(e,"Enable",n)},expression:"data.Enable"}},[t._v("\n            "+t._s(e.QLPanelName)+"\n          ")])],1)})),0)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleCancel()}}},[t._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:t.appointSubmit}},[t._v("提交")])],1)],1)],1)},l=[],o=(n("7f7f"),n("0f37")),i=n("66df"),r=function(t){return i["a"].request({url:"/api/Env",params:t,method:"get"})},s=function(t){return i["a"].request({url:"/api/Env",data:t,method:"post"})},d=function(t){return i["a"].request({url:"/api/Env/deletes",data:t,method:"delete"})},u=function(){return i["a"].request({url:"/api/Env/sync",method:"get"})},c=function(t){return i["a"].request({url:"/api/Env/UpdateEnvPanel",data:t,method:"post"})},v=function(t){return i["a"].request({url:"/api/Env/Disable",data:t,method:"put"})},E=function(t){return i["a"].request({url:"/api/Env/Enable",data:t,method:"put"})},p=n("ad8c"),h=n("c276"),f={data:function(){var t=this;return{EnvColumns:[{type:"selection",width:60,align:"center"},{title:"名称",key:"Name",width:120},{title:"值",key:"Value",render:function(e,n){return e("div",[e("a",{on:{click:function(){t.copy(n.row.Value)}}},n.row.Value)])}},{title:"权重",key:"Weight",width:80},{title:"启用",key:"Enable",width:80,render:function(t,e){return t("div",[t("span",e.row.Enable?"是":"否")])}},{title:"类型",key:"EnvType",width:90,render:function(e,n){return e("div",[e("span",Object(h["c"])(t.AllEnums,"EnvType",n.row.EnvType))])}},{title:"用户",key:"UserId",width:120},{title:"备注",key:"Remark",width:150},{title:"时间",width:180,key:"CreateTime",render:function(t,e){return t("div",[t("span","添加:"+e.row.CreateTime),t("span","更新:"+e.row.UpdateTime)])}},{title:"分配容器",width:180,render:function(t,e){for(var n="",a=0;a<e.row.QLPanelEnvs.length;a++){var l=e.row.QLPanelEnvs[a];n+=l.QLPanelName+","}return n=n.substring(0,n.length-1),t("div",[t("span",n)])}},{title:"操作",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.editQLPanel(n.index)}}},"编辑"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.delete([n.row.Id])}}},"删除")])}}],QueryForm:{PageIndex:1,PageSize:20},PageInfo:{Total:0,PageSizeOpts:[10,20,50,100]},AllEnums:{},QLPanels:[],EnvData:[],appointModal:{Show:!1,Title:"批量指定容器",Data:{EnvIds:[],QLPanelIds:[],QLPanelEnvs:[]}},EditEnvModal:{Show:!1,Title:"添加环境变量",Data:{Enable:!0,EnableAll:!1,EnvType:"",Weight:1}},SelectAllQL:!0,ruleValidate:{Name:[{required:!0,message:"变量名称不能为空",trigger:"blur"},{type:"string",pattern:/^[a-zA-Z][a-zA-Z0-9_]{1,32}$/,message:"只能包含数字和字母下划线长度1-32位",trigger:"blur"}],Value:[{required:!0,message:"变量值不能为空",trigger:"blur"}],EnvType:[{required:!0,message:"请选择环境变量类型"}],Weight:[{required:!0,message:"请输入环境变量权重"}]}}},methods:{appointSubmit:function(){var t=this.appointModal.Data.QLPanelEnvs.filter((function(t){return t.Enable}));if(t&&0!=t.length){var e=this;this.$Modal.confirm({title:"操作确认",content:"是否指定选中的环境变量到勾选的青龙容器？",okText:"是的",cancelText:"算了",closable:!0,onOk:function(){for(var n=[],a=0;a<t.length;a++){var l=t[a];n.push(l.QLPanelId)}c({QLPanelIds:n,EnvIds:e.appointModal.Data.EnvIds}).then((function(t){t&&(e.$Message.success("环境变量指定容器成功！"),e.loadEnvs(e.PageInfo.PageIndex))}))}})}else this.$Message.warning("未指定任何容器！")},appointQLPanel:function(){var t=this.$refs.EnvTable.getSelection();if(null!==t&&0!==t.length){this.appointModal.Show=!0,this.appointModal.Data.EnvIds=[],this.appointModal.Data.QLPanelEnvs=[];for(var e=0;e<t.length;e++){var n=t[e];this.appointModal.Data.EnvIds.push(n.Id)}for(var a=0;a<this.QLPanels.length;a++){var l=this.QLPanels[a];this.appointModal.Data.QLPanelEnvs.push({QLPanelId:l.Id,Enable:!1,QLPanelName:l.Name})}}else this.$Message.warning("请选中环境变量后再操作！")},enableEnvs:function(){var t=this.getSelectIds();if(t.length>0){var e=this;this.$Modal.confirm({title:"启用环境变量",content:"确定启用选择的环境变量？",okText:"是的",cancelText:"算了",closable:!0,onOk:function(){E(t).then((function(t){e.loadEnvs(1)}))}})}},disableEnvs:function(){var t=this.getSelectIds();if(t.length>0){var e=this;this.$Modal.confirm({title:"禁用环境变量",content:"确定禁用选择的环境变量？",okText:"是的",cancelText:"算了",closable:!0,onOk:function(){v(t).then((function(t){e.loadEnvs(1)}))}})}},getSelectIds:function(){var t=[],e=this.$refs.EnvTable.getSelection();if(null!==e&&0!==e.length){for(var n=0;n<e.length;n++){var a=e[n];t.push(a.Id)}return t}this.$Message.warning("请选中环境变量后再操作！")},deleteSelection:function(){var t=this.getSelectIds();t.length>0&&this.delete(t)},EnvTypeChange:function(){this.SelectAllQL=1===this.EditEnvModal.Data.EnvType,this.SelectAllQLChange()},handleSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(t){var n=JSON.parse(JSON.stringify(e.EditEnvModal.Data));n.QLPanelEnvs=n.QLPanelEnvs.filter((function(t){return t.Enable})),s([n]).then((function(t){t&&(e.$Message.success(e.EditEnvModal.Title+"成功！"),e.EditEnvModal.Show=!1,e.loadEnvs())}))}}))},copy:function(t){var e=this;this.$copyText(t).then((function(t){e.$Message.success("复制环境变量值成功！")}),(function(t){e.$Message.error("复制环境变量值失败！")}))},SyncEnv:function(){var t=this;this.$Modal.confirm({title:"同步确认",content:"同步操作为单项同步，确认同步吗？该操作不可逆。",okText:"是的",cancelText:"算了",closable:!0,onOk:function(){u().then((function(e){e&&(t.$Message.success("同步环境变量到青龙容器成功！"),t.loadEnvs(t.PageInfo.PageIndex))}))}})},handleCancel:function(){this.EditEnvModal.Show=!1,this.appointModal.Show=!1},SelectAllQLChange:function(){for(var t=0;t<this.EditEnvModal.Data.QLPanelEnvs.length;t++)this.EditEnvModal.Data.QLPanelEnvs[t].Enable=this.SelectAllQL},editQLPanel:function(t){var e=this,n=this;t>-1?(this.EditEnvModal.Title="修改环境变量",this.EditEnvModal.Data=JSON.parse(JSON.stringify(this.EnvData[t])),this.EditEnvModal.Data.QLPanelEnvs=[]):(this.EditEnvModal.Data={Enable:!0,EnvType:1,Weight:1,QLPanelEnvs:[]},this.EditEnvModal.Title="添加环境变量");for(var a=function(a){var l=e.QLPanels[a];e.EditEnvModal.Data.QLPanelEnvs.push({QLPanelId:l.Id,Enable:t>-1&&n.EnvData[t].QLPanelEnvs.filter((function(t){return t.QLPanelId===l.Id})).length>0,QLPanelName:l.Name})},l=0;l<this.QLPanels.length;l++)a(l);this.SelectAllQLChange(),this.EditEnvModal.Show=!0},delete:function(t){var e=this;this.$Modal.confirm({title:"删除确认",content:"确定删除环境变量吗？该操作不可逆。",okText:"是的，老子要删除",cancelText:"算了，不删了",closable:!0,onOk:function(){d(t).then((function(t){e.loadEnvs(1)}))}})},loadEnvs:function(t){var e=this;this.QueryForm.PageIndex=t,r(this.QueryForm).then((function(t){e.EnvData=t.Data,e.PageInfo.Total=t.TotalCount}))},loadAllEnums:function(){var t=this;Object(o["a"])().then((function(e){t.AllEnums=e}))},getQLPanels:function(){var t=this;Object(p["b"])().then((function(e){t.QLPanels=e}))}},mounted:function(){this.loadEnvs(1),this.loadAllEnums(),this.getQLPanels()}},m=f,g=n("2877"),y=Object(g["a"])(m,a,l,!1,null,null,null);e["default"]=y.exports}}]);