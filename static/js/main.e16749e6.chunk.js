(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_sheik_Desktop_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_images_calculator_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_images_title_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_images_github_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_images_reactGreen_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),_Components_keyPad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_Components_screen__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_sheik_Desktop_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),screenText=_useState2[0],changeScreenText=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_sheik_Desktop_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),screenBlink=_useState4[0],changeScreenBlink=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("block"),_useState6=Object(C_Users_sheik_Desktop_React_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),display=_useState6[0],changeDisplay=_useState6[1];function blinkText(e){changeScreenText(e),changeScreenBlink("blink"),navigator.vibrate([350,50,350,50,350]),setTimeout((function(){changeScreenText(""),changeScreenBlink("")}),2e3)}function setScreenText(buttonName){if(navigator.vibrate(100),"="===buttonName)try{var res=eval(screenText);void 0===res?changeScreenText(""):isNaN(res)?blinkText("Math Error"):changeScreenText(res)}catch(err){blinkText("Syntax Error")}else"\u2b05"===buttonName?changeScreenText(screenText.slice(0,-1)):"C"===buttonName?changeScreenText(""):"On/Off"===buttonName?(changeScreenText(""),changeDisplay("block"===display?"none":"block")):changeScreenText("x"===buttonName?screenText+"*":screenText+buttonName)}function onEnterPress(e){"Enter"===e.key&&setScreenText("=")}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"reactBigLogo",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img",{id:"reactBigImg",src:_images_reactGreen_png__WEBPACK_IMPORTED_MODULE_5__.a,alt:"React Logo Background"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"title",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img",{id:"titleImg",src:_images_title_png__WEBPACK_IMPORTED_MODULE_3__.a,alt:""}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a",{href:"https://github.com/Sheikh566",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img",{id:"github",src:_images_github_png__WEBPACK_IMPORTED_MODULE_4__.a,alt:""})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"imgContainer",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img",{id:"img",src:_images_calculator_png__WEBPACK_IMPORTED_MODULE_2__.a,alt:"CalculatorPNG"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"calc",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span",{id:"lightCover",style:{display:"block"===display?"none":"block"}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"screenContainer",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_screen__WEBPACK_IMPORTED_MODULE_7__.a,{display:display,screenText:screenText,blink:screenBlink,changeScreenText:changeScreenText,onEnterPress:onEnterPress})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_keyPad__WEBPACK_IMPORTED_MODULE_6__.a,{setScreenText:setScreenText})]})]})}__webpack_exports__.a=App},function(e,t,_){"use strict";t.a=_.p+"static/media/calculator.577cd075.png"},function(e,t,_){"use strict";t.a=_.p+"static/media/title.b62e6a15.png"},function(e,t,_){"use strict";t.a="data:image/png;base64,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"},function(e,t,_){"use strict";t.a=_.p+"static/media/reactGreen.407853e0.png"},,,,function(e,t,_){"use strict";_.d(t,"a",(function(){return n}));_(1);var r=_(0);function c(e){return Object(r.jsx)("td",{id:e.id,onClick:function(){return e.setScreenText(e.name)},rowSpan:"+"===e.name?2:1,children:e.name})}c.defaultProps={};var a=c;function n(e){var t=[["On/Off","C","\u2b05","="],["7","8","9","x"],["4","5","6","/"],["1","2","3","+"],["0",".","-"]],_=[],c=0;return t.map((function(n){var s="row_"+t.indexOf(n);_.push(Object(r.jsx)("tr",{id:s,children:n.map((function(t){var _="key_"+c++;return Object(r.jsx)(a,{id:_,name:t,setScreenText:e.setScreenText},_)}))},s))})),Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{children:_})})}n.defaultProps={}},function(e,t,_){"use strict";var r=_(10),c=_(11),a=_(15),n=_(12),s=_(1),i=_(0),u=function(e){Object(a.a)(_,e);var t=Object(n.a)(_);function _(){var e;Object(r.a)(this,_);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={blink:e.props.blink},e}return Object(c.a)(_,[{key:"render",value:function(){var e=this,t={fontSize:"Syntax Error"===this.props.screenText?"115px":"125px",textAlign:"Math Error"===this.props.screenText?"center":"right",display:this.props.display};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"text",id:"screen",className:this.props.blink,onChange:function(t){return e.props.changeScreenText(t.target.value)},value:this.props.screenText,style:t,autocomplete:"off",onKeyUp:function(t){return e.props.onEnterPress(t)}}),Object(i.jsxs)("span",{style:{display:this.props.display},children:[Object(i.jsx)("img",{id:"reactLogo",src:"data:image/png;base64,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",alt:"spinning react logo"}),Object(i.jsxs)("marquee",{width:"60%",direction:"right",height:"100px",scrollamount:"10",children:["POWERED BY REACT "," ".repeat(150),"  MADE BY SHEIKH ABDULLAH "," ".repeat(50)]})]})]})}}]),_}(s.Component);t.a=u},,function(e,t,_){"use strict";_.r(t);var r=_(1),c=_.n(r),a=_(4),n=_.n(a),s=(_(21),_(22),_(5)),i=_(0);n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.a,{})}),document.getElementById("root"))},,,,,function(e,t,_){},function(e,t,_){}],[[16,1,2]]]);
//# sourceMappingURL=main.e16749e6.chunk.js.map