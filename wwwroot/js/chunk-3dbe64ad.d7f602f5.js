(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dbe64ad"],{a481:function(e,t,a){"use strict";var n=a("cb7c"),l=a("4bf8"),r=a("9def"),i=a("4588"),o=a("0390"),s=a("5f1b"),d=Math.max,c=Math.min,u=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,m){return[function(n,l){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,l):a.call(String(r),n,l)},function(e,t){var l=m(a,e,this,t);if(l.done)return l.value;var u=n(e),p=String(this),h="function"===typeof t;h||(t=String(t));var P=u.global;if(P){var L=u.unicode;u.lastIndex=0}var E=[];while(1){var Q=s(u,p);if(null===Q)break;if(E.push(Q),!P)break;var b=String(Q[0]);""===b&&(u.lastIndex=o(p,r(u.lastIndex),L))}for(var M="",g=0,D=0;D<E.length;D++){Q=E[D];for(var k=String(Q[0]),y=d(c(i(Q.index),p.length),0),w=[],x=1;x<Q.length;x++)w.push(f(Q[x]));var I=Q.groups;if(h){var S=[k].concat(w,y,p);void 0!==I&&S.push(I);var C=String(t.apply(void 0,S))}else C=v(k,p,y,w,I,t);y>=g&&(M+=p.slice(g,y)+C,g=y+k.length)}return M+p.slice(g)}];function v(e,t,n,r,i,o){var s=n+e.length,d=r.length,c=h;return void 0!==i&&(i=l(i),c=p),a.call(o,c,(function(a,l){var o;switch(l.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":o=i[l.slice(1,-1)];break;default:var c=+l;if(0===c)return a;if(c>d){var p=u(c/10);return 0===p?a:p<=d?void 0===r[p-1]?l.charAt(1):r[p-1]+l.charAt(1):a}o=r[c-1]}return void 0===o?"":o}))}}))},ad8c:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s}));var n=a("66df"),l=function(){return n["a"].request({url:"/api/QLPanel",method:"get"})},r=function(e){return n["a"].request({url:"/api/QLPanel",data:e,method:"post"})},i=function(e){return n["a"].request({url:"/api/QLPanel/"+e,method:"delete"})},o=function(){return n["a"].request({url:"/api/QLPanel/RefreshToken",method:"get"})},s=function(){return n["a"].request({url:"/api/QLPanel/RefreshLogin",method:"get"})}},b8ad:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{margin:"20px 0"}},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.editQLPanel(-1)}}},[a("Icon",{attrs:{type:"md-add"}}),e._v(" 添加 ")],1),e._v(" \n    "),a("Button",{attrs:{type:"warning",size:"small"},on:{click:e.refreshToken}},[a("Icon",{attrs:{type:"md-refresh"}}),e._v("刷新Token ")],1),e._v(" \n    "),a("Button",{attrs:{type:"warning",size:"small"},on:{click:e.refreshLogin}},[a("Icon",{attrs:{type:"md-refresh"}}),e._v(" 刷新登录状态\n    ")],1)],1),a("Table",{ref:"selection",attrs:{stripe:"",border:"",columns:e.QLPanelColumns,data:e.QLPanelData}}),a("Modal",{attrs:{"mask-closable":!1,title:e.EditQLPanelModel.Title,width:600},model:{value:e.EditQLPanelModel.Show,callback:function(t){e.$set(e.EditQLPanelModel,"Show",t)},expression:"EditQLPanelModel.Show"}},[a("Form",{ref:"EditQLPanelForm",attrs:{model:e.EditQLPanelModel.Data,rules:e.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"面板名称",prop:"Name"}},[a("Input",{attrs:{placeholder:"输入青龙面板名称"},model:{value:e.EditQLPanelModel.Data.Name,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Name",t)},expression:"EditQLPanelModel.Data.Name"}})],1),a("FormItem",{attrs:{label:"面板地址",prop:"Address"}},[a("Input",{attrs:{placeholder:"面板地址填写示例：192.168.2.199:5700"},model:{value:e.EditQLPanelModel.Data.Address,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Address",t)},expression:"EditQLPanelModel.Data.Address"}},[a("Select",{staticStyle:{width:"80px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.EditQLPanelModel.Data.HttpType,callback:function(t){e.$set(e.EditQLPanelModel.Data,"HttpType",t)},expression:"EditQLPanelModel.Data.HttpType"}},[a("Option",{attrs:{value:"http://",selected:""}},[e._v("http://")]),a("Option",{attrs:{value:"https://"}},[e._v("https://")])],1)],1)],1),a("FormItem",{attrs:{label:"Client ID",prop:"ClientID"}},[a("Input",{model:{value:e.EditQLPanelModel.Data.ClientID,callback:function(t){e.$set(e.EditQLPanelModel.Data,"ClientID",t)},expression:"EditQLPanelModel.Data.ClientID"}})],1),a("FormItem",{attrs:{label:"Client Secret",prop:"ClientSecret"}},[a("Input",{model:{value:e.EditQLPanelModel.Data.ClientSecret,callback:function(t){e.$set(e.EditQLPanelModel.Data,"ClientSecret",t)},expression:"EditQLPanelModel.Data.ClientSecret"}})],1),a("FormItem",{attrs:{label:"用户名",prop:"UserName"}},[a("Input",{attrs:{placeholder:"当青龙OpenAPI异常时，可以使用用户名密码刷新状态"},model:{value:e.EditQLPanelModel.Data.UserName,callback:function(t){e.$set(e.EditQLPanelModel.Data,"UserName",t)},expression:"EditQLPanelModel.Data.UserName"}})],1),a("FormItem",{attrs:{label:"密码",prop:"Password"}},[a("Input",{attrs:{type:"password"},model:{value:e.EditQLPanelModel.Data.Password,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Password",t)},expression:"EditQLPanelModel.Data.Password"}})],1),a("FormItem",{attrs:{label:"分配权重",prop:"Weight"}},[a("Input",{attrs:{type:"number",placeholder:"用户变量分配权重，为0不分配。"},model:{value:e.EditQLPanelModel.Data.Weight,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Weight",t)},expression:"EditQLPanelModel.Data.Weight"}})],1),a("FormItem",{attrs:{label:"最大容量",prop:"UserEnvMax"}},[a("Input",{attrs:{type:"number",placeholder:"容器分配用户变量的最大值"},model:{value:e.EditQLPanelModel.Data.UserEnvMax,callback:function(t){e.$set(e.EditQLPanelModel.Data,"UserEnvMax",t)},expression:"EditQLPanelModel.Data.UserEnvMax"}})],1),a("FormItem",{attrs:{label:"容器开关"}},[a("Checkbox",{model:{value:e.EditQLPanelModel.Data.Enable,callback:function(t){e.$set(e.EditQLPanelModel.Data,"Enable",t)},expression:"EditQLPanelModel.Data.Enable"}},[e._v("启用")]),a("Checkbox",{model:{value:e.EditQLPanelModel.Data.EnableAll,callback:function(t){e.$set(e.EditQLPanelModel.Data,"EnableAll",t)},expression:"EditQLPanelModel.Data.EnableAll"}},[e._v("全量模式\n          "),a("Tooltip",{attrs:{content:"全量模式下的容器将直接获得所有用户变量",placement:"top"}},[a("Icon",{attrs:{type:"ios-alert-outline",color:"red",size:"16"}})],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleCancel()}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("EditQLPanelForm")}}},[e._v("提交")])],1)],1)],1)},l=[],r=(a("a481"),a("7f7f"),a("ad8c")),i={data:function(){var e=this;return{QLPanelColumns:[{type:"selection",width:60,align:"center"},{title:"名称",key:"Name",render:function(e,t){return e("div",[e("Icon",{props:{type:"person"}}),e("strong",t.row.Name)])}},{title:"启用",key:"Enable",width:80,sortable:!0,render:function(e,t){return e("div",[e("strong",t.row.Enable?"是":"否")])}},{title:"面板地址",key:"Address",render:function(e,t){return e("div",[e("a",{domProps:{href:t.row.Address,target:"blank"}},t.row.Address)])}},{title:"ClientID",key:"ClientID"},{title:"ClientSecret",key:"ClientSecret",render:function(e,t){return e("div",[e("strong","******")])}},{title:"权重",key:"Weight",width:80},{title:"全量",key:"EnableAll",width:80,render:function(e,t){return e("div",[e("strong",t.row.EnableAll?"是":"否")])}},{title:"最大",width:80,key:"UserEnvMax"},{title:"数量",width:80,key:"EnvCount"},{title:"操作",key:"action",width:150,align:"center",render:function(t,a){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editQLPanel(a.index)}}},"编辑"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.delete(a.index)}}},"删除")])}}],QLPanelData:[],EditQLPanelModel:{Show:!1,Title:"添加青龙面板",Data:{HttpType:"http://",Enable:!0,EnableAll:!1,UserEnvMax:100,Weight:1}},ruleValidate:{Name:[{required:!0,message:"容器名称不能为空",trigger:"blur"}],Address:[{required:!0,message:"容器地址不能为空",trigger:"blur"}],ClientID:[{required:!0,message:"ClientID 不能为空",trigger:"blur"}],ClientSecret:[{required:!0,message:"ClientSecret 不能为空",trigger:"blur"}],Weight:[{required:!0,message:"请输入面板权重"}],UserEnvMax:[{required:!0,message:"请输入用户环境变量最大值"}]}}},methods:{refreshLogin:function(){var e=this;Object(r["c"])().then((function(t){e.$Message.success("使用青龙用户名密码刷新青龙授权状态成功！")}))},refreshToken:function(){var e=this;Object(r["d"])().then((function(t){if(t&&0!=t.length){for(var a="",n=0;n<t.length;n++){var l=t[n];a+=l}e.$Message.warning("刷新青龙授权Token操作完成！"+a)}else e.$Message.success("刷新青龙授权Token成功！")}))},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(e){var a=JSON.parse(JSON.stringify(t.EditQLPanelModel.Data));a.Address=a.HttpType+a.Address,Object(r["e"])(a).then((function(e){e&&(t.$Message.success(t.EditQLPanelModel.Title+"成功！"),t.EditQLPanelModel.Show=!1,t.loadQLPanels())}))}}))},handleCancel:function(){this.EditQLPanelModel.Show=!1},editQLPanel:function(e){e>-1?(this.EditQLPanelModel.Title="修改青龙面板",this.EditQLPanelModel.Data=JSON.parse(JSON.stringify(this.QLPanelData[e])),this.EditQLPanelModel.Data.Address.indexOf("https://")>-1?this.EditQLPanelModel.Data.HttpType="https://":this.EditQLPanelModel.Data.HttpType="http://",this.EditQLPanelModel.Data.Address=this.EditQLPanelModel.Data.Address.replace(this.EditQLPanelModel.Data.HttpType,"")):this.EditQLPanelModel.Title="添加青龙面板",this.EditQLPanelModel.Show=!0},delete:function(e){var t=this;this.$Modal.confirm({title:"删除确认",content:"确定删除该容器吗？操作不可逆。",okText:"是的，老子要删除",cancelText:"算了，不删了",closable:!0,onOk:function(){Object(r["a"])(t.QLPanelData[e].Id).then((function(e){t.loadQLPanels()}))}})},exportData:function(e){1===e&&this.$refs.selection.exportCsv({filename:"青龙面板数据"})},loadQLPanels:function(){var e=this;Object(r["b"])().then((function(t){e.QLPanelData=t}))}},mounted:function(){this.loadQLPanels()}},o=i,s=a("2877"),d=Object(s["a"])(o,n,l,!1,null,null,null);t["default"]=d.exports}}]);