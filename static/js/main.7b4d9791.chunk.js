(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://vignette.wikia.nocookie.net/friends/images/2/24/TOWRachelQuits.png/revision/latest?cb=20180214112745"},{id:2,image:"https://vignette.wikia.nocookie.net/friends/images/5/5c/TOWRoss%27Tan.png/revision/latest?cb=20180612053911"},{id:3,image:"https://vignette.wikia.nocookie.net/friends/images/8/8a/TOWATThanksgivings.png/revision/latest?cb=20180304183254"},{id:4,image:"https://vignette.wikia.nocookie.net/friends/images/c/c2/Smelly_Cat.jpg/revision/latest?cb=20170222183246"},{id:5,image:"https://i0.wp.com/vignette.wikia.nocookie.net/friends/images/1/1c/TOWTCheapWeddingDress.png/revision/latest?cb=20180403153847?resize=360,260&strip=all"},{id:6,image:"https://vignette.wikia.nocookie.net/friends/images/a/af/9x08-JoeysSurprise.jpg/revision/latest?cb=20090215065213"},{id:7,image:"https://vignette.wikia.nocookie.net/friends/images/f/f7/Gunther.jpg/revision/latest?cb=20070709211331"},{id:8,image:"https://cdn.newsapi.com.au/image/v1/4517198a073eb0ddaf5c5cac1f2f442b"},{id:9,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUh5hApM-Ti0UmFn9AIEu6VgGqT4ydfwzeL7x1eomF5v63-PUb"},{id:10,image:"https://www.thewrap.com/wp-content/uploads/2018/10/Friends.png"},{id:11,image:"https://vignette.wikia.nocookie.net/friends/images/9/9b/Ben_gellar_s.jpg/revision/latest/scale-to-width-down/267?cb=20141017042338"},{id:12,image:"https://i0.wp.com/culturedvultures.com/wp-content/uploads/2018/12/The-Holiday-Armadillo.jpg"}]},,,function(e,t,i){e.exports=i(21)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(2),s=i.n(c),r=i(3),o=i(4),l=i(7),m=i(5),d=i(8),g=(i(15),function(e){return a.a.createElement("div",{className:"card",onClick:e.imageClick},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.image.replace(".jpg",""),src:e.image})))}),u=(i(16),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),p=i(6),f=(i(17),function(){return a.a.createElement("header",{className:"footer"},a.a.createElement("p",null,"Clicky Game ",a.a.createElement("br",null),a.a.createElement("img",{class:"react",src:"https://sap.github.io/ui5-webcomponents/images/react.svg",alt:"React Logo"})))}),h=(i(18),function(){return a.a.createElement("div",{class:"jumbotron"},a.a.createElement("h1",null,"Friends: A Clicky Game!"),a.a.createElement("h4",null,"Click on any image to earn points, but don't click on the same picture twice!"))}),v=(i(19),function(e){return a.a.createElement("nav",{class:"navbar navbar-light bg-light"},a.a.createElement("div",{className:"scores"},"Score: ",e.score))}),k=function(e){function t(){var e,i;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(i=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={friends:p,clickedFriends:[],score:0},i.imageClick=function(e){var t=e.target.alt;i.state.clickedFriends.indexOf(t)>-1?(i.setState({friends:i.state.friends.sort(function(e,t){return.5-Math.random()}),clickedFriends:[],score:0}),alert("You guessed incorrectly. Play again?")):i.setState({friends:i.state.friends.sort(function(e,t){return.5-Math.random()}),clickedFriends:i.state.clickedFriends.concat(t),score:i.state.score+1},function(){12===i.state.score&&(alert("Yay! You Win!"),i.setState({friends:i.state.friends.sort(function(e,t){return.5-Math.random()}),clickedFriends:[],score:0}))})},i}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(v,{score:this.state.score,topscore:this.state.topscore}),a.a.createElement(h,null),a.a.createElement(u,null),a.a.createElement("div",{className:"wrapper"},this.state.friends.map(function(t){return a.a.createElement(g,{imageClick:e.imageClick,id:t.id,key:t.id,image:t.image})})),a.a.createElement(f,null))}}]),t}(n.Component);i(20);s.a.render(a.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7b4d9791.chunk.js.map