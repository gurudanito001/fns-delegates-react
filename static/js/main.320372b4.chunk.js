(this["webpackJsonpreviews-front"]=this["webpackJsonpreviews-front"]||[]).push([[0],{2:function(e,t){e.exports={serverUrl:"https://agile-citadel-65482.herokuapp.com/api/delegate"}},26:function(e,t,s){},27:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(3),c=s.n(n),o=s(19),l=s.n(o),r=(s(26),s(5)),i=s(6),d=s(8),m=s(7),u=(s(27),s(1)),h=s.n(u),b=s(2),j=s(9),g=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).onSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.state,s={firstname:t.firstname,lastname:t.lastname,email:t.email,phoneNumber:t.phoneNumber,companyName:t.companyName,serviceDescription:t.serviceDescription,companyAddress:t.companyAddress,vip:t.vip,admitted:t.admitted};h.a.post("".concat(b.serverUrl,"/add"),s).then((function(e){"OK"===e.statusText&&document.getElementById("closeAddDelegateModal").click()}))},a.onChange=function(e){"vip"===e.target.id?a.setState({vip:!a.state.vip}):a.setState(Object(j.a)({},e.target.id,e.target.value))},a.state={sending:!1,firstname:"",lastname:"",email:"",phoneNumber:"",companyName:"",serviceDescription:"",companyAddress:"",vip:!1,admitted:!1},a}return Object(i.a)(s,[{key:"render",value:function(){var e;return Object(a.jsx)("div",{className:"modal fade",id:"registerModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog  modal-dialog-centered modal-dialog-scrollable",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Register Attendee"}),Object(a.jsx)("button",(e={id:"closeRegisterModal",type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},Object(j.a)(e,"id","closeAddDelegateModal"),Object(j.a)(e,"children",Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})),e))]}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"firstname",onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"lastname",children:"Lastname"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"lastname",onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"phoneNumber",onChange:this.onChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"companyName",children:"Company Name"}),Object(a.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"companyName",onChange:this.onChange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",checked:this.state.vip,onChange:this.onChange,id:"vip"}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"vip",children:"Guest"})]})})]})}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",onClick:this.onSubmit,children:"Submit"})})]})})})}}]),s}(c.a.Component),p=function(e){var t;return Object(a.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light mb-4 sticky-top",children:[Object(a.jsx)("a",{href:"#",className:"navbar-brand font-weight-bold",onClick:function(){e.setCurrentPage("allAttendees")},children:"FNS Delegates"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"#",className:"nav-link font-weight-bold",onClick:function(){e.setCurrentPage("admittedAttendees")},children:"Admitted Attendees"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",(t={href:"#",className:"nav-link font-weight-bold"},Object(j.a)(t,"href","#"),Object(j.a)(t,"onClick",(function(){e.setCurrentPage("guests")})),Object(j.a)(t,"children","Guests "),t))})]}),Object(a.jsx)("button",{className:"btn btn-sm btn-secondary mr-1 ml-auto","data-toggle":"modal","data-target":"#registerModal",children:"Add Attendee"})]})]})},x=function(e){return e.delegates[0]?e.delegates.map((function(t){return Object(a.jsx)(n.Fragment,{children:Object(a.jsxs)("div",{className:"card mb-3",style:{minWidth:"22rem",maxWidth:"22rem"},children:[Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"clearfix",children:[Object(a.jsxs)("span",{className:"mr-2 d-inline-block float-left",children:[Object(a.jsx)("strong",{children:" Full Name: "}),t.firstname+" "+t.lastname]}),Object(a.jsxs)("div",{className:"dropdown float-right border d-inline-block",children:[Object(a.jsx)("button",{className:"btn btn-sm dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),Object(a.jsx)("div",{className:"dropdown-menu dropdown-menu-right py-0","aria-labelledby":"dropdownMenuButton",children:Object(a.jsx)("button",{className:"dropdown-item bg-danger text-white rounded",href:"#",onClick:function(s){e.deleteDelegate(s,t._id)},children:"Delete"})})]})]}),Object(a.jsxs)("label",{className:"d-block mt-3 mb-1",children:[Object(a.jsx)("strong",{children:"Email:"}),"  ",t.email]}),Object(a.jsxs)("label",{className:"d-block mt-3 mb-1",children:[Object(a.jsx)("strong",{children:"Phone Number:"}),"  ",t.phoneNumber]}),Object(a.jsxs)("label",{className:"d-block mt-3 mb-1",children:[Object(a.jsx)("strong",{children:"Company Name:"})," ",t.companyName]})]}),Object(a.jsx)("div",{className:"card-footer clearfix",style:t.vip?{backgroundColor:"#CCA748"}:{backgroundColor:"green"},children:t.admitted?Object(a.jsx)("button",{className:"btn btn-sm btn-danger float-right",onClick:function(s){e.exclude(s,t._id)},children:"Exclude"}):Object(a.jsx)("button",{className:"btn btn-sm btn-success float-right",onClick:function(s){e.admit(s,t._id)},children:"Admit"})})]})},t._id)})):!1===e.justMounted?Object(a.jsx)("div",{className:"text-center h4 d-block mx-auto",children:" Not Found in the list "}):""},O=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.props.getAdmittedAttendees()},a.makeDelegate=function(e,t){h.a.post("".concat(b.serverUrl,"/makedelegate/").concat(t)).then((function(e){console.log(e),"OK"===e.statusText&&(a.props.getAdmittedAttendees(),console.log("Guest is now a Delegate"))}))},a.makeGuest=function(e,t){h.a.post("".concat(b.serverUrl,"/makevip/").concat(t)).then((function(e){console.log(e),"OK"===e.statusText&&(a.props.getAdmittedAttendees(),console.log("Delegate is now a Guest"))}))},a.admit=function(e,t){h.a.post("".concat(b.serverUrl,"/admit/").concat(t)).then((function(e){"OK"===e.statusText&&(a.props.getAdmittedAttendees(),console.log("Attendee has now been Admitted"))}))},a.exclude=function(e,t){h.a.post("".concat(b.serverUrl,"/exclude/").concat(t)).then((function(e){"OK"===e.statusText&&(a.props.getAdmittedAttendees(),console.log("Attendee has now been Excluded"))}))},a.delete=function(e,t){h.a.delete("".concat(b.serverUrl,"/delete/").concat(t)).then((function(e){"OK"===e.statusText&&(a.getAdmittedAttendees(),console.log("Attendee has now been Deleted"))}))},a.state={searching:!1,searchOption:"firstname",searchText:""},a}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container px-0",children:[Object(a.jsx)("div",{className:"row mb-4",children:Object(a.jsx)("div",{className:"col col-lg-6 offset-lg-3 px-0",children:Object(a.jsx)("header",{children:Object(a.jsx)("h4",{children:"Admitted Attendees"})})})}),this.props.admittedAttendees?Object(a.jsx)("div",{className:"card-deck",children:Object(a.jsx)(x,{delegates:this.props.admittedAttendees,makeDelegate:this.makeDelegate,makeGuest:this.makeGuest,admit:this.admit,exclude:this.exclude,deleteDelegate:this.delete})}):Object(a.jsx)("div",{children:" No delegate has been admitted "})]})}}]),s}(c.a.Component),f=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.setState({justMounted:!0}),a.props.clearSearchResults()},a.onChange=function(e){a.setState(Object(j.a)({},e.target.id,e.target.value))},a.search=function(e){e.preventDefault(),a.state.searchText?(a.setState({searching:!0}),h.a.post("".concat(b.serverUrl,"/").concat(a.state.searchOption,"/").concat(a.state.searchText)).then((function(e){a.setState({searching:!1}),"OK"===e.statusText&&(a.props.storeSearchResults(e.data),a.setState({justMounted:!1}))}))):console.log("Nothing to search")},a.makeDelegate=function(e,t){h.a.post("".concat(b.serverUrl,"/makedelegate/").concat(t)).then((function(t){console.log(t),"OK"===t.statusText&&(a.search(e),console.log("Guest is now a Delegate"))}))},a.makeGuest=function(e,t){h.a.post("".concat(b.serverUrl,"/makevip/").concat(t)).then((function(t){console.log(t),"OK"===t.statusText&&(a.search(e),console.log("Delegate is now a Guest"))}))},a.admit=function(e,t){h.a.post("".concat(b.serverUrl,"/admit/").concat(t)).then((function(t){"OK"===t.statusText&&(a.search(e),console.log("Attendee has now been Admitted"))}))},a.exclude=function(e,t){h.a.post("".concat(b.serverUrl,"/exclude/").concat(t)).then((function(t){"OK"===t.statusText&&(a.search(e),console.log("Attendee has now been Excluded"))}))},a.delete=function(e,t){h.a.delete("".concat(b.serverUrl,"/delete/").concat(t)).then((function(t){"OK"===t.statusText&&(a.search(e),console.log("Attendee has now been Deleted"))}))},a.state={justMounted:!1,searching:!1,searchOption:"firstname",searchText:""},a}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container px-0",children:[Object(a.jsx)("div",{className:"row mb-4",children:Object(a.jsxs)("div",{className:"col col-lg-6 offset-lg-3 px-0",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h4",{children:"Search All Attendees"})}),Object(a.jsxs)("form",{className:"form-inline my-2 my-lg-0 mx-auto",children:[Object(a.jsxs)("select",{className:"form-control p-0",style:{maxWidth:"6rem"},value:this.state.searchOption,onChange:this.onChange,id:"searchOption",children:[Object(a.jsx)("option",{value:"firstname",children:"firstname"}),Object(a.jsx)("option",{value:"lastname",children:"lastname"}),Object(a.jsx)("option",{value:"email",children:"email"})]}),Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"search",style:{minWidth:"18rem"},placeholder:"Search",id:"searchText",onChange:this.onChange}),Object(a.jsx)("button",{className:"btn btn-success my-2 my-sm-0",type:"submit",disabled:this.state.searching,onClick:this.search,children:"Search"})]})]})}),Object(a.jsx)("div",{className:"card-deck",children:Object(a.jsx)(x,{makeDelegate:this.makeDelegate,makeGuest:this.makeGuest,admit:this.admit,exclude:this.exclude,deleteDelegate:this.delete,delegates:this.props.searchResults,justMounted:this.state.justMounted})})]})}}]),s}(c.a.Component),v=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.props.getGuests()},a.makeDelegate=function(e,t){h.a.post("".concat(b.serverUrl,"/makedelegate/").concat(t)).then((function(e){console.log(e),"OK"===e.statusText&&(a.props.getGuests(),console.log("Guest is now a Delegate"))}))},a.makeGuest=function(e,t){h.a.post("".concat(b.serverUrl,"/makevip/").concat(t)).then((function(e){console.log(e),"OK"===e.statusText&&(a.props.getGuests(),console.log("Delegate is now a Guest"))}))},a.admit=function(e,t){h.a.post("".concat(b.serverUrl,"/admit/").concat(t)).then((function(e){"OK"===e.statusText&&(a.props.getGuests(),console.log("Attendee has now been Admitted"))}))},a.exclude=function(e,t){h.a.post("".concat(b.serverUrl,"/exclude/").concat(t)).then((function(e){"OK"===e.statusText&&(a.props.getGuests(),console.log("Attendee has now been Excluded"))}))},a.delete=function(e,t){h.a.delete("".concat(b.serverUrl,"/delete/").concat(t)).then((function(e){"OK"===e.statusText&&(a.props.getGuests(),console.log("Attendee has now been Deleted"))}))},a.state={searching:!1,searchOption:"firstname",searchText:""},a}return Object(i.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container px-0",children:[Object(a.jsx)("div",{className:"row mb-4",children:Object(a.jsx)("div",{className:"col col-lg-6 offset-lg-3 px-0",children:Object(a.jsx)("header",{children:Object(a.jsx)("h4",{children:"All Guests"})})})}),Object(a.jsx)("div",{className:"card-deck",children:Object(a.jsx)(x,{delegates:this.props.guests,makeDelegate:this.makeDelegate,makeGuest:this.makeGuest,exclude:this.exclude,admit:this.admit,deleteDelegate:this.delete})})]})}}]),s}(c.a.Component),N=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).componentDidMount=function(){h.a.post("http://localhost:8080/wakeup").then((function(e){"OK"===e.statusText&&n.setState({ready:!0})})),n.getAdmittedAttendees(),n.getGuests()},n.setCurrentPage=function(e){n.setState({currentPage:e})},n.clearSearchResults=function(){n.setState({searchResults:[]})},n.getAdmittedAttendees=function(){h.a.get("".concat(b.serverUrl,"/admitted")).then((function(e){"OK"===e.statusText&&n.setState({admittedAttendees:e.data})}))},n.getGuests=function(){h.a.get("".concat(b.serverUrl,"/vip")).then((function(e){"OK"===e.statusText&&n.setState({vipAttendees:e.data})}))},n.storeSearchResults=function(e){n.setState({searchResults:e})},n.allDelegates=function(){if("allAttendees"===n.state.currentPage)return Object(a.jsx)(f,{searchResults:n.state.searchResults,storeSearchResults:n.storeSearchResults,clearSearchResults:n.clearSearchResults})},n.admittedAttendees=function(){if("admittedAttendees"===n.state.currentPage)return Object(a.jsx)(O,{admittedAttendees:n.state.admittedAttendees,getAdmittedAttendees:n.getAdmittedAttendees})},n.guests=function(){if("guests"===n.state.currentPage)return Object(a.jsx)(v,{guests:n.state.vipAttendees,getGuests:n.getGuests,getAdmittedAttendees:n.getAdmittedAttendees})},n.state={currentPage:"allAttendees",ready:!1,searchResults:[],admittedAttendees:[],vipAttendees:[]},n}return Object(i.a)(s,[{key:"render",value:function(){return this.state.ready?Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(p,{setCurrentPage:this.setCurrentPage}),this.allDelegates(),this.admittedAttendees(),this.guests(),Object(a.jsx)(g,{})]}):Object(a.jsxs)("div",{className:"text-center border border-primary d-flex align-items-center justify-content-center",style:{height:"100vh"},children:[Object(a.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(a.jsx)("span",{className:"h4 ml-3 mt-2",children:"Getting things ready"})]})}}]),s}(c.a.Component),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),c(e),o(e)}))};s(45),s(46);l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),A()}},[[50,1,2]]]);
//# sourceMappingURL=main.320372b4.chunk.js.map