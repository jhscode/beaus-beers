(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(10),r=n.n(s),c=(n(17),n(6)),i=n.n(c),l=n(7),u=n(1),p=n(2),d=n(4),m=n(3),h=n(5),g=function(){return o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-inverse",style:{backgroundColor:"#512b1b"}},o.a.createElement("a",{className:"navbar-brand",href:"#"},o.a.createElement("span",{"data-toggle":"tooltip","data-placement":"top",title:"Beaus Bears"},o.a.createElement("img",{className:"logo-custom d-inline-block align-center",width:"75px",height:"75px",alt:""})),o.a.createElement("span",{style:{paddingLeft:"15px"}},"\xa0"),o.a.createElement("span",{className:"title-custom align-center"},"Beaus"))))},f=function(){return o.a.createElement("footer",{className:"container-fluid"},o.a.createElement("p",null,"Copyright Beaus"),o.a.createElement("p",{className:"float-right"},"Top"))},b=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"beer-container"},o.a.createElement("div",{className:"beer-image"},this.props.data.image_thumb_url?o.a.createElement("div",{className:"picture-container"},o.a.createElement("img",{src:this.props.data.image_thumb_url,alt:""})):o.a.createElement("div",null,o.a.createElement("img",{src:"/styles/img/beaus-image.png",alt:""}))),o.a.createElement("p",{className:"beer-name"},this.props.data.name),o.a.createElement("button",{className:"button button-description",onClick:function(){return e.props.showDescButton(e.props.data)}},"Description"),o.a.createElement("button",{className:"button button-stores",onClick:function(){return e.props.goToStoreButton(e.props.id)}},"Stores"))}}]),t}(a.Component),E=function(e){var t=e.hideDescButton,n=e.showDesc,a=e.name,s=e.price,r=e.tasting_notes,c=e.serving_suggestion,i=n?"modal display-block":"modal display-none";return o.a.createElement("div",{className:i},o.a.createElement("section",{className:"modal-main"},o.a.createElement("ul",null,o.a.createElement("li",null,"Name: ",a),o.a.createElement("li",null,"Price: ",s),o.a.createElement("li",null,"Tasting Notes: ",r),o.a.createElement("li",null,"Serving Suggestion: ",c)),o.a.createElement("button",{className:"button button-desc-close",onClick:function(){return t()}},"Close")))},v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).goToStoreButton=function(e){n.props.updateStore(e),n.props.history.push("/store/".concat(e))},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"beerlist-container"},o.a.createElement("ul",{className:"beerlist-list"},this.props.datas.map(function(t){return o.a.createElement(b,{data:t,key:t.id,id:t.id,desc:t.description,showDescButton:e.props.showDescButton,goToStoreButton:e.goToStoreButton})})),o.a.createElement(E,{showDesc:this.props.showDesc,hideDescButton:this.props.hideDescButton,name:this.props.name,price:this.props.price_in_cents,tasting_notes:this.props.tasting_note,serving_suggestion:this.props.serving_suggestion})))}}]),t}(a.Component),w=function(e){return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"store-wrapper"},e.storeDataResults.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("div",{className:"store-container"},"Address: ",t.address_line_1,"Address 2: ",t.address_line_2,"Postal Code: ",t.postal_code,"Telephone: ",t.telephone,o.a.createElement("button",{className:"button button-find-store",onClick:function(){return e.goToMapStore(t.latitude,t.longitude)}},"Find Store")))})),o.a.createElement("button",{className:"button button-load-stores",onClick:function(){return e.loadMoreStores()}},"Load More"))},N=(n(9),"http://lcboapi.com/stores?access_key=".concat("MDpjMmZlNjg4Yy1hZWU3LTExZTgtYmFmYi05ZjgwYTE3NDIwM2Q6aTN4YTZQc0lodXRtdnZneEEyMXRVUDBEU05ScFNJS1NEdFRQ")),_=(a.Component,n(21),"https://lcboapi.com/products?access_key=".concat("MDpjMmZlNjg4Yy1hZWU3LTExZTgtYmFmYi05ZjgwYTE3NDIwM2Q6aTN4YTZQc0lodXRtdnZneEEyMXRVUDBEU05ScFNJS1NEdFRQ")),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={datas:[],storeDataResult:[],nextPage:"",showDesc:!1,showStore:!1,page:null,name:"",price_in_cents:null,tasting_note:"",description:"",productID:"",lat:null,lng:null},n.showDescButton=function(e){var t=e.name,a=e.price_in_cents,o=e.tasting_note,s=e.serving_suggestion;n.setState({showDesc:!0,name:t,price_in_cents:a,tasting_note:o,serving_suggestion:s})},n.hideDescButton=function(){n.setState({showDesc:!1})},n.updateStore=function(e){n.setState({productID:e})},n.updateMap=function(e,t){n.setState({lat:e,lng:t})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"&q=beaus+brewing&per_page=100&where_not=is_discontinued,is_dead&where=is_seasonal"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({datas:n.result});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(g,null),o.a.createElement(v,{datas:this.state.datas,showDesc:this.state.showDesc,showDescButton:this.showDescButton,hideDescButton:this.hideDescButton}),o.a.createElement(f,null))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/beaus-beers",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/beaus-beers","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):k(e)})}}()},9:function(e,t){}},[[11,2,1]]]);
//# sourceMappingURL=main.f4eca41a.chunk.js.map