(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{643:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(46),r=i(170),c=i(1),a=i.n(c),s=i(642),l=i(22),o=["name","text"],u=function(e){var t=e.name,i=e.text,c=Object(r.a)(e,o),a=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(l.jsx)("div",{className:"card-header-actions",children:Object(l.jsx)(s.db,Object(n.a)(Object(n.a)({},c),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(l.jsx)("small",{className:"text-muted",children:i||"docs"})}))})},d=a.a.memo(u)},644:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(646);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,r=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,c=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return i}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},645:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}i.d(t,"a",(function(){return n}))},646:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i(645);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(n.a)(e,t):void 0}}},679:function(e,t,i){"use strict";i.r(t);var n=i(644),r=i(1),c=i(642),a=i(643),s=i(22);t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),i=t[0],l=t[1],o=Object(r.useState)([!1,!1]),u=Object(n.a)(o,2),d=u[0],h=u[1],b=Object(r.useState)(1),j=Object(n.a)(b,2),m=j[0],f=j[1],p=Object(r.useState)(!0),O=Object(n.a)(p,2),x=O[0],g=O[1],v=function(e){var t=d.slice();switch(e){case"left":t[0]=!d[0];break;case"right":t[1]=!d[1];break;case"both":t[0]=!d[0],t[1]=!d[1]}h(t)};return Object(s.jsxs)(c.wb,{children:[Object(s.jsxs)(c.u,{xl:"6",children:[Object(s.jsxs)(c.j,{children:[Object(s.jsxs)(c.n,{children:["Collapse",Object(s.jsx)(a.a,{name:"CCollapse"})]}),Object(s.jsx)(c.v,{show:i,children:Object(s.jsxs)(c.k,{children:[Object(s.jsx)("p",{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."}),Object(s.jsx)("p",{children:"Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus. Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu, vehicula sagittis elit leo id nisi."})]})}),Object(s.jsx)(c.l,{children:Object(s.jsx)(c.f,{color:"primary",onClick:function(e){l(!i),e.preventDefault()},className:"mb-1",children:"Toggling button"})})]}),Object(s.jsxs)(c.j,{children:[Object(s.jsxs)(c.n,{children:["Collapse",Object(s.jsx)("small",{children:" multi target"})]}),Object(s.jsxs)(c.k,{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)(c.f,{color:"primary",onClick:function(){v("left")},children:"Left"})," ",Object(s.jsx)(c.f,{color:"primary",onClick:function(){v("right")},children:"Right"})," ",Object(s.jsx)(c.f,{color:"primary",onClick:function(){v("both")},children:"Both"})," "]}),Object(s.jsxs)(c.wb,{children:[Object(s.jsx)(c.u,{children:Object(s.jsx)(c.v,{show:d[0],children:Object(s.jsx)(c.j,{children:Object(s.jsx)(c.k,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})}),Object(s.jsx)(c.u,{className:"col-sm-12 col-md-6",children:Object(s.jsx)(c.v,{show:d[1],children:Object(s.jsx)(c.j,{children:Object(s.jsx)(c.k,{children:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."})})})})]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(c.j,{children:[Object(s.jsxs)(c.n,{children:["Fade",Object(s.jsx)(a.a,{name:"CFade"})]}),Object(s.jsx)(c.k,{children:Object(s.jsx)(c.H,{timeout:300,in:x,tag:"h5",className:"mt-3",children:"This content will fade in and out as the button is pressed..."})}),Object(s.jsx)(c.l,{children:Object(s.jsx)(c.f,{color:"primary",onClick:function(){g(!x)},children:"Toggle Fade"})})]})]}),Object(s.jsx)(c.u,{xl:"6",children:Object(s.jsxs)(c.j,{children:[Object(s.jsxs)(c.n,{children:["Collapse",Object(s.jsx)("small",{children:" accordion"})]}),Object(s.jsx)(c.k,{children:Object(s.jsxs)("div",{id:"accordion",children:[Object(s.jsxs)(c.j,{className:"mb-0",children:[Object(s.jsx)(c.n,{id:"headingOne",children:Object(s.jsx)(c.f,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return f(0===m?null:0)},children:Object(s.jsx)("h5",{className:"m-0 p-0",children:"Collapsible Group Item #1"})})}),Object(s.jsx)(c.v,{show:0===m,children:Object(s.jsx)(c.k,{children:"1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS."})})]}),Object(s.jsxs)(c.j,{className:"mb-0",children:[Object(s.jsx)(c.n,{id:"headingTwo",children:Object(s.jsx)(c.f,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return f(1===m?null:1)},children:Object(s.jsx)("h5",{className:"m-0 p-0",children:"Collapsible Group Item #2"})})}),Object(s.jsx)(c.v,{show:1===m,children:Object(s.jsx)(c.k,{children:"2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS."})})]}),Object(s.jsxs)(c.j,{className:"mb-0",children:[Object(s.jsx)(c.n,{id:"headingThree",children:Object(s.jsx)(c.f,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return f(2===m?null:2)},children:Object(s.jsx)("h5",{className:"m-0 p-0",children:"Collapsible Group Item #3"})})}),Object(s.jsx)(c.v,{show:2===m,children:Object(s.jsx)(c.k,{children:"3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS."})})]})]})})]})})]})}}}]);
//# sourceMappingURL=10.be199b31.chunk.js.map