"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[45],{816942:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var i=t(292551),r=t(87363),a=t(862569),n=t(959659),o=t(263286),l=t(791949),u=t(327676),d=t(466918),c=t(74423),w=t(750179),g=t(137107),f=t(360507),m=t(59072),p=t(133682),v=t(713120),y=t(4462),b=t(481040);function x(){return(x=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}const j=({businessEncid:e,locale:s,reviewControllerProps:t,writeAReviewWidgetProps:j})=>{const{loading:h,showEditor:_}=(0,d.ZK)({businessEncid:e,locale:s}),D=(0,u.NZ)(),[B,E]=(0,r.useState)(null),[O,P]=(0,r.useState)(!1),[Z,z]=(0,r.useState)(!1),A=(0,c.useTransition)(Boolean(B),{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0)"},leave:{opacity:0,transform:"translateX(-100%)"},key:B?B.id:null,delay:200,onStart:()=>{z(!0)},onRest:()=>{z(!1)}}),L=e=>{e.encid||P(!0),E({id:e.encid??"",userId:e.userEncid,business:{id:e.businessEncid,name:e.businessName,alias:e.businessAlias},user:e.userPassport,comment:{text:e.text.replace(/\n/g,"<br>"),language:(0,g.TB)(s).languageCode},localizedDate:(0,f.Z)(new Date,"L/d/yyyy"),rating:e.rating,tags:null,photos:[],lightboxMediaItems:[],photosUrl:"",totalPhotos:0,feedback:{counts:{useful:0,funny:0,cool:0},userFeedback:{useful:!1,funny:!1,cool:!1},voterText:""},businessOwnerReplies:null,appreciatedBy:null,previousReviews:[],isUpdated:!1,localizedDateVisited:null})};if(h)return(0,b.jsx)(d.j7,{uniqueKey:"review-feed-war-editor-loadable-shimmer"});if(O&&B)return A(((e,s)=>s&&(0,b.jsx)(n.W2,{borderBottom:!0,paddingBottom:3,overflow:Z?"hidden":null},(0,b.jsx)(c.animated.div,{style:e},(0,b.jsx)(y.Z,{comment:B.comment,localizedDate:B.localizedDate,localizedDateVisited:B.localizedDateVisited,rating:B.rating,user:B.user})))));if(B)return A(((e,s)=>s&&(0,b.jsx)(n.W2,{borderBottom:!0,overflow:Z?"hidden":null},(0,b.jsx)(n.W2,{marginBottom:4},(0,b.jsx)(l.ZP,{type:"success"},(0,b.jsx)(i.Trans,{id:(0,o.ag)("Your review for %{0} is now live",{0:B.business.name}).toString()}))),(0,b.jsx)(n.W2,null,(0,b.jsx)(n.W2,{marginBottom:3},(0,b.jsx)(w.X6,{level:4},(0,o.ag)("That was fun. Let’s write another review!"))),(0,b.jsx)(m.Z,{source:"ynra-review-feed-war-editor",suggestionsPerPage:4,narrow:!0})),(0,b.jsx)(c.animated.div,{style:e},(0,b.jsx)(v.Z,x({},t,{reviews:[B]}))))));if(_){if("review_feed"===D("yelp.www.biz_details.war_inline_editor.display"))return(0,b.jsx)(d.Uc,{businessEncid:e,reviewOrigin:"writeareview-inline-biz-editor",onCompleteReview:L,locale:s})}return(0,b.jsx)(p.Z,x({},j,{warUrl:new a.Z(j.warUrl).replaceQueryParam("source","review-feed-war-widget")}))}}}]);
//# sourceMappingURL=components-ReviewFeedWarEditor.yji-5d2877bc2a36215d3e0e.chunk.js.map