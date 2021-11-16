(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[6048],{47890:e=>{e.exports={"no-questions-text":"no-questions-text__09f24__ext8X"}},913325:e=>{e.exports={answerText:"answerText__09f24__RZi5j"}},18361:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>P});var t=n(87363),r=n.n(t),i=n(744635),o=n(263286),a=n(785645),l=n(66758),u=n.n(l),m=n(641896),c=n(496738),g=n(750179),x=n(959659),p=n(341957),d=n(647145),w=n(517521),j=n(610392),A=n(46169),h=n(686835),y=n(379516),b=n(260794),f=n(913325),v=n.n(f),_=n(481040);const C=({truncatedContent:e,content:s,consumerFacingRole:n,answererName:i,timePosted:a,helpfulVoteCount:l})=>{const[u,m]=(0,t.useState)(!1),c=(0,_.jsx)(g.xv,{className:v().answerText,size:"large"},e," ",e!==s&&(0,_.jsx)(g.xv,{weight:"semibold",size:"inherit",inline:!0},(0,_.jsx)(g.rU,{role:"button",handleClick:e=>{e.preventDefault(),m(!0)},size:"inherit"},(0,o.ag)("more",{},"Expand truncated text")))),p=(0,_.jsx)(g.xv,{className:v().answerText,size:"large"},s," ",(0,_.jsx)(g.xv,{weight:"semibold",size:"inherit",inline:!0},(0,_.jsx)(g.rU,{role:"button",handleClick:e=>{e.preventDefault(),m(!1)},size:"inherit"},(0,o.ag)("less",{},"Collapse truncated text"))));return(0,_.jsx)(r().Fragment,null,u?p:c,(0,_.jsx)(x.W2,{marginTop:.5},(0,_.jsx)(b.Z,{answererDisplayName:i,consumerFacingRole:n,helpfulVoteCount:l,createdAtRelativeText:a})))};C.defaultProps={consumerFacingRole:null};const z=C,q=({primaryAnswer:e,totalAnswers:s})=>e?(0,_.jsx)(z,e):s?null:(0,_.jsx)(g.xv,{inline:!0,size:"large"},(0,o.ag)("No answers yet."));q.defaultProps={primaryAnswer:null};const N=q,E=({content:e,totalAnswers:s,currentUserCanAnswer:n,url:t,primaryAnswer:i})=>(0,_.jsx)(r().Fragment,null,(0,_.jsx)(x.W2,{marginTop:2,marginBottom:2},(0,_.jsx)(h.gg,{gutter:2,verticalAlign:"baseline"},(0,_.jsx)(h.ey,null,(0,_.jsx)(g.xv,{bold:!0,size:"large"},(0,o.ag)("Q:",{},"Biz Q&A - Abbreviation for a question (noun)"))),(0,_.jsx)(h.ey,{fill:!0},(0,_.jsx)(g.xv,{bold:!0,size:"large",weight:"semibold"},e)))),(0,_.jsx)(x.W2,{marginTop:2,marginBottom:2},(0,_.jsx)(h.gg,{gutter:2,verticalAlign:"baseline"},(0,_.jsx)(h.ey,null,(0,_.jsx)(g.xv,{bold:!0,size:"large"},(0,o.ag)("A:",{},"Biz Q&A - Abbreviation for an answer to a question (noun)"))),(0,_.jsx)(h.ey,{fill:!0},(0,_.jsx)(N,{primaryAnswer:i,totalAnswers:s}),(0,_.jsx)(y.Z,{url:t,currentUserCanAnswer:n,hasPrimaryAnswer:Boolean(i),totalNumAnswers:s})))));E.defaultProps={primaryAnswer:null};const T=E;var U=n(47890),B=n.n(U);function k(){return(k=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}const R=r().memo((({businessName:e,questions:s,totalQuestions:n,questionsUri:t})=>{const i=(a=s.length,n-a>0?(0,o.nc)("See %{smart_count} question","See all %{smart_count} questions",{smart_count:n}):null);var a;const l=n?(0,_.jsx)(r().Fragment,null,s.length?(0,_.jsx)(x.W2,null,(0,_.jsx)(d.aV,{useLegacyMargin:!0,noFinalSpacing:!0,type:"block",spacing:5},s.map((e=>(0,_.jsx)(T,k({key:e.url},e)))))):(0,_.jsx)(x.W2,null,(0,_.jsx)(x.W2,{marginBottom:2},(0,_.jsx)(g.xv,{size:"large",className:B()["no-questions-text"]},(0,_.jsx)(w.Z,null,(0,o.ag)("Got a question about <strong>%{businessName}</strong>? Ask the Yelp community!",{businessName:e}))))),i&&(0,_.jsx)(x.W2,{marginTop:4},(0,_.jsx)(p.zx,{tagType:"link",href:t},i))):(0,_.jsx)(r().Fragment,null,(0,_.jsx)(x.W2,null,(0,_.jsx)(g.xv,{size:"large",className:B()["no-questions-text"]},(0,_.jsx)(w.Z,null,(0,o.ag)("Yelp users haven’t asked any questions yet about <strong>%{businessName}</strong>.",{businessName:e}))))),u={linkText:"Ask a question",linkUrl:t,linkIcon:(0,_.jsx)(j.Z,{color:"inherit"}),isExternalLink:!1};return(0,_.jsx)(A.Z,{title:(0,o.ag)("Ask the Community"),linkProps:u},l)})),S=a.ZP`
    query GetBizPageCommunityQuestionsData($businessEncid: String) {
        business(encid: $businessEncid) {
            name
            isCommunityQuestionsEnabled
            communityQuestions(first: 2) {
                totalCount
                edges {
                    node {
                        encid
                        text
                        answers(first: 1) {
                            totalCount
                        }
                        loggedInUserPermissions {
                            canAnswer
                        }
                        topAnswer {
                            text
                            createdAt {
                                humanRelativeDateTime
                            }
                            helpfulVoteCount
                            author {
                                __typename
                                ... on BizUser {
                                    displayName
                                    consumerFacingRole
                                }
                                ... on User {
                                    displayName
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,P=r().memo((({businessEncid:e})=>{const{loading:s,error:n,data:t}=(0,i.aM)(S,{variables:{businessEncid:e}});if(n)throw u()(n);if(s||!t)return(0,_.jsx)(c.Z,{uniqueKey:"biz-questions-gql-shimmer"});const{business:{name:r,isCommunityQuestionsEnabled:o,communityQuestions:a}}=t;if(!o)return null;const{totalCount:l,edges:g}=a,x=g.map((({node:s})=>({content:s.text,totalAnswers:s.answers.totalCount,currentUserCanAnswer:!s.loggedInUserPermissions||s.loggedInUserPermissions.canAnswer,url:`/questions/${e}/${s.encid}`,primaryAnswer:s.topAnswer?{content:s.topAnswer.text,truncatedContent:(0,m.O)(s.topAnswer.text,250),timePosted:s.topAnswer.createdAt.humanRelativeDateTime,helpfulVoteCount:s.topAnswer.helpfulVoteCount,answererName:s.topAnswer.author.displayName,consumerFacingRole:"BizUser"===s.topAnswer.author.__typename?s.topAnswer.author.consumerFacingRole:null}:null}))),p=`/questions/${e}`;return(0,_.jsx)(R,{businessName:r,questions:x,totalQuestions:l,questionsUri:p})}))},260794:(e,s,n)=>{"use strict";n.d(s,{Z:()=>m});var t=n(87363),r=n.n(t),i=n(263286),o=n(750179),a=n(686835),l=n(844489),u=n(481040);const m=({answererDisplayName:e,consumerFacingRole:s,answererUrl:n,helpfulVoteCount:t,createdAtRelativeText:m})=>{const c=s?(0,l.n)(s):null;let g;return g=c?`${e}, ${c.toString()}`:n?(0,u.jsx)(o.rU,{href:n},e):e,(0,u.jsx)(a.gg,{gutter:.5,layoutStack:"small"},(0,u.jsx)(a.ey,{nowrap:!0},(0,u.jsx)(o.xv,{inline:!0,color:"subtle",weight:"semibold"},g," ")),(0,u.jsx)(a.ey,{fill:!0},(0,u.jsx)(o.xv,{inline:!0,color:"subtle"},m),Boolean(t)&&(0,u.jsx)(r().Fragment,null," ",(0,u.jsx)(o.xv,{inline:!0,bulletBefore:!0,color:"subtle"},(0,i.nc)("%{smart_count} person found this helpful","%{smart_count} people found this helpful",t)))))}},379516:(e,s,n)=>{"use strict";n.d(s,{Z:()=>l});n(87363);var t=n(959659),r=n(341957),i=n(263286),o=n(750179),a=n(481040);const l=({url:e,currentUserCanAnswer:s,hasPrimaryAnswer:n,totalNumAnswers:l})=>n?(0,a.jsx)(t.W2,{marginTop:1.5},(0,a.jsx)(r.zx,{tagType:"link",href:e,type:"tertiary",size:"small"},(e=>1===e?(0,i.ag)("See question details"):(0,i.nc)("See %{smart_count} more answer","See %{smart_count} more answers",e-1))(l))):s?(0,a.jsx)(o.xv,{size:"inherit",weight:"semibold",inline:!0}," ",(0,a.jsx)(o.rU,{size:"inherit",href:e,role:"link"},(0,i.ag)("Answer this question"))):(0,a.jsx)(t.W2,{marginTop:1.5},(0,a.jsx)(r.zx,{tagType:"link",type:"tertiary",size:"small",href:e},(0,i.ag)("See question details")))},844489:(e,s,n)=>{"use strict";n.d(s,{n:()=>r});var t=n(263286);const r=e=>"CUSTOMER_SERVICE"===e?(0,t.ag)("Business Customer Service"):"EMPLOYEE"===e?(0,t.ag)("Business Employee"):"MANAGER"===e?(0,t.ag)("Business Manager"):"OWNER"===e?(0,t.ag)("Business Owner"):("undefined"!=typeof window&&window.Bugsnag&&window.Bugsnag.notifiyException(new Error(`Missing display string for consumerFacingRole: ${e}`)),"")}}]);
//# sourceMappingURL=components-BizQuestionsGQL.yji-3f433931b8ca9b4a1a54.chunk.js.map