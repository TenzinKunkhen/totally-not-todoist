(this.webpackJsonptodoist=this.webpackJsonptodoist||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a(1),l=a(2),o=a(3),d=a.n(o),i=a(14),u=a.n(i),m=(a(23),u.a.initializeApp({apiKey:"AIzaSyCBfjjprMFpTB7qIUZpZrEu1RzmHRcn0Cs",authDomain:"totally-not.firebaseapp.com",databaseURL:"https://totally-not.firebaseio.com",projectId:"totally-not",storageBucket:"totally-not.appspot.com",messagingSenderId:"629099667039",appId:"1:629099667039:web:1e1dbeae6b0a4a5dab85ea",measurementId:"G-MLQ1LS1S78"})),j=a(7),p=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"NEXT_7",name:"Next 7 days"}],f=function(e){return p.find((function(t){return t.key===e}))},E=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var a=(new Date).getTime(),n=new Array(8),c=7;c>=0;c--)n[c]=e.charAt(a%64),a=Math.floor(a/64);var r=n.join("");for(c=0;c<12;c++)r+=e.charAt(t[c]);return r}}(),k=Object(n.createContext)(),b=function(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m.firestore().collection("projects").where("userId","==","atasfdherthyhjwrqer").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{docId:e.id})}));JSON.stringify(t)!==JSON.stringify(a)&&c(t)}))}),[a]),{projects:a,setProjects:c}}(),r=a.projects,l=a.setProjects;return c.a.createElement(k.Provider,{value:{projects:r,setProjects:l}},t)},v=function(){return Object(n.useContext)(k)},h=Object(n.createContext)(),_=function(e){var t=e.children,a=Object(n.useState)("INBOX"),r=Object(s.a)(a,2),l=r[0],o=r[1];return c.a.createElement(h.Provider,{value:{selectedProject:l,setSelectedProject:o}},t)},O=function(){return Object(n.useContext)(h)},N=function(e){var t=e.setProject,a=e.showProjectOverlay,n=e.setShowProjectOverlay,r=v().projects;return r&&a&&c.a.createElement("div",{className:"project-overlay","data-testid":"project-overlay"},c.a.createElement("ul",{className:"project-overlay__list"},r.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-testid":"project-overlay-action",onClick:function(){t(e.projectId),n(!1)}},e.name)}))))},y=function(e){var t=e.setTaskDate,a=e.showTaskDate,n=e.setShowTaskDate;return a&&c.a.createElement("div",{className:"task-date","data-testid":"task-date-overlay"},c.a.createElement("ul",{className:"task-date__list"},c.a.createElement("li",{onClick:function(){n(!1),t(d()().format("DD/MM/YYYY"))},"datatest-id":"task-date-overlay"},c.a.createElement("span",null,c.a.createElement(l.h,null)),c.a.createElement("span",null,"Today")),c.a.createElement("li",{onClick:function(){n(!1),t(d()().add(1,"day").format("DD/MM/YYYY"))},"datatest-id":"task-date-tomorrow"},c.a.createElement("span",null,c.a.createElement(l.i,null)),c.a.createElement("span",null,"Tomorrow")),c.a.createElement("li",{onClick:function(){n(!1),t(d()().add(7,"days").format("DD/MM/YYYY"))},"datatest-id":"task-date-next-week"},c.a.createElement("span",null,c.a.createElement(l.g,null)),c.a.createElement("span",null,"Next Week"))))},w=function(e){var t=e.showAddTaskMain,a=void 0===t||t,r=e.shouldShowMain,o=void 0!==r&&r,i=e.showQuickAddTask,u=e.setShowQuickAddTask,j=Object(n.useState)(""),p=Object(s.a)(j,2),f=p[0],E=p[1],k=Object(n.useState)(""),b=Object(s.a)(k,2),v=b[0],h=b[1],_=Object(n.useState)(""),w=Object(s.a)(_,2),S=w[0],C=w[1],I=Object(n.useState)(o),Y=Object(s.a)(I,2),D=Y[0],T=Y[1],x=Object(n.useState)(!1),M=Object(s.a)(x,2),g=M[0],P=M[1],A=Object(n.useState)(!1),B=Object(s.a)(A,2),X=B[0],q=B[1],Q=O().selectedProject,J=function(){var e=S||Q,t="";return"TODAY"===e?t=d()().format("DD/MM/YYYY"):"NEXT_7"===e&&(t=d()().add(7,"days").format("DD/MM/YYYY")),f&&e&&m.firestore().collection("tasks").add({archived:!1,projectId:e,task:f,date:t||v,userId:"atasfdherthyhjwrqer"}).then((function(){E(""),C(""),T(""),P(!1)}))};return c.a.createElement("div",{className:i?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp"},a&&c.a.createElement("div",{className:"add-task__shallow","datatest-id":"show-main-action",onClick:function(){return T(!D)}},c.a.createElement("span",{className:"add-task__plus"},"+"),c.a.createElement("span",{className:"add-task__text"},"Add Task")),(D||i)&&c.a.createElement("div",{className:"add-task__main","data-testid":"add-task-main"},i&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{"datatest-id":"quick-add-task"},c.a.createElement("h2",{className:"header"},"Quick Add Task"),c.a.createElement("span",{className:"add-task__cancel-x","data-testid":"add-task-quick-cancel",onClick:function(){T(!1),P(!1),u(!1)}},"X"))),c.a.createElement(N,{setProject:C,showProjectOverlay:g,setShowProjectOverlay:P}),c.a.createElement(y,{setTaskDate:h,showTaskDate:X,setShowTaskDate:q}),c.a.createElement("input",{className:"add-task__content","data-testid":"add-task-content",type:"text",value:f,onChange:function(e){return E(e.target.value)}}),c.a.createElement("button",{type:"button",className:"add-task__submit","data-testid":"add-task",onClick:function(){return i?J()&&u(!1):J()}},"Add task"),!i&&c.a.createElement("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){T(!1),P(!1)}},"Cancel"),c.a.createElement("span",{className:"add-task__project","datatest-id":"show-project-overlay",onClick:function(){return P(!g)}},c.a.createElement(l.f,null)),c.a.createElement("span",{className:"add-task__date","datatest-id":"show-task-date-overlay",onClick:function(){return q(!X)}},c.a.createElement(l.e,null))))},S=function(e){var t=e.darkMode,a=e.setDarkMode,r=Object(n.useState)(!1),o=Object(s.a)(r,2),d=o[0],i=o[1],u=Object(n.useState)(!1),m=Object(s.a)(u,2),j=m[0],p=m[1];return c.a.createElement("header",{className:"header","data-testid":"header"},c.a.createElement("nav",null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/images/logo.png",alt:"Todoist"})),c.a.createElement("div",{className:"settings"},c.a.createElement("ul",null,c.a.createElement("li",{"dara-testid":"quick-add-task-action",className:"settings__add",onClick:function(){p(!0),i(!0)}},"+"),c.a.createElement("li",{"data-testid":"dark-mode-action",className:"settings__darkmode",onClick:function(){return a(!t)}},c.a.createElement(l.c,null))))),c.a.createElement(w,{showAddTaskMain:!1,shouldShowMain:d,showQuickAddTask:j,setShowQuickAddTask:p}))},C=a(6),I=function(e){var t=e.project,a=Object(n.useState)(!1),r=Object(s.a)(a,2),o=r[0],d=r[1],i=v(),u=i.projects,j=i.setProjects,p=O().setSelectedProject;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar__dot"},"\u2022"),c.a.createElement("span",{className:"sidebar__project-name"},t.name),c.a.createElement("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return d(!o)}},c.a.createElement(l.j,null),o&&c.a.createElement("div",{className:"project-delete-modal"},c.a.createElement("div",{className:"project-delete-modal__inner"},c.a.createElement("p",null," Are you sure you want to delete this project?"),c.a.createElement("button",{type:"button",onClick:function(){return e=t.docId,void m.firestore().collection("projects").doc(e).delete().then((function(){j(Object(C.a)(u)),p("INBOX")}));var e}},"Delete"),c.a.createElement("span",{onClick:function(){return d(!o)}},"Cancel")))))},Y=function(e){var t=e.activeValue,a=void 0===t||t,r=Object(n.useState)(a),l=Object(s.a)(r,2),o=l[0],d=l[1],i=O().setSelectedProject,u=v().projects;return u&&u.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-doc-id":e.docId,"data-testid":"project-action",className:o===e.projectId?"active sidebar__project":"sidebar__project",onClick:function(){d(e.projectId),i(e.projectId)},onKeyDown:function(){d(e.projectId),i(e.projectId)}},c.a.createElement(I,{project:e}))}))},D=function(e){var t=e.shouldShow,a=void 0!==t&&t,r=Object(n.useState)(a),l=Object(s.a)(r,2),o=l[0],d=l[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),j=u[0],p=u[1],f=E(),k=v(),b=k.projects,h=k.setProjects;return c.a.createElement("div",{className:"add-project","data-testid":"add-project"},o&&c.a.createElement("div",{className:"add-project__input"},c.a.createElement("input",{value:j,onChange:function(e){return p(e.target.value)},className:"add-project__name","data-testid":"project-name",type:"text",placeholder:"Name your project"}),c.a.createElement("button",{className:"add-project__submit",type:"button",onClick:function(){return j&&m.firestore().collection("projects").add({projectId:f,name:j,userId:"atasfdherthyhjwrqer"}).then((function(){h(Object(C.a)(b)),p(""),d(!1)}))},"data-testid":"add-project-submit"},"Add Project"),c.a.createElement("span",{"data-testid":"hide-project-overlay",className:"add-project__cancel",onClick:function(){return d(!1)}},"Cancel")),c.a.createElement("span",{className:"add-project__plus"},"+"),c.a.createElement("span",{"data-testid":"add-project-action",className:"add-project__text",onClick:function(){return d(!o)}},"Add Project"))},T=function(){var e=O().setSelectedProject,t=Object(n.useState)("inbox"),a=Object(s.a)(t,2),r=a[0],o=a[1],d=Object(n.useState)(!0),i=Object(s.a)(d,2),u=i[0],m=i[1];return c.a.createElement("div",{className:"sidebar","data-testid":"sidebar"},c.a.createElement("ul",{className:"sidebar__generic"},c.a.createElement("li",{"data-testid":"inbox",className:"inbox"===r?"active":void 0,onClick:function(){o("inbox"),e("INBOX")}},c.a.createElement("span",null,c.a.createElement(l.b,null)),c.a.createElement("span",null,"Inbox")),c.a.createElement("li",{"data-testid":"today",className:"today"===r?"active":void 0,onClick:function(){o("today"),e("TODAY")}},c.a.createElement("span",null,c.a.createElement(l.d,null)),c.a.createElement("span",null,"Today")),c.a.createElement("li",{"data-testid":"next_7",className:"next_7"===r?"active":void 0,onClick:function(){o("next_7"),e("NEXT_7")}},c.a.createElement("span",null,c.a.createElement(l.e,null)),c.a.createElement("span",null,"Next 7 days"))),c.a.createElement("div",{className:"sidebar__middle",onClick:function(){return m(!u)}},c.a.createElement("span",null,c.a.createElement(l.a,{className:u?void 0:"hidden-projects"})),c.a.createElement("h2",null,"Projects")),c.a.createElement("ul",{className:"sidebar__projects"},u&&c.a.createElement(Y,null)),u&&c.a.createElement(D,null))},x=function(e){var t=e.id;return c.a.createElement("div",{className:"checkbox-holder","data-testid":"checkbox-action",onClick:function(){m.firestore().collection("tasks").doc(t).update({archived:!0})}},c.a.createElement("span",{className:"checkbox"}))},M=function(){var e=O().selectedProject,t=v().projects,a=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){var t=m.firestore().collection("tasks").where("userId","==","atasfdherthyhjwrqer");return t=(t=e&&!f(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",d()().format("DD/MM/YYYY")):"INBOX"===e||0===e?t=t.where("date","==",""):t).onSnapshot((function(t){var a=t.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));r("NEXT_7"===e?a.filter((function(e){return d()(e.date,"DD-MM-YYYY").diff(d()(),"days")<=7&&!0!==e.archived})):a.filter((function(e){return!0!==e.archived}))),u(a.filter((function(e){return!1!==e.archived})))})),function(){return t()}}),[e]),{tasks:c,archivedTasks:i}}(e).tasks,r="";return t.length>0&&e&&!f(e)&&(r=function(e,t){return e.find((function(e){return e.projectId===t}))}(t,e).name),f(e)&&e&&(r=function(e,t){return e.find((function(e){return e.key===t}))}(p,e).name),Object(n.useEffect)((function(){document.title="".concat(r,": Todoist")})),c.a.createElement("div",{className:"tasks","data-testid":"tasks"},c.a.createElement("h2",{"data-testid":"project-name"},r),c.a.createElement("ul",{className:"tasks__list"},a.map((function(e){return c.a.createElement("li",{key:"".concat(e.id)},c.a.createElement(x,{id:e.id}),c.a.createElement("span",null,e.task))}))),c.a.createElement(w,null))},g=function(){return c.a.createElement("section",{className:"content"},c.a.createElement(T,null),c.a.createElement(M,null))},P=function(e){var t=e.darkModeDefault,a=void 0!==t&&t,r=Object(n.useState)(a),l=Object(s.a)(r,2),o=l[0],d=l[1];return c.a.createElement(_,null,c.a.createElement(b,null,c.a.createElement("main",{"datatest-id":"application",className:o?"darkmode":void 0},c.a.createElement(S,{darkMode:o,setDarkMode:d}),c.a.createElement(g,null))))};a(27);Object(r.render)(c.a.createElement(P,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2773fdb.chunk.js.map