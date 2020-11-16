(this.webpackJsonpphoneb5=this.webpackJsonpphoneb5||[]).push([[0],{15:function(t,e,n){t.exports=n(29)},20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(20),n(5)),i=n(6),l=n(9),u=n(8),m=(n(21),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"findContactByName",value:function(){var t=document.getElementById("filter").value.toLowerCase();if(t){var e=this.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));this.props.showFilteredContacts(e)}else this.props.setDefaultContacts()}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Find contacts by name"),r.a.createElement("input",{className:"filter-form",id:"filter",onChange:function(){return t.findContactByName()}}))}}]),n}(a.Component)),d=n(34),h=n(33),f=n(32),p=(n(22),function(t){var e=t.contacts,n=t.removeContact;return r.a.createElement(d.a,{style:{marginTop:"1rem",width:"340px"}},r.a.createElement(h.a,{className:"todo-list"},r.a.createElement("ul",{class:"list-group"},e.map((function(t){var a=t.name,o=t.number,c=t.id;return r.a.createElement(f.a,{key:c,timeout:500,classNames:"item"},r.a.createElement("li",{class:"list-group-item endS"},a," : ",o,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return n(e,c)}},"\xd7")))})))))}),b=n(4),v=n.n(b),E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={numberS:"",showErr:!1,name:"",before:{opacity:0,display:"block",marginLeft:"350px",width:"250px",transition:"4s",background:"red",borderRadius:"5px",textAlign:"center"},after:{opacity:1,display:"block",marginLeft:"0px",width:"250px",transition:"2s",background:"red",borderRadius:"5px",color:"white",textAlign:"center"}},t.numberC=function(e){var n=e.target.value;t.setState({numberS:n})},t}return Object(i.a)(n,[{key:"addContact",value:function(){var t=this,e=document.getElementById("name").value,n=this.props.contacts;if(n.some((function(t){return t.name===e})))return this.setState({showErr:!0,name:e}),void setTimeout((function(){t.setState({showErr:!1,name:e})}),4e3);n.push({id:v()(),name:e,number:this.state.numberS}),this.props.updateContacts(n)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"border"},r.a.createElement("div",{style:this.state.showErr?this.state.after:this.state.before},this.state.name," is already in contacts."),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Name"),r.a.createElement("input",{type:"text",class:"form-control",id:"name"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Number"),r.a.createElement("input",{type:"text",class:"form-control",id:"number",placeholder:"Enter number...",onChange:this.numberC,value:this.state.numberS})),r.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:function(){return t.addContact()}},"Add contacts"))}}]),n}(a.Component),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",name:"",number:"",anim:{marginLeft:"-300px"}},t.contacts=[],t.updateContacts=function(e,n){var a=function(t){return t.id!==n};t.contacts=n?t.contacts.filter((function(t){return a(t)})):e,t.setState({contacts:n?e.filter((function(t){return a(t)})):e}),localStorage.setItem("contacts",JSON.stringify(t.contacts))},t.setDefaultContacts=function(){return t.setState({contacts:t.contacts})},t.showFilteredContacts=function(e){return t.setState({contacts:e})},t.removeContact=function(e,n){return t.updateContacts(e,n)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({anim:{marginLeft:"0px",transition:"500ms"}})}),700);var e=JSON.parse(localStorage.getItem("contacts"));e&&0!==e.length||(e=[{id:v()(),name:"Rosie Simpson",number:"459-12-56"},{id:v()(),name:"Hermione Kline",number:"443-89-12"},{id:v()(),name:"Eden Clements",number:"645-17-79"},{id:v()(),name:"Annie Copeland",number:"227-91-26"}]),this.contacts=e,this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.anim;return r.a.createElement("main",null,r.a.createElement("div",{style:{width:"340px",overflow:"hidden"}},r.a.createElement("h1",{style:t},"Phonebook")),r.a.createElement(E,{updateContacts:this.updateContacts,contacts:this.state.contacts}),this.contacts.length>0&&r.a.createElement(m,{setDefaultContacts:this.setDefaultContacts,showFilteredContacts:this.showFilteredContacts,contacts:this.contacts}),r.a.createElement(p,{contacts:this.state.contacts,removeContact:this.removeContact}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.2e80d141.chunk.js.map