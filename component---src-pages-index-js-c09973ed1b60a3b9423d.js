(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),l=(n("Wbzz"),n("Bl7J")),c=n("vrFN"),u=n("xOJY"),o=n.n(u),p=(o.a.siteTitle,o.a.siteDescription),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={quantity:0,price:0},t.handleInputChange=function(e){var n=e.target.value;t.setState({quantity:n})},t.handleSubmit=function(e){e.preventDefault();var n=.25*t.state.quantity;t.setState({price:n})},t}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"Home"}),i.a.createElement("p",null,p),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"quantity"},"Amount of Corn: "),i.a.createElement("input",{type:"number",min:"0",id:"quantity",name:"quantity",onChange:this.handleInputChange,placeholder:"0"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{id:"calculate",type:"submit",value:"Get Price"})),i.a.createElement("p",{id:"price-p"},"Price: £",i.a.createElement("span",{id:"price-span"},this.state.price)))},t}(i.a.Component)},xOJY:function(e,t){e.exports={siteTitle:"Corn Calculator",siteDescription:""}}}]);
//# sourceMappingURL=component---src-pages-index-js-c09973ed1b60a3b9423d.js.map