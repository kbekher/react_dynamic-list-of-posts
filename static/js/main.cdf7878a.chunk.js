(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var c=s(7),a=s.n(c),n=s(2),i=s(1),l=(s(13),s(14),s(15),s(3)),o=s.n(l),r=s(0),d=function(e){var t=e.posts,s=e.selectedPost,c=e.setSelectedPost,a=e.setIsFormShown,n=function(e){return function(){c(e),a(!1)}},i=function(){c(null)};return Object(r.jsxs)("div",{"data-cy":"PostsList",children:[Object(r.jsx)("p",{className:"title",children:"Posts:"}),Object(r.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"has-background-link-light",children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"Post",children:[Object(r.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(r.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:e.id===(null===s||void 0===s?void 0:s.id)?Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:i,children:"Close"}):Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:n(e),children:"Open"})})]},e.id)}))})]})]})},j=(s(17),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),m=s(8),b="https://mate.academy/students-api";function u(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),u(300).then((function(){return fetch(b+e,c)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")};var N=function(e){var t=e.selectedPost,s=e.setComments,c=e.setErrorMessage,a=Object(i.useState)(""),l=Object(n.a)(a,2),d=l[0],j=l[1],b=Object(i.useState)(!1),u=Object(n.a)(b,2),h=u[0],O=u[1],f=Object(i.useState)(""),N=Object(n.a)(f,2),p=N[0],y=N[1],v=Object(i.useState)(!1),g=Object(n.a)(v,2),S=g[0],w=g[1],C=Object(i.useState)(""),P=Object(n.a)(C,2),k=P[0],E=P[1],F=Object(i.useState)(!1),I=Object(n.a)(F,2),T=I[0],B=I[1],M=Object(i.useState)(!1),U=Object(n.a)(M,2),L=U[0],D=U[1],A=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return Object(r.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var a=d.trim(),n=p.trim();if(O(!a),w(!A.test(n)),B(!k),a&&A.test(n)&&k){var i={id:0,postId:t.id,name:d,email:p,body:k};D(!0),function(e){var t=e.postId,s=e.name,c=e.email,a=e.body;return x("/comments",{postId:t,name:s,email:c,body:a})}(i).then((function(e){s((function(t){return[].concat(Object(m.a)(t),[e])}))})).catch((function(){return c("Can not add a comment, try again later")})).finally((function(){D(!1),E("")}))}},children:[Object(r.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":h}),value:d,onChange:function(e){O(!1),j(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-user"})}),h&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":S}),value:p,onChange:function(e){w(!1),y(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:o()("textarea",{"is-danger":T}),value:k,onChange:function(e){B(!1),E(e.target.value)}})}),T&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":L}),children:"Add"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){j(""),O(!1),y(""),w(!1),E(""),B(!1)},children:"Clear"})})]})]})},p=function(e){var t=e.selectedPost,s=e.isFormShown,c=e.setIsFormShown,a=Object(i.useState)([]),l=Object(n.a)(a,2),o=l[0],d=l[1],m=Object(i.useState)(!1),b=Object(n.a)(m,2),u=b[0],h=b[1],x=Object(i.useState)(""),p=Object(n.a)(x,2),y=p[0],v=p[1];Object(i.useEffect)((function(){var e;h(!0),(e=t.id,O("/comments?postId=".concat(e))).then(d).catch((function(){return v("Something went wrong")})).finally((function(){return h(!1)}))}),[t]);var g=function(e){return function(){d((function(t){return t.filter((function(t){return t.id!==e}))})),function(e){return f("/comments/".concat(e))}(e).catch((function(){d(o),v("Can not add a comment, try again later")}))}};return Object(r.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(r.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(r.jsxs)("div",{className:"block",children:[Object(r.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(r.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(r.jsxs)("div",{className:"block",children:[u&&Object(r.jsx)(j,{}),y&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!o.length&&!u&&Object(r.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),o.length>0&&!u&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"title is-4",children:"Comments:"}),o.map((function(e){return Object(r.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(r.jsxs)("div",{className:"message-header",children:[Object(r.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(r.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:g(e.id),children:"delete button"})]}),Object(r.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!u&&!s&&Object(r.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){c(!0)},children:"Write a comment"})]}),s&&Object(r.jsx)(N,{selectedPost:t,setComments:d,setErrorMessage:v})]})})},y=function(e){var t=e.users,s=e.selectedUser,c=e.setSelectedUser,a=e.setSelectedPost,l=Object(i.useState)(!1),d=Object(n.a)(l,2),j=d[0],m=d[1],b=function(e){return function(){c(e),m(!1),a(null)}};return Object(r.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(r.jsx)("div",{className:"dropdown-trigger",children:Object(r.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return m(!j)},children:[Object(r.jsx)("span",{children:s?s.name:"Choose a user"}),Object(r.jsx)("span",{className:"icon is-small",children:Object(r.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),j&&Object(r.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(r.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(r.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":e.id===(null===s||void 0===s?void 0:s.id)}),onClick:b(e),children:e.name},e.id)}))})})]})};var v=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)(null),l=Object(n.a)(a,2),m=l[0],b=l[1],u=Object(i.useState)(!1),h=Object(n.a)(u,2),x=h[0],f=h[1],N=Object(i.useState)(""),v=Object(n.a)(N,2),g=v[0],S=v[1],w=Object(i.useState)(null),C=Object(n.a)(w,2),P=C[0],k=C[1],E=Object(i.useState)(null),F=Object(n.a)(E,2),I=F[0],T=F[1],B=Object(i.useState)(!1),M=Object(n.a)(B,2),U=M[0],L=M[1];return Object(i.useEffect)((function(){O("/users").then(c)}),[]),Object(i.useEffect)((function(){var e;m&&(f(!0),(e=m.id,O("/posts?userId=".concat(e))).then(k).catch((function(){return S("Something went wrong!")})).finally((function(){return f(!1)})))}),[m]),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tile is-ancestor",children:[Object(r.jsx)("div",{className:"tile is-parent",children:Object(r.jsxs)("div",{className:"tile is-child box is-success",children:[Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(y,{users:s,selectedUser:m,setSelectedUser:b,setSelectedPost:T})}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!m&&Object(r.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),x&&Object(r.jsx)(j,{}),g&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),P&&!P.length&&!x&&Object(r.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),P&&P.length>0&&!x&&Object(r.jsx)(d,{posts:P,selectedPost:I,setSelectedPost:T,setIsFormShown:L})]})]})}),Object(r.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":I}),children:Object(r.jsx)("div",{className:"tile is-child box is-success ",children:I&&Object(r.jsx)(p,{selectedPost:I,isFormShown:U,setIsFormShown:L})})})]})})})};a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.cdf7878a.chunk.js.map