(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25b74312"],{"06a3":function(t,a,e){"use strict";e("3134")},"0f37":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var d=e("66df"),r=function(){return d["a"].request({url:"/api/Enum",method:"get"})}},3134:function(t,a,e){},e911:function(t,a,e){"use strict";e.r(a);var d=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticStyle:{margin:"0 0 20px 0"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.AddOrUpdate({})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(" 添加\n    ")],1),t._v("\n     \n    "),a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.getList(1)}}},[a("Icon",{attrs:{type:"md-refresh"}}),t._v(" 更新\n    ")],1)],1),a("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:t.columns,data:t.datas}}),a("Modal",{attrs:{"mask-closable":!1,title:t.addOrUpdateModal.title,width:600},model:{value:t.addOrUpdateModal.show,callback:function(a){t.$set(t.addOrUpdateModal,"show",a)},expression:"addOrUpdateModal.show"}},[a("Form",{ref:"EditVLWForm",attrs:{model:t.addOrUpdateModal.data,rules:t.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"名称",prop:"Name"}},[a("Input",{attrs:{placeholder:"输入名称，可自定义"},model:{value:t.addOrUpdateModal.data.Name,callback:function(a){t.$set(t.addOrUpdateModal.data,"Name",a)},expression:"addOrUpdateModal.data.Name"}})],1),a("FormItem",{attrs:{label:"机器人微信",prop:"robot_wxid"}},[a("Input",{attrs:{placeholder:"通过框架查看复制ID"},model:{value:t.addOrUpdateModal.data.robot_wxid,callback:function(a){t.$set(t.addOrUpdateModal.data,"robot_wxid",a)},expression:"addOrUpdateModal.data.robot_wxid"}})],1),a("FormItem",{attrs:{label:"Token",prop:"Token"}},[a("Input",{attrs:{placeholder:"xYo HttpAPI 中的配置Token 或者自定义"},model:{value:t.addOrUpdateModal.data.Token,callback:function(a){t.$set(t.addOrUpdateModal.data,"Token",a)},expression:"addOrUpdateModal.data.Token"}})],1),a("FormItem",{attrs:{label:"Http地址",prop:"Http"}},[a("Input",{attrs:{type:"text",name:"Http",placeholder:"请填写xYo HttpAPI for HTTP中的地址，或者千寻Http地址"},model:{value:t.addOrUpdateModal.data.Http,callback:function(a){t.$set(t.addOrUpdateModal.data,"Http",a)},expression:"addOrUpdateModal.data.Http"}})],1),a("FormItem",{attrs:{label:"框架类型",prop:"HttpType"}},[a("Select",{model:{value:t.addOrUpdateModal.data.HttpType,callback:function(a){t.$set(t.addOrUpdateModal.data,"HttpType",a)},expression:"addOrUpdateModal.data.HttpType"}},t._l(t.AllEnums.WxHttpConfigType,(function(e){return a("Option",{key:e.Value,attrs:{value:e.Value}},[t._v("\n            "+t._s(e.Key)+"\n          ")])})),1)],1),a("FormItem",{attrs:{label:"开关选项"}},[a("Checkbox",{model:{value:t.addOrUpdateModal.data.Enable,callback:function(a){t.$set(t.addOrUpdateModal.data,"Enable",a)},expression:"addOrUpdateModal.data.Enable"}},[t._v("启用")]),a("Checkbox",{model:{value:t.addOrUpdateModal.data.AddFriend,callback:function(a){t.$set(t.addOrUpdateModal.data,"AddFriend",a)},expression:"addOrUpdateModal.data.AddFriend"}},[t._v("好友自动通过")])],1),a("FormItem",{attrs:{label:"监听群"}},[a("Input",{attrs:{type:"textarea",placeholder:"通过日志查看群ID，多个用英文逗号隔开"},model:{value:t.addOrUpdateModal.data.Groups,callback:function(a){t.$set(t.addOrUpdateModal.data,"Groups",a)},expression:"addOrUpdateModal.data.Groups"}})],1),a("FormItem",{attrs:{label:"好友欢迎"}},[a("Input",{attrs:{type:"textarea",name:"AddFriendMessage",placeholder:"自动通过好友后向好友发送欢迎语"},model:{value:t.addOrUpdateModal.data.AddFriendMessage,callback:function(a){t.$set(t.addOrUpdateModal.data,"AddFriendMessage",a)},expression:"addOrUpdateModal.data.AddFriendMessage"}})],1),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addOrUpdateModal.data.Remark,callback:function(a){t.$set(t.addOrUpdateModal.data,"Remark",a)},expression:"addOrUpdateModal.data.Remark"}})],1),a("transition",{attrs:{name:"slide-down"}},[2==t.addOrUpdateModal.data.HttpType?a("Alert",{attrs:{type:"warning"},scopedSlots:t._u([{key:"desc",fn:function(){return[t._v("\n            "+t._s("配置后请尝试访问 http://量子IP:量子端口/api/QX/"+t.addOrUpdateModal.data.Token+"在千寻的事件通知地址中填写该地址。该页面中填写的Http地址为http://千寻服务器地址:千寻服务端口号")+"\n          ")]},proxy:!0}],null,!1,1010620664)},[t._v("\n          千寻框架配置说明\n          ")]):t._e()],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(a){t.addOrUpdateModal.show=!1}}},[t._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(a){return t.submitVLW("EditVLWForm")}}},[t._v("提交")])],1)],1)],1)},r=[],n=(e("7f7f"),e("66df")),o=function(){return n["a"].request({url:"/api/vlw",method:"get"})},l=function(t){return n["a"].request({url:"/api/vlw",data:t,method:"post"})},i=function(t){return n["a"].request({url:"/api/vlw/"+t,method:"delete"})},s=e("c276"),p=e("0f37"),u={data:function(){var t=this;return{AllEnums:{},columns:[{type:"index",title:"序号",align:"center",width:70},{type:"selection",width:60,align:"center"},{title:"名称",key:"Name",minWidth:120},{title:"回调地址",minWidth:180,key:"HttpType",render:function(t,a){return t("div",[t("a",{domProps:{href:"/api/"+(1==a.row.HttpType?"vlw":"qx")+"/"+a.row.Token,target:"blank"}},"点击查看")])}},{title:"Token",key:"Token",minWidth:120},{title:"机器人微信",key:"robot_wxid",minWidth:120},{title:"Http",key:"Http",minWidth:120},{title:"机器人类型",key:"HttpType",minWidth:120,render:function(a,e){return a("div",[a("span",Object(s["c"])(t.AllEnums,"WxHttpConfigType",e.row.HttpType)||"文本")])}},{title:"状态",key:"Enable",width:80,render:function(t,a){return t("div",[t("span",{style:{color:a.row.Enable?"green":"red"}},a.row.Enable?"启用":"禁用")])}},{title:"好友验证",key:"AddFriend",width:90,render:function(t,a){return t("div",[t("span",a.row.AddFriend?"是":"否")])}},{title:"好友欢迎语",key:"AddFriendMessage",minWidth:120},{title:"备注",key:"Remark",minWidth:120},{title:"操作",key:"action",width:150,align:"center",render:function(a,e){var d=[];return d.push(a("i",{class:"fa fa-pencil",style:{color:"#ff6a00"},on:{click:function(){t.AddOrUpdate(e.row)}}})),d.push(a("i",{class:"fa fa-trash",style:{color:"#f00"},on:{click:function(){t.delete(e.row.Id)}}})),a("div",d)}}],datas:[],addOrUpdateModal:{show:!1,data:{Enable:!0},title:"添加VLW"},ruleValidate:{Name:[{required:!0,message:"名称不能为空",trigger:"blur"}],Http:[{required:!0,message:"Http协议不能为空",trigger:"blur"}],Token:[{required:!0,message:"Token不能为空",trigger:"blur"}],robot_wxid:[{required:!0,message:"微信ID能为空",trigger:"blur"}]}}},methods:{loadAllEnums:function(){var t=this;Object(p["a"])().then((function(a){t.AllEnums=a}))},AddOrUpdate:function(t){this.addOrUpdateModal.show=!0,t.Id?(this.addOrUpdateModal.data=JSON.parse(JSON.stringify(t)),this.addOrUpdateModal.title="修改微信"):(this.addOrUpdateModal.data={Enable:!0,HttpType:1},this.addOrUpdateModal.title="添加微信")},delete:function(t){var a=this;this.$Modal.confirm({title:"删除确认",content:"确定删除吗？删除后，通过该微信提交的账号可能得不到系统推送，该操作不可逆。",okText:"确认",cancelText:"取消",closable:!0,onOk:function(){i(t).then((function(t){a.getList()}))}})},submitVLW:function(t){var a=this,e=this;this.$refs[t].validate((function(t){t&&l(a.addOrUpdateModal.data).then((function(t){t&&(e.$Message.success(a.addOrUpdateModal.title+"成功！"),e.addOrUpdateModal.show=!1,e.getList())}))}))},getList:function(t){var a=this;o().then((function(e){a.datas=e,t&&a.$Message.success("刷新成功！")}))}},mounted:function(){this.getList(),this.loadAllEnums()}},c=u,m=(e("06a3"),e("2877")),f=Object(m["a"])(c,d,r,!1,null,null,null);a["default"]=f.exports}}]);