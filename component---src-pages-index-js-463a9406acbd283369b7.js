(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("dI71"),r=n("q1tI"),i=n.n(r),l=n("Bl7J"),u=n("vrFN");var c=function(e,t,n){if(0===e&&0===t)return 0;if(e&&t){if(e+t>3)return 0;if(e>1||t>1)return 1.75}return 2*(e+t)*n-n},o=n("xOJY"),m=n.n(o).a.siteDescription,s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={cornQuantity:0,geeseQuantity:0,totalPrice:0},t.handleInputChange=function(e){if("corn-quantity"===e.target.name){var n=Number(e.target.value);t.setState({cornQuantity:n})}else if("geese-quantity"===e.target.name){var a=Number(e.target.value);t.setState({geeseQuantity:a})}},t.handleSubmit=function(e){e.preventDefault();var n=c(t.state.cornQuantity,t.state.geeseQuantity,.25);t.setState({totalPrice:n})},t}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement(l.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("p",{id:"description"},m),i.a.createElement("form",{id:"calculatorForm",onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"corn-quantity"},"Amount of Corn: "),i.a.createElement("input",{type:"number",min:"0",id:"corn-quantity",name:"corn-quantity",onChange:this.handleInputChange,placeholder:"0"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"geese-quantity"},"Amount of Geese: "),i.a.createElement("input",{type:"number",min:"0",id:"geese-quantity",name:"geese-quantity",onChange:this.handleInputChange,placeholder:"0"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("input",{id:"calculate",type:"submit",value:"Get Price"})),i.a.createElement("p",{id:"price-p"},"Price: £",i.a.createElement("span",{id:"price-span"},this.state.totalPrice)))},t}(i.a.Component)},xOJY:function(e,t){e.exports={siteTitle:"Corn Calculator",siteDescription:""}}}]);
//# sourceMappingURL=component---src-pages-index-js-463a9406acbd283369b7.js.map