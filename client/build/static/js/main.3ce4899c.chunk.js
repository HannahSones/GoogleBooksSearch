(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),c=a.n(r),l=a(6),s=a(7),i=a(9),u=a(8),m=a(10),d=a(12),h=a(11);a(41);var v=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg text-light"},o.a.createElement("div",{className:"container"},o.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Google Books"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"}," ","Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(d.b,{to:"/saved",className:"/saved"===window.location.pathname?"nav-link active":"nav-link"},"Saved")))))},f=(a(46),a(14)),b=a.n(f);a(23);var p=function(){return Object(n.useEffect)(function(){b.a.init(),b.a.refresh()}),o.a.createElement("div",{className:"jumbotron text-center"},o.a.createElement("div",{className:"container","data-aos":"fade-up","data-aos-duration":"2000"},o.a.createElement("h1",null,"Search and save the books you love"),o.a.createElement("i",{class:"fas fa-book-open fa-2x"})))};var k=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))},E=a(35);a(47);var g=function(e){return Object(n.useEffect)(function(){b.a.init(),b.a.refresh()}),o.a.createElement("div",{className:"container","data-aos":"fade-right","data-aos-duration":"2000"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},o.a.createElement("h4",null,"Enter the book name or author")),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Type the book name or author",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn mt-3 mb-5"},"Search"))))},N=a(16),B=a.n(N),j={getBook:function(e){return B.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e))},deleteBook:function(e){return B.a.delete("/api/books/"+e).then(function(e){return e.data})},saveBook:function(e){return B.a.post("/api/books",e).then(function(e){return e.data})},savedBooks:function(){return B.a.get("/api/books").then(function(e){return e.data})}},y=(a(66),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a.handleSave=function(e){a.state.savedBooks.map(function(e){return e._id}).includes(e._id)?j.deleteBook(e._id).then(function(e){return a.setState({savedBooks:a.state.savedBooks.filter(function(t){return t._id!==e._id})})}).catch(function(e){return console.error(e)}):j.saveBook(e).then(function(e){return a.setState({savedBooks:a.state.savedBooks.concat([e])})}).catch(function(e){return console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{"data-aos":"fade-up","data-aos-duration":"2500","data-aos-delay":"500"},this.props.books.length?o.a.createElement("div",null,this.props.books.map(function(t){return o.a.createElement("div",{className:"card mb-3",key:t._id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("img",{alt:t.title,className:"img-fluid",src:t.image})),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},t.title," by ",t.authors),o.a.createElement("p",{className:"card-text"},t.description),o.a.createElement("div",null,o.a.createElement("a",{href:t.link,className:"btn badge-pill btn-outline-dark mt-3",target:"_blank"},"View"),o.a.createElement("button",{onClick:function(){return e.handleSave(t)},className:"btn badge-pill btn-outline-info mt-3 ml-3"},e.state.savedBooks.map(function(e){return e._id}).includes(t._id)?"Remove":"Save"))))))})):o.a.createElement("h4",{className:"text-center"},"No results to display"))}}]),t}(n.Component)),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",books:[]},a.makeBook=function(e){return{_id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink}},a.searchBook=function(e){j.getBook(e).then(function(e){return a.setState({books:e.data.items.map(function(e){return a.makeBook(e)})})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(E.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBook(a.state.search)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchBook()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{search:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),o.a.createElement("div",{className:"container resultsData"},o.a.createElement("h3",null,"Search results"),o.a.createElement(y,{books:this.state.books})))}}]),t}(o.a.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.savedBooks().then(function(t){return e.setState({savedBooks:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h3",null,"My saved books"),o.a.createElement(y,{books:this.state.savedBooks}))}}]),t}(n.Component),S=(a(67),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(p,null),o.a.createElement(k,null,o.a.createElement(h.a,{exact:!0,path:"/",component:O}),o.a.createElement(h.a,{exact:!0,path:"/search",component:O}),o.a.createElement(h.a,{exact:!0,path:"/saved",component:w}))))}}]),t}(n.Component));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3ce4899c.chunk.js.map