(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("dI71"),r=a("q1tI"),o=a.n(r),i=a("Bl7J"),s=a("vrFN");var c=function(e,t,a){if(0===e&&0===t)return.25;if(e&&t){if(e+t>3)return 0;if(e>1||t>1)return 1.75}return 2*(e+t)*a-a};var l=function(e,t){return e&&t&&e+t>3?"Goose eats corn":""};var u=function(e,t){var a=[];if(t&&e)return t+e>3?a:1===t&&1===e?["corn across","farmer back","goose across"]:t<e?["goose across","farmer back","corn across","farmer and goose back","corn across","farmer back","goose across"]:["corn across","farmer back","goose across","farmer and corn back","goose across","farmer back","corn across"];if(t){for(var n=1;n<t;n++)a.push("goose across","farmer back");a.push("goose across")}else if(e){for(var r=1;r<e;r++)a.push("corn across","farmer back");a.push("corn across")}return a},m=a("xOJY");function f(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var g=a.n(m).a.siteDescription,y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={warningMessage:"",tripList:[],startingIndex:0,cornQuantity:0,geeseQuantity:0,totalPrice:0},t.handleInputChange=function(e){if("corn-quantity"===e.target.name){var a=Number(e.target.value);t.setState({cornQuantity:a})}else if("geese-quantity"===e.target.name){var n=Number(e.target.value);t.setState({geeseQuantity:n})}},t.handleSubmit=function(e){e.preventDefault(),t.setState({warningMessage:l(t.state.cornQuantity,t.state.geeseQuantity)});var a=c(t.state.cornQuantity,t.state.geeseQuantity,.25);console.log(t.state.cornQuantity);var n=u(t.state.cornQuantity,t.state.geeseQuantity);console.log(n),t.setState({totalPrice:a,tripList:n})},t.handleButtonClick=function(e){t.setState({startingIndex:t.state.startingIndex+10})},t}return Object(n.a)(t,e),t.prototype.render=function(){for(var e,t="",a=[],n=1,r=f(this.state.tripList);!(e=r()).done;){var c=e.value;a.push(o.a.createElement("li",{key:n},n,". ",c)),n++}var l=o.a.createElement("div",{className:"tripList"},o.a.createElement("ul",null,a));return t=""===this.state.warningMessage?o.a.createElement("div",null,o.a.createElement("p",{id:"price-p"},"Price: £",o.a.createElement("span",{id:"price-span"},this.state.totalPrice)),o.a.createElement("br",null),o.a.createElement("br",null),l):o.a.createElement("p",{className:"warning-p"},"Warning: ",o.a.createElement("span",{id:"warning-span"},this.state.warningMessage)),o.a.createElement(i.a,null,o.a.createElement(s.a,{title:"Home"}),o.a.createElement("p",{id:"description"},g),o.a.createElement("form",{id:"calculatorForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"corn-quantity"},"Amount of Corn: "),o.a.createElement("input",{type:"number",min:"0",id:"corn-quantity",name:"corn-quantity",className:"quantity",onChange:this.handleInputChange,placeholder:"0"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"geese-quantity"},"Amount of Geese: "),o.a.createElement("input",{type:"number",min:"0",id:"geese-quantity",name:"geese-quantity",className:"quantity",onChange:this.handleInputChange,placeholder:"0"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{id:"calculate",type:"submit",value:"Get Price"})),t)},t}(o.a.Component)},xOJY:function(e,t){e.exports={siteTitle:"Corn Calculator",siteDescription:""}}}]);
//# sourceMappingURL=component---src-pages-index-js-7ee62cc6330344a2ac74.js.map