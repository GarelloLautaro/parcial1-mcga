(this["webpackJsonpparcial1-mcga-lihuel-almada"]=this["webpackJsonpparcial1-mcga-lihuel-almada"]||[]).push([[0],{22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),i=(a(27),a(19)),o=a(21),u=a(6),l=a(7),d=a(9),m=a(8),h=(a(28),a(29),a(11)),p=a(1),b=(a(30),a(31),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homeCard"},r.a.createElement("div",null,"Nombre: ",e.name),r.a.createElement("div",null,"A\xf1o: ",e.year),r.a.createElement("button",{className:"button",onClick:e.changeEdit},"editar informacion")))}),E=(a(32),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={name:"",year:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"homeForm"},r.a.createElement("input",{type:"text",name:"name",placeholder:"",onChange:this.props.setValues,defaultValue:this.props.name}),r.a.createElement("input",{type:"text",name:"year",placeholder:"",onChange:this.props.setValues,defaultValue:this.props.year}),r.a.createElement("button",{className:"button",onClick:this.props.changeEdit},"Guardar informacion"))}}]),a}(r.a.Component)),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={buttonName1:"Agregar",buttonName2:"Agregar contador"},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"student"},"Alumno"),!1===this.props.edit?r.a.createElement(b,{name:this.props.name,year:this.props.year,changeEdit:this.props.changeEdit,setValues:this.props.setValues}):r.a.createElement(E,{name:this.props.name,year:this.props.year,changeEdit:this.props.changeEdit,setValues:this.props.setValues}),r.a.createElement(h.b,{to:"/counter"},r.a.createElement("button",{className:"button green"},"Lista de contadores")))}}]),a}(r.a.Component),f=(a(38),a(39),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.e;return r.a.createElement("div",{className:"counterCard"},r.a.createElement("div",null,"ID:",e.id),r.a.createElement("div",null,"Creado por:",e.title),r.a.createElement("div",null,"Actualizado:",e.description),r.a.createElement("button",{className:"buttonCard",onClick:this.props.minusNumberCard.bind(this,e.id)},"-"),e.number,r.a.createElement("button",{className:"buttonCard",onClick:this.props.sumNumberCard.bind(this,e.id)},"+"),r.a.createElement("button",{className:"buttonCard",onClick:this.props.deleteCard.bind(this,e.id)},"Eliminar"))}}]),a}(r.a.Component)),v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"counter"},r.a.createElement("h1",null,"Lista de contadores"),r.a.createElement(h.b,{to:"/home"},r.a.createElement("button",{className:"button"},"Volver")),r.a.createElement("button",{className:"button",onClick:this.props.addCard},"A\xf1adir contador"),this.props.card.map((function(t){return r.a.createElement(f,{e:t,key:t.id,deleteCard:e.props.deleteCard,sumNumberCard:e.props.sumNumberCard,minusNumberCard:e.props.minusNumberCard})})))}}]),a}(r.a.Component),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).addCard=function(){n.setState({idCard:n.state.idCard+1});var e={id:n.state.idCard,name:n.state.name,create:"10/20/2020, 8:51:45 PM",update:"10/21/2020, 8:55:57 PM",number:0};n.setState({card:[].concat(Object(o.a)(n.state.card),[e])})},n.deleteCard=function(e){var t=n.state.card.filter((function(t){return t.id!==e}));n.setState({card:t})},n.sumNumberCard=function(e){var t=n.state.card.map((function(t){return t.id===e&&t.number++,t}));n.setState({card:t})},n.minusNumberCard=function(e){var t=n.state.card.map((function(t){return t.id===e&&t.number--,t}));n.setState({card:t})},n.changeEdit=function(){n.setState({name:n.state.name,year:n.state.year,edit:!n.state.edit})},n.setValues=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.state={name:"asd",year:2013,idCard:0,card:[],edit:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(p.a,{to:"/home"}),r.a.createElement(p.b,{exact:!0,path:"/home"},r.a.createElement(C,{name:this.state.name,year:this.state.year,edit:this.state.edit,changeEdit:this.changeEdit,saveValues:this.saveValues,setValues:this.setValues})),r.a.createElement(p.b,{exact:!0,path:"/counter"},r.a.createElement(v,{card:this.state.card,addCard:this.addCard,deleteCard:this.deleteCard,sumNumberCard:this.sumNumberCard,minusNumberCard:this.minusNumberCard}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c4ef0439.chunk.js.map