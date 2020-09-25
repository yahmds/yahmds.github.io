/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/ts/comments.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jazl/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/jazl/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=1)}([function(e,t,n){},function(e,t,n){\"use strict\";n.r(t),n.d(t,\"default\",(function(){return d}));n(0);class o{constructor(e){this.intervals=[{label:\"year\",seconds:31536e3},{label:\"month\",seconds:2592e3},{label:\"day\",seconds:86400},{label:\"hour\",seconds:3600},{label:\"minute\",seconds:60},{label:\"second\",seconds:1}],\"string\"==typeof e&&(e=new Date(e)),this.date=e}ago(){let e=Math.floor((Date.now()-this.date.getTime())/1e3),t=this.intervals.find(t=>t.seconds<e)||this.intervals[-1],n=Math.floor(e/t.seconds);return`${n} ${t.label}${1!==n?\"s\":\"\"} ago`}}class r{constructor(e,t){this.ghClientID=\"\",this.serverURL=\"\",this.ghAccessTokenLocalStorageKey=\"GH_ACCESS_TOKEN\",this.ghClientID=e,this.serverURL=t,this.ghAccessTokenLocalStorageKey=this.ghAccessTokenLocalStorageKey,this._handleLoginRedirect()}login(){window.location.href=`https://github.com/login/oauth/authorize?client_id=${this.ghClientID}&redirect_uri=${window.location.href}&scope=public_repo`}logout(){localStorage.removeItem(this.ghAccessTokenLocalStorageKey),document.location.reload()}isLoggedIn(){return!!this.accessToken}get accessToken(){return localStorage.getItem(this.ghAccessTokenLocalStorageKey)}_handleLoginRedirect(){let e=new URLSearchParams(window.location.search).get(\"code\");e&&fetch(this.serverURL+\"/access_tokens/fetch\",{method:\"POST\",mode:\"cors\",headers:{Accept:\"application/json\",\"Content-Type\":\"application/json\"},body:JSON.stringify({code:e})}).then(e=>e.json()).then(e=>{localStorage.setItem(this.ghAccessTokenLocalStorageKey,e.access_token),window.location.href=window.location.href.split(\"?\")[0]})}}var i=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((o=o.apply(e,t||[])).next())}))};class s{constructor(e,t,n){this.serverURL=\"\",this.accessToken=\"\",this.issueID=\"\",this.serverURL=e,this.accessToken=t,this.issueID=n}all(){return i(this,void 0,void 0,(function*(){return(yield fetch(`${this.serverURL}/issues/${this.issueID}/comments`,{headers:{Accept:\"application/json\"}})).json()}))}create(e){return i(this,void 0,void 0,(function*(){return yield fetch(`${this.serverURL}/issues/${this.issueID}/comments`,{method:\"POST\",mode:\"cors\",headers:{Accept:\"application/json\",\"Content-Type\":\"application/json\",Authorization:\"Bearer \"+this.accessToken},body:JSON.stringify({content:e})})}))}}var c={\"\":[\"<em>\",\"</em>\"],_:[\"<strong>\",\"</strong>\"],\"*\":[\"<strong>\",\"</strong>\"],\"~\":[\"<s>\",\"</s>\"],\"\\n\":[\"<br />\"],\" \":[\"<br />\"],\"-\":[\"<hr />\"]};function a(e){return e.replace(RegExp(\"^\"+(e.match(/^(\\t| )+/)||\"\")[0],\"gm\"),\"\")}function l(e){return(e+\"\").replace(/\"/g,\"&quot;\").replace(/</g,\"&lt;\").replace(/>/g,\"&gt;\")}class d{constructor(e,t,n){let o=document.getElementById(n).value;this.ghLoginService=new r(e,t),this.commentDataService=new s(t,this.ghLoginService.accessToken,o)}render(){this._renderEditor(),this._loadButtonClickEvents(),this._renderComments()}_renderEditor(){let e=`\\n      <label id=\"jazl__editor-header\" for=\"jazl__editor\">\\n        ${this._getCurrentLogInButton()}\\n      </label>\\n      <textarea\\n                 id=\"jazl__editor\"\\n                 name=\"\"\\n                 placeholder=\"Join the discussion...\"\\n                 onfocus=\"this.placeholder = ''\"\\n                 onblur=\"this.placeholder = 'Join the Discussion ...'\"></textarea>\\n\\n      <input type=\"button\" id=\"jazl__comment-button\" value=\"Submit\">\\n    `,t=document.createElement(\"div\");t.setAttribute(\"id\",\"jazl__editor-container\"),t.innerHTML=e,document.getElementById(\"comments\").appendChild(t),this.ghLoginService.isLoggedIn()?(document.getElementById(\"jazl__editor\").disabled=!1,document.getElementById(\"jazl__comment-button\").disabled=!1):(document.getElementById(\"jazl__editor\").disabled=!0,document.getElementById(\"jazl__comment-button\").disabled=!0)}_getCurrentLogInButton(){return this.ghLoginService.isLoggedIn()?'<a href=\"javascript:void(0)\" id=\"jazl__logout-button\">Logout</a>':'Login via <a href=\"javascript:void(0)\" id=\"jazl__login-button\">GitHub</a>'}_loadButtonClickEvents(){document.getElementById(\"jazl__comment-button\").onclick=()=>{let e=document.getElementById(\"jazl__editor\").value;this.commentDataService.create(e).then(()=>{document.getElementById(\"jazl__editor\").value=\"\",this._renderComments()})},this.ghLoginService.isLoggedIn()?document.getElementById(\"jazl__logout-button\").onclick=()=>{this.ghLoginService.logout()}:document.getElementById(\"jazl__login-button\").onclick=()=>{this.ghLoginService.login()}}_renderComments(){this.commentDataService.all().then(e=>{let t=e.repository.issue.comments.edges;[...document.getElementsByClassName(\"jazl__comment\")].forEach(e=>{e.parentElement.remove()}),t.forEach(e=>{let t=e.node,n=function e(t,n){var o,r,i,s,d,u=/((?:^|\\n+)(?:\\n---+|\\* \\*(?: \\*)+)\\n)|(?:^``` *(\\w*)\\n([\\s\\S]*?)\\n```$)|((?:(?:^|\\n+)(?:\\t|  {2,}).+)+\\n*)|((?:(?:^|\\n)([>*+-]|\\d+\\.)\\s+.*)+)|(?:!\\[([^\\]]*?)\\]\\(([^)]+?)\\))|(\\[)|(\\](?:\\(([^)]+?)\\))?)|(?:(?:^|\\n+)([^\\s].*)\\n(-{3,}|={3,})(?:\\n+|$))|(?:(?:^|\\n+)(#{1,6})\\s*(.+)(?:\\n+|$))|(?:`([^`].*?)`)|(  \\n\\n*|\\n{2,}|__|\\*\\*|[_*]|~~)/gm,h=[],g=\"\",m=n||{},p=0;function f(e){var t=c[e[1]||\"\"],n=h[h.length-1]==e;return t?t[1]?(n?h.pop():h.push(e),t[0|n]):t[0]:e}function _(){for(var e=\"\";h.length;)e+=f(h[h.length-1]);return e}for(t=t.replace(/^\\[(.+?)\\]:\\s*(.+)$/gm,(function(e,t,n){return m[t.toLowerCase()]=n,\"\"})).replace(/^\\n+|\\n+$/g,\"\");i=u.exec(t);)r=t.substring(p,i.index),p=u.lastIndex,o=i[0],r.match(/[^\\\\](\\\\\\\\)*\\\\$/)||((d=i[3]||i[4])?o='<pre class=\"code '+(i[4]?\"poetry\":i[2].toLowerCase())+'\"><code'+(i[2]?' class=\"language-'+i[2].toLowerCase()+'\"':\"\")+\">\"+a(l(d).replace(/^\\n+|\\n+$/g,\"\"))+\"</code></pre>\":(d=i[6])?(d.match(/\\./)&&(i[5]=i[5].replace(/^\\d+/gm,\"\")),s=e(a(i[5].replace(/^\\s*[>*+.-]/gm,\"\"))),\">\"==d?d=\"blockquote\":(d=d.match(/\\./)?\"ol\":\"ul\",s=s.replace(/^(.*)(\\n|$)/gm,\"<li>$1</li>\")),o=\"<\"+d+\">\"+s+\"</\"+d+\">\"):i[8]?o='<img src=\"'+l(i[8])+'\" alt=\"'+l(i[7])+'\">':i[10]?(g=g.replace(\"<a>\",'<a href=\"'+l(i[11]||m[r.toLowerCase()])+'\">'),o=_()+\"</a>\"):i[9]?o=\"<a>\":i[12]||i[14]?o=\"<\"+(d=\"h\"+(i[14]?i[14].length:i[13]>\"=\"?1:2))+\">\"+e(i[12]||i[15],m)+\"</\"+d+\">\":i[16]?o=\"<code>\"+l(i[16])+\"</code>\":(i[17]||i[1])&&(o=f(i[17]||\"--\"))),g+=r,g+=o;return(g+t.substring(p)+_()).replace(/^\\n+|\\n+$/g,\"\")}(t.body),r=new o(t.createdAt).ago(),i=t.author.login,s=t.author.avatarUrl,d=t.author.url,u=`\\n        <div class=\"jazl__comment\">\\n          <div class=\"jazl__comment-header\">\\n            <a href=\"${d}\">\\n              <img src=\"${s}\" alt=\"\" width=\"40\" height=\"40\">\\n            </a>\\n\\n            &nbsp;\\n\\n            <a href=\"${d}\"><b>${i}</b></a>&nbsp;\\n            commented ${r}\\n          </div>\\n\\n          <div class=\"jazl__comment-body\">\\n            <span>\\n              ${n}\\n            </span>\\n          </div>\\n        </div>\\n      `,h=document.createElement(\"div\");h.innerHTML=u,document.getElementById(\"comments\").appendChild(h)})})}}}])}));\n\n//# sourceURL=webpack:///./node_modules/jazl/dist/index.js?");

/***/ }),

/***/ "./node_modules/jazl/dist/jazl.css":
/*!*****************************************!*\
  !*** ./node_modules/jazl/dist/jazl.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/jazl/dist/jazl.css?");

/***/ }),

/***/ "./static/ts/comments.ts":
/*!*******************************!*\
  !*** ./static/ts/comments.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jazl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jazl */ \"./node_modules/jazl/dist/index.js\");\n/* harmony import */ var jazl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jazl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jazl_dist_jazl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jazl/dist/jazl.css */ \"./node_modules/jazl/dist/jazl.css\");\n/* harmony import */ var jazl_dist_jazl_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jazl_dist_jazl_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nnew jazl__WEBPACK_IMPORTED_MODULE_0___default.a('fe4931bc81e99ec2522f', 'https://jazl-server.herokuapp.com', 'issueId').render();\n\n\n//# sourceURL=webpack:///./static/ts/comments.ts?");

/***/ })

/******/ });