(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(3),r=n.n(s),i=n(4),l=n(5),c=n(8),d=n(7),u=(n(14),function(e){var t=e.goodsList;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{className:"".concat(e.color,"Good"),key:e.id},e.name)})))}),f=n(1),h=n.n(f),m=n(6),p=function(){var e=Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("goods.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={listOfGoods:[],filesIsLoaded:!1},e.handleShowAllGoods=function(){e.setState({filesIsLoaded:!0}),p().then((function(t){e.setState({listOfGoods:t,filesIsLoaded:!1})}))},e.handleShowFiveFirstGoods=function(){e.setState({filesIsLoaded:!0}),p().then((function(t){e.setState({listOfGoods:t.sort((function(e,t){return e.name.localeCompare(t.name)})).slice(0,5),filesIsLoaded:!1})}))},e.handleShowAllRedGoods=function(){e.setState({filesIsLoaded:!0}),p().then((function(t){e.setState({listOfGoods:t.filter((function(e){return"red"===e.color})),filesIsLoaded:!1})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",onClick:this.handleShowAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.handleShowFiveFirstGoods},"Load five first goods"),a.a.createElement("button",{type:"button",onClick:this.handleShowAllRedGoods},"Load red goods"),this.state.filesIsLoaded?"Loading from server":a.a.createElement(u,{goodsList:this.state.listOfGoods}))}}]),n}(o.Component);r.a.render(a.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3190189f.chunk.js.map