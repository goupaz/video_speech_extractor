(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),i=n(7),a=n.n(i),r=(n(25),n(3)),l=(n(26),n(0));function o(t){return Object(l.jsxs)("header",{className:"flex text-center",children:[Object(l.jsx)("h1",{children:t.children}),Object(l.jsxs)("div",{style:{flex:1},children:[Object(l.jsx)("button",{className:"link",onClick:function(){return t.setPage(null)},children:"HOME"}),Object(l.jsx)("button",{className:"link",onClick:function(){return t.setPage("upload")},children:"UPLOAD NEW VIDEO"}),Object(l.jsx)("button",{className:"link",onClick:function(){return t.setPage("transcripts")},children:"TRANSCRIPTS"})]})]})}var d=n(4),u=n(9),j=n(10),h=n(12),p=n(11),b=n(8),f=n.n(b).a.create({baseURL:"/"}),O=(n(6),n(46),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={video:null},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.vid.inProgress||f.get("/api/transcript/list/".concat(this.props.vid.id)).then((function(e){var n=e.data;t.setState(Object(d.a)(Object(d.a)({},t.state),{},{video:n}))}))}},{key:"render",value:function(){var t=this;return this.props.vid.inProgress?Object(l.jsx)("h2",{children:"in progress..."}):this.state.video?Object(l.jsxs)("div",{className:"flex flex-column",children:[Object(l.jsxs)("strong",{children:["file name: ",this.state.video.filename]}),Object(l.jsxs)("strong",{children:["file size: ",this.state.video.length," bytes"]}),Object(l.jsxs)("strong",{children:["uploaded at: ",this.state.video.uploadDate]}),Object(l.jsx)("a",{href:"/api/transcript/list/".concat(this.state.video._id,"/download/"),children:"Download transcript"}),this.state.video.transcript.map((function(t,e){return Object(l.jsxs)("div",{className:"transcript-item flex flex-column",children:[Object(l.jsxs)("label",{htmlFor:"inp-".concat(e),children:[Math.round(t.seconds)," seconds"]}),Object(l.jsx)("textarea",{id:"inp-".concat(e),onChange:function(e){t.speech=e.target.value},defaultValue:t.speech})]},"transcript-item-inp-".concat(e))})),Object(l.jsx)("button",{className:"btn",onClick:function(){f.post("/api/transcript/list/".concat(t.state.video._id),t.state.video.transcript).then((function(e){t.props.setVid(null)}))},children:"SAVE"})]}):null}}]),n}(s.Component)),v=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={transcripts:[],vid:null},t}return Object(j.a)(n,[{key:"loadTranscripts",value:function(){var t=this;f.get("/api/transcript/list").then((function(e){var n=e.data;t.setState({transcripts:n}),f.get("/api/transcript_generator/?fs=videos").then((function(e){var n=e.data;t.setState({transcripts:t.state.transcripts.concat(n)})}))}))}},{key:"componentDidMount",value:function(){var t=this;this.loadTranscripts(),setInterval((function(){return t.loadTranscripts()}),5e3)}},{key:"render",value:function(){var t=this;return this.state.vid?Object(l.jsx)("div",{className:"flex flex-column",children:Object(l.jsx)(O,{vid:this.state.vid,setVid:function(e){t.setState(Object(d.a)(Object(d.a)({},t.state),{},{vid:e}))}})}):this.state.transcripts&&this.state.transcripts.length?Object(l.jsx)("div",{className:"flex flex-column",children:this.state.transcripts.map((function(e,n){return Object(l.jsxs)("div",{className:"btn",onClick:function(){t.setState(Object(d.a)(Object(d.a)({},t.state),{},{vid:{id:e.video_id||e._id,inProgress:!!e.chunkSize}}))},children:[Object(l.jsx)("div",{children:e.filename}),Object(l.jsxs)("div",{children:[e.length," bytes"]}),e.chunkSize?Object(l.jsx)("div",{children:"in progress..."}):null]},"transcript-item-".concat(n))}))}):Object(l.jsx)("div",{className:"flex flex-column",children:Object(l.jsx)("h2",{children:"THERE IS NO TRANSCRIPT YET"})})}}]),n}(s.Component);var x=function(t){var e=Object(s.useState)([]),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(s.useState)(0),o=Object(r.a)(a,2),d=o[0],u=o[1],j=Object(s.useState)(null),h=Object(r.a)(j,2),p=h[0],b=h[1];return p?(t.setPage("transcripts"),null):Object(l.jsxs)("div",{className:"flex flex-column",children:[Object(l.jsx)("input",{className:"btn",onChange:function(t){i(t.target.files),u(0)},type:"file",accept:"video/mp4,.mp4,video/quicktime,.mov,video/x-msvideo,.avi"}),d?Object(l.jsxs)("div",{children:["uploading ",d,"%"]}):Object(l.jsxs)("button",{onClick:function(){var t=new FormData;t.append("filename",c[0]),f.post("/api/transcript_generator/?fs=videos",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){u(Math.round(100*t.loaded/t.total))}}).then((function(t){b(t.data)}))},children:["UPLOAD ",d,"%"]})]})};var m=function(){var t=Object(s.useState)(0),e=Object(r.a)(t,2),n=(e[0],e[1]),c=Object(s.useState)(null),i=Object(r.a)(c,2),a=i[0],d=i[1];return f("/api/transcript/list").then((function(t){var e=t.data;n(e instanceof Array&&e.length||0)})).catch((function(t){return null})),"transcripts"===a?Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{setPage:function(t){return d(t)},children:"TRANSCRIPT EXTRACTOR - LIST"}),Object(l.jsx)("div",{className:"container flex",children:Object(l.jsx)(v,{setPage:function(t){return d(t)}})})]}):"upload"===a?Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{setPage:d,children:"TRANSCRIPT EXTRACTOR - UPLOAD"}),Object(l.jsx)("div",{className:"container flex",children:Object(l.jsx)(x,{setPage:function(t){return d(t)}})})]}):Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(o,{setPage:function(t){return d(t)},children:"TRANSCRIPT EXTRACTOR"})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),g()},6:function(t,e,n){}},[[47,1,2]]]);