(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),r=a.n(i),l=(a(16),a(17),a(8)),s=a(5),c=a(6),m=a(1),u=a(10),d=a(9),h=(a(18),a(7)),p=function(e){var t=e.items,a=t.map((function(a){return o.a.createElement("div",{className:"list",key:t.key},o.a.createElement("p",null,o.a.createElement("input",{className:"list-input",type:"text",id:a.key,value:a.text,onChange:function(t){e.setUpdate(t.target.value,a.key)}}),o.a.createElement("span",null,o.a.createElement("svg",{className:"icon",class:"bi bi-trash",color:"#e74c3c",width:"1.7em",height:"1.7em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){e.deleteItem(a.key)}},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})))))}));return o.a.createElement("div",{className:"todo-list"},o.a.createElement(h.a,{duration:200,easing:"ease-in-out"},a))},v=(a(4),a(19),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).todoInputHandle=function(e){n.setState({todoList:{text:e.target.value,key:e.target.value}})},n.formOnSubmitHandler=function(e){e.preventDefault();var t=n.state.todoList;if(""!==t.text){var a=[].concat(Object(l.a)(n.state.items),[t]);n.setState({items:a,todoList:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.setUpdate=function(e,t){var a=n.state.items;a.map((function(a){a.key===t&&(a.text=e)})),n.setState({items:a})},n.state={items:[],todoList:{text:"",key:""}},n.todoInputHandle=n.todoInputHandle.bind(Object(m.a)(n)),n.formOnSubmitHandler=n.formOnSubmitHandler.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n.setUpdate=n.setUpdate.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"",action:"",onSubmit:this.formOnSubmitHandler},o.a.createElement("input",{className:"todo-input",type:"text",placeholder:"Enter Text Here",value:this.state.todoList.text,onChange:this.todoInputHandle}),o.a.createElement("button",{className:"add-btn"},"ADD")),o.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(n.Component));var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TODO APP"),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.0e736aaa.chunk.js.map