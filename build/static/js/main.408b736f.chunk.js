(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,n,t){e.exports=t(47)},36:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(17),c=t.n(l),i=(t(36),t(14)),s=t(2),o=t(12),u=t(3),d=t.n(u),m=t(6),p=t(1),f=t(5),h=t.n(f);function g(){var e=Object(p.a)(["\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n"]);return g=function(){return e},e}var b=h.a.div(g());function v(){var e=Object(p.a)(["\n  width: 100%;\n  border: 1px solid black;\n  overflow: auto;\n  .open {\n    height: 25vh;\n  }\n"]);return v=function(){return e},e}var E=h.a.div(v()),y=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GRAPHQL_ENDPOINT||"/graphql",w=function(e){e.currentTarget.querySelector("div").classList.toggle("open")},x=function(e){var n=e.address,t=e.setCurrentRep,l=Object(a.useState)([]),c=Object(s.a)(l,2),i=c[0],o=c[1],u=Object(a.useState)([]),p=Object(s.a)(u,2),f=p[0],h=p[1],g=Object(a.useState)([]),v=Object(s.a)(g,2),x=v[0],j=v[1];return Object(a.useEffect)(function(){var e={address:n};!function(){var n=Object(m.a)(d.a.mark(function n(){var t,a,r;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(y,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n        query Representative($address: String!){\n          representatives(address: $address) {\n            name\n            office\n            division\n          }\n        }\n      ",variables:e})});case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,r=a.data.representatives,o(r.filter(function(e){return e.office.includes("United States")})),h(r.filter(function(e){return e.division.includes("state")&&!e.office.includes("United States")&&!e.division.includes("county")&&!e.division.includes("place")})),j(r.filter(function(e){return e.division.includes("place")||e.division.includes("county")}));case 10:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[n]),r.a.createElement("div",null,r.a.createElement(E,{onClick:function(e){return w(e)}},r.a.createElement("h3",null,"Federal"),r.a.createElement(b,null,r.a.createElement("ul",null,i.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("a",{onClick:function(){return t(e.name)}},e.office," - ",e.name))})))),r.a.createElement(E,{onClick:function(e){return w(e)}},r.a.createElement("h3",null,"State"),r.a.createElement(b,null,r.a.createElement("ul",null,f.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("a",{onClick:function(){return t(e.name)}},e.office," - ",e.name))})))),r.a.createElement(E,{onClick:function(e){return w(e)}},r.a.createElement("h3",null,"Local"),r.a.createElement(b,null,r.a.createElement("ul",null,x.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("a",{onClick:function(){return t(e.name)}},e.office," - ",e.name))})))))};function j(){var e=Object(p.a)(["\n  overflow: auto;\n  width: 65vw;\n  height: 90vh;\n  background-color: rgba(255,255,255, 0.9);\n  box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);\n  margin-right: 1vw;\n  .headshot {\n    max-width: 300px;\n    max-height: 300px;\n  }\n  .header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n  }\n  .header div {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}var O=h.a.div(j());function k(){var e=Object(p.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  img {\n    width: 3rem;\n    height: 3rem;\n  }\n"]);return k=function(){return e},e}var S=h.a.ul(k()),C=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GRAPHQL_ENDPOINT||"/graphql",P=function(e){e.currentTarget.querySelector("div").classList.toggle("open")},$=function(e){var n=e.currentRep,t=e.address,l=Object(a.useState)({}),c=Object(s.a)(l,2),i=c[0],o=c[1];return Object(a.useEffect)(function(){var e={name:n,address:t};!function(){var n=Object(m.a)(d.a.mark(function n(){var t,a,r;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(C,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n      query Representative($address:String!, $name: String!){\n        representative(address: $address, name: $name) {\n          name\n          office\n          party\n          photoUrl\n          proPublicaId\n          news {\n            url\n            title\n            description\n          }\n          bills {\n            short_title\n            summary\n          }\n          committees {\n            name\n            title\n          }\n          channels {\n            type\n            id\n          }\n        }\n      }\n    ",variables:e})});case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,r=a.data.representative,o(r);case 8:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()}),r.a.createElement(O,null,r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:i.photoUrl||"../images/default-user.jpg",className:"headshot"}),r.a.createElement("div",null,r.a.createElement("h2",null,i.name),r.a.createElement("h3",null,i.office),r.a.createElement("h4",null,i.party))),r.a.createElement(E,{onClick:function(e){return P(e)}},r.a.createElement("h4",null,"Contact"),r.a.createElement(b,null,r.a.createElement(S,null,i.channels?i.channels.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"https://".concat(e.type,".com/").concat(e.id)},r.a.createElement("img",{src:"../images/".concat(e.type,".png")}))))}):null))),i.proPublicaId?r.a.createElement(E,{onClick:function(e){return P(e)}},r.a.createElement("h4",null,"Committees"),r.a.createElement(b,null,r.a.createElement("ul",null,i.committees?i.committees.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("div",null,r.a.createElement("h5",null,e.title," - ",e.name)))}):null))):null,i.proPublicaId?r.a.createElement(E,{onClick:function(e){return P(e)}},r.a.createElement("h4",null,"Bills"),r.a.createElement(b,null,r.a.createElement("ul",null,i.bills?i.bills.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("div",null,r.a.createElement("h5",null,e.short_title),r.a.createElement("p",null,e.summary)))}):null))):null,r.a.createElement(E,{onClick:function(e){return P(e)}},r.a.createElement("h4",null,"News"),r.a.createElement(b,null,r.a.createElement("ul",null,i.news?i.news.map(function(e,n){return r.a.createElement("li",{key:n},r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",null,e.description)))}):null))),"Free Vector Art by ",r.a.createElement("a",{href:"https://www.vecteezy.com/"},"Vecteezy"))},N=t(10);function U(){var e=Object(p.a)(["\n  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');\n  width: 100vw;\n  height: 89vh;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow:auto;\n  > div:first-child {\n    width: 30vw;\n    margin-left: 1vw;\n    background-color: rgba(255,255,255, 0.9);\n    box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);\n  }\n"]);return U=function(){return e},e}var A=N.a.div(U()),_=function(e){var n=e.address,t=Object(a.useState)(""),l=Object(s.a)(t,2),c=l[0],i=l[1];return r.a.createElement(A,null,r.a.createElement(x,{address:n,setCurrentRep:i}),c?r.a.createElement($,{currentRep:c,address:n}):null)};function L(){var e=Object(p.a)(["\n  height: 70vh;\n  width: 40vw;\n  padding-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid gray;\n  background-color: rgba(255,255,255, 0.9);\n  box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);\n  label {\n    align-self: flex-start;\n    margin-left: 12%;\n  }\n"]);return L=function(){return e},e}var T=h.a.form(L());function R(){var e=Object(p.a)(["\n  width: 75%;\n  text-align: left;\n  border: none;\n  border-bottom: 1px solid black;\n  font-family: Raleway;\n  font-size: 2rem;\n  background: none;\n"]);return R=function(){return e},e}var M=h.a.input(R()),I=t(18),q=function(e){var n=Object(a.useState)({}),t=Object(s.a)(n,2),r=t[0],l=t[1];return{values:r,setValues:l,handleSubmit:function(n){n.preventDefault(),e()},handleChange:function(e){e.persist(),l(Object(i.a)({},r,Object(I.a)({},e.currentTarget.name,e.currentTarget.value)))}}};function D(){var e=Object(p.a)(["\n  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');\n  width: 100vw;\n  height: 89vh;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return D=function(){return e},e}var J=h.a.div(D());function V(){var e=Object(p.a)(["\n  border-radius: 6px;\n  background-color: rgb(246, 246, 246);\n  border: 1px solid rgb(220, 220, 220);\n  cursor: pointer;\n  font-weight: bold;\n  padding: 12px 48px;\n  margin: 12px;\n  :hover {\n    background-color: rgb(246, 246, 246);\n    background:linear-gradient(to bottom, rgb(246, 246, 246) 5%, rgb(255, 255, 255) 100%);\n  }\n  :active {\n\tposition:relative;\n\ttop:1px;\n  }\n"]);return V=function(){return e},e}var B=h.a.button(V()),G=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GRAPHQL_ENDPOINT||"/graphql",z=function(e){var n=e.props,t=n.history,l=n.setUser,c=n.setLogged,i=Object(a.useState)(!1),o=Object(s.a)(i,2),u=o[0],p=o[1],f=Object(a.useState)(""),h=Object(s.a)(f,2),g=h[0],b=h[1],v=q(function(){var e=Object(m.a)(d.a.mark(function e(){var n,a,r,i,s,o,m,p;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u){e.next=13;break}return n={username:w.username,password:w.password,confirmPassword:w.confirmPassword,email:w.eMail,address:w.address},e.next=5,fetch(G,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\nmutation User ($username: String!, $password: String!, $confirmPassword: String!, $email: String!, $address: String!){\n  register(username: $username, password: $password, confirmPassword: $confirmPassword, email: $email, address: $address){\n    logged\n    message\n    user {\n      id\n      username\n      address\n      verified\n    }\n  }\n}\n",variables:n})});case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,(i=r.data.register).logged?(c(!0),l(i.user),t.push("/home")):b(i.message),e.next=22;break;case 13:return s={username:w.username,password:w.password},e.next=16,fetch(G,{method:"POST",body:JSON.stringify({query:"\nmutation User ($username: String!, $password: String!){\n  login(username: $username, password: $password){\n    message\n    logged\n    user {\n      id\n      username\n      address\n      verified\n    }\n  }\n}\n",variables:s}),headers:{"Content-Type":"application/json"}});case 16:return o=e.sent,e.next=19,o.json();case 19:m=e.sent,(p=m.data.login).logged?(c(!0),l(p.user),t.push("/home")):b(p.message);case 22:e.next=27;break;case 24:throw e.prev=24,e.t0=e.catch(0),new Error(e.t0);case 27:case"end":return e.stop()}},e,null,[[0,24]])}));return function(){return e.apply(this,arguments)}}()),E=v.handleChange,y=v.handleSubmit,w=v.values;return r.a.createElement(J,null,r.a.createElement(T,{onSubmit:y},r.a.createElement("label",null,"Username:"),r.a.createElement(M,{type:"text",name:"username",value:w.username,onChange:E}),r.a.createElement("label",null,"Password:"),r.a.createElement(M,{type:"password",name:"password",value:w.password,onChange:E}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Confirm Password:"),r.a.createElement(M,{type:"password",name:"confirmPassword",value:w.confirmPassword,onChange:E}),r.a.createElement("label",null,"E-Mail:"),r.a.createElement(M,{type:"email",name:"eMail",value:w.eMail,onChange:E}),r.a.createElement("label",null,"Address:"),r.a.createElement(M,{type:"text",name:"address",value:w.address,onChange:E})):null,r.a.createElement("h5",null,g),r.a.createElement(B,{type:"submit"},u?"Register":"Login"),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Already have an account? Login"," ",r.a.createElement("a",{href:"#",onClick:function(){p(!1)}},"here"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Don't have an account? Register"," ",r.a.createElement("a",{href:"#",onClick:function(){p(!0)}},"here")))))};function F(){var e=Object(p.a)(["\n  background-image: linear-gradient(to top, rgba(191, 218, 231, 0.3), rgba(191, 218, 231, 0.3)), url('../images/landing-background.jpg');\n  background-size: cover;\n  width: 100vw;\n  height: 89vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  form {\n    width: 75vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  div {\n    height: 45vh;\n    background-color: rgba(255,255,255, 0.9);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 0px 3px 5px rgba(255,255,255,0.9);\n  }\n"]);return F=function(){return e},e}var H=N.a.div(F()),Q=function(e){var n=e.props,t=n.setAddress,a=n.history,l=q(function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(c.address),a.push("/home");case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),c=l.values,i=l.handleChange,s=l.handleSubmit;return r.a.createElement(H,null,r.a.createElement("div",null,r.a.createElement("h1",null,"MyGovernment"),r.a.createElement("p",null,"Enter your address below to see who represents you"),r.a.createElement("form",{onSubmit:s},r.a.createElement(M,{type:"text",name:"address",value:c.address,onChange:i}),r.a.createElement(B,{type:"submit"},"Search"))))},W=t(11);function K(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 8vh;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  background-color: transparent;\n  a {\n    text-decoration: none;\n  }\n  a:visited {\n    color: black;\n  }\n  a:first-child {\n    font-weight: bold;\n  }\n"]);return K=function(){return e},e}var X=N.a.nav(K()),Y=function(e){var n=e.user,t=e.logged;return r.a.createElement(X,null,r.a.createElement("div",null,r.a.createElement(W.b,{to:"/home"},"MyGovernment")),r.a.createElement("div",null,t?r.a.createElement(W.b,{to:"/account"},n.username):r.a.createElement(W.b,{to:"/auth"},"Login")))},Z=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GRAPHQL_ENDPOINT||"/graphql",ee=function(e){var n=e.props,t=n.user,l=n.setUser,c=n.history,i=n.setLogged,o=function(){var e=Object(m.a)(d.a.mark(function e(){var n,a,r,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t.id,username:v.username,eMail:v.eMail,address:v.address},e.next=3,fetch(Z,{method:"post",body:JSON.stringify({query:"\n  mutation User ($id: String!, $username: String, $eMail: String, $address: String){\n    editUser (id: $id, username: $username, eMail: $eMail, address: $address) {\n      id\n      username\n      eMail\n      address\n      verified\n    }\n  }\n",variables:n}),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,c=r.data.editUser,l(c),g(!1);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(m.a)(d.a.mark(function e(){var n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t.id},e.next=3,fetch(Z,{method:"post",body:JSON.stringify({query:"\n  mutation User ($id: String!){\n    deleteUser (id: $id)\n  }\n",variables:n}),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent.data.deleteUser&&(l({}),i(!1),c.push("/"));case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),p=Object(a.useState)(!1),f=Object(s.a)(p,2),h=f[0],g=f[1],b=q(o),v=b.values,E=b.setValues,y=b.handleChange,w=b.handleSubmit;return Object(a.useEffect)(function(){var e={id:t.id};!function(){var n=Object(m.a)(d.a.mark(function n(){var t,a,r;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Z,{method:"post",body:JSON.stringify({query:"\n  query User ($id: String!) {\n    user (id: $id) {\n      username\n      eMail\n      address\n    }\n  }\n",variables:e}),headers:{"Content-Type":"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,r=a.data.user,E(r);case 8:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[E,t.id]),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:w},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",disabled:!h,name:"username",value:v.username,onChange:y}),r.a.createElement("label",null,"E-Mail:"),r.a.createElement("input",{type:"text",name:"eMail",disabled:!h,value:v.eMail,onChange:y}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{type:"text",name:"address",disabled:!h,value:v.address,onChange:y}),r.a.createElement("button",{type:"submit"},"Submit Changes")),r.a.createElement("button",{onClick:function(){return g(!h)}},"Edit My Account Info"),r.a.createElement("button",{onClick:function(){return u(t.id)}},"Delete My Account"))};function ne(){var e=Object(p.a)(["\n  height: 3vh;\n  width: 100vw;\n  text-align: right;\n"]);return ne=function(){return e},e}var te=N.a.footer(ne()),ae=(t(46),function(e){var n=Object(a.useState)(""),t=Object(s.a)(n,2),l=t[0],c=t[1],u=Object(a.useState)(!1),d=Object(s.a)(u,2),m=d[0],p=d[1],f=Object(a.useState)({}),h=Object(s.a)(f,2),g=h[0],b=h[1];return r.a.createElement("div",{className:"App"},r.a.createElement(Y,{user:g,logged:m}),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/account",render:function(e){return r.a.createElement(ee,{props:Object(i.a)({},e,{user:g,setUser:b,setLogged:p})})}}),r.a.createElement(o.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(_,{address:g.address||l})}}),r.a.createElement(o.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Q,{props:Object(i.a)({},e,{setAddress:c})})}}),r.a.createElement(o.a,{exact:!0,path:"/auth",render:function(e){return r.a.createElement(z,{props:Object(i.a)({},e,{setUser:b,setLogged:p})})}})),r.a.createElement(te,null,"This app is powered by  ",r.a.createElement("a",{href:"https://developers.google.com/civic-information/"},"Google Civic Info API")," ,  ",r.a.createElement("a",{href:"https://www.propublica.org/datastore/api/propublica-congress-api"}," ProPublica Congress API ")," , and ",r.a.createElement("a",{href:"https://newsapi.org/docs/get-started"},"News API")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W.a,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.408b736f.chunk.js.map