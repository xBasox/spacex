(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,n,a){e.exports=a(79)},56:function(e,n,a){},61:function(e,n,a){},79:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(39),l=a.n(c),o=(a(56),a(58),a(61),a(49)),s=a(11),i=a(83),u=a(84),m=a(26),h=a(29),d=a(36),p=a(30),f=a(37),g=a(31),E=a(10),b=a.n(E),v=a(45),y=a.n(v),N=a(46),w=a.n(N),_=a(82);function k(e){var n=e.launch,a=n.flight_number,t=n.mission_name,c=n.launch_date_local,l=n.launch_success;return r.a.createElement("div",{className:"card card-body mb-3 mx-auto",style:{width:"60%"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,"Mission:"," ",r.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},t)),r.a.createElement("p",null,"Date: ",r.a.createElement(w.a,{format:"YYYY-MM-DD HH:mm"},c))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(_.a,{to:"/launch/".concat(a),className:"btn btn-secondary"},"Details"))))}function j(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Failure"))}function O(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n      details\n    }\n  }\n"]);return O=function(){return e},e}var x=b()(O()),L=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 my-3"},"Launches"),r.a.createElement(j,null),r.a.createElement(s.Query,{query:x},function(e){var n=e.loading,a=e.error,t=e.data;return n?r.a.createElement("h4",null,"Loading..."):(a&&console.log(a),r.a.createElement(r.a.Fragment,null,t.launches.map(function(e){return r.a.createElement(k,{key:e.flight_number,launch:e})})))}))}}]),n}(t.Component);function S(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      details\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return S=function(){return e},e}var A=b()(S()),D=function(e){function n(){return Object(m.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Query,{query:A,variables:{flight_number:e}},function(e){var n=e.loading,a=e.error,t=e.data;if(n)return r.a.createElement("h4",null,"Loading...");a&&alert(a),console.log(t);var c=t.launch,l=c.mission_name,o=c.flight_number,s=c.launch_year,i=c.launch_success,u=c.details,m=c.rocket,h=m.rocket_name,d=m.rocket_type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-white"},"Mission: ")," ",l),r.a.createElement("h4",{className:"mb-3"},"Short Details"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Flight Number: ",o),r.a.createElement("li",{className:"list-group-item"},"Launch Year: ",s),r.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",i?r.a.createElement("span",{className:"text-success"},"YES"):r.a.createElement("span",{className:"text-danger"},"NO!"))),r.a.createElement("h4",{className:"my-3"},"Rocket Details"),r.a.createElement("ul",{className:"list-group mb-4"},r.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),r.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",d)),r.a.createElement("h4",{className:"my-3"},"Details"),r.a.createElement("ul",{className:"list-group mb-4"},r.a.createElement("li",{className:"list-group-item"},u)),r.a.createElement(_.a,{to:"/",className:"list-group-item btn-secondary"},"Back"))}))}}]),n}(t.Component),W=new o.a({uri:"/graphql"});var F=function(){return r.a.createElement(s.ApolloProvider,{client:W},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"SpaceX"),r.a.createElement(u.a,{exact:!0,path:"/",component:L}),r.a.createElement(u.a,{exact:!0,path:"/launch/:flight_number",component:D}))))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");R?(function(e,n){fetch(e).then(function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Y(n,e)})}}()}},[[51,2,1]]]);
//# sourceMappingURL=main.83d4566f.chunk.js.map