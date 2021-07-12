(this["webpackJsonpreact-store"]=this["webpackJsonpreact-store"]||[]).push([[0],{112:function(e,t,n){},129:function(e,t,n){},157:function(e,t){},158:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);n(112);var a=n(11),r=n.n(a),c=n(0),i=n.n(c),o=n(13),s=n(8),l=n(203),d=n(18),u=n(210),j=n(211),p=n(207),b=n(212),m=n(226),h=n(209),f=n(225),x=n(100),O=n(95),g=n.n(O),v=n(96),y=n.n(v),k=n(60),w=n.n(k),C=n(61),N=n.n(C),L=n(97),I=n.n(L),S=n(17),P=n(62),z=function(){return Object(P.b)()},D=P.c,R=n(220),E=n(42),T=n(223),B=n(68),A=n.n(B),F=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")},q=n(2),$=Object(l.a)((function(){return Object(T.a)({container:{display:"flex",alignItems:"center"},imageContainer:{position:"relative","&::after":{content:'"X"',placeItems:"center",color:"#fff",display:"grid",opacity:0,position:"absolute",cursor:"pointer",top:0,left:0,width:"100%",height:"90%",backgroundColor:"rgba(0,0,0,0.4)",zIndex:10,transition:"all 0.2s ease"},"&:hover&::after":{opacity:1}},image:{width:"60px",height:"auto",margin:"1rem 0"},title:{color:"#999",cursor:"pointer",margin:"0 1rem",transition:"all 0.3s ease-in",textDecoration:"none","&:hover":{color:"#8E99E6"}},content:{display:"flex",flexDirection:"column"},price:{color:"#888",fontSize:"14px",marginTop:"1rem",marginLeft:"1rem"}})})),W=function(e){var t=e.prod,n=e.removeItem,a=$();return Object(q.jsxs)("div",{className:a.container,children:[Object(q.jsx)("div",{className:a.imageContainer,onClick:n,children:Object(q.jsx)("img",{className:a.image,src:t.product.image,alt:t.product.title})}),Object(q.jsxs)("div",{className:a.content,children:[Object(q.jsx)(S.b,{to:"/product/".concat(t.product.id),className:a.title,children:F(t.product.title.split(" ").slice(0,2).join(" "))}),Object(q.jsxs)("span",{className:a.price,children:[t.amount," X $",t.product.price.toFixed(2)]})]})]})},M=n(219),H=n(222),V=n(37),Y=Object(V.b)({name:"card",initialState:{products:[]},reducers:{addProduct:function(e,t){if(e.products.length>0){var n=e.products.filter((function(e){return e.product.id===t.payload.product.id}));1===n.length?n[0].amount+=t.payload.amount:0===n.length&&e.products.push(t.payload)}else e.products.push(t.payload)},removeProduct:function(e,t){e.products=e.products.filter((function(e){return e.product.id!==+t.payload}))}}}),Q=Y.actions,G=Q.addProduct,X=Q.removeProduct,J=Y.reducer;function U(e){return Object(q.jsx)(M.a,Object(E.a)({elevation:6,variant:"filled"},e))}var K=Object(l.a)((function(){return Object(T.a)({container:{padding:"2rem",width:300},header:{display:"flex",justifyContent:"space-between",alignItems:"center"},close:{cursor:"pointer"},items:{height:"60vh",overflowY:"scroll","&::-webkit-scrollbar":{width:"10px"},"&::-webkit-scrollbar-track":{background:"#f1f1f1"},"&::-webkit-scrollbar-thumb":{background:"#888"},"&::-webkit-scrollbar-thumb:hover":{background:"#555"}},total:{position:"absolute",bottom:"20%",display:"block",fontSize:"1.2em"}})})),Z=function(e){var t=e.products,n=e.handleClose,a=i.a.useState(!1),r=Object(o.a)(a,2),c=r[0],s=r[1],l=function(e,t){"clickaway"!==t&&s(!1)},d=K(),u=z();return Object(q.jsxs)("div",{className:d.container,children:[Object(q.jsxs)("div",{className:d.header,children:[Object(q.jsx)("h2",{children:"Your Card"}),Object(q.jsx)(A.a,{className:d.close,onClick:n})]}),Object(q.jsx)("div",{className:d.items,children:t.length>0?t.map((function(e){return Object(q.jsx)(W,{removeItem:function(){return t=e.product.id,u(X(t)),void s(!0);var t},prod:e},e.product.id)})):null}),Object(q.jsxs)("span",{className:d.total,children:["Total: $",t.length>0?t.map((function(e){return e.amount*e.product.price})).reduce((function(e,t){return e+t})).toFixed(2):0]}),Object(q.jsx)(H.a,{open:c,autoHideDuration:6e3,onClose:l,children:Object(q.jsx)(U,{onClose:l,severity:"error",children:"Product Removed!"})})]})},_=Object(l.a)((function(e){return{grow:{flexGrow:1},menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("md"),{display:"none"}),title:Object(s.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",cursor:"pointer",color:"#fff",textDecoration:"none"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(d.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),menuList:Object(s.a)({marginLeft:"".concat(e.spacing(4),"px"),display:"flex"},e.breakpoints.down("md"),{display:"none"}),sectionDesktop:Object(s.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(s.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ee(){var e=_(),t=c.useState(null),n=Object(o.a)(t,2),a=n[0],r=n[1],i=c.useState(null),s=Object(o.a)(i,2),l=s[0],d=s[1],O=c.useState(null),v=Object(o.a)(O,2),k=v[0],C=v[1],L=Boolean(a),P=Boolean(k),z=Boolean(l),E=D((function(e){return e.card.products})),T=c.useState(0),B=Object(o.a)(T,2),A=B[0],F=B[1];c.useEffect((function(){var e=0;E.forEach((function(t){return e+=t.amount})),F(e)}),[E]);var $=function(){C(null)},W=function(){r(null),$()},M=function(){d(null)},H=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&ee(e)}},V=Object(q.jsxs)(x.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:L,onClose:W,children:[Object(q.jsx)(f.a,{onClick:W,children:"Profile"}),Object(q.jsx)(f.a,{onClick:W,children:"My account"})]}),Y="main-menu",Q=Object(q.jsxs)(x.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:Y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:z,onClose:M,children:[Object(q.jsx)(f.a,{component:S.b,to:"/",onClick:M,children:"Home"}),Object(q.jsx)(f.a,{component:S.b,to:"/shop",onClick:M,children:"Shop"})]}),G="primary-search-account-menu-mobile",X=Object(q.jsxs)(x.a,{anchorEl:k,anchorOrigin:{vertical:"top",horizontal:"right"},id:G,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:P,onClose:$,children:[Object(q.jsxs)(f.a,{onClick:H(!0),children:[Object(q.jsx)(p.a,{color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:A,color:"secondary",children:Object(q.jsx)(w.a,{})})}),Object(q.jsx)("p",{children:"Your card"})]}),Object(q.jsxs)(f.a,{children:[Object(q.jsx)(p.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:0,color:"secondary",children:Object(q.jsx)(N.a,{})})}),Object(q.jsx)("p",{children:"Favorite"})]})]}),J=c.useState(!1),U=Object(o.a)(J,2),K=U[0],ee=U[1];return Object(q.jsxs)("div",{className:e.grow,children:[Object(q.jsx)(u.a,{position:"sticky",children:Object(q.jsxs)(j.a,{children:[Object(q.jsx)(p.a,{onClick:function(e){d(e.currentTarget)},className:e.menuButton,color:"inherit","aria-label":"show more","aria-controls":Y,"aria-haspopup":"true",children:Object(q.jsx)(g.a,{})}),Object(q.jsx)(b.a,{component:S.b,to:"/",className:e.title,variant:"h5",noWrap:!0,children:"React Store"}),Object(q.jsxs)("div",{className:e.menuList,children:[Object(q.jsx)(f.a,{component:S.b,to:"/",children:"Home"}),Object(q.jsx)(f.a,{component:S.b,to:"/shop",children:"Shop"})]}),Object(q.jsx)("div",{className:e.grow}),Object(q.jsxs)("div",{className:e.search,children:[Object(q.jsx)("div",{className:e.searchIcon,children:Object(q.jsx)(y.a,{})}),Object(q.jsx)(m.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]}),Object(q.jsxs)("div",{className:e.sectionDesktop,children:[Object(q.jsx)(p.a,{color:"inherit",onClick:H(!0),children:Object(q.jsx)(h.a,{badgeContent:A,color:"secondary",children:Object(q.jsx)(w.a,{})})}),Object(q.jsx)(p.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(q.jsx)(h.a,{badgeContent:0,color:"secondary",children:Object(q.jsx)(N.a,{})})})]}),Object(q.jsx)("div",{className:e.sectionMobile,children:Object(q.jsx)(p.a,{"aria-label":"show more","aria-controls":G,"aria-haspopup":"true",onClick:function(e){C(e.currentTarget)},color:"inherit",children:Object(q.jsx)(I.a,{})})})]})}),X,V,Q,Object(q.jsx)("div",{children:Object(q.jsx)(R.a,{anchor:"right",open:K,onClose:H(!1),children:Object(q.jsx)(Z,{products:E,handleClose:H(!1)})})})]})}var te=n.p+"static/media/home.4403c1f2.jpg",ne=n(213);function ae(){return Object(q.jsx)(ne.a,{component:S.b,to:"/shop",variant:"contained",color:"secondary",size:"large",endIcon:Object(q.jsx)(w.a,{}),children:"Go to shop"})}var re=Object(l.a)((function(){return{imgDiv:{position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center","&::before":{content:'""',backgroundColor:"black",opacity:"0.5",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},background:"url(".concat(te,") center center/cover no-repeat"),width:"100%",height:"70vh",marginBottom:"3rem"},heading:{color:"#fff",zIndex:15,margin:"2rem 0"}}}));var ce=function(){var e=re();return Object(q.jsxs)("div",{className:e.imgDiv,children:[Object(q.jsx)("h1",{className:e.heading,children:"Welcome To React Face Store"}),Object(q.jsx)(S.b,{to:"/shop",component:ae})]})},ie=Object(l.a)((function(){return Object(T.a)({imageContainer:{position:"relative",cursor:"pointer","&:before":{content:'""',position:"absolute",top:0,left:0,bottom:6,right:-1,boxSizing:"border-box",backgroundColor:"transparent",zIndex:2,transition:"all 0.3s ease-in-out"},"&:hover":{"&:before":{backgroundColor:"rgba(103,117,214,.8)"},"& $title":{color:"#fff"},"& $desc":{color:"#fff"},"& $shopBlock":{opacity:1,transform:"scale(1)"},"& $shop":{transform:"translateY(0) "}}},title:{position:"absolute",top:"10%",left:"10%",color:"#000",zIndex:12,margin:0,transition:"all 0.3s ease-in-out"},desc:{position:"absolute",top:"25%",left:"10%",color:"#555",zIndex:12,transition:"all 0.3s ease-in-out"},img:{maxWidth:"100%",height:"auto",border:"1px solid #ddd"},shopBlock:{position:"absolute",bottom:"10%",left:"10%",color:"#fff",margin:0,textAlign:"center",zIndex:12,display:"inline-block",transform:"scaleX(0)",transition:"all 300ms ease",transitionDelay:"0.3s",paddingBottom:"0.3rem",overflow:"hidden",borderBottom:"solid 2px #fff"},shop:{display:"block",content:'""',transform:"translateY(250%) ",transformOrigin:"top",transition:"all 500ms ease-in-out",transitionDelay:"0.4s"}})})),oe=function(e){var t=ie();return Object(q.jsx)(S.b,{to:"/shop",children:Object(q.jsxs)("div",{className:t.imageContainer,children:[Object(q.jsx)("h2",{className:t.title,children:F(e.alt)}),Object(q.jsx)("div",{className:t.shopBlock,children:Object(q.jsx)("div",{className:t.shop,children:"Shop now"})}),Object(q.jsx)("small",{className:t.desc,children:F(e.desc)}),Object(q.jsx)("img",{className:t.img,src:e.img,alt:e.alt})]})})},se=n(214),le=n.p+"static/media/women.8f255cb0.jpg",de=n.p+"static/media/man.33ebbef2.jpg",ue=n.p+"static/media/hat.253c2f0b.jpg",je=function(e){return Object(q.jsxs)(se.a,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",children:[Object(q.jsx)(se.a,{item:!0,xs:12,md:6,lg:4,children:Object(q.jsx)(oe,{img:le,alt:"women",desc:"summer 2021"})}),Object(q.jsx)(se.a,{item:!0,xs:12,md:6,lg:4,children:Object(q.jsx)(oe,{img:de,alt:"man",desc:"summer 2021"})}),Object(q.jsx)(se.a,{item:!0,xs:12,md:6,lg:4,children:Object(q.jsx)(oe,{img:ue,alt:"jewelry",desc:"new trend"})})]})},pe=n(215),be=Object(l.a)((function(){return Object(T.a)({tag:{color:"#888",marginRight:"2rem",cursor:"pointer",borderBottom:"1px solid transparent",transition:"all 0.4s ease","&:hover , &.active":{color:"#333",borderColor:"#333"}}})})),me=function(e){var t=e.tag,n=e.handleClick,a=e.customClass,r=e.dataCat,i=Object(c.useRef)(null),o=be();return Object(q.jsx)("span",{ref:i,onClick:n,"data-cat":r,className:"tagItem ".concat(o.tag," ").concat(a),children:F(t)})},he=Object(V.b)({name:"main",initialState:{products:[],categories:[],filteredProducts:[],singleProd:null,quickViewOpen:!1,quickProd:null},reducers:{setProducts:function(e,t){e.products=t.payload,e.filteredProducts=t.payload},setCategories:function(e,t){e.categories=t.payload},filterByCategory:function(e,t){"all"===t.payload?e.filteredProducts=e.products:e.filteredProducts=e.products.filter((function(e){return e.category===t.payload}))},setSingleProd:function(e,t){e.singleProd=t.payload},setQuickModal:function(e,t){e.quickViewOpen=t.payload},setCurrentQuick:function(e,t){e.quickProd=e.products.filter((function(e){return e.id===t.payload}))[0]}}}),fe=he.actions,xe=fe.setProducts,Oe=fe.setCategories,ge=fe.filterByCategory,ve=fe.setSingleProd,ye=fe.setQuickModal,ke=fe.setCurrentQuick,we=he.reducer,Ce=Object(l.a)((function(){return Object(T.a)({tags:{margin:"2rem 0"}})})),Ne=function(e){var t=D((function(e){return e.main.categories})),n=Ce(),a=z(),r=function(e){document.querySelectorAll(".tagItem").forEach((function(e){return e.classList.remove("active")})),e.currentTarget.classList.add("active"),a(ge(e.currentTarget.dataset.cat))};return Object(q.jsxs)("div",{className:n.tags,children:[null!==t&&Object(q.jsx)(me,{handleClick:r,dataCat:"all",customClass:"active",tag:"all products"}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(q.jsx)(me,{handleClick:r,dataCat:e,tag:e},t)}))]})},Le=Object(l.a)((function(){return Object(T.a)({container:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100vh",margin:"1rem"},imgContainer:{position:"relative",overflow:"hidden","&:hover $btn":{top:"80%"},"&:hover $image":{transform:"scale(1.12)"}},image:{maxWidth:"100%",height:"auto",transition:"all 0.7s ease"},content:{display:"flex",marginTop:"1rem",justifyContent:"space-between",alignItems:"center",color:"#999"},title:{color:"#999",textDecoration:"none",fontSize:"14px",transition:"all 0.3s ease-in","&:hover":{color:"#8E99E6"}},icon:{fontSize:"20px",cursor:"pointer"},price:{color:"#666",margin:"0.5rem 0"},btn:{position:"absolute",left:"50%",top:"250%",transform:"translateX(-50%)",transition:"all 0.7s ease"}})})),Ie=function(e){var t=e.img,n=e.alt,a=e.title,r=e.price,c=e.id,i=Le(),o=z();return Object(q.jsxs)("div",{className:i.container,children:[Object(q.jsxs)("div",{className:i.imgContainer,children:[Object(q.jsx)("img",{className:i.image,src:t,alt:n}),Object(q.jsx)(ne.a,{className:i.btn,size:"small",onClick:function(){o(ye(!0)),o(ke(c))},variant:"contained",children:"Quick View"})]}),Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:i.content,children:[Object(q.jsx)(S.b,{to:"/product/".concat(c),className:i.title,children:a}),Object(q.jsx)(N.a,{className:i.icon})]}),Object(q.jsxs)("div",{className:i.price,children:["$",r.toFixed(2)]})]})]})},Se=n(224),Pe=n(221),ze=(n(129),Object(l.a)((function(e){var t;return Object(T.a)({container:(t={display:"grid",gridTemplateColumns:"1fr",gridGap:"2rem"},Object(s.a)(t,e.breakpoints.up("sm"),{gridTemplateColumns:"1fr 1fr"}),Object(s.a)(t,e.breakpoints.up("md"),{gridTemplateColumns:"1fr 1fr 1fr"}),Object(s.a)(t,e.breakpoints.up("lg"),{gridTemplateColumns:"1fr 1fr 1fr 1fr"}),t)})}))),De=function(e){var t=ze(),n=D((function(e){return e.main.filteredProducts}));return Object(q.jsx)(Se.a,{className:t.container,children:null===n||void 0===n?void 0:n.map((function(e){return Object(q.jsx)(Pe.a,{mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:"product",children:Object(q.jsx)(Ie,{id:e.id,img:e.image,alt:e.title.split(" ")[0],title:e.title,price:e.price})},e.id)}))})},Re=Object(l.a)((function(){return Object(T.a)({heading:{textTransform:"uppercase"}})})),Ee=function(e){var t=Re();return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{className:t.heading,children:"Product overview"}),Object(q.jsx)(Ne,{}),Object(q.jsx)(De,{})]})},Te=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(ee,{}),Object(q.jsx)(ce,{}),Object(q.jsxs)(pe.a,{children:[Object(q.jsx)(je,{}),Object(q.jsx)(Ee,{})]})]})},Be=function(e){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ee,{}),Object(q.jsxs)(pe.a,{children:[Object(q.jsx)(Ne,{}),Object(q.jsx)(De,{})]})]})},Ae=n(16),Fe=n(22),qe=n.n(Fe),$e=n(39),We=n(98),Me=n.n(We).a.create({baseURL:"https://fakestoreapi.com/",headers:{"Content-Type":"application/json"}}),He=function(){var e=Object($e.a)(qe.a.mark((function e(){var t;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("/products");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=function(){var e=Object($e.a)(qe.a.mark((function e(){var t;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("/products/categories");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=Object($e.a)(qe.a.mark((function e(t){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("/products/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=Object(V.b)({name:"loading",initialState:{prodsLoading:!1,catsLoading:!1,prodLoading:!1},reducers:{setProdsLoading:function(e,t){e.prodsLoading=t.payload},setCatsLoading:function(e,t){e.catsLoading=t.payload},setProdLoading:function(e,t){e.prodLoading=t.payload}}}),Ge=Qe.actions,Xe=Ge.setCatsLoading,Je=Ge.setProdLoading,Ue=Ge.setProdsLoading,Ke=Qe.reducer,Ze=n(218),_e=n(217),et=Object(l.a)((function(){return Object(T.a)({btnContainer:{margin:"2rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},btn:{fontSize:"1.2rem"},input:{width:"20%",textAlign:"center"},amount:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"},validation:{color:"red",marginBottom:"0.8rem",opacity:0}})}));function tt(e){return Object(q.jsx)(M.a,Object(E.a)({elevation:6,variant:"filled"},e))}var nt=function(e){var t=e.product,n=i.a.useState(!1),a=Object(o.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(1),d=Object(o.a)(l,2),u=d[0],j=d[1],p=et(),b=Object(c.useRef)(null),m=z(),h=function(e,t){"clickaway"!==t&&s(!1)};return Object(q.jsxs)("div",{className:p.btnContainer,children:[Object(q.jsxs)("div",{className:p.amount,children:[Object(q.jsx)(ne.a,{className:p.btn,variant:"contained",size:"large",onClick:function(e){u>1&&j((function(e){return+e-1}))},color:"primary",children:"-"}),Object(q.jsx)(_e.a,{className:p.input,id:"filled-number",type:"tel",variant:"filled",value:u,inputProps:{style:{textAlign:"center",height:"14px"}},onChange:function(e){return j(e.target.value)}}),Object(q.jsx)(ne.a,{className:p.btn,onClick:function(e){j((function(e){return+e+1}))},variant:"contained",size:"large",color:"primary",children:"+"})]}),Object(q.jsx)("small",{ref:b,className:p.validation,children:"Not Valid Amount"}),Object(q.jsx)("div",{children:Object(q.jsx)(ne.a,{variant:"contained",color:"primary",size:"large",onClick:function(){u>0?(null!==b.current&&(b.current.style.opacity="0"),m(G({product:t,amount:+u})),s(!0)):null!==b.current&&(b.current.style.opacity="1")},children:"ADD TO CARD"})}),Object(q.jsx)(H.a,{open:r,autoHideDuration:3e3,onClose:h,children:Object(q.jsx)(tt,{onClose:h,severity:"success",children:"Product Added To Card!"})})]})},at=Object(l.a)((function(){return Object(T.a)({gridContainer:{margin:"4rem 0",width:"fit-content"},image:{maxWidth:"100%",height:"auto"},title:{fontWeight:"normal"},desc:{color:"#666",fontSize:"14px",lineHeight:"2"}})})),rt=function(e){var t=e.product,n=e.width,a=e.height,r=at();return Object(q.jsxs)(se.a,{className:r.gridContainer,style:{width:n,height:a},container:!0,spacing:8,children:[Object(q.jsx)(se.a,{item:!0,md:6,sm:12,children:Object(q.jsx)("img",{className:r.image,src:t.image,alt:t.title})}),Object(q.jsxs)(se.a,{item:!0,md:6,sm:12,children:[Object(q.jsx)("h2",{className:r.title,children:t.title}),Object(q.jsxs)("h3",{children:["$",t.price.toFixed(2)]}),Object(q.jsx)("p",{className:r.desc,children:t.description}),Object(q.jsx)(nt,{product:t})]})]})},ct=Object(l.a)((function(e){return Object(T.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:"1rem",height:"90vh",position:"relative",overflowY:"scroll","&::-webkit-scrollbar":{width:"10px"},"&::-webkit-scrollbar-track":{background:"#f1f1f1"},"&::-webkit-scrollbar-thumb":{background:"#888"},"&::-webkit-scrollbar-thumb:hover":{background:"#555"}},container:{display:"flex"},image:{maxWidth:"50%"},close:{position:"absolute",top:30,right:40,cursor:"pointer"}})}));function it(){var e=ct(),t=D((function(e){return e.main.quickViewOpen})),n=D((function(e){return e.main.quickProd})),a=z(),r=function(){a(ye(!1))};return Object(q.jsx)(Ze.a,{open:t,onClose:r,className:e.modal,children:Object(q.jsx)("div",{className:e.paper,children:null!==n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(rt,{product:n,width:"80vw"}),Object(q.jsx)(A.a,{className:e.close,onClick:r})]}):Object(q.jsx)("h1",{children:"Loading..."})})})}var ot=n(227),st=n(99),lt=n(228),dt=Object(l.a)((function(e){return Object(T.a)({container:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{marginRight:"2rem"},heading:{display:"flex",justifyContent:"space-between",alignItems:"center"},large:{width:e.spacing(7),height:e.spacing(7)}})})),ut=function(e){var t=dt(),n=new st.AvatarGenerator;return n.generateRandomAvatar(),Object(q.jsxs)("div",{className:t.container,children:[Object(q.jsx)("div",{className:t.avatar,children:Object(q.jsx)(ot.a,{className:t.large,src:n.generateRandomAvatar()})}),Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:t.heading,children:[Object(q.jsx)("h3",{children:"John"}),Object(q.jsx)(lt.a,{name:"read-only",value:4,readOnly:!0})]}),Object(q.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laborum placeat nihil error explicabo voluptas nesciunt consequuntur excepturi velit iusto?"})]})]})},jt=(n(158),Object(l.a)((function(){return Object(T.a)({tags:{display:"flex",justifyContent:"center",margin:"1rem 0 2rem 0"},desc:{color:"#666",lineHeight:"2"}})}))),pt=function(e){var t,n=e.desc,a=jt();!function(e){e.Description="description",e.Review="review"}(t||(t={}));var r=Object(c.useState)("description"),i=Object(o.a)(r,2),s=i[0],l=i[1],d=function(e){var t,n;document.querySelectorAll(".tagItem").forEach((function(e){return e.classList.remove("active")})),e.currentTarget.classList.add("active"),l(null===e||void 0===e||null===(t=e.currentTarget)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.cat)};return Object(q.jsxs)("div",{children:[Object(q.jsxs)("div",{className:a.tags,children:[Object(q.jsx)(me,{customClass:"active",dataCat:"description",tag:"description",handleClick:d}),Object(q.jsx)(me,{dataCat:"review",tag:"review",handleClick:d})]}),Object(q.jsx)(pe.a,{maxWidth:"sm",children:Object(q.jsxs)(Se.a,{children:[t.Description===s?Object(q.jsx)(Pe.a,{unmountOnExit:!0,timeout:300,classNames:"desc",children:Object(q.jsx)("p",{className:a.desc,children:n})},t.Description):null,t.Review===s?Object(q.jsx)(Pe.a,{unmountOnExit:!0,timeout:500,classNames:"review",children:Object(q.jsx)(ut,{})},t.Review):null]})})]})},bt=Object(l.a)((function(){return Object(T.a)({container:{border:"1px solid #e6e6e6",padding:"2rem",marginBottom:"2rem"}})})),mt=function(e){var t=e.desc,n=bt();return Object(q.jsx)("div",{className:n.container,children:Object(q.jsx)(pt,{desc:t})})},ht=n(216),ft=Object(l.a)((function(e){return Object(T.a)({skeleton:Object(s.a)({display:"flex",justifyContent:"space-between"},e.breakpoints.down("md"),{flexDirection:"column"}),skeletonImg:{width:"100%"},skeletonLineContainer:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},skeletonLine:{margin:"0.5rem 0"}})})),xt=function(e){var t=ft(),n=z(),a=Object(Ae.e)();Object(c.useEffect)((function(){var e;n((e=a.id,function(){var t=Object($e.a)(qe.a.mark((function t(n){var a;return qe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Je(!0)),t.next=4,Ye(e);case 4:a=t.sent,n(ve(a)),n(Je(!1)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),n(Je(!1));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[a]);var r=D((function(e){return e.main.singleProd})),i=D((function(e){return e.loading.prodLoading}));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(ee,{}),Object(q.jsx)(pe.a,{maxWidth:"md",children:null===r||i?null!==r||i?Object(q.jsxs)("div",{className:t.skeleton,children:[Object(q.jsx)(ht.a,{animation:"wave",className:t.skeletonImg,height:"500px"}),Object(q.jsxs)("div",{className:t.skeletonLineContainer,children:[Object(q.jsx)(ht.a,{animation:"wave",className:t.skeletonLine,width:"40%",height:"20px"}),Object(q.jsx)(ht.a,{animation:"wave",className:t.skeletonLine,width:"40%",height:"20px"}),Object(q.jsx)(ht.a,{animation:"wave",className:t.skeletonLine,width:"40%",height:"20px"}),Object(q.jsx)(ht.a,{animation:"wave",className:t.skeletonLine,width:"40%",height:"20px"})]})]}):"Not Found":Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(rt,{product:r}),Object(q.jsx)(mt,{desc:r.description})]})})]})};var Ot=function(){var e=z(),t=D((function(e){return e.main.quickViewOpen}));return Object(c.useEffect)((function(){e(function(){var e=Object($e.a)(qe.a.mark((function e(t){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Ue(!0)),e.next=4,He();case 4:n=e.sent,t(xe(n)),t(Ue(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t(Ue(!1));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object($e.a)(qe.a.mark((function e(t){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ve();case 3:n=e.sent,t(Xe(!0)),t(Oe(n)),t(Xe(!1)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t(Xe(!1));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Ae.a,{path:"/",exact:!0,children:Object(q.jsx)(Te,{})}),Object(q.jsx)(Ae.a,{path:"/shop",exact:!0,children:Object(q.jsx)(Be,{})}),Object(q.jsx)(Ae.a,{path:"/product/:id",exact:!0,children:Object(q.jsx)(xt,{})}),t?Object(q.jsx)(it,{}):null]})},gt=(n(159),Object(V.a)({reducer:{main:we,loading:Ke,card:J}}));r.a.render(Object(q.jsx)(P.a,{store:gt,children:Object(q.jsx)(S.a,{children:Object(q.jsx)(Ot,{})})}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.a1a2e70d.chunk.js.map