"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[5903],{916775:(e,s,n)=>{n.r(s),n.d(s,{default:()=>v});n(87363);var o=n(269233),t=n(263286),i=n(46169),r=n(744635),d=n(785645),a=n(481040);const c=d.ZP`
    query GetNotRecommendedReviewsProps($BizEncId: String) {
        business(encid: $BizEncId) {
            reviewCount
            notRecommendedReviewCount
        }
    }
`,u=({businessId:e})=>{const{loading:s,error:n,data:t}=(0,r.aM)(c,{variables:{BizEncId:e}});if(s)return null;if(n)throw n;return(0,a.jsx)(o.FE,{allNotRecommendedReviewsUrl:`/not_recommended_reviews/${e}`,hasNoRecommendedReviews:0===t.business.reviewCount,notRecommendedReviewsCount:t.business.notRecommendedReviewCount})};function l(){return(l=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const v=e=>(0,a.jsx)(i.Z,{title:(0,t.ag)("Recommended Reviews")},(0,a.jsx)(o.Rq,l({},e.staticReviewFeedProps,e.reviewFeedQueryProps,{locale:e.locale,onUpdateHistory:e.onUpdateHistory})),(0,a.jsx)(u,{businessId:e.businessId}))}}]);
//# sourceMappingURL=components-Reviews.yji-fe906856420964a1e96c.chunk.js.map