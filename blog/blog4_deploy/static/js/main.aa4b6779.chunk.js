(this.webpackJsonpblog4=this.webpackJsonpblog4||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),a=n.n(o),s=n(10),l=n(5),d=n(2),i=n(7),j=n.n(i),u=n(0),b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steeblue"},b.protoTypes={text:j.a.string,color:j.a.string};var O=b,h=function(e){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{style:x,children:e.title}),Object(u.jsx)(O,{onClick:e.onAdd,color:e.showAdd?"red":"green",text:e.showAdd?"Close":"Add"})]})};h.defaultProps={title:"Task Tracker"};var x={color:"black"},m=h,f=n(9),p=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text,Object(u.jsx)(f.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(p,{task:e,onDelete:n,onToggle:c},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),l=Object(d.a)(s,2),i=l[0],j=l[1],b=Object(c.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:i,reminder:h}),a(""),j(""),x(!1)):alert("please add a task!")},children:[Object(u.jsxs)("div",{className:"form-control2",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control2",children:[Object(u.jsx)("label",{children:"Day"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control2 form-control-check",children:[Object(u.jsx)("label",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};n(18);var v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"2021/4/26",reminder:!0},{id:2,text:"Meeting at School",day:"2021/4/26",reminder:!0},{id:3,text:"Do Homework",day:"2021/4/26",reminder:!0}]),a=Object(d.a)(o,2),i=a[0],j=a[1];return Object(u.jsxs)("div",{className:"container2",children:[Object(u.jsx)(m,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(u.jsx)(k,{onAdd:function(e){console.log(e);var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);j([].concat(Object(s.a)(i),[n]))}}),i.length>0?Object(u.jsx)(g,{tasks:i,onDelete:function(e){console.log("delete",e),j(i.filter((function(t){return t.id!==e})))},onToggle:function(e){console.log(e),j(i.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(u.jsx)("p",{children:"no tasks to show"})]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.aa4b6779.chunk.js.map