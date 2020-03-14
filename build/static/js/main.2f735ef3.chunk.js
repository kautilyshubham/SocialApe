(this["webpackJsonpsocialape-client"]=this["webpackJsonpsocialape-client"]||[]).push([[0],{136:function(e,t,a){e.exports=a(187)},141:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=a(44),i=a(42),s=(a(141),a(243)),u=a(118),m=a.n(u),d=a(2),p=a.n(d),f=a(19),h=a(14),g=a(21),E=a(22),y=a(23),b=a(240),v=a(76),S=a.n(v).a.create({baseURL:"https://asia-east2-socialape-e9c44.cloudfunctions.net/api/"});S.interceptors.request.use((function(e){var t=localStorage.getItem("FBToken");return console.log("REQUEST =>",e),t?(e.headers.Authorization="Bearer ".concat(t),e):e})),S.interceptors.response.use((function(e){return t=e,console.log("RESPONSE =>",t),t;var t}),(function(e){var t;return t=e,console.log(t),Promise.reject(e)}));var O="screams/",C="scream/",k="login/",j="signup/",x="user/",w="user/image",I="notifications/",D="application/json",N="token",T="credentials",_="SUCCESS",A="DANGER",M="WARNING",L="LOADING_UI",U=function(e,t){return function(a){a({type:L,payload:!0}),S.post(j,e).then((function(e){localStorage.setItem("FBToken",e.data[N]),t(e),a({type:"SET_AUTHENTICATED"}),a({type:L,payload:!1})})).catch((function(e){console.log(e),a({type:L,payload:!1})}))}},H=function(e){return function(t){t({type:L,payload:!0}),S.get(x).then((function(a){e(a.data),t({type:"SET_USER",payload:a.data}),t({type:L,payload:!1})}))}},R=function(e){return function(t){localStorage.removeItem("FBToken"),t({type:"SET_UNAUTHENTICATED"}),t({type:"USER_LOGOUT"}),e()}},$=a(5),P=a(233),W=a(234),B=a(236),z=a(237),Y=a(247),F=a(231),q=a(48),G=a(69),K=a.n(G),V=a(106),X=a.n(V),J=a(235),Q=a(39),Z=a.n(Q),ee=a(10),te=a(229),ae=a(246),ne=a(228),re=a(226),oe=a(227),ce=a(225),le=a(221),ie=r.a.forwardRef((function(e,t){return r.a.createElement(le.a,Object.assign({direction:"up",ref:t},e))}));function se(e){var t=e.status,a=e.close,n=e.deleteHandle;return r.a.createElement("div",null,r.a.createElement(ae.a,{open:t,TransitionComponent:ie,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(ce.a,{id:"alert-dialog-slide-title"},"Delete post"),r.a.createElement(re.a,null,r.a.createElement(oe.a,{id:"alert-dialog-slide-description"},"Are you sure want to delete this post ?")),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:a,color:"secondary"},"Cancel"),r.a.createElement(te.a,{onClick:n,color:"primary"},"Delete"))))}var ue=a(47);a(164);ue.a.configure({autoClose:2e3,draggable:!0,position:ue.a.POSITION.TOP_RIGHT});var me=function(e,t){switch(e){case _:ue.a.success(t);break;case A:ue.a.error(t);break;case M:ue.a.warn(t);break;default:ue.a.success(t)}},de=a(232),pe=function(e){var t=e.comments,a={large:{width:100,height:100},handle:{fontSize:16},para:{fontSize:12,color:"#999",marginBottom:5}};return r.a.createElement(r.a.Fragment,null,t&&t.map((function(e,t){return r.a.createElement("div",{key:t,style:{display:"flex",padding:"10px 0px",borderTop:"1px solid #ddd"}},r.a.createElement(Y.a,{className:a.large,src:e.userImage}),r.a.createElement("div",{style:{marginLeft:30}},r.a.createElement(q.a,{component:"h6",variant:"h6",color:"primary",className:a.handle},"@",e.userHandle),r.a.createElement(q.a,{component:"p",color:"textSecondary",className:a.para},Z()(e.createdAt).format("MMMM Do YYYY, h:mm:ss a")),r.a.createElement(q.a,{component:"p"},e.body)))})))},fe=a(17),he=a(244),ge=Object(ee.b)(null,{$addComment:function(e,t,a){return function(n){n({type:L,payload:!0});var r="".concat(C).concat(e,"/comment");S.post(r,t).then((function(e){n({type:"ADD_COMMENT",payload:e.data}),n({type:L,payload:!1}),a()})).catch((function(e){n({type:L,payload:!1}),console.log(e)}))}}})((function(e){var t=e.screamId,a=Object(n.useState)(),o=Object(fe.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(),s=Object(fe.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement(he.a,{margin:"dense",id:"body",label:"Write your comment...",type:"text",fullWidth:!0,multiline:!0,rows:1,value:c,onChange:function(e){return function(e){l(e.target.value),m(!1)}(e)},error:u,helperText:u?"This field required!":""}),r.a.createElement(te.a,{variant:"contained",component:te.a,onClick:function(){if(c){var a={body:c};e.$addComment(t,a,(function(e){m(!1),l("")}))}else m(!0)},color:"primary"},"submit Comment"))})),Ee=a(105),ye=a.n(Ee),be=a(77),ve=a.n(be),Se=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isLiked:""},a.checkLiked=function(){return!(!a.props.userData.likes||!a.props.userData.likes.find((function(e){return e.screamId===a.props.screamId})))},a.likeClickHandler=function(){a.props.authenticated?a.checkLiked()?a.props.$unlikeScream(a.props.screamId,(function(e){})):a.props.$likeScream(a.props.screamId,(function(e){})):alert("You are not logged in.")},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this.checkLiked();this.setState({isLiked:e})}},{key:"componentDidUpdate",value:function(e){if(e.userData.likes!==this.props.userData.likes){var t=this.checkLiked();this.setState({isLiked:t})}}},{key:"render",value:function(){var e=this,t=this.state.isLiked;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{onClick:function(){return e.likeClickHandler()},"aria-label":"add to favorites"},t?r.a.createElement(ve.a,{color:"secondary"}):r.a.createElement(ye.a,null)),r.a.createElement(q.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.likeCount," Likes"))}}]),t}(n.Component),Oe=Object(ee.b)((function(e){return{userData:e.user,authenticated:e.user.authenticated}}),{$likeScream:function(e,t){return function(a){a({type:L,payload:!0});var n="".concat(C).concat(e,"/like");S.post(n).then((function(e){a({type:"LIKE_SCREAM",payload:e.data}),a({type:L,payload:!1}),t()})).catch((function(e){a({type:L,payload:!1}),console.log(e)}))}},$unlikeScream:function(e,t){return function(a){a({type:L,payload:!0});var n="".concat(C).concat(e,"/unlike");S.post(n).then((function(e){a({type:"UNLIKE_SCREAM",payload:e.data}),a({type:L,payload:!1}),t()})).catch((function(e){a({type:L,payload:!1}),console.log(e)}))}}})(Se),Ce=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={scream:"",comments:[]},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.$getScream(this.props.screamId,(function(e){}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.scream!==this.props.scream&&this.setState({scream:this.props.scream}),e.comments!==this.props.comments&&this.setState({comments:this.props.comments},(function(){return console.log(t.state.comments,"cooments")}))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.status,n=e.changeStatus,o=(e.screamId,this.state.scream),c=o.userImage,l=o.userHandle,i=o.body,s=o.createdAt,u=(o.likeCount,o.commentCount);return r.a.createElement(ae.a,{open:a,onClose:n,"aria-labelledby":"form-dialog-title",maxWidth:"sm",fullWidth:!0},a&&this.state.scream?r.a.createElement(re.a,null,r.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(Y.a,{alt:"",src:c,className:t.large}),r.a.createElement(q.a,{variant:"h5",color:"primary"},"@".concat(l))),r.a.createElement(q.a,{variant:"h6",color:"textSecondary",component:"h6",style:{marginBottom:20,marginTop:20}},i),r.a.createElement(q.a,{variant:"p",component:"p",style:{marginBottom:10,color:"#999",fontSize:14}},Z()(s).format("MMMM Do YYYY, h:mm:ss a")),r.a.createElement("div",{style:{display:"flex",marginTop:"15px"}},this.state.scream&&r.a.createElement("div",{style:{display:"flex",marginRight:"35px",alignItems:"center"}},r.a.createElement(Oe,{screamId:this.props.screamId,likeCount:this.props.likeCount})),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(K.a,{color:"primary",fontSize:"small",style:{marginRight:10}}),r.a.createElement(q.a,null,u," Comments"))),r.a.createElement("div",null,r.a.createElement("hr",null)," "),r.a.createElement(ge,{screamId:this.props.screamId}),r.a.createElement(pe,{comments:this.state.comments})):r.a.createElement(re.a,{style:{minHeight:"100px",display:"flex"}},r.a.createElement(de.a,{style:{position:"absolute",top:"40px",left:"50%"},color:"secondary"})))}}]),t}(n.Component),ke=Object($.a)((function(e){return{large:{width:e.spacing(15),height:e.spacing(15)},title:{fontSize:14}}}))(Object(ee.b)((function(e){return{scream:e.scream.scream,comments:e.scream.scream.comments}}),{$getScream:function(e,t){return function(a){var n="".concat(C).concat(e);S.get(n).then((function(e){a({type:"SET_SCREAM",payload:e.data}),t(e)})).catch((function(e){console.log(e)}))}}})(Ce)),je=a(120),xe=a(248),we=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).deleteScreamHandler=function(){a.props.$deleteScream(a.props.screamId,(function(e){a.setState({deleteModal:!1}),me(_,"Post deleted successfully!")}))},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={isLiked:"",deleteModal:!1,detailDialog:!1,anchorEl:!1},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.body,n=t.userHandle,o=t.createdAt,c=t.commentCount,l=t.likeCount,i=t.userImage,s=t.classes,u=this.state,m=(u.isLiked,u.deleteModal),d=u.detailDialog,p=u.anchorEl;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{className:s.root},r.a.createElement(W.a,{avatar:r.a.createElement(Y.a,{alt:"",src:i}),action:r.a.createElement(F.a,{onClick:this.handleClick,"aria-label":"options"},r.a.createElement(X.a,null)),title:r.a.createElement(J.a,{href:"/users/".concat(n),color:"inherit",style:{textDecoration:"none",color:"#515151",textTransform:"capitalize",fontSize:17,fontWeight:500,cursor:"pointer"}},n),subheader:Z()(o).format("MMMM Do YYYY, h:mm:ss a")}),r.a.createElement(je.a,{id:"simple-menu",anchorEl:p,open:Boolean(p),onClose:this.handleClose},r.a.createElement(xe.a,{onClick:function(){e.handleClose(),e.setState({detailDialog:!0})}},"View Detail"),this.props.authenticated&&this.props.userData&&this.props.userData[T].handle===n&&r.a.createElement(xe.a,{onClick:function(){e.handleClose(),e.setState({deleteModal:!0})}},"Delete Post")),r.a.createElement(B.a,null,r.a.createElement(q.a,{variant:"h6",color:"textSecondary",component:"h3"},a)),r.a.createElement(z.a,null,r.a.createElement(Oe,{screamId:this.props.screamId,likeCount:l}),r.a.createElement(F.a,{"aria-label":"comment",style:{marginLeft:20}},r.a.createElement(K.a,{color:"primary"})),r.a.createElement(q.a,{variant:"body2",color:"textSecondary",component:"p"},c," Comments"))),r.a.createElement(se,{status:m,close:function(){return e.setState({deleteModal:!1})},deleteHandle:this.deleteScreamHandler}),d&&r.a.createElement(ke,{status:d,changeStatus:function(){return e.setState({detailDialog:!1})},screamId:this.props.screamId,likeCount:l}))}}]),t}(n.Component),Ie=Object($.a)((function(e){return{root:{maxWidth:"90%",marginBottom:"30px"},media:{height:240},avatar:{backgroundColor:"#e91e63"}}}))(Object(ee.b)((function(e){return{userData:e.user,authenticated:e.user.authenticated}}),{$deleteScream:function(e,t){return function(a){a({type:L,payload:!0});var n="".concat(C).concat(e,"/delete");S.post(n).then((function(n){a({type:"DELETE_SCREAM",payload:e}),a({type:L,payload:!1}),t()})).catch((function(e){a({type:L,payload:!1}),console.log(e)}))}}})(we)),De=a(249),Ne=a(238),Te=a(108),_e=a.n(Te),Ae=a(239),Me=a(109),Le=a.n(Me),Ue=a(110),He=a.n(Ue),Re=a(111),$e=a.n(Re),Pe=a(122),We=a(112),Be=a.n(We),ze=Object(ee.b)((function(e){return{userData:e.user,isLoading:e.UI.loading}}),{$editUserDetail:function(e,t){return function(a){a({type:L,payload:!0}),S.post(x,e).then((function(e){t(),a(H((function(e){})))})).catch((function(e){console.log(e),a({type:L,payload:!1})}))}}})((function(e){var t=e.status,a=e.changeStatus,o=Object(n.useState)(),c=Object(fe.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)(),u=Object(fe.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(),f=Object(fe.a)(p,2),h=f[0],g=f[1];Object(n.useEffect)((function(){var t=e.userData[T],a=t.bio,n=t.website,r=t.location;i(a||""),d(n||""),g(r||"")}),[e.userData]);return r.a.createElement(ae.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",maxWidth:"sm",fullWidth:!0},r.a.createElement(ce.a,{id:"form-dialog-title"},"Edit your Detail"),r.a.createElement(re.a,null,r.a.createElement("form",null,r.a.createElement(he.a,{margin:"dense",id:"bio",label:"Bio",type:"text",fullWidth:!0,multiline:!0,rows:3,value:l,onChange:function(e){return function(e){i(e.target.value)}(e)}}),r.a.createElement(he.a,{margin:"dense",id:"website",label:"Website",type:"text",fullWidth:!0,value:m,onChange:function(e){return function(e){d(e.target.value)}(e)}}),r.a.createElement(he.a,{margin:"dense",id:"location",label:"Location",type:"text",fullWidth:!0,value:h,onChange:function(e){return function(e){g(e.target.value)}(e)}}))),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:a,color:"secondary"},"Cancel"),r.a.createElement(te.a,{component:te.a,onClick:function(){if(l&&m&&h){var t={bio:l,website:m,location:h};console.log(t,"userdetail"),e.$editUserDetail(t,(function(e){me(_,"Profile updated successfully!"),a()}))}else me(A,"Please fill all the fields!")},color:"primary"},"Update")))})),Ye=Object(Ne.a)((function(e){return{root:{maxWidth:400,textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",padding:45,"& > *":{margin:e.spacing(1)},position:"sticky",top:"80px"},large:{width:e.spacing(20),height:e.spacing(20)},title:{fontSize:14}}})),Fe=Object(ee.b)((function(e){return{userData:e.user,isLoading:e.UI.loading}}),{$uploadProfileImage:function(e,t){return function(a){a({type:L,payload:!0}),S.post(w,e).then((function(e){e&&a(H((function(e){console.log(e)}))),a({type:L,payload:!1}),t(e)})).catch((function(e){console.log(e),a({type:L,payload:!1})}))}},$logoutUser:R})((function(e){var t=e.userData[T],a=t.handle,o=t.imageUrl,c=t.bio,l=t.location,i=t.website,s=t.createdAt,u=Ye(),m=Object(n.useState)(!1),d=Object(fe.a)(m,2),p=d[0],f=d[1];return r.a.createElement(r.a.Fragment,null,a||e.isLoading?r.a.createElement(P.a,{className:u.root},r.a.createElement(Ae.a,{badgeContent:r.a.createElement(De.a,{title:"Edit image"},r.a.createElement(F.a,{onClick:function(){document.getElementById("profileImg").click()},"aria-label":"share"},r.a.createElement(_e.a,{color:"primary",fontSize:"small"})))},r.a.createElement(Y.a,{alt:a,src:o,className:u.large}),r.a.createElement("input",{type:"file",name:"profiel",id:"profileImg",onChange:function(t){return function(t){var a=t.target.files[0];console.log(a);var n=new FormData;n.append("image",a,a.name),e.$uploadProfileImage(n,(function(e){return console.log(e)}))}(t)},hidden:!0,accept:"image/png, image/jpeg"})),r.a.createElement(B.a,null,r.a.createElement(J.a,{gutterBottom:!0,component:J.a,href:"/user/".concat(a),variant:"h5"},a),c&&r.a.createElement(q.a,{component:"p"},c),l&&r.a.createElement("div",{className:"profile_desc"},r.a.createElement(F.a,{"aria-label":"edit"},r.a.createElement(Le.a,{color:"primary",fontSize:"small"})),r.a.createElement(q.a,{className:u.title,color:"textSecondary"},l)),i&&r.a.createElement("div",{className:"profile_desc"},r.a.createElement(F.a,{"aria-label":"edit"},r.a.createElement(He.a,{color:"primary",fontSize:"small"})),r.a.createElement(J.a,{href:i,className:u.title,rel:"noopener noreferrer",color:"textSecondary"},i)),s&&r.a.createElement("div",{className:"profile_desc"},r.a.createElement(F.a,{"aria-label":"edit"},r.a.createElement($e.a,{color:"primary",fontSize:"small"})),r.a.createElement(q.a,{className:u.title,color:"textSecondary"},Z()(s).format("MMMM Do YYYY")))),r.a.createElement(z.a,{disableSpacing:!0},r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:function(){f(!0)}},"Update Profile"),r.a.createElement(F.a,{"aria-label":"edit",onClick:function(){e.$logoutUser((function(e){me(_,"Logout successfull !")}))}},r.a.createElement(Be.a,{color:"secondary"})))):r.a.createElement(Pe.a,{align:"center"},r.a.createElement(q.a,{gutterBottom:!0,align:"center",component:"p"},"No profile found! please login"),r.a.createElement(te.a,{component:J.a,varient:"contained",color:"primary",href:"/login"},"Login"),r.a.createElement(te.a,{component:J.a,varient:"contained",color:"secondary",href:"/signup"},"Signup")),r.a.createElement(ze,{status:p,changeStatus:function(){f(!1)}}))})),qe=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={screams:[],user:""},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.$getAllScreams((function(e){})),this.props.screamsData.screams&&this.setState({screams:this.props.screamsData.screams})}},{key:"componentDidUpdate",value:function(e){e.userData.authenticated!==this.props.userData.authenticated&&this.props.userData.authenticated&&(this.props.$getUserData((function(e){})),this.props.$getAllNotifications((function(e){}))),e.screamsData!==this.props.screamsData&&this.setState({screams:this.props.screamsData.screams})}},{key:"render",value:function(){return r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,sm:8,xs:12},this.state.screams&&this.state.screams.map((function(e){return r.a.createElement(Ie,Object.assign({key:e.screamId},e))}))),r.a.createElement(b.a,{item:!0,sm:4,xs:12},r.a.createElement(Fe,null)))}}]),t}(n.Component),Ge=Object(ee.b)((function(e){return{screamsData:e.scream,userData:e.user,isLoading:e.UI.loading}}),{$getAllScreams:function(e){return function(t){t({type:L,payload:!0}),S.get(O).then((function(a){e(a),t({type:"SET_SCREAMS",payload:a.data}),t({type:L,payload:!1})})).catch((function(e){t({type:L,payload:!1}),console.log(e)}))}},$getUserData:H,$getAllNotifications:function(e){return function(t){S.get(I).then((function(t){e(t)})).catch((function(e){console.log(e)}))}}})(qe),Ke=a(71),Ve=a.n(Ke),Xe=a(70),Je=a.n(Xe),Qe=function(e){var t={};return e.trim()?!1===/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(e.trim())&&(t.email="Please enter valid email"):t.email="Email required",!Object.keys(t).length||t},Ze=function(e){var t={};return e.trim()?e.length<8?t.password="Password should be minimum of 8 charectors":!1===/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.trim())&&(t.password="Password must contain a number, special charector, uppercase and lowercase"):t.password="Password required",!Object.keys(t).length||t},et=function(e){return!e.trim()},tt=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={email:"",password:"",error:{},type:"password"},a.changeTypeHandler=function(){"password"===a.state.type?a.setState({type:"text"}):a.setState({type:"password"})},a.textChangeHandler=function(e,t){"email"===e?a.setState({email:t}):a.setState({password:t})},a.checkError=function(){a.setState({error:{}});var e=Qe(a.state.email);if(!0!==e)return a.setState({error:e},(function(){return console.log(a.state.error,"email")})),!1;if(et(a.state.password)){var t={password:"Password required!"};return a.setState({error:t}),!1}return!0},a.onSubmitHandler=function(){var e=a.checkError(),t={email:a.state.email,password:a.state.password};e&&a.props.$userLogin(t,(function(e){me(_,"Login successfull!"),a.props.history.push("/")}))},a.emailRef=r.a.createRef(),a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.emailRef.current.focus()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main_container"},r.a.createElement("div",{className:"login_container"},r.a.createElement("div",{className:"login_bnr"},r.a.createElement("img",{src:"/img/login-bnr.jpeg",alt:""})),r.a.createElement("div",{className:"login_form_box"},r.a.createElement("h2",{className:"heading",style:{textAlign:"center"}},"Login to SocialApe"),r.a.createElement("form",null,r.a.createElement("div",{className:"form_group"},r.a.createElement("div",{className:"input_group"},r.a.createElement("input",{type:"email",className:"input-control",value:this.state.email,placeholder:"Email",ref:this.emailRef,onChange:function(t){return e.textChangeHandler("email",t.target.value)}})),r.a.createElement("p",null,this.state.error.email?this.state.error.email:null)),r.a.createElement("div",{className:"form_group"},r.a.createElement("div",{className:"input_group"},r.a.createElement("input",{type:this.state.type,className:"input-control",placeholder:"Password",value:this.state.password,onChange:function(t){return e.textChangeHandler("password",t.target.value)}}),r.a.createElement(F.a,{onClick:function(){return e.changeTypeHandler()}},"password"===this.state.type?r.a.createElement(Je.a,null):r.a.createElement(Ve.a,null))),r.a.createElement("p",null,this.state.error.password?this.state.error.password:null)),r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:function(){return e.onSubmitHandler()}},"Login"),r.a.createElement("div",null,r.a.createElement(J.a,{href:"/signup"},"Don't have account?"))))))}}]),t}(n.Component),at=Object(ee.b)(null,{$userLogin:function(e,t){return function(a){a({type:L,payload:!0}),S.post(k,e,D).then((function(e){e&&(localStorage.setItem("FBToken",e.data[N]),t(e),a({type:"SET_AUTHENTICATED"}),a({type:L,payload:!1}))})).catch((function(e){console.log(e),a({type:L,payload:!1})}))}}})(tt),nt=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",handle:"",error:{},type:"password"},a.changeTypeHandler=function(){"password"===a.state.type?a.setState({type:"text"}):a.setState({type:"password"})},a.textChangeHandler=function(e,t){"email"===e?a.setState({email:t}):"handle"===e?a.setState({handle:t}):a.setState({password:t})},a.checkError=function(){a.setState({error:{}});var e=Qe(a.state.email),t=Ze(a.state.password);if(!0!==e)return a.setState({error:e}),!1;if(!0!==t)return a.setState({error:t}),!1;if(et(a.state.handle))return!0;var n={handle:"Handle required."};return a.setState({error:n}),!1},a.onSubmitHandler=function(){var e=a.checkError();console.log(e);var t={email:a.state.email,password:a.state.password,confirmPassword:a.state.password,handle:a.state.handle};e&&U(t,(function(e){console.log(e,"signup"),a.props.history.push("/")}))},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main_container"},r.a.createElement("div",{className:"login_container"},r.a.createElement("div",{className:"login_bnr"},r.a.createElement("img",{src:"/img/login-bnr.jpeg",alt:""})),r.a.createElement("div",{className:"login_form_box"},r.a.createElement("h2",{className:"heading",style:{textAlign:"center"}},"Register to SocialApe"),r.a.createElement("form",{action:""},r.a.createElement("div",{className:"form_group"},r.a.createElement("div",{className:"input_group"},r.a.createElement("input",{type:"email",className:"input-control",required:!0,placeholder:"Email",onChange:function(t){return e.textChangeHandler("email",t.target.value)}})),r.a.createElement("p",null,this.state.error.email?this.state.error.email:null)),r.a.createElement("div",{className:"form_group"},r.a.createElement("div",{className:"input_group"},r.a.createElement("input",{type:this.state.type,className:"input-control",required:!0,placeholder:"Password",onChange:function(t){return e.textChangeHandler("password",t.target.value)}}),r.a.createElement(F.a,{onClick:function(){return e.changeTypeHandler()}},"password"===this.state.type?r.a.createElement(Je.a,null):r.a.createElement(Ve.a,null))),r.a.createElement("p",null,this.state.error.password?this.state.error.password:null)),r.a.createElement("div",{className:"form_group"},r.a.createElement("div",{className:"input_group"},r.a.createElement("input",{type:"text",className:"input-control",required:!0,placeholder:"Handle",onChange:function(t){return e.textChangeHandler("handle",t.target.value)}})),r.a.createElement("p",null,this.state.error.handle?this.state.error.handle:null)),r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:function(){return e.onSubmitHandler()}},"Register now"),r.a.createElement("div",null,r.a.createElement(J.a,{href:"/login"},"Already have account?"))))))}}]),t}(n.Component),rt=Object(ee.b)(null,U)(nt),ot=a(241),ct=a(242),lt=a(113),it=a.n(lt),st=a(114),ut=a.n(st),mt=a(115),dt=a.n(mt),pt=Object(ee.b)(null,{$postScream:function(e,t){return function(a){a({type:L,payload:!0}),S.post(C,e).then((function(e){a({type:"POST_SCREAM",payload:e.data}),a({type:L,payload:!1}),t()})).catch((function(e){a({type:L,payload:!1}),console.log(e)}))}}})((function(e){var t=e.status,a=e.changeStatus,o=Object(n.useState)(),c=Object(fe.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)(),u=Object(fe.a)(s,2),m=u[0],d=u[1];return r.a.createElement(ae.a,{open:t,onClose:function(){a(),d(!1)},"aria-labelledby":"form-dialog-title",maxWidth:"sm",fullWidth:!0},r.a.createElement(ce.a,{id:"form-dialog-title"},"Create a post"),r.a.createElement(re.a,null,r.a.createElement("form",null,r.a.createElement(he.a,{autoFocus:!0,margin:"dense",id:"body",label:"Write something...",type:"text",fullWidth:!0,multiline:!0,rows:4,value:l,onChange:function(e){return function(e){i(e.target.value),d(!1)}(e)},error:m,helperText:m?"This field required!":""}))),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:function(){a(),d(!1)},color:"secondary"},"Cancel"),r.a.createElement(te.a,{component:te.a,onClick:function(){if(l){var t={body:l};e.$postScream(t,(function(e){a(),me(_,"Screams posted successfully!"),d(!1),i("")}))}else d(!0)},color:"primary"},"Post")))})),ft=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={isPostScream:!1},a}return Object(y.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot.a,null,r.a.createElement(ct.a,{style:{width:"90%",margin:"0 auto"}},r.a.createElement(q.a,{variant:"h6",style:{flexGrow:1}},"SocialApe"),this.props.authenticated?r.a.createElement("div",{className:"navbar_right"},r.a.createElement(De.a,{title:"Create a post"},r.a.createElement(F.a,{style:{color:"#fff"},onClick:function(){e.setState({isPostScream:!0})},"aria-label":"share"},r.a.createElement(it.a,{fontSize:"small"}))),r.a.createElement(De.a,{title:"Home"},r.a.createElement(F.a,{style:{color:"#fff"},onClick:function(){},"aria-label":"share"},r.a.createElement(ut.a,{fontSize:"small"}))),r.a.createElement(De.a,{title:"Notifications"},r.a.createElement(F.a,{style:{color:"#fff"},onClick:function(){},"aria-label":"share"},r.a.createElement(Ae.a,{badgeContent:this.props.notifications?this.props.notifications.length:0,color:"secondary"},r.a.createElement(dt.a,{fontSize:"small"}))))):r.a.createElement("div",{className:"navbar_right"},r.a.createElement(te.a,{component:l.b,to:"/",color:"inherit"},"Home"),r.a.createElement(te.a,{component:l.b,to:"/login",color:"inherit"},"Login"),r.a.createElement(te.a,{component:l.b,to:"/signup",color:"inherit"},"Signup")))),r.a.createElement(pt,{status:this.state.isPostScream,changeStatus:function(){return e.setState({isPostScream:!1})}}))}}]),t}(n.Component),ht=Object(ee.b)((function(e){return{authenticated:e.user.authenticated,notifications:e.user.notifications}}),{$logoutUser:R})(ft),gt=a(117),Et=a.n(gt),yt=a(3),bt=function(e){var t=e.component,a=e.authenticated,n=Object(yt.a)(e,["component","authenticated"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(i.a,{to:"/"}):r.a.createElement(t,e)}}))},vt=function(e){var t=r.a.useState(0),a=Object(fe.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(){var e=setInterval((function(){o((function(e){return e>=100?0:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:"overlay"},r.a.createElement(de.a,{variant:"determinate",value:n}))},St=m()({palette:{primary:{light:"#33c9dc",main:"#00bcd4",dark:"#008394",contrastText:"#fff"},secondary:{light:"#ff6333",main:"#ff3d00",dark:"#b22a00",contrastText:"#fff"}},typography:{useNextVariants:!0},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},textField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"},invisibleSeparator:{border:"none",margin:4},visibleSeparator:{width:"100%",borderBottom:"1px solid rgba(0,0,0,0.1)",marginBottom:20},paper:{padding:20},profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}},buttons:{textAlign:"center","& a":{margin:"20px 10px"}}}),Ot=localStorage.FBToken;Ot&&(1e3*Et()(Ot).exp<Date.now()&&(window.location.href="/login",!1,localStorage.clear()));bt.prototype={user:p.a.object.isRequired};var Ct=Object(ee.b)((function(e){return{authenticated:e.user.authenticated,isLoading:e.UI.loading}}),(function(e){return{setAuthenticated:function(){return e({type:"SET_AUTHENTICATED"})}}}))((function(e){return Object(n.useEffect)((function(){localStorage.getItem("FBToken")&&e.setAuthenticated()})),r.a.createElement(s.a,{theme:St},e.isLoading&&r.a.createElement(vt,null),r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(ht,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:Ge}),r.a.createElement(bt,{exact:!0,path:"/login",component:at,authenticated:e.authenticated}),r.a.createElement(bt,{exact:!0,path:"/signup",component:rt,authenticated:e.authenticated}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=a(45),jt=a(119),xt=a(25),wt=a(18),It={credentials:{},authenticated:!1,likes:[],notifications:[]},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(wt.a)({},e,{},t.payload);case"SET_AUTHENTICATED":return Object(wt.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return Object(wt.a)({},e,{authenticated:!1});case"USER_LOGOUT":return Object(wt.a)({},It);case"LIKE_SCREAM":return Object(wt.a)({},e,{likes:[].concat(Object(xt.a)(e.likes),[{userHandle:e.credentials.handle,screamId:t.payload.screamId}])});case"UNLIKE_SCREAM":return Object(wt.a)({},e,{likes:e.likes.filter((function(e){return e.screamId!==t.payload.screamId}))});default:return e}},Nt={screams:[],scream:{}},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCREAMS":return Object(wt.a)({},e,{screams:t.payload});case"LIKE_SCREAM":case"UNLIKE_SCREAM":var a=e.screams.findIndex((function(e){return e.screamId===t.payload.screamId}));return e.screams[a]=t.payload,Object(wt.a)({},e);case"DELETE_SCREAM":var n=e.screams.findIndex((function(e){return e.screamId===t.payload}));return e.screams.splice(n,1),Object(wt.a)({},e);case"SET_SCREAM":return Object(wt.a)({},e,{scream:Object(wt.a)({},t.payload)});case"POST_SCREAM":return Object(wt.a)({},e,{screams:[t.payload].concat(Object(xt.a)(e.screams))});case"ADD_COMMENT":var r=[t.payload].concat(Object(xt.a)(e.scream.comments)),o=e.scream;o.comments=r,o.commentCount+=1;var c=Object(xt.a)(e.screams),l=c.findIndex((function(e){return e.screamId===t.payload.screamId}));return c[l].commentCount+=1,Object(wt.a)({},e,{screams:c,scream:o});default:return e}},_t={showLoader:!1,loading:!1},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(wt.a)({},e,{loading:t.payload});default:return e}},Mt=[jt.a],Lt=Object(kt.c)({user:Dt,scream:Tt,UI:At}),Ut=Object(kt.e)(Lt,{},Object(kt.d)(kt.a.apply(void 0,Mt),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(ee.a,{store:Ut},r.a.createElement(Ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.2f735ef3.chunk.js.map