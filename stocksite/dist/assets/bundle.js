!function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="assets",t(t.s=3)}([function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=React;o.createClass,t.SkiDayCount=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.submit=a.submit.bind(a),a}return c(t,e),l(t,[{key:"submit",value:function(e){e.preventDefault(),console.log(this.refs),testFunc(this.refs.whodat.value),this.refs.whodat.value=""}},{key:"render",value:function(){return React.createElement("form",{onSubmit:this.submit},React.createElement("input",{id:"lol",ref:"whodat"}),React.createElement("button",null,"Submit"))}}]),t}(React.Component)},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.Statistics=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.calculate=a.calculate.bind(a),a.covariance=a.covariance.bind(a),a.state={data:e.data,statistics:{},statNames:[]},a.NUM_DECIMALS=3,a}return c(t,e),l(t,[{key:"calculate",value:function(){var e={},t=[],a=function(e){return+e.Close},n=void 0;for(var r in this.state.data){e[r]={};this.state.data[r].data;e[r].stddev=d3.deviation(this.state.data[r].data,a),e[r].length=this.state.data[r].data.length,n?e[r].length<n&&(n=e[r].length):n=e[r].length,t.push(r)}console.log("LEngth is "+n),this.minLength=n;for(var c={correlation:[],covariance:[]},l=this.state.data,o=0;o<t.length;o++){c.covariance[o]=[];for(var i=o;i<t.length;i++)c.covariance[o][i]=this.covariance(l[t[o]].data,a,l[t[i]].data,a)}for(var s=0;s<t.length;s++){c.correlation[s]=[];for(var u=s;u<t.length;u++)c.correlation[s][u]=c.covariance[s][u]/(e[t[s]].stddev*e[t[u]].stddev)}for(var f=0,m=0;m<t.length;m++)for(var h=m;h<t.length;h++)if(m==h){var d=this.state.data[t[m]],p=e[t[m]].stddev;f+=d*d*p*p}else{var v=this.state.data[t[m]],b=e[t[m]].stddev,E=this.state.data[t[h]],R=e[t[h]].stddev;f+=2*v*E*b*R}var g={variance:f,stddev:Math.sqrt(f)};this.state.statistics={single:e,matrices:c,names:t,portfolio:g},this.state.statNames=t}},{key:"covariance",value:function(e,t,a,n){for(var r=d3.mean(e,t),c=d3.mean(a,n),l=0,o=0;o<this.minLength;o++)l+=(t(e[o])-r)*(n(a[o])-c);return 1/(this.minLength-1)*l}},{key:"render",value:function(){var e=this;this.state.data=this.props.data;for(var t in this.state.data)!0,console.log(t);this.calculate();var a=this.state.statistics;return React.createElement("div",{className:"stats"},React.createElement("h2",null,"Statistics"),React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Name"),React.createElement("th",null,"Std. Dev."))),React.createElement("tbody",null,this.state.statNames.map(function(t,n){return React.createElement("tr",{key:n},React.createElement("td",null,t),React.createElement("td",null,a.single[t].stddev.toFixed(e.NUM_DECIMALS)))}))),React.createElement("h2",null,"Covariance"),React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null," "),a.names.map(function(e,t){return React.createElement("th",null,e)}))),React.createElement("tbody",null,a.names.map(function(t,n){return React.createElement("tr",null,React.createElement("th",null,t),a.names.map(function(t,r){var c=a.matrices.covariance[n][r];return c&&(c=c.toFixed(e.NUM_DECIMALS)),React.createElement("td",null,c)}))}))),React.createElement("h2",null,"Correlation"),React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null," "),a.names.map(function(e,t){return React.createElement("th",null,e)}))),React.createElement("tbody",null,a.names.map(function(t,n){return React.createElement("tr",null,React.createElement("th",null,t),a.names.map(function(t,r){var c=a.matrices.correlation[n][r];return c&&(c=c.toFixed(e.NUM_DECIMALS)),React.createElement("td",null,c)}))}))),React.createElement("h2",null,"Portfolio"),React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Value"))),React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",null,"Std. Dev."),React.createElement("td",null,a.portfolio.stddev.toFixed(this.NUM_DECIMALS))),React.createElement("tr",null,React.createElement("th",null,"Total Variance"),React.createElement("td",null,a.portfolio.variance.toFixed(this.NUM_DECIMALS))))))}}]),t}(React.Component)},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();t.StockPanel=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));a.rowPreview=a.rowPreview.bind(a),a.state={data:[],weight:0};var c=a;return a.state.weight=e.weight,d3.csv(e.csv,function(e){c.state.data=e,c.setState(c.state)}),a}return c(t,e),l(t,[{key:"rowPreview",value:function(e){if(!e)return void(this.state.data=[]);var t=this;d3.csv(e,function(e){t.state.data=e,t.setState(t.state)})}},{key:"render",value:function(){var e=this.state.data.slice(0,3),t=1;return React.createElement("div",null,React.createElement("div",{className:"panel panel-default"},React.createElement("div",{className:"panel-heading"},React.createElement("b",null,this.props.name)),React.createElement("div",{className:"panel-body"},React.createElement("p",null,"Weight: ",100*this.props.weight,"%"),React.createElement("p",null,"Data preview:"),React.createElement("div",{className:"table-responsive"},React.createElement("table",{className:"table"},React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"Row"),React.createElement("th",null,"Date"),React.createElement("th",null,"Open"),React.createElement("th",null,"High"),React.createElement("th",null,"Low"),React.createElement("th",null,"Close"))),React.createElement("tbody",null,e.map(function(e,a){return React.createElement("tr",{key:a},React.createElement("td",null,t++),React.createElement("td",null,e.Date),React.createElement("td",null,e.Open),React.createElement("td",null,e.High),React.createElement("td",null,e.Low),React.createElement("td",null,e.Close))})))))))}}]),t}(React.Component)},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=(a(0),a(2)),i=a(1),s=React,u=(s.createElement,ReactDOM),f=u.render;window.React=React;var m=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.readCSV=e.readCSV.bind(e),e.addCSV=e.addCSV.bind(e),e.aggregateData=e.aggregateData.bind(e),e.validateInput=e.validateInput.bind(e),e.state={stocks:[],stats:{},validated:!1},e}return c(t,e),l(t,[{key:"readCSV",value:function(e,t){this.rowToHTML;this.state.stocks.push({name:t.name,weight:t.weight,csv:e}),this.setState(this.state)}},{key:"addCSV",value:function(e){e.preventDefault();var t={name:this.refs.stockname.value,csv:this.refs.csvfile,weight:+this.refs.stockweight.value},a=this.refs.csvfile,n=a.files[0];if(n){var r=new FileReader,c=this.readCSV;r.onloadend=function(e){var a=e.target.result;c(a,t)},r.readAsDataURL(n)}this.refs.stockname.value="",this.refs.csvfile.value="",this.refs.stockweight.value=""}},{key:"aggregateData",value:function(){var e={};for(var t in this.refs)this.refs[t]instanceof o.StockPanel&&(e[t]={weight:this.refs[t].state.weight,data:this.refs[t].state.data});this.state.stats=e,this.setState(this.state)}},{key:"validateInput",value:function(){if(console.log("checking"),!this.refs.stockname||!this.refs.csvfile||!this.refs.stockweight)return!1;var e={name:this.refs.stockname.value,csv:this.refs.csvfile,weight:this.refs.stockweight.value};return!(!e.weight||isNaN(e.weight)||+e.weight>1||+e.weight<0)&&(!(!e.name||0==e.name.length)&&(0!=e.csv.files.length&&(console.log("good 2 go"),this.state.validated=!0,this.setState(this.state),!0)))}},{key:"render",value:function(){return React.createElement("div",{className:"container"},React.createElement("h1",null,"Portfolio Calculator"),React.createElement("div",{className:"row",style:{margin:0}},React.createElement("div",{className:"col"},React.createElement("form",{className:"form stock-form",onSubmit:this.addCSV,onChange:""},React.createElement("label",{for:"csvfile"},"Upload a Yahoo! Finance CSV download"),React.createElement("input",{onChange:this.validateInput,ref:"csvfile",id:"csvfile",type:"file",accept:".csv"}),React.createElement("label",{for:"stockname"},"Name"),React.createElement("input",{onChange:this.validateInput,className:"form-control",ref:"stockname",id:"stockname",placeholder:"APPL"}),React.createElement("label",{for:"stockweight"},"Specify portfolio weight (as decimal)"),React.createElement("input",{onChange:this.validateInput,className:"form-control",type:"number",ref:"stockweight",placeholder:"0.30",step:"0.001",id:"stockweight"}),React.createElement("button",{disabled:!this.state.validated,className:"btn btn-info"},"Add")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-8",style:{margin:0}},this.state.stocks.map(function(e,t){return React.createElement(o.StockPanel,{key:t,name:e.name,weight:e.weight,csv:e.csv,ref:e.name})})),React.createElement("div",{className:"col-sm-4",style:{margin:0,textAlign:"center"}},React.createElement("h1",null,"Calculations"),React.createElement("button",{className:"btn btn-primary",onClick:this.aggregateData},"Calculate"),React.createElement(i.Statistics,{data:this.state.stats}))))}}]),t}(React.Component);f(React.createElement(m,null),document.getElementById("react-container"))}]);