(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{58:function(I,g,C){"use strict";C.r(g);var e=C(1),t=C(5),c=C(50),A=C(15);function l(I,g){var C=Object.keys(I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(I);g&&(e=e.filter((function(g){return Object.getOwnPropertyDescriptor(I,g).enumerable}))),C.push.apply(C,e)}return C}function b(I){for(var g=1;g<arguments.length;g++){var C=null!=arguments[g]?arguments[g]:{};g%2?l(Object(C),!0).forEach((function(g){n(I,g,C[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(C)):l(Object(C)).forEach((function(g){Object.defineProperty(I,g,Object.getOwnPropertyDescriptor(C,g))}))}return I}function n(I,g,C){return g in I?Object.defineProperty(I,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):I[g]=C,I}function i(I,g){return function(I){if(Array.isArray(I))return I}(I)||function(I,g){var C=null==I?null:"undefined"!=typeof Symbol&&I[Symbol.iterator]||I["@@iterator"];if(null==C)return;var e,t,c=[],A=!0,l=!1;try{for(C=C.call(I);!(A=(e=C.next()).done)&&(c.push(e.value),!g||c.length!==g);A=!0);}catch(I){l=!0,t=I}finally{try{A||null==C.return||C.return()}finally{if(l)throw t}}return c}(I,g)||function(I,g){if(!I)return;if("string"==typeof I)return a(I,g);var C=Object.prototype.toString.call(I).slice(8,-1);"Object"===C&&I.constructor&&(C=I.constructor.name);if("Map"===C||"Set"===C)return Array.from(I);if("Arguments"===C||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return a(I,g)}(I,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(I,g){(null==g||g>I.length)&&(g=I.length);for(var C=0,e=new Array(g);C<g;C++)e[C]=I[C];return e}var r=function(I){try{var g=I.replace(/[^\da-f]/gi,""),C=parseInt(g,16),e=C%256,t=(C=(C-e)/256)%256;return[(C-t)/256,t,e]}catch(I){return[0,0,0]}},G=function(I){return Math.min(I,255).toString(16).padStart(2,"0").slice(-2)},u=Object.entries(A).map((function(I){var g=i(I,2),C=g[0],e=g[1];return{name:C,hexCode:e,rgb:r(e)}})),o=function(I,g){for(var C=0,e=0;e<3;e++)C+=Math.pow(I[e]-g[e],2);return Math.pow(C,.5)},s={hexCode:"000000",r:0,g:0,b:0},X=Object(t.a)({maxWidth:800,padding:16,margin:"auto",input:{margin:8},".color-box":{height:64,width:64,margin:"16px 16px 0 0",borderRadius:8,border:"1px solid "+A.N700},"input.small":{width:64}},";label:colorFinderStyle;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXJhcnlhLmFudWdyYWhhL1Byb3llay9QcmliYWRpL3V0aWxpdGllcy9zcmMvcm91dGVzL0NvbG9yRmluZGVyL0NvbG9yRmluZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF5QiIsImZpbGUiOiIvVXNlcnMvbmFyYXJ5YS5hbnVncmFoYS9Qcm95ZWsvUHJpYmFkaS91dGlsaXRpZXMvc3JjL3JvdXRlcy9Db2xvckZpbmRlci9Db2xvckZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBONzAwIH0gZnJvbSBcInVuaWZ5LXRva2VuL2J1aWxkL3YyL2NvbG9yc1wiO1xuaW1wb3J0IHsgaGV4VG9EZWMsIGRlY1RvSGV4LCBnZXROZWFyZXN0Q29sb3JzIH0gZnJvbSBcIi4vZW5naW5lXCI7XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gIGhleENvZGU6IFwiMDAwMDAwXCIsXG4gIHI6IDAsXG4gIGc6IDAsXG4gIGI6IDAsXG59O1xuXG5jb25zdCBjb2xvckZpbmRlclN0eWxlID0gY3NzKHtcbiAgbWF4V2lkdGg6IDgwMCxcbiAgcGFkZGluZzogMTYsXG4gIG1hcmdpbjogXCJhdXRvXCIsXG4gIGlucHV0OiB7IG1hcmdpbjogOCB9LFxuICBcIi5jb2xvci1ib3hcIjoge1xuICAgIGhlaWdodDogNjQsXG4gICAgd2lkdGg6IDY0LFxuICAgIG1hcmdpbjogXCIxNnB4IDE2cHggMCAwXCIsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIgKyBONzAwLFxuICB9LFxuICBcImlucHV0LnNtYWxsXCI6IHsgd2lkdGg6IDY0IH0sXG59KTtcblxuY29uc3QgQ29sb3JGaW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7IGluaXRpYWxWYWx1ZXMgfSk7XG4gIGNvbnN0IHsgaGFuZGxlQ2hhbmdlLCB2YWx1ZXMsIHNldEZpZWxkVmFsdWUgfSA9IGZvcm1paztcbiAgY29uc3QgeyBoZXhDb2RlLCByLCBnLCBiIH0gPSB2YWx1ZXM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdIZXhDb2RlID0gZGVjVG9IZXgoW3IsIGcsIGJdKTtcbiAgICBzZXRGaWVsZFZhbHVlKFwiaGV4Q29kZVwiLCBuZXdIZXhDb2RlKTtcbiAgfSwgW3IsIGcsIGIsIHNldEZpZWxkVmFsdWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoZXhDb2RlPy5sZW5ndGggPCA2KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJnYiA9IGhleFRvRGVjKGhleENvZGUpO1xuICAgIHNldEZpZWxkVmFsdWUoXCJyXCIsIHJnYlswXSk7XG4gICAgc2V0RmllbGRWYWx1ZShcImdcIiwgcmdiWzFdKTtcbiAgICBzZXRGaWVsZFZhbHVlKFwiYlwiLCByZ2JbMl0pO1xuICB9LCBbaGV4Q29kZSwgc2V0RmllbGRWYWx1ZV0pO1xuXG4gIGNvbnN0IG5lYXJlc3RDb2xvcnMgPSBnZXROZWFyZXN0Q29sb3JzKGhleENvZGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e2NvbG9yRmluZGVyU3R5bGV9PlxuICAgICAgPGgxPkNvbG9yIEZpbmRlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLWJveFwiXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI1wiICsgaGV4Q29kZSB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8bGFiZWw+SGV4IENvZGU8L2xhYmVsPntcIiBcIn1cbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtoZXhDb2RlfSBuYW1lPVwiaGV4Q29kZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlJHQjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17K3J9XG4gICAgICAgICAgICAgICAgbmFtZT1cInJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17K2d9XG4gICAgICAgICAgICAgICAgbmFtZT1cImdcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17K2J9XG4gICAgICAgICAgICAgICAgbmFtZT1cImJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPk5lYXJlc3QgQ29sb3JzPC9oMj5cbiAgICAgICAgICB7bmVhcmVzdENvbG9ycy5tYXAoKGNvbG9yLCBjb2xvckluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17Y29sb3JJbmRleH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLWJveFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXhDb2RlIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAge2NvbG9yLm5hbWV9IChkaXN0YW5jZToge2NvbG9yLmRpc3RhbmNlLnRvRml4ZWQoMSl9KVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvckZpbmRlcjtcbiJdfQ== */");g.default=function(){var I=Object(c.a)({initialValues:s}),g=I.handleChange,C=I.values,A=I.setFieldValue,l=C.hexCode,n=C.r,i=C.g,a=C.b;Object(e.useEffect)((function(){var I=[n,i,a].map(G).join("");A("hexCode",I)}),[n,i,a,A]),Object(e.useEffect)((function(){if(!((null==l?void 0:l.length)<6)){var I=r(l);A("r",I[0]),A("g",I[1]),A("b",I[2])}}),[l,A]);var m,d=(m=r(l),u.map((function(I){return b(b({},I),{},{distance:o(I.rgb,m)})})).sort((function(I,g){return I.distance-g.distance})).slice(0,5));return Object(t.b)("div",{css:X},Object(t.b)("h1",null,"Color Finder"),Object(t.b)("div",{className:"flex justify-between items-start"},Object(t.b)("div",{className:"flex"},Object(t.b)("div",{className:"color-box",style:{backgroundColor:"#"+l}}),Object(t.b)("div",null,Object(t.b)("div",{className:"flex justify-between"},Object(t.b)("label",null,"Hex Code")," ",Object(t.b)("input",{value:l,name:"hexCode",onChange:g})),Object(t.b)("div",{className:"flex justify-between"},Object(t.b)("label",null,"RGB"),Object(t.b)("input",{className:"small",value:+n,name:"r",onChange:g}),Object(t.b)("input",{className:"small",value:+i,name:"g",onChange:g}),Object(t.b)("input",{className:"small",value:+a,name:"b",onChange:g})))),Object(t.b)("div",null,Object(t.b)("h2",null,"Nearest Colors"),d.map((function(I,g){return Object(t.b)("div",{key:g,className:"flex justify-between"},Object(t.b)("div",{className:"color-box",style:{backgroundColor:I.hexCode}}),I.name," (distance: ",I.distance.toFixed(1),")")})))))}}}]);