"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[5147],{467058:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c});t(87363);var l=t(744635),n=t(785645),a=t(876775),s=t(46169),r=t(481040);const o=n.ZP`
    query GetBizPageConfigurableAlerts($BizEncId: String) {
        business(encid: $BizEncId) {
            bizPageConfigurableAlerts {
                actionUrl
                actionText
                alertType
                description
                subtitle
                title
            }
        }
    }
`,c=({businessId:e})=>{const{loading:i,error:t,data:n}=(0,l.aM)(o,{variables:{BizEncId:e}});if(i)return null;if(t)throw t;if(!n.business.bizPageConfigurableAlerts.length)return null;const c=n.business.bizPageConfigurableAlerts.map((e=>({action:e.actionUrl&&e.actionText?{actionText:e.actionText,actionUrl:e.actionUrl}:null,alertType:e.alertType,description:e.description,subtitle:e.subtitle,title:e.title})));return(0,r.jsx)(s.Z,null,(0,r.jsx)(a.Z,{bizPageConfigurableAlerts:c}))}},876775:(e,i,t)=>{t.d(i,{Z:()=>f});var l=t(87363),n=t(647145),a=t(791949),s=t(686835),r=t(341957),o=t(959659),c=t(750179),u=t(646242),g=t(451259),b=t.n(g),p=t(752204),d=t.n(p),x=t(481040);const y=({action:e,title:i,alertType:t,description:n,subtitle:g})=>{const p=l.useContext(u.default),y=p.v2_enabled?d():b();return(0,x.jsx)(l.Fragment,null,(0,x.jsx)(a.ZP,{type:t,priority:"high"},(0,x.jsx)(s.gg,{grid:!0,layoutStack:"small",verticalAlign:"middle"},(0,x.jsx)(s.ey,null,(0,x.jsx)(o.W2,{display:"inline-block",displaySm:"block"},(0,x.jsx)(c.xv,{bold:!0,className:y["title-spacing"],inline:!0,size:"large"},i)),(0,x.jsx)(o.W2,{display:"inline-block",displaySm:"block"},g&&(0,x.jsx)(c.xv,{bold:!0,className:y[a.mr[t]],inline:!0,size:"large"},g)),n&&(0,x.jsx)(o.W2,{marginTop:1},(0,x.jsx)(c.xv,null,n))),e&&(0,x.jsx)(s.ey,{nowrap:!0},(0,x.jsx)(o.W2,{marginLeft:p.v2_enabled?2:3,marginLeftSm:0,marginTopSm:2},(0,x.jsx)(r.zx,{href:e.actionUrl,tagType:"link",type:"secondary-white"},e.actionText))))))};function j(){return(j=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}const f=({bizPageConfigurableAlerts:e})=>(0,x.jsx)(n.aV,{useLegacyMargin:!0,noFinalSpacing:!0,type:"block"},e.map((e=>(0,x.jsx)(y,j({key:e.title},e)))))}}]);
//# sourceMappingURL=components-BizPageConfigurableAlertsGQL.yji-cbc8ca6b71e3ccdfc049.chunk.js.map