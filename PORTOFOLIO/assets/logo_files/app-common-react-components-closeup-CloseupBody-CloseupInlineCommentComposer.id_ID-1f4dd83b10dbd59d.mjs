"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[68357],{991354:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(667294),a=n(545007),r=n(883119),o=n(622468),s=n(642593),m=n(367131),_=n(573706),l=n(194093),c=n(476198),d=n(144326),g=n(267005),u=n(901450),p=n(383399),f=n(733383),A=n(115642),y=n(642758),C=n(785893);function S({aggregatedPinDataId:e,closeupAttributionId:t,commentCount:n,disablePhotoCommentSelection:S,isEligibleForPinReactions:h,isPDP:E,orbacSubjectId:x,pinId:D,privatePin:L,reactionByMe:N,reactionCounts:Z,setIsLoadingNewlyCreatedComment:O,showCommentComposer:P,showReactBackground:j,storyPinDataId:I,viewParameter:b}){let v;let w=(0,d.ZP)(),B=(0,p.Z)(),T=(0,a.I0)(),{logContextEvent:k}=(0,_.v)(),M=(0,o.Z)(),{showOneToast:U}=(0,u.F9)(),{closeupWithinMasonryEnabled:z,peekCloseupEnabled:H,clientTrackingParams:K}=(0,A.x4)(),[R,W]=(0,i.useState)(!1),[F,J]=(0,i.useState)(s.A9.NONE);v=E?z?2:8:z?1:0;let G=E?8:0;async function q(n){let{commentMedia:i,contentMarkdown:a,force:r,imageSignatures:o,tags:m}=n;if(null===e)return!1;O(!0);try{if(e){if(o.length){let t={aggregatedPinDataId:e,details:a,image_signatures:o,pin_id:D??"",username:B.username||"",fromUnifiedComment:!0};await T((0,y.DD)(t))}else await M({commentMedia:i,force:r,fromUnifiedComment:!0,objectType:f.o.pin,objectId:e,pinId:D,tags:m,text:a,orbacSubjectId:x});k({event_type:7,clientTrackingParams:K,object_id_str:D,aux_data:{num_user_mention_tags:(m?JSON.parse(m):[]).length,...I?{creator_id:t,story_pin_data_id:I}:{}}})}}catch(e){return[g.ky,g.LJ].includes((0,l.Z)(e,"api_error_code")??0)?J((0,l.Z)(e,"api_error_code")===g.ky?s.A9.WARNING:s.A9.BLOCK):U(({hideToast:t})=>(0,C.jsx)(c.Z,{onHide:t,text:(0,l.Z)(e,"message_detail")||(0,l.Z)(e,"message")||w.bt("Terjadi masalah saat memposting komentar Anda.", "There was an issue posting your comment.", "comment.post.errorMessage", undefined, true),type:"error"})),O(!1),!1}return W(!1),O(!1),!0}let{marginEnd:Q,marginStart:V}=H?{marginEnd:4,marginStart:4}:z?{marginEnd:0,marginStart:0}:{marginEnd:v,marginStart:G};return(0,C.jsx)(r.xu,{marginEnd:Q,marginStart:V,children:(0,C.jsx)(m.Z,{clientTrackingParams:K,commentCount:n,commentWarningModalState:F,disablePhotoCommentSelection:S,dismissCommentWarningModal:()=>J(s.A9.NONE),iconSize:E?20:void 0,isEligibleForPinReactions:h,isLeftAligned:E,objectType:f.o.pin,onAddItem:q,onCancelItem:()=>W(!1),onEnter:()=>W(!0),pinId:D,privatePin:L,reactionByMe:N,reactionCounts:Z,showCommentComposer:P,showReactBackground:!E&&j,statusType:R?"textInflightCreation":"textStaticDisplay",viewParameter:b})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-common-react-components-closeup-CloseupBody-CloseupInlineCommentComposer.id_ID-1f4dd83b10dbd59d.mjs.map