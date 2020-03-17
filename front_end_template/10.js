(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{869:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a.n(n),i=a(36),l=a.n(i),o=a(37),s=a.n(o),c=a(38),u=a.n(c),d=a(274),p=a.n(d),m=a(39),h=a.n(m),v=a(0),g=a.n(v),f=a(90),E=(a(32),a(430)),b=a(391),y=a(436),D=a(858),S=a(450),C=a(59),k=a.n(C),w=a(50),N=a.n(w),O=a(8),x=a.n(O),P=a(15),G=a.n(P),W=a(824),I=a(578),T=a(864),j=a(437),z=a(849),L=a(848),_=a(435),B=a(871),M=a(51),A=a.n(M),R=a(867),V=a(438),U=a(432),J=a(264),q=a(431),F=a(433),H=a(434),K=a(389),Q=function(e){function t(e){var a;return r()(this,t),(a=s()(this,u()(t).call(this,e))).validateInputs=function(e){var t=a.state,n=t.fieldData,r=t.currentStep,i=Object(I.a)(a.state,"new"),l=i.isValid,o=i.errors;if(l){if("save"===e)return void a.props.handleSave(n);"next"===e&&a.setState({currentStep:r+1})}else a.setState({errors:o});return l},a.handleInputChanged=function(e){var t=e.target,n=t.id,r=t.value;a.setState({fieldData:x()({},a.state.fieldData,N()({},n,r))})},a.handleSelectChanged=function(e,t){var n=e.target.value;a.setState({fieldData:x()({},a.state.fieldData,N()({},t,n))})},a.handlePrevious=function(){var e=a.state.currentStep;a.setState({currentStep:e-1})},a.getStepContent=function(e,t,n){var r=a.props.classes,i=[{label:"Organization Name",value:t.name},{label:"Description",value:t.description},{label:"Total Users",value:50},{label:"Stakeholders",value:15},{label:"Participants",value:45}];switch(e){case 0:return g.a.createElement(j.a,{container:!0,spacing:1},g.a.createElement(j.a,{item:!0,xs:12},g.a.createElement(V.a,{fullWidth:!0,id:"name",label:"Name",value:t.name,error:Boolean(n&&n.name),helperText:n?n.name:"",onChange:function(e){return a.handleInputChanged(e)}})),g.a.createElement(j.a,{item:!0,xs:12},g.a.createElement(V.a,{fullWidth:!0,rows:4,multiline:!0,id:"description",label:"Description",value:t.description,error:Boolean(n&&n.description),helperText:n?n.description:"",onChange:function(e){return a.handleInputChanged(e)}})));case 1:return g.a.createElement(L.a,{className:"reactDropzone",variant:"outlined"},g.a.createElement(W.a,{onDrop:function(e){return console.log(e)}},function(e){var t=e.getRootProps,a=e.getInputProps;return g.a.createElement("section",null,g.a.createElement("div",k()({},t(),{className:"reactDropzone_container"}),g.a.createElement("input",a()),g.a.createElement(E.a,null,"cloud_upload"),g.a.createElement(J.a,{variant:"h6"},"Drag & Drop"),g.a.createElement(J.a,{variant:"subtitle1",gutterBottom:!0},"Or click here select (.txt, .csv) files")))}));case 2:return g.a.createElement("div",{className:r.summaryDetails},g.a.createElement(J.a,{variant:"h6",gutterBottom:!0},"Summary"),i.map(function(e,t){return g.a.createElement(J.a,{key:t,component:"div"},g.a.createElement(T.a,{fontWeight:"fontWeightMedium",ml:1},e.label,":"),g.a.createElement(T.a,{fontWeight:"fontWeightRegular",ml:1},e.value))}));default:return}},a.state={fieldData:{name:"",description:"",total_users:50,stakeholders:20,participants:25,status:"Active"},currentStep:0,errors:{}},a}return h()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currentStep,n=t.fieldData,r=t.errors,i=this.props,l=i.handleClose,o=i.classes;return g.a.createElement(_.a,{open:!0,fullWidth:!0,"aria-labelledby":"simple-dialog-title"},g.a.createElement(q.a,{disableTypography:!0,className:o.dialogTitle},g.a.createElement(J.a,{variant:"h6"},"New Organization"),g.a.createElement(U.a,{"aria-label":"close",className:o.closeButton,onClick:function(){return l(!1)}},g.a.createElement(A.a,null))),g.a.createElement(F.a,{dividers:!0},g.a.createElement(B.a,{activeStep:a},["1","2","3"].map(function(e){return g.a.createElement(z.a,{key:e},g.a.createElement(R.a,null))})),g.a.createElement("div",null,this.getStepContent(a,n,r))),g.a.createElement(H.a,null,g.a.createElement(y.a,{color:"default",variant:"outlined",onClick:function(){return l(!1)},className:o.dialogActionsCancel},"Cancel"),0!==a&&g.a.createElement(y.a,{onClick:function(){return e.handlePrevious()},color:"primary",variant:"outlined"},"Previous"),2!==a&&g.a.createElement(y.a,{onClick:function(){return e.validateInputs("next")},color:"primary",variant:"contained"},"Next"),2===a&&g.a.createElement(y.a,{onClick:function(){return e.validateInputs("save")},color:"primary",variant:"contained"},"Save")))}}]),t}(v.Component);Q.propTypes={classes:G.a.object.isRequired};var X=Object(K.a)(function(e){return{dialogTitle:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogActionsCancel:{marginRight:"auto"},formControl:{marginTop:e.spacing(1),minWidth:120,width:"100%","& .MuiInputLabel-outlined.MuiInputLabel-shrink":{background:e.palette.common.white,paddingLeft:"5px",paddingRight:"5px"}},summaryDetails:{"& h6":{paddingLeft:e.spacing(1)},"& .MuiTypography-root":{display:"flex"}}}})(Q),Y=a(518),Z=a(455),$=a(485),ee=a(24),te=function(e){function t(e){var a;return r()(this,t),(a=s()(this,u()(t).call(this,e))).GridList=function(e){a.props.dispatch(Object(ee.c)(e))},a.GetDetails=function(e){a.props.dispatch(Object(ee.b)(e)),a.props.dispatch(Object(ee.k)("organization"))},a.handleNewDialog=function(e){a.setState({isOpenDialog:e})},a.handleSave=function(e){a.setState({isOpenDialog:!1},function(){console.log("dispatching..")})},a.state={isOpenDialog:!1},a.GridProperties={grid:!0,search:"",sort_column:"name",sort_direction:"desc",start:0,limit:10},a.columns={name:{name:"Name",sortable:!0,defaultActive:!0},users:{name:"Users",sortable:!0},surveys:{name:"Surveys",sortable:!0},status:{name:"Status",sortable:!0},updated:{name:"Updated",func:a.formatValue.bind(p()(a),"updated"),sortable:!0},actions:{name:"Actions",func:a.formatValue.bind(p()(a),"actions")}},a}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.GridList(this.GridProperties)}},{key:"formatValue",value:function(e,t){var a=this;return"actions"===e?g.a.createElement(E.a,{onClick:function(){return a.GetDetails(t.id)}},"remove_red_eye"):"updated"===e?g.a.createElement("span",null,t[e]):void 0}},{key:"render",value:function(){var e=this,t=this.state.isOpenDialog,a=this.props,n=a.organization.list,r=n.data,i=n.count,l=a.activeData,o=a.entity,s=void 0===o?"organization":o;return g.a.createElement(D.a,{disableGutters:!0,maxWidth:!1},"parent"===l.type?g.a.createElement(g.a.Fragment,null,g.a.createElement(y.a,{color:"primary",variant:"contained",onClick:function(){return e.handleNewDialog(!0)}},"New Organization"),g.a.createElement(b.a,{className:"MuiPaper-tableWrapper"},g.a.createElement($.a,{rows:r,count:i,columns:this.columns,gridProperties:this.GridProperties,onGridList:this.GridList}),t?g.a.createElement(X,{handleSave:this.handleSave,handleClose:this.handleNewDialog}):null)):g.a.createElement(Y.a,{data:l,entity:s}))}}]),t}(v.PureComponent);t.default=Object(f.b)(S.b)(Object(Z.a)(te))}}]);
//# sourceMappingURL=10.js.map