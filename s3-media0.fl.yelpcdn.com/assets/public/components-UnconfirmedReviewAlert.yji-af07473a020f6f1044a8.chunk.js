"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[5119],{422428:(e,n,s)=>{s.r(n),s.d(n,{default:()=>g});var i=s(292551),r=(s(87363),s(744635)),o=s(785645),a=s(791949),l=s(750179),d=s(263286),t=s(571117),u=s.n(t),c=s(481040);const m=o.ZP`
    query GetUnconfirmedReviewAlertData($businessEncid: String!) {
        loggedInUser {
            hasUnconfirmedReviewForBusiness(businessEncid: $businessEncid)
            primaryEmail {
                emailAddress
                bounced
                confirmed
            }
        }
    }
`,g=({businessEncid:e})=>{var n,s;const{loading:o,error:t,data:g}=(0,r.aM)(m,{variables:{businessEncid:e}});if(o)return null;if(t)throw t;if(null==g||!g.loggedInUser||null==g||null===(n=g.loggedInUser)||void 0===n||!n.hasUnconfirmedReviewForBusiness)return null;const f=null==g||null===(s=g.loggedInUser)||void 0===s?void 0:s.primaryEmail,_="/profile_email_notifications";return u()(f,"Logged in user must have a primary email address."),(0,c.jsx)(a.ZP,{type:"warning"},(0,c.jsx)(l.xv,{weight:"bold",inline:!0},(0,d.ag)("Your review has not been posted yet! To post it you must first confirm your email address.")," "),(0,c.jsx)(l.xv,{inline:!0},f.bounced?(0,c.jsx)(i.Trans,{id:(0,d.ag)("We noticed we can no longer send emails to %{0}. <0>Please confirm or update your email address.</0>",{0:f.emailAddress}).toString(),components:[(0,c.jsx)(l.rU,{href:_})]}):(0,c.jsx)(i.Trans,{id:(0,d.ag)("Check your inbox and spam folders for a confirmation email, or <0>click here to resend.</0>",{}).toString(),components:[(0,c.jsx)(l.rU,{href:_})]})))}}}]);
//# sourceMappingURL=components-UnconfirmedReviewAlert.yji-af07473a020f6f1044a8.chunk.js.map