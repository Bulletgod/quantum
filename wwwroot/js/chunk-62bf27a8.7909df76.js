(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62bf27a8"],{"100c":function(e,t,a){"use strict";a("ea4d")},"485a":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("Breadcrumb",{staticClass:"breadcrumb"},[a("Breadcrumb-Item",[e._v("青龙脚本文件编辑")]),a("Breadcrumb-Item",[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.changeSelectQL},model:{value:e.SelectQLId,callback:function(t){e.SelectQLId=t},expression:"SelectQLId"}},e._l(e.QLPanels,(function(t){return a("Option",{key:t.value,attrs:{value:t.Id}},[e._v(e._s(t.Name))])})),1)],1),a("Breadcrumb-Item",[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.getFile},model:{value:e.FileName,callback:function(t){e.FileName=t},expression:"FileName"}},e._l(e.Files,(function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[t.children?a("Icon",{attrs:{color:"#989898",size:"18",type:"md-folder"}}):e._e(),e._v(e._s(t.title))],1)})),1)],1),e.ChildrenFiles&&e.ChildrenFiles.length>0?a("Breadcrumb-Item",[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:"",disabled:e.ModalEdit},on:{"on-change":e.getChildrenFile},model:{value:e.ChildrenFileName,callback:function(t){e.ChildrenFileName=t},expression:"ChildrenFileName"}},e._l(e.ChildrenFiles,(function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.title))])})),1)],1):e._e()],1),a("monaco-editor",{staticClass:"editor",attrs:{language:e.getLanguage,readOnly:!1,editorMounted:e.onEditorMounted},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),a("footer",[a("div",{staticStyle:{float:"left"}},[a("div",{staticStyle:{float:"left","margin-right":"10px"}},[e._v("\n        容器同步\n        "),a("Checkbox",{on:{"on-change":e.SelectAllQLChange},model:{value:e.SelectAllQL,callback:function(t){e.SelectAllQL=t},expression:"SelectAllQL"}},[e._v("\n          全选\n        ")])],1),e._l(e.QLPanels,(function(t){return a("div",{key:t.Id,staticStyle:{float:"left","margin-right":"10px"}},[a("Checkbox",{model:{value:t.Enable,callback:function(a){e.$set(t,"Enable",a)},expression:"data.Enable"}},[e._v("\n          "+e._s(t.Name)+"\n        ")])],1)}))],2),a("Button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:e.saveFile}},[e._v("保存")])],1)],1)},l=[],n=(a("28a5"),a("ad8c")),i=a("66df"),o=function(e){return i["a"].request({url:"/api/QLScripts/"+e,method:"get"})},r=function(e,t,a){return i["a"].request({url:"/api/QLScripts/".concat(e,"/").concat(t,"?path=").concat(a),method:"get"})},c=function(e){return i["a"].request({url:"/api/QLScripts/save",data:e,method:"post"})},d=a("2b77"),u={name:"qinglong-scripts",data:function(){return{content:"",SelectAllQL:!0,QLPanels:[],Files:[],SelectQLId:null,Languages:{".py":"python",".js":"javascript",".json":"json",".sh":"shell",".ts":"typescript"},ChildrenFiles:[],ChildrenFileName:"",ModalEdit:!1,FileName:""}},model:{event:"save-success"},computed:{getLanguage:function(){if(this.ChildrenFileName){var e=this.ChildrenFileName.split(".");return this.Languages["."+e[e.length-1]]}if(this.FileName){e=this.FileName.split(".");return this.Languages["."+e[e.length-1]]}return"javascript"}},components:{MonacoEditor:d["a"]},loadQLPanels:function(){var e=this;Object(n["b"])().then((function(t){e.QLPanels=t}))},methods:{getQLPanels:function(){var e=this;Object(n["b"])().then((function(t){e.QLPanels=t,e.SelectQLId=t[0].Id,e.getFiles()}))},SelectAllQLChange:function(){this.updateCheckQLs(this.SelectAllQL)},getFiles:function(){var e=this,t=this;o(this.SelectQLId).then((function(a){t.Files=a.filter((function(e){return!e.disabled||e.children&&e.children.length>0})),e.ModalEdit||(t.FileName=t.Files[0].value,e.getFile())}))},showChild:function(e){var t=this;this.ChildrenFiles=[],this.ChildrenFileName="";var a=this.Files.filter((function(e){return e.key==t.FileName}));if(a.length>0&&a[0].children&&a[0].children.length>0)return this.ChildrenFiles=a[0].children,this.ChildrenFileName=e||this.ChildrenFiles[0].value,void this.getChildrenFile()},clearChild:function(){this.ChildrenFileName="",this.FileName="",this.ChildrenFiles=[],this.getFiles()},getFile:function(){var e=this;this.ModalEdit||this.showChild(),this.FileName&&!this.ChildrenFileName&&r(this.SelectQLId,this.FileName,"").then((function(t){e.content=t}))},getChildrenFile:function(){var e=this;r(this.SelectQLId,this.ChildrenFileName,this.FileName).then((function(t){e.content=t}))},changeSelectQL:function(){this.updateCheckQLs(),this.getFiles()},updateCheckQLs:function(){for(var e=0;e<this.QLPanels.length;e++)this.QLPanels[e].Enable=this.SelectAllQL?this.SelectAllQL:this.SelectQLId==this.QLPanels[e].Id},saveFile:function(){for(var e=this,t=[],a=0;a<this.QLPanels.length;a++)this.QLPanels[a].Enable&&t.push(this.QLPanels[a].Id);var s={name:this.FileName,content:this.content,path:"",QLIds:t};this.ChildrenFileName&&(s.name=this.ChildrenFileName,s.path=this.FileName);e=this;this.$Modal.confirm({title:"脚本编辑确认",content:"确认保存修改的脚本内容，并同步到多个容器中？",okText:"确定",cancelText:"取消",closable:!0,onOk:function(){c(s).then((function(t){e.$Notice.success({desc:"修改青龙脚本文件成功"}),e.$emit("save-success")})).catch((function(t){e.$Notice.error({title:"保存青龙脚本文件失败",desc:t})}))}})},onEditorMounted:function(e,t){window.editor=e,window.monaco=t}},mounted:function(){this.getQLPanels()}},h=u,f=(a("fb63"),a("2877")),p=Object(f["a"])(h,s,l,!1,null,"94f35d10",null);t["a"]=p.exports},a779:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("Form",{attrs:{"label-width":80},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.loadQLTasks(1))}}},[a("Row",[a("Col",{attrs:{span:"4"}},[a("FormItem",{attrs:{label:"搜索"}},[a("Input",{attrs:{placeholder:"输入青龙面板名称"},model:{value:e.SearchForm.Key,callback:function(t){e.$set(e.SearchForm,"Key",t)},expression:"SearchForm.Key"}})],1)],1),a("Col",{attrs:{span:"4"}},[a("FormItem",{attrs:{label:"青龙面板"}},[a("Select",{attrs:{clearable:""},model:{value:e.SearchForm.PanelId,callback:function(t){e.$set(e.SearchForm,"PanelId",t)},expression:"SearchForm.PanelId"}},e._l(e.QLPanels,(function(t){return a("Option",{key:t.Id,attrs:{value:t.Id}},[e._v(e._s(t.Name))])})),1)],1)],1),a("Col",{attrs:{span:"4"}},[a("FormItem",{attrs:{label:"运行状态"}},[a("Select",{attrs:{clearable:""},model:{value:e.SearchForm.status,callback:function(t){e.$set(e.SearchForm,"status",t)},expression:"SearchForm.status"}},[a("Option",{attrs:{value:"0"}},[e._v("运行")]),a("Option",{attrs:{value:"1"}},[e._v("空闲")])],1)],1)],1),a("Col",{attrs:{span:"4"}},[a("FormItem",{attrs:{label:"启用状态"}},[a("Select",{attrs:{clearable:""},model:{value:e.SearchForm.isDisabled,callback:function(t){e.$set(e.SearchForm,"isDisabled",t)},expression:"SearchForm.isDisabled"}},[a("Option",{attrs:{value:"0"}},[e._v("启用")]),a("Option",{attrs:{value:"1"}},[e._v("禁用")])],1)],1)],1),e._v("\n         \n        "),a("Button",{attrs:{type:"info"},on:{click:function(t){return e.loadQLTasks(1)}}},[a("Icon",{attrs:{type:"md-search"}}),e._v(" 搜索\n        ")],1)],1)],1)],1),a("div",{staticStyle:{margin:"10px 0"}},[a("Button",{attrs:{type:"info",size:"small"},on:{click:e.addTask}},[a("Icon",{attrs:{type:"md-add"}}),e._v(" 添加\n    ")],1),e._v("\n     \n    "),a("Button",{staticStyle:{color:"green"},attrs:{size:"small"},on:{click:function(t){return e.execSelection("run")}}},[a("Icon",{attrs:{type:"ios-play"}}),e._v(" 运行\n    ")],1),e._v("\n     \n    "),a("Button",{staticStyle:{color:"orange"},attrs:{size:"small"},on:{click:function(t){return e.execSelection("stop")}}},[a("Icon",{attrs:{type:"ios-pause"}}),e._v(" 停止\n    ")],1),e._v("\n     \n    "),a("Button",{staticStyle:{color:"cadetblue"},attrs:{size:"small"},on:{click:function(t){return e.execSelection("enable")}}},[a("Icon",{attrs:{type:"ios-switch"}}),e._v(" 启用\n    ")],1),e._v("\n     \n    "),a("Button",{staticStyle:{color:"#ff6a00"},attrs:{size:"small"},on:{click:function(t){return e.execSelection("disable")}}},[a("Icon",{attrs:{type:"ios-switch-outline"}}),e._v(" 禁用\n    ")],1),e._v("\n     \n    "),a("Button",{staticStyle:{color:"red"},attrs:{size:"small"},on:{click:function(t){return e.execSelection("delete")}}},[a("Icon",{attrs:{type:"ios-trash"}}),e._v(" 删除\n    ")],1)],1),a("Table",{ref:"QLTaskTable",attrs:{stripe:"",border:"",columns:e.columns,data:e.datas}}),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:e.PageInfo.Total,current:e.SearchForm.PageIndex,"page-size":e.SearchForm.PageSize,"show-sizer":!0,"page-size-opts":e.PageInfo.PageSizeOpts,"show-total":!0},on:{"on-page-size-change":e.pageSizeChange,"on-change":e.loadQLTasks}})],1)]),a("Modal",{attrs:{"mask-closable":!1,title:e.AddQLTaskModel.Title,width:600},model:{value:e.AddQLTaskModel.Show,callback:function(t){e.$set(e.AddQLTaskModel,"Show",t)},expression:"AddQLTaskModel.Show"}},[a("Form",{ref:"AddQLTaskForm",attrs:{model:e.AddQLTaskModel.Data,rules:e.ruleInline,"label-width":120}},[a("FormItem",{attrs:{label:"脚本文件"}},[a("Upload",{attrs:{"show-upload-list":!1,"on-success":e.onSuccess,action:e.BaseUrl+"/api/Upload/scripts?dir=ql",headers:e.UploadHeaders}},[a("i-button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("上传文件")])],1)],1),a("FormItem",{attrs:{label:"任务名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.AddQLTaskModel.Data.name,callback:function(t){e.$set(e.AddQLTaskModel.Data,"name",t)},expression:"AddQLTaskModel.Data.name"}})],1),a("FormItem",{attrs:{label:"任务指令",prop:"command"}},[a("Input",{attrs:{placeholder:"请输入任务指令"},model:{value:e.AddQLTaskModel.Data.command,callback:function(t){e.$set(e.AddQLTaskModel.Data,"command",t)},expression:"AddQLTaskModel.Data.command"}})],1),a("FormItem",{attrs:{label:"调度规则",prop:"schedule"}},[a("Input",{attrs:{placeholder:"请输入调度规则"},model:{value:e.AddQLTaskModel.Data.schedule,callback:function(t){e.$set(e.AddQLTaskModel.Data,"schedule",t)},expression:"AddQLTaskModel.Data.schedule"}})],1),a("FormItem",{attrs:{label:"容器选择"}},e._l(e.QLPanels,(function(t){return a("Checkbox",{key:t.Id,staticStyle:{float:"left","margin-right":"15px"},model:{value:t.Enable,callback:function(a){e.$set(t,"Enable",a)},expression:"panel.Enable"}},[e._v(e._s(t.Name))])})),1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleCancel()}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmitAddTask("AddQLTaskForm")}}},[e._v("提交")])],1)],1),a("Modal",{attrs:{"mask-closable":!1,title:e.EditQLTaskModel.Title,width:600},model:{value:e.EditQLTaskModel.Show,callback:function(t){e.$set(e.EditQLTaskModel,"Show",t)},expression:"EditQLTaskModel.Show"}},[a("Form",{ref:"EditQLTaskForm",attrs:{model:e.EditQLTaskModel.Data,rules:e.ruleInline,"label-width":120}},[a("Divider",[e._v("任务基础配置")]),a("FormItem",{attrs:{label:"任务名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.EditQLTaskModel.Data.name,callback:function(t){e.$set(e.EditQLTaskModel.Data,"name",t)},expression:"EditQLTaskModel.Data.name"}})],1),a("FormItem",{attrs:{label:"任务指令",prop:"command"}},[a("Input",{attrs:{placeholder:"请输入任务指令"},model:{value:e.EditQLTaskModel.Data.command,callback:function(t){e.$set(e.EditQLTaskModel.Data,"command",t)},expression:"EditQLTaskModel.Data.command"}})],1),a("FormItem",{attrs:{label:"调度规则",prop:"schedule"}},[a("Input",{attrs:{placeholder:"请输入调度规则"},model:{value:e.EditQLTaskModel.Data.schedule,callback:function(t){e.$set(e.EditQLTaskModel.Data,"schedule",t)},expression:"EditQLTaskModel.Data.schedule"}},[a("span",{attrs:{slot:"append"},slot:"append"},[a("Button",{attrs:{title:"修改所有容器的定时调度规则"},on:{click:e.syncSchedule}},[e._v("同步")])],1)])],1),a("Divider",[e._v("青龙容器详细配置")]),e._l(e.EditQLTaskModel.Data.QLTasks,(function(t){return a("FormItem",{key:t.QLId,attrs:{label:t.QLName}},[a("Input",{attrs:{type:"text",placeholder:"不填定时执行表达式则默认使用基础配置",name:"schedule"},model:{value:t.schedule,callback:function(a){e.$set(t,"schedule",a)},expression:"data.schedule"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("调度表达式")]),a("span",{attrs:{slot:"append"},slot:"append"},[a("Checkbox",{model:{value:!t.isDisable,callback:function(a){e.$set(!t,"isDisable",a)},expression:"!data.isDisable"}},[e._v(e._s(t.QLName))])],1)])],1)}))],2),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleCancel()}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmitUpdate("EditQLTaskForm")}}},[e._v("提交")])],1)],1),a("div",{staticClass:"logModal"},[a("Modal",{attrs:{"mask-closable":!1,title:e.LogModal.Title,width:800,styles:{top:"20px"}},model:{value:e.LogModal.Show,callback:function(t){e.$set(e.LogModal,"Show",t)},expression:"LogModal.Show"}},[a("header",[a("Tabs",{on:{"on-click":e.changeSelectQL},model:{value:e.LogModal.SelectQLId,callback:function(t){e.$set(e.LogModal,"SelectQLId",t)},expression:"LogModal.SelectQLId"}},e._l(e.LogModal.QLTasks,(function(e){return a("Tab-Pane",{key:e.QLId,attrs:{label:e.QLName,name:e.QLId}})})),1)],1),a("pre",{staticClass:"log-container"},[e._v(e._s(e.LogModal.LogContent))])])],1),a("Modal",{attrs:{"footer-hide":!0,"mask-closable":!1,title:e.EditScriptModal.Title,fullscreen:!0},model:{value:e.EditScriptModal.Show,callback:function(t){e.$set(e.EditScriptModal,"Show",t)},expression:"EditScriptModal.Show"}},[a("qinglong-scripts",{ref:"taskEditScripts",on:{"save-success":e.onEditScriptSave}})],1)],1)},l=[],n=(a("28a5"),a("7f7f"),a("66df")),i=function(e){return n["a"].request({url:"/api/QLTask",params:e,method:"get"})},o=function(e,t){return n["a"].request({url:"/api/QLTask/"+e,data:t,method:"post"})},r=function(e){return n["a"].request({url:"/api/QLTask/add",data:e,method:"post"})},c=function(e){return n["a"].request({url:"/api/QLTask/update",data:e,method:"put"})},d=function(e,t){return n["a"].request({url:"/api/QLTask/log/".concat(e,"/").concat(t),method:"get"})},u=a("ad8c"),h=a("f121"),f=a("485a"),p={data:function(){var e=this;return{columns:[{type:"selection",width:60,align:"center"},{title:"任务名称",key:"name",width:150,render:function(t,a){return e.tdTip(t,a,"name")}},{title:"任务命令",key:"Enable",width:220,sortable:!0,render:function(t,a){return t("div",[t("a",{style:{display:"inline-block",width:"100%",textIndent:"0px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},on:{click:function(){e.eidtScripts(a.row)}},attrs:{title:a.row.command}},a.row.command)])}},{title:"运行情况",minWidth:180,render:function(t,a){for(var s=[],l=function(l){var n=a.row.QLTasks[l];s.push(t("Button",{props:{type:0==n.status?"primary":null,size:"small"},style:{marginRight:"5px"},on:{click:function(){e.CQLTaskExec(0==n.status?"stop":"run",[{QLId:n.QLId,TaskIds:[n._id]}])}}},n.QLName+" "+(0==n.status?"运行":"空闲")))},n=0;n<a.row.QLTasks.length;n++)l(n);return t("div",s)}},{title:"启用状态",minWidth:180,render:function(t,a){for(var s=[],l=function(l){var n=a.row.QLTasks[l];s.push(t("Button",{props:{type:1==n.isDisabled?"error":"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.CQLTaskExec(1==n.isDisabled?"enable":"disable",[{QLId:n.QLId,TaskIds:[n._id]}])}}},n.QLName+" "+(1==n.isDisabled?"禁用":"启用")))},n=0;n<a.row.QLTasks.length;n++)l(n);return t("div",s)}},{title:"操作",key:"action",width:180,align:"center",render:function(t,a){return t("div",[t("i",{class:"fa fa-play",style:{color:"green"},on:{click:function(){e.execTask("run",[a.row])}}}),t("i",{class:"fa fa-pause",style:{color:"orange"},on:{click:function(){e.execTask("stop",[a.row])}}}),t("i",{class:"fa fa-check",style:{color:"cadetblue"},on:{click:function(){e.execTask("enable",[a.row])}}}),t("i",{class:"fa fa-ban",style:{color:"#ff6a00"},on:{click:function(){e.execTask("disable",[a.row])}}}),t("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){e.editTask(a.index)}}}),t("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){e.execTask("delete",[a.row])}}})])}}],datas:[],AddQLTaskModel:{Show:!1,Title:"添加青龙任务",Data:{QLTasks:[],command:"",name:"",schedule:"0 0 1 * *",File:""}},EditQLTaskModel:{Show:!1,Title:"修改青龙任务",Data:{QLTasks:[],command:"",name:"",schedule:"",File:""}},EditScriptModal:{Show:!1,Title:""},UploadHeaders:{},ruleInline:{name:[{required:!0,message:"任务名称不能为空",trigger:"blur"}],command:[{required:!0,message:"任务命令不能为空",trigger:"blur"}],schedule:[{required:!0,message:"定时调度不能为空",trigger:"blur"}]},SearchForm:{Refresh:!1,PageIndex:1,PageSize:10,isDisabled:0},QLPanels:[],BaseUrl:"",LogModal:{SelectQLId:"",LogContent:"",ScriptId:"",Show:!1,QLTasks:[],Title:"任务日志",First:!1},PageInfo:{PageSizeOpts:[10,20,50,100,200,500,1e3],Total:0}}},methods:{onEditScriptSave:function(){this.EditScriptModal.Show=!1},pageSizeChange:function(e){this.SearchForm.PageSize=e,console.log(this.SearchForm),this.loadQLTasks(1)},handleSubmitUpdate:function(e){var t=this;this.$refs[e].validate((function(e){if(e){for(var a=0;a<t.EditQLTaskModel.Data.QLTasks.length;a++){var s=t.EditQLTaskModel.Data.QLTasks[a].schedule;s||(t.EditQLTaskModel.Data.QLTasks[a].schedule=t.EditQLTaskModel.Data.schedule)}c(t.EditQLTaskModel.Data).then((function(e){e&&(t.$Notice.success({desc:"修改青龙任务成功!"}),t.EditQLTaskModel.Show=!1,t.loadQLTasks())}))}}))},changeSelectQL:function(){var e=this;this.LogModal.First=!0,this.LogModal.ScriptId=this.LogModal.QLTasks.filter((function(t){return t.QLId==e.LogModal.SelectQLId}))[0]._id},handleSubmitAddTask:function(e){var t=this;this.$refs[e].validate((function(e){if(e){t.AddQLTaskModel.Data.QLTasks=[];for(var a=0;a<t.QLPanels.length;a++)t.QLPanels[a].Enable&&t.AddQLTaskModel.Data.QLTasks.push({QLId:t.QLPanels[a].Id});if(0==t.AddQLTaskModel.Data.QLTasks.length)return void t.$Notice.error({title:"配置错误",desc:"未选择配置任何容器！"});r(t.AddQLTaskModel.Data).then((function(e){e&&(t.$Notice.success({desc:"添加青龙任务成功!"}),t.AddQLTaskModel.Show=!1,t.loadQLTasks())}))}}))},onSuccess:function(e,t,a){this.AddQLTaskModel.Data.command="task "+t.name,this.AddQLTaskModel.Data.File=t.name,this.AddQLTaskModel.Data.name=t.name.split(".")[0]},handleCancel:function(){this.AddQLTaskModel.Show=!1,this.EditScriptModal.Show=!1,this.EditQLTaskModel.Show=!1},handleSelectAll:function(e){this.$refs.selection.selectAll(e)},loadQLTasks:function(e){var t=this;this.SearchForm.PageIndex=e,i(this.SearchForm).then((function(e){t.datas=e.Data,t.PageInfo.Total=e.TotalCount}))},addTask:function(){this.AddQLTaskModel.Show=!0},editTask:function(e){this.EditQLTaskModel.Title="修改青龙任务",this.EditQLTaskModel.Type="update",this.EditQLTaskModel.Data=JSON.parse(JSON.stringify(this.datas[e])),this.EditQLTaskModel.Show=!0},syncSchedule:function(){for(var e=0;e<this.EditQLTaskModel.Data.QLTasks.length;e++)this.EditQLTaskModel.Data.QLTasks[e].schedule=this.EditQLTaskModel.Data.schedule},execSelection:function(e){var t=this.$refs.QLTaskTable.getSelection();t&&0!=t.length?this.execTask(e,t):this.$Message.warning("未选中任何任务，无法执行操作。")},execTask:function(e,t){for(var a=[],s=0;s<t.length;s++)for(var l=t[s],n=0;n<l.QLTasks.length;n++)if("run"==e&&1==l.QLTasks[n].status||"stop"==e&&0==l.QLTasks[n].status||"disable"==e&&0==l.QLTasks[n].isDisable||"enable"==e&&1==l.QLTasks[n].isDisable||"disable"===e||"enable"===e||"delete"===e){for(var i=!1,o=0;o<a.length;o++)if(a[o].QLId==l.QLTasks[n].QLId){a[o].TaskIds.push(l.QLTasks[n]._id),i=!0;break}i||a.push({QLId:l.QLTasks[n].QLId,TaskIds:[l.QLTasks[n]._id]})}this.CQLTaskExec(e,a)},ShowLogs:function(e){this.LogModal.QLTasks=JSON.parse(JSON.stringify(e.QLTasks)),this.LogModal.Show=!0,this.LogModal.SelectQLId=this.LogModal.QLTasks[0].QLId,this.LogModal.Title=e.name+"---运行日志",this.changeSelectQL()},eidtScripts:function(e){e.command.indexOf("task")>-1&&e.command.split(" ").length>1&&(this.EditScriptModal.Show=!0,this.$refs.taskEditScripts.SelectQLId=e.QLTasks[0].QLId,this.$refs.taskEditScripts.ModalEdit=!0,this.$refs.taskEditScripts.getFiles(),this.$refs.taskEditScripts.clearChild(),2==e.command.split(" ")[1].split("/").length?(this.$refs.taskEditScripts.FileName=e.command.split(" ")[1].split("/")[0],this.$refs.taskEditScripts.showChild(e.command.split(" ")[1].split("/")[1])):(this.$refs.taskEditScripts.FileName=e.command.split(" ")[1],this.$refs.taskEditScripts.getFile()),this.EditScriptModal.Title="修改".concat(e.name,"脚本"))},getLog:function(){var e=this;(this.LogModal.Show&&this.LogModal.QLTasks.filter((function(t){return t.QLId==e.LogModal.SelectQLId&&0==t.status})).length>0||this.LogModal.First)&&(this.LogModal.First=!1,d(this.LogModal.SelectQLId,this.LogModal.ScriptId).then((function(t){e.LogModal.LogContent=t})))},CQLTaskExec:function(e,t){var a=this,s="运行";switch(e){case"stop":s="停止";break;case"enable":s="启用";break;case"disable":s="禁用";break;case"delete":s="删除";break}this.$Modal.confirm({title:"操作确认",content:"确认".concat(s,"选中的任务吗？"),okText:"确定",cancelText:"取消",closable:!0,onOk:function(){o(e,t).then((function(e){a.loadQLTasks(1)}))}})},tdTip:function(e,t,a){var s=this,l=[],n=t.row[a];return l.push(e("a",{style:{display:"inline-block",width:"100%",textIndent:"0px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},attrs:{title:n},on:{click:function(){s.ShowLogs(t.row)}}},n)),e("div",{style:{width:"100%"}},l)},copy:function(e){var t=this;this.$copyText(e).then((function(e){t.$Message.success("复制成功！")}),(function(e){t.$Message.error("复制失败！")}))},loadQLPanels:function(){var e=this;Object(u["b"])().then((function(t){e.QLPanels=t;for(var a=0;a<e.QLPanels.length;a++)e.QLPanels[a].Enable=!0}))}},components:{QinglongScripts:f["a"]},mounted:function(){this.UploadHeaders.Authorization=localStorage.getItem("accessToken"),this.loadQLTasks(1),this.loadQLPanels(),this.BaseUrl=h["a"].baseUrl.dev;var e=this;setInterval((function(){e.getLog()}),3e3)}},m=p,L=(a("100c"),a("2877")),k=Object(L["a"])(m,s,l,!1,null,null,null);t["default"]=k.exports},ac12:function(e,t,a){},ad8c:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return r}));var s=a("66df"),l=function(){return s["a"].request({url:"/api/QLPanel",method:"get"})},n=function(e){return s["a"].request({url:"/api/QLPanel",data:e,method:"post"})},i=function(e){return s["a"].request({url:"/api/QLPanel/"+e,method:"delete"})},o=function(){return s["a"].request({url:"/api/QLPanel/RefreshToken",method:"get"})},r=function(){return s["a"].request({url:"/api/QLPanel/RefreshLogin",method:"get"})}},ea4d:function(e,t,a){},fb63:function(e,t,a){"use strict";a("ac12")}}]);