var y=Object.defineProperty;var n=(e,t)=>y(e,"name",{value:t,configurable:!0});import{R as h,r as _}from"./index.d84dc5e2.js";import{s as m}from"./styled-components.browser.esm.495df637.js";import{j as i,a as u}from"./jsx-runtime.c8bff8aa.js";const S=m.div`
  background-color: #fff;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${e=>e.sidebar?"0":"-100%"};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`,z=m.div`
  margin-top: 100px;
`;var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=h.createContext&&h.createContext(g),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},o.apply(this,arguments)},C=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(r[a[c]]=e[a[c]]);return r};function b(e){return e&&e.map(function(t,r){return h.createElement(t.tag,o({key:r},t.attr),b(t.child))})}n(b,"Tree2Element");function l(e){return function(t){return i(O,{...o({attr:o({},e.attr)},t),children:b(e.child)})}}n(l,"GenIcon");function O(e){var t=n(function(r){var a=e.attr,c=e.size,f=e.title,x=C(e,["attr","size","title"]),p=c||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),u("svg",{...o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,x,{className:s,style:o(o({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),children:[f&&i("title",{children:f}),e.children]})},"elem");return v!==void 0?i(v.Consumer,{children:function(r){return t(r)}}):t(g)}n(O,"IconBase");function w(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(e)}n(w,"FaChartBar");function T(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}n(T,"FaEnvelope");function I(e){return l({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}n(I,"FaHome");function V(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"}}]})(e)}n(V,"FaUserAlt");function E(e){return l({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}}]})(e)}n(E,"FaRegCalendarAlt");const R=m.div`
  display: flex;
  align-items: center;
  background-color: #fff; 
  font-size: 20px;
  color: #7f7f7f;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    /* background-color: black; */
    color: #ff9109;
  }
`,d=n(({Icon:e,Text:t})=>u(R,{children:[i(e,{}),t]}),"SidebarItem");try{sidebaritem.displayName="sidebaritem",sidebaritem.__docgenInfo={description:"",displayName:"sidebaritem",props:{Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"any"}},Text:{defaultValue:null,description:"",name:"Text",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Sidebaritem/sidebaritem.tsx#sidebaritem"]={docgenInfo:sidebaritem.__docgenInfo,name:"sidebaritem",path:"src/components/Sidebaritem/sidebaritem.tsx#sidebaritem"})}catch{}const A=n(({active:e})=>{const[t,r]=_.exports.useState(!0);return i(S,{sidebar:r,children:u(z,{children:[i(d,{Icon:I,Text:"Dashboard"}),i(d,{Icon:w,Text:"Equipe externa"}),i(d,{Icon:V,Text:"Clientes"}),i(d,{Icon:T,Text:"Relat\xF3rio"}),i(d,{Icon:E,Text:"Sair"})]})})},"Sidebar"),k=A;try{sidebar.displayName="sidebar",sidebar.__docgenInfo={description:"",displayName:"sidebar",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"any"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Sidebar/sidebar.tsx#sidebar"]={docgenInfo:sidebar.__docgenInfo,name:"sidebar",path:"src/components/Sidebar/sidebar.tsx#sidebar"})}catch{}export{k as S};
//# sourceMappingURL=sidebar.f9d18b76.js.map
