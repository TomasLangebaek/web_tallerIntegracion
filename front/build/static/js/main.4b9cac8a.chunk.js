(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(6),a=n.n(r),i=n(0);var j=n(2),s=function(e){var t=Object(c.useState)({name:e.offer.name,company:e.offer.company,salary:e.offer.salary,city:e.offer.city}),n=Object(j.a)(t,1)[0];return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:n.name}),Object(i.jsx)("h3",{children:n.company}),Object(i.jsx)("h4",{children:n.salary}),Object(i.jsx)("h5",{children:n.city}),Object(i.jsx)("hr",{})]})})},o=function(){var e=Object(c.useState)({offers:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("/offers").then((function(e){return e.json()})).then((function(e){r({offers:e})}))}),[]),Object(i.jsx)("div",{children:n.offers.map((function(e,t){return Object(i.jsx)(s,{offer:e},t)}))})},h=n(3),b=n(5),l=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1];return{handleSubmit:function(e){e.preventDefault();fetch("/offers",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(e){return console.log("Success:",e)})),o.forceUpdate()},handleInputChange:function(e){r(Object(b.a)(Object(b.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))}}};var f=function(){var e=l(),t=e.handleSubmit,n=e.handleInputChange;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{type:"text",id:"name",name:"name",onChange:n})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"company",children:"Company"}),Object(i.jsx)("input",{type:"text",id:"company",name:"company",onChange:n})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"salary",children:"Salary"}),Object(i.jsx)("input",{type:"text",id:"salary",name:"salary",onChange:n})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"city",children:"City"}),Object(i.jsx)("input",{type:"text",id:"city",name:"city",onChange:n})]}),Object(i.jsx)("button",{type:"submit",children:"Register"})]})})};a.a.render(Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{})]}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4b9cac8a.chunk.js.map