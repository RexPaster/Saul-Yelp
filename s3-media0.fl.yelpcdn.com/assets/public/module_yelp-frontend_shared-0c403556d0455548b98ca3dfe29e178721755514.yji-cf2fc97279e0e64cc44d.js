(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[6700],{713540:e=>{e.exports={tabNav:"tabNav__09f24__mHDU2",tab:"tab__09f24__GpuDI",isSelected:"isSelected__09f24__UtsEL",tabLabel:"tabLabel__09f24__eqf5d",tabCount:"tabCount__09f24__wDlt3","tab--no-outline":"tab--no-outline__09f24__lK1Of",tabNavItem:"tabNavItem__09f24__j68Hv",dropdown:"dropdown__09f24__gQJOV","dropdown-option":"dropdown-option__09f24__C21mB","dropdown-option-inner":"dropdown-option-inner__09f24__mIvol",tabNavContainer:"tabNavContainer__09f24__J3In1",hideOverflow:"hideOverflow__09f24__aK6oe",tabNavFull:"tabNavFull__09f24__bbttA",tabNavCentered:"tabNavCentered__09f24__O0Pf5"}},61115:e=>{e.exports={tabNav:"tabNav__09f24__tlJV2",tab:"tab__09f24__imSyi",isSelected:"isSelected__09f24__pMTBJ",tabLabel:"tabLabel__09f24__sDhmz",showUnderline:"showUnderline__09f24__yJart","tab--header":"tab--header__09f24__zPIFr","tab--no-padding-left":"tab--no-padding-left__09f24__zpk95","tab--multi-level":"tab--multi-level__09f24__lZnD9","tab--no-outline":"tab--no-outline__09f24__acEB0","tab--section":"tab--section__09f24__ymqEB",tabNavItem:"tabNavItem__09f24__Ho4Ki",dropdown:"dropdown__09f24__rxNTw","dropdown-option":"dropdown-option__09f24__P8d64","dropdown-option-inner":"dropdown-option-inner__09f24__mWrmn",tabNavContainer:"tabNavContainer__09f24__i9BLv",hideOverflow:"hideOverflow__09f24__ZSSbR",tabNavFull:"tabNavFull__09f24__gIIRw",tabNavCentered:"tabNavCentered__09f24__BBqal",tabUnderline:"tabUnderline__09f24__MycN9","tabUnderline--rounded":"tabUnderline--rounded__09f24__Hu4vC"}},482004:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(87363);var s=n(959659),l=n(387137),i=n(896311),o=n(20568),a=n(61115),r=n.n(a),d=n(481040);const c=({label:e,title:t,tooltipText:n,subText:a})=>(0,d.jsx)(l.ZC,{className:r().tabLabel,title:t||("string"==typeof e?e:null)},e,n&&(0,d.jsx)(s.W2,{display:"inline-block",paddingLeft:.5},(0,d.jsx)(o.DY,{tooltipText:n},(0,d.jsx)(i.Z,{color:"currentColor"}))),a&&(0,d.jsx)(s.W2,{display:"block"},a));c.defaultProps={subText:null,title:void 0,tooltipText:null};const u=c},942158:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(87363);var s=n(387137),l=n(713540),i=n.n(l),o=n(481040);const a=({label:e,title:t})=>(0,o.jsx)(s.ZC,{className:i().tabLabel,title:t||e},e);a.defaultProps={title:void 0};const r=a},180102:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var s=n(87363),l=n(897855),i=n.n(l),o=n(646242),a=n(387137),r=n(959659),d=n(750179),c=n(61115),u=n.n(c),p=n(481040);const h=({count:e})=>(0,p.jsx)(r.W2,{display:"inline-block",paddingLeft:.5,className:u().tabCount,title:`(${e})`},"(",e,")");var f=n(482004),b=n(176017);const _=({notification:e})=>(0,p.jsx)(r.W2,{display:"inline-block",paddingLeft:.5,className:u().tabNotification},(0,p.jsx)(b.ZP,{color:"red-dark",text:e}));var v=n(1580),x=n(862939),m=n(713540),y=n.n(m);const C=({count:e})=>(0,p.jsx)(r.Qf,{display:"inline-block",paddingLeft:"half",className:y().tabCount,title:`(${e})`},"(",e,")");var g=n(942158);const w=({notification:e})=>(0,p.jsx)(r.Qf,{display:"inline-block",paddingLeft:"half",className:y().tabNotification},(0,p.jsx)(b.n0,{color:"red-dark",text:e})),T=e=>{const t=s.useRef(null);s.useEffect((()=>{e.focusOnSelected&&!e.isInitialState&&e.selected&&t.current&&t.current.focus()}),[e.focusOnSelected,e.isInitialState,e.selected]),s.useEffect((()=>{t.current&&"function"==typeof e.setRef&&e.setRef(t.current)}),[t,e,e.setRef]);const n=e.href?a.A:a.ZC;return(0,p.jsx)(n,{className:i()(y().tab,y().tabNavItem,{[y().isSelected]:e.selected,[y().showUnderline]:!e.mouseMode,[y()["tab--no-outline"]]:e.mouseMode}),onClick:e.onClick,href:e.href,tabIndex:e.forceTabIndex||e.selected?0:-1,tagRef:t,role:"tab"},(0,p.jsx)(d.WX,{inline:!0},(0,p.jsx)(g.Z,{label:e.label,title:e.title}),(l=e.notification,o=e.count,null!==l?(0,p.jsx)(w,{notification:l}):null!==o?(0,p.jsx)(C,{count:o}):null)));var l,o};T.defaultProps={children:null,href:null,selected:!1,notification:null,count:null,onClick:()=>{},mouseMode:!1,forceTabIndex:!1,title:void 0,setRef:void 0,type:"section",icon:void 0,isInitialState:!0,focusOnSelected:!0,subText:null,tooltipText:null};const j=T,O=e=>{const t=s.useRef(null),[n,l]=s.useState(!e.selected),o=s.useCallback((()=>{e.selected&&(0,x.Z)(e.underlineRef,t)}),[e.selected,e.underlineRef]);s.useEffect((()=>{e.focusOnSelected&&!e.isInitialState&&e.selected&&t.current&&t.current.focus()}),[e.focusOnSelected,e.isInitialState,e.selected]),s.useEffect((()=>{t.current&&"function"==typeof e.setRef&&e.setRef(t.current)}),[t,e,e.setRef]),s.useEffect((()=>{e.underlineRef&&e.underlineRef.current&&t.current&&!n&&((0,x.Z)(e.underlineRef,t,!0),setTimeout((()=>{l(!0)}),v.Z))}),[e.underlineRef,t,n]),s.useEffect((()=>{n&&o()}),[o,n,e.selected]),s.useEffect((()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o))),[o]);const c=e.href?a.A:a.ZC,b=e.icon,m=e.subText?"multi-level":e.type;return(0,p.jsx)(c,{className:i()(u().tab,u().tabNavItem,u()[`tab--${m}`],{[u().isSelected]:e.selected,[u().showUnderline]:!e.mouseMode||!n,[u()["tab--no-outline"]]:e.mouseMode}),onClick:e.onClick,href:e.href,tabIndex:e.forceTabIndex||e.selected?0:-1,tagRef:t,role:"tab"},b?(0,p.jsx)(r.W2,{display:"inline-block",paddingRight:.5},(0,p.jsx)(b,{color:"currentColor"})):null,(0,p.jsx)(d.xv,{inline:!0,size:"large",color:"inherit",weight:"semibold"},(0,p.jsx)(f.Z,{label:e.label,title:e.title,tooltipText:e.tooltipText,subText:e.subText}),(y=e.notification,C=e.count,null!==y?(0,p.jsx)(_,{notification:y}):null!==C?(0,p.jsx)(h,{count:C}):null)));var y,C},S={children:null,href:null,selected:!1,notification:null,count:null,onClick:()=>{},mouseMode:!1,forceTabIndex:!1,title:void 0,subText:null,tooltipText:null,underlineRef:void 0,setRef:void 0,type:"section",icon:void 0,isInitialState:!0,focusOnSelected:!0};O.defaultProps=S;const N=e=>s.useContext(o.default).v2_enabled?(0,p.jsx)(O,e):(0,p.jsx)(j,e);N.defaultProps=S;const R=N},882181:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var s=n(87363),l=n(897855),i=n.n(l),o=n(959659),a=n(646242),r=n(61115),d=n.n(r),c=n(939711),u=n(387137),p=n(379082),h=n(750179),f=n(942158),b=n(713540),_=n.n(b),v=n(481040);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const m=({label:e,value:t,handleOptionSelected:n})=>(0,v.jsx)(u.Li,{className:_()["dropdown-option"],role:"presentation"},(0,v.jsx)(h.RI,{role:"option",handleClick:s=>{s.preventDefault(),n(e,t)}},(0,v.jsx)(o.Qf,{className:_()["dropdown-option-inner"],paddingLeft:2,paddingRight:2,paddingTop:"half",paddingBottom:"half",overflow:"hidden",nowrap:!0,aria:{role:"presentation"}},e)));class y extends s.Component{constructor(e){super(e),x(this,"container",null),x(this,"menuContainer",null),x(this,"tabContainer",null),x(this,"toggleDropdown",(()=>{this.setState((e=>({isOpen:!e.isOpen})))})),x(this,"handleOptionSelect",((e,t)=>{this.props.selectOption(e,t)})),x(this,"handleClickOutside",(()=>{this.setState({isOpen:!1})})),x(this,"handleKeyPress",(e=>{" "===e.key||"Spacebar"===e.key||"Enter"===e.key&&this.tabContainer===document.activeElement?this.toggleDropdown():"Escape"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key?this.setState({isOpen:!1}):"ArrowDown"===e.key?(this.focusNextTab(),e.preventDefault()):"ArrowUp"===e.key&&(this.focusPreviousTab(),e.preventDefault())})),x(this,"handleTabKey",(e=>{if("Tab"===e.key&&this.menuContainer){const e=this.menuContainer.querySelectorAll("li a");Array.prototype.slice.call(e).map((e=>e===document.activeElement)).indexOf(!0)>=0||document.activeElement===this.tabContainer||this.setState({isOpen:!1})}})),x(this,"getLabel",(()=>{if(this.props.selectedIndex<0||!this.hasChildren())return this.props.placeholder;return s.Children.toArray(this.props.children)[this.props.selectedIndex].props.label})),x(this,"setMenuRef",(e=>{this.menuContainer=e})),x(this,"setTabRef",(e=>{this.tabContainer=e})),this.state={isOpen:!1},this.handleKeyPress=this.handleKeyPress.bind(this),this.handleTabKey=this.handleTabKey.bind(this)}componentDidMount(){document.addEventListener("keyup",this.handleTabKey)}componentWillUnmount(){document.removeEventListener("keyup",this.handleTabKey)}incrementFocusedTab(e){if(this.state.isOpen&&this.menuContainer){const t=this.menuContainer.querySelectorAll("li a");let n,s;t.forEach(((e,t)=>{document.activeElement===e&&(n=t)})),s=void 0===n?e>0?0:t.length-1:(n+t.length+e)%t.length,t[s].focus()}}focusNextTab(){this.incrementFocusedTab(1)}focusPreviousTab(){this.incrementFocusedTab(-1)}hasChildren(){return s.Children.count(this.props.children)>0}render(){return(0,v.jsx)(o.Qf,{tagRef:this.props.tagRef},(0,v.jsx)(u.ZC,{className:i()(_().tabNavItem,_().tab,_()[`tab--${this.props.type}`],{[_()["tab--no-outline"]]:this.props.mouseMode,[_().hideOverflow]:this.hasChildren(),[_().isSelected]:this.props.selectedIndex>=0}),onClick:this.toggleDropdown,onKeyDown:this.handleKeyPress,tabIndex:0,"aria-haspopup":"menu","aria-expanded":this.state.isOpen,"aria-label":this.props.placeholder,role:"button",tagRef:this.setTabRef},(0,v.jsx)(c.Z,{onClickAway:this.handleClickOutside},(0,v.jsx)(h.WX,{inline:!0},(0,v.jsx)(f.Z,{label:this.getLabel()})),(0,v.jsx)(p.Z,{color:"currentColor"}),this.state.isOpen&&(0,v.jsx)(u.Ul,{"aria-label":this.props.placeholder,className:_().dropdown,tagRef:this.setMenuRef,role:"menu"},s.Children.map(this.props.children,((e,t)=>(0,v.jsx)(m,{label:e.props.label,value:`${t}`,handleOptionSelected:()=>this.handleOptionSelect(e,t)})))))))}}const C=y;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const w=({childArray:e,children:t,mouseMode:n,overflowDropdown:l,selectedTabIndex:i,setSelectedTabIndex:a,setVisibleTabCount:r,type:d,underlineRef:c,visibleTabCount:u,...p})=>{const h=s.useRef(null),f=s.useRef(null);s.useEffect((()=>{const e=()=>{if(h.current&&f.current){const e=h.current.clientWidth-f.current.clientWidth,t=Array.prototype.slice.call(h.current.childNodes);let n=0;const s=t.findIndex((t=>(n+=Math.ceil(t.clientWidth),n>e)));s!==u&&s>-1&&r(s)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[r,u]);const b=u!==e.length;return(0,v.jsx)(o.Qf,g({tagRef:h},p),t,l?(0,v.jsx)(o.Qf,{style:{pointerEvents:b?"auto":"none",visibility:b?"visible":"hidden"}},(0,v.jsx)(C,{mouseMode:n,placeholder:l,selectedIndex:i-u,selectOption:(e,t)=>a(u+t),tagRef:f,type:d},e.slice(u))):null)};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const j=({centered:e,children:t,disableContentPadding:n,focusTabOnExternallySelected:l,full:a,onTabSelected:r,overflowDropdown:d,selected:c,tabHeadingAlignment:u,type:p})=>{const[h,f]=s.useState(!0),[b,x]=s.useState(!1),[m,y]=s.useState(!0),[C,g]=s.useState(c),[j,O]=s.useState(s.Children.count(t)),S=s.Children.toArray(t).filter((e=>!!e)),N=s.useRef(null),R=s.useCallback(((e,t=!0)=>{const n=r(S[e],e);return!1!==n&&(m!==t&&y(t),g(e),h&&f(!1)),n}),[r,S,h]);s.useEffect((()=>{c!==C&&R(c,l)}),[c]);const k=s.useMemo((()=>S.slice(0,j).map(((e,t)=>s.cloneElement(e,{focusOnSelected:m,isInitialState:h,mouseMode:b,onClick:()=>R(t),selected:C===t,type:p,underlineRef:N})))),[S,m,h,b,C,R,p,j]),I=d?w:o.Qf;return(0,v.jsx)(s.Fragment,null,(0,v.jsx)(o.Qf,{borderBottom:!0,className:_().tabNavContainer,display:a||e?"block":"inline-block"},(0,v.jsx)(I,T({className:i()(_().tabNav,{[_().tabNavFull]:a},{[_().tabNavCentered]:e}),onKeyDown:e=>{"ArrowLeft"===e.key&&R(0===C?j-1:C-1),"ArrowRight"===e.key&&R(C>=j-1?0:C+1),b&&x(!1)},onMouseMove:()=>{b||x(!0)},role:"tablist",textAlign:u},d?{childArray:S,mouseMode:b,overflowDropdown:d,selectedTabIndex:C,setSelectedTabIndex:R,setVisibleTabCount:O,type:p,underlineRef:N,visibleTabCount:j}:void 0),k)),(0,v.jsx)(o.Qf,{aria:{role:"tabpanel"},className:_().tabNavContent,paddingTop:n?0:1},S[C].props.children))};j.defaultProps={centered:!1,children:[],disableContentPadding:!1,focusTabOnExternallySelected:!0,full:!1,onTabSelected:()=>{},overflowDropdown:null,selected:0,tabHeadingAlignment:"center",type:"section"};const O=j;var S=n(397222),N=n(992991),R=n(482004),k=n(862939);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const E=({label:e,value:t,handleOptionSelected:n})=>(0,v.jsx)(S.sN,{onClick:s=>{s.preventDefault(),n(e,t)},text:e,type:"button"});class A extends s.Component{constructor(e){super(e),I(this,"container",null),I(this,"menuContainer",null),I(this,"tabContainer",null),I(this,"toggleDropdown",(()=>{this.setState((e=>({isOpen:!e.isOpen})))})),I(this,"handleOptionSelect",((e,t)=>{this.props.selectOption(e,t)})),I(this,"handleClickOutside",(()=>{this.setState({isOpen:!1})})),I(this,"handleKeyPress",(e=>{" "===e.key||"Spacebar"===e.key||"Enter"===e.key&&this.tabContainer===document.activeElement?this.toggleDropdown():"Escape"===e.key||"ArrowLeft"===e.key||"ArrowRight"===e.key?this.setState({isOpen:!1}):"ArrowDown"===e.key?(this.focusNextTab(),e.preventDefault()):"ArrowUp"===e.key&&(this.focusPreviousTab(),e.preventDefault())})),I(this,"handleTabKey",(e=>{if("Tab"===e.key&&this.menuContainer){const e=this.menuContainer.querySelectorAll("button");Array.prototype.slice.call(e).map((e=>e===document.activeElement)).indexOf(!0)>=0||document.activeElement===this.tabContainer||this.setState({isOpen:!1})}})),I(this,"getLabel",(()=>{if(this.props.selectedIndex<0||!this.hasChildren())return this.props.placeholder;return s.Children.toArray(this.props.children)[this.props.selectedIndex].props.label})),I(this,"setMenuRef",(e=>{this.menuContainer=e})),I(this,"setTabRef",(e=>{this.tabContainer=e})),this.state={isOpen:!1},this.handleKeyPress=this.handleKeyPress.bind(this),this.handleTabKey=this.handleTabKey.bind(this)}componentDidMount(){document.addEventListener("keyup",this.handleTabKey)}componentDidUpdate(e){this.props.selectedIndex>=0&&this.props.selectedIndex!==e.selectedIndex&&(0,k.Z)(this.props.underlineRef,{current:this.tabContainer})}componentWillUnmount(){document.removeEventListener("keyup",this.handleTabKey)}incrementFocusedTab(e){if(this.state.isOpen&&this.menuContainer){const t=this.menuContainer.querySelectorAll("button");let n,s;t.forEach(((e,t)=>{document.activeElement===e&&(n=t)})),s=void 0===n?e>0?0:t.length-1:(n+t.length+e)%t.length,t[s].focus()}}focusNextTab(){this.incrementFocusedTab(1)}focusPreviousTab(){this.incrementFocusedTab(-1)}hasChildren(){return s.Children.count(this.props.children)>0}render(){return(0,v.jsx)(o.W2,{tagRef:this.props.tagRef},(0,v.jsx)(u.ZC,{className:i()(d().tabNavItem,d().tab,d()[`tab--${this.props.type}`],{[d()["tab--no-outline"]]:this.props.mouseMode,[d().isSelected]:this.props.selectedIndex>=0}),onClick:this.toggleDropdown,onKeyDown:this.handleKeyPress,tabIndex:0,"aria-haspopup":"menu","aria-expanded":this.state.isOpen,"aria-label":this.props.placeholder,role:"button",tagRef:this.setTabRef},(0,v.jsx)(c.Z,{onClickAway:this.handleClickOutside},(0,v.jsx)(h.xv,{color:"inherit",inline:!0,size:"large",weight:"semibold"},(0,v.jsx)(R.Z,{label:this.getLabel()})),(0,v.jsx)(N.Z,{color:"currentColor"}),this.state.isOpen&&(0,v.jsx)(S.ZP,{aria:{"aria-label":this.props.placeholder},className:d().dropdown,tagRef:this.setMenuRef},s.Children.map(this.props.children,((e,t)=>(0,v.jsx)(E,{label:e.props.label,value:`${t}`,handleOptionSelected:()=>this.handleOptionSelect(e,t)})))))))}}I(A,"defaultProps",{underlineRef:void 0});const D=e=>s.useContext(a.default).v2_enabled?(0,v.jsx)(A,e):(0,v.jsx)(C,e);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const P=({childArray:e,children:t,mouseMode:n,overflowDropdown:l,selectedTabIndex:i,setSelectedTabIndex:a,setVisibleTabCount:r,type:d,underlineRef:c,visibleTabCount:u,...p})=>{const h=s.useRef(null),f=s.useRef(null);s.useEffect((()=>{const e=()=>{if(h.current&&f.current){const e=h.current.clientWidth-f.current.clientWidth,t=Array.prototype.slice.call(h.current.childNodes);let n=0;const s=t.findIndex((t=>(n+=Math.ceil(t.clientWidth),n>e)));s!==u&&s>-1&&r(s)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[r,u]);const b=u!==e.length;return(0,v.jsx)(o.W2,L({tagRef:h},p),t,l?(0,v.jsx)(o.W2,{style:{pointerEvents:b?"auto":"none",visibility:b?"visible":"hidden"}},(0,v.jsx)(D,{mouseMode:n,placeholder:l,selectedIndex:i-u,selectOption:(e,t)=>a(u+t),tagRef:f,type:d,underlineRef:c},e.slice(u))):null)};P.defaultProps={underlineRef:void 0};const M=P;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const K=({centered:e,children:t,disableContentPadding:n,focusTabOnExternallySelected:l,full:a,onTabSelected:r,overflowDropdown:c,selected:u,tabHeadingAlignment:p,type:h})=>{const[f,b]=s.useState(!0),[_,x]=s.useState(!1),[m,y]=s.useState(!0),[C,g]=s.useState(u),[w,T]=s.useState(s.Children.count(t)),j=s.Children.toArray(t).filter((e=>!!e)),O=s.useRef(null),S=s.useCallback(((e,t=!0)=>{const n=r(j[e],e);return!1!==n&&(m!==t&&y(t),g(e),f&&b(!1)),n}),[r,j,f]);s.useEffect((()=>{u!==C&&S(u,l)}),[u]);const N=s.useMemo((()=>j.slice(0,w).map(((e,t)=>s.cloneElement(e,{focusOnSelected:m,isInitialState:f,mouseMode:_,onClick:()=>S(t),selected:C===t,type:h,underlineRef:O})))),[j,m,f,_,C,S,h,w]),R=c?M:o.W2;return(0,v.jsx)(s.Fragment,null,(0,v.jsx)(o.W2,{className:d().tabNavContainer,display:a||e?"block":"inline-block"},(0,v.jsx)(R,Z({className:i()(d().tabNav,{[d().tabNavFull]:a},{[d().tabNavCentered]:e}),onKeyDown:e=>{"ArrowLeft"===e.key&&S(0===C?w-1:C-1),"ArrowRight"===e.key&&S(C>=w-1?0:C+1),_&&x(!1)},onMouseMove:()=>{_||x(!0)},role:"tablist",textAlign:p},c?{childArray:j,mouseMode:_,overflowDropdown:c,selectedTabIndex:C,setSelectedTabIndex:S,setVisibleTabCount:T,type:h,underlineRef:O,visibleTabCount:w}:void 0),N),(0,v.jsx)(o.W2,{className:i()(d().tabUnderline,{[d()["tabUnderline--rounded"]]:"section"===h}),role:"presentation",tagRef:O})),(0,v.jsx)(o.W2,{aria:{role:"tabpanel"},className:d().tabNavContent,paddingTop:n?0:1},j[C].props.children))},W={centered:!1,children:[],disableContentPadding:!1,focusTabOnExternallySelected:!0,full:!1,onTabSelected:()=>{},overflowDropdown:null,selected:0,tabHeadingAlignment:"center",type:"section"};K.defaultProps=W;const U=e=>s.useContext(a.default).v2_enabled?(0,v.jsx)(K,e):(0,v.jsx)(O,e);U.defaultProps=W;const F=U},1580:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=200},862939:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(87363);var s=n(1580);const l=(e,t,n=!1)=>{if(e&&e.current&&t&&t.current){const l=t.current,i=e.current;n&&(i.style.opacity="0",setTimeout((()=>{i.style.opacity="1"}),s.Z)),i.style.width=`${l.getBoundingClientRect().width}px`,i.style.transform=`translateX(${l.offsetLeft}px)`}}}}]);
//# sourceMappingURL=module_yelp-frontend_shared-0c403556d0455548b98ca3dfe29e178721755514.yji-cf2fc97279e0e64cc44d.js.map