webpackJsonp([7],{0:function(e,t,n){(function(e){!function(){var t=n(4),o=n(5),r=n(2),a=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(r)},a)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){S=n.id,$("#operationPanel").hasClass("on")&&$("#operationPanel").removeClass("on"),$("#departmentName").html(n.name)}function c(e,t){var n=5,o=$("#"+t.tId+"_switch"),r=$("#"+t.tId+"_ico");if(o.remove(),r.before(o),t.level>1){var a="<span style='display: inline-block;width:"+n*t.level+"px'></span>";o.before(a)}}function l(e,t){return t.level>0}function u(e,t,n){console.log(n.name)}function d(e,t,n){n||"button"==e.target.tagName.toLowerCase()||0!=$(e.target).parents("a").length?n&&!n.noR&&(H.selectNode(n),m("node",e.clientX,e.clientY)):(H.cancelSelectedNode(),console.log(e.clientX),m("root",e.clientX,e.clientY)),1===n.id||2===n.id?($("#m_check").hide(),$("#m_del").hide()):3===n.id||4===n.id?$("#rMenu").hide():($("#rMenu").show(),$("#m_check").show(),$("#m_del").show())}function s(e,t,n,o){({name:n.name,departmentId:n.id,parentId:n.pId}),console.log("编辑，编辑")}function f(){x&&x.hide(),$("body").unbind("mousedown",b)}function p(){if(f(),H.getSelectedNodes()[0]){var e=H.getSelectedNodes()[0].id;if(2===e)return void alert("次节点不能添加部门");H.addNodes(H.getSelectedNodes()[0],{name:"新增部门"}),$("#rMenu").hide()}else console.log("b")}function m(e,t,n){"root"==e?($("#m_del").hide(),$("#m_check").hide(),$("#m_unCheck").hide()):($("#m_del").show(),$("#m_check").show(),$("#m_unCheck").show()),$("#rMenu").css({top:n+"px",left:t+"px"}).show(),$("body").bind("mousedown",b)}function h(){$("#rMenu").hide();var e=$.fn.zTree.getZTreeObj("treeDemo"),t=e.getSelectedNodes(),n=t[0];return 1===n.id||2===n.id?(alert("此节点不能编辑"),!1):0==t.length?void alert("请先选择一个节点"):void e.editName(n)}function v(){var e=$.fn.zTree.getZTreeObj("treeDemo"),t=e.getSelectedNodes(),n=t[0];return 1===n.id||2===n.id?(alert("此节点不能删除"),!1):0==t.length?void alert("请先选择一个节点"):(e.removeNode(n),void $("#rMenu").hide())}function b(e){"rMenu"==e.target.id||$(e.target).parents("#rMenu").length>0||$("#rMenu").hide()}function y(){var e=[{id:1,pId:0,name:"用户角色管理 1",open:!0},{id:11,pId:1,name:"菜单管理 1-1"},{id:12,pId:1,name:"菜单相亲管理 1-2"},{id:2,pId:0,name:"资源管理 2"},{id:21,pId:2,name:"用户管理 2-1"},{id:22,pId:2,name:"角色管理 2-2"}],t=$("#treeDemo");$.fn.zTree.init(t,z,e),H=$.fn.zTree.getZTreeObj("treeDemo"),T=H,H.getNodeByTId("treeDemo_1"),D=H.getNodes()[0],H.selectNode(D),H.expandNode(D,!0,!0,!0)}function _(e){return{Actions:(0,C.bindActionCreators)({},e)}}var g=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),w=n(1),k=t(w),O=n(10),E=t(O),C=n(13),j=n(17),M=n(11),N=n(7),I=e(N),P=n(18),R=(0,P.BaseStore)({}),T=null,x=$("#rMenu"),D=null,H=null,S=1,z={edit:{enable:!1,editNameSelectAll:!0},view:{showLine:!1,showIcon:!1,selectedMulti:!1,dblClickExpand:l,addDiyDom:c},data:{simpleData:{enable:!0}},callback:{onClick:i,onRightClick:d,onRemoveonRemove:u,onRename:s}};$(document).on("click","#m_add",function(){p()}),$(document).on("click","#m_check",function(){h()}),$(document).on("click","#m_del",function(){v()});var A=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),g(t,[{key:"render",value:function(){return this.props.Actions,k.createElement("div",null,k.createElement(M.AppBody,null,k.createElement(M.Panel,{title:"基于jquery-树插件-ztree 地址:http://www.treejs.cn/v3/demo.php#_111"},k.createElement(M.Row,null,k.createElement(M.Col,{span:"25"},k.createElement("div",{className:"zTreeDemoBackground left"},k.createElement("ul",{id:"treeDemo",className:"ztree"})))))),k.createElement("div",{id:"rMenu"},k.createElement("ul",null,k.createElement("li",{id:"m_add"},"增加部门"),k.createElement("li",{id:"m_del"},"删除部门"),k.createElement("li",{id:"m_check"},"编辑部门"))))}},{key:"componentDidMount",value:function(){this.props.Actions,y()}},{key:"componentWillUnmount",value:function(){}}]),t}(I.default),B=function(e){return{}},X=(0,j.connect)(B,_)(A),Z=document.getElementById("example");E.render(k.createElement(j.Provider,{store:R},k.createElement(X,null)),Z)}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(6);o(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to TreeContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(3)(e))},7:function(e,t,n){(function(e){!function(){var t=n(4),o=n(5),r=n(2),a=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return o.getRootInstances(r)},a)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),u=o(l),d=n(12),s=e(d),f=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return s.default.get("auth_token"),n}return i(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),t}(u.Component);t.default=f}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var o=n(6);o(e,n(1))&&(t=!0);var r=t;r&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(3)(e))}});