(this.webpackJsonpmoodify=this.webpackJsonpmoodify||[]).push([[0],{22:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=n(2),l=n.n(s),i=n(7),u=n(21),m=n(5),p=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{});window.location.hash="";var f,d=p,b=Object(a.createContext)(),h=function(e){var t=e.children,n=Object(a.useState)({x:10,y:10}),c=Object(m.a)(n,2),o=c[0],s=c[1],p=Object(a.useState)(null),f=Object(m.a)(p,2),h=f[0],x=f[1],y=Object(a.useState)(null),v=Object(m.a)(y,2),g=v[0],E=v[1],j=Object(a.useState)([]),O=Object(m.a)(j,2),k=O[0],w=O[1],N=Object(a.useState)(null),C=Object(m.a)(N,2);C[0],C[1];function S(e){w(k.filter((function(t){return t!==e})))}function _(){return(_=Object(i.a)(l.a.mark((function e(){var t,n,a,r,c,s,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t="",n=0;n<k.length;n++)t+=k[n]+",";return a=t.slice(0,t.length-1),console.log(a),r=o.x/100,c=Math.abs(o.y-100)/100,s="https://api.spotify.com/v1/recommendations?seed_genres=".concat(a,"&min_popularity=65&target_valence=").concat(r.toFixed(1),"&target_energy=").concat(c.toFixed(1)),e.next=9,fetch(s,{headers:{Authorization:"Bearer "+h}});case 9:return i=e.sent,e.next=12,i.json();case 12:u=e.sent,console.log(u),E(u.tracks);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+h}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n.id);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=e.sent,e.next=5,fetch("https://api.spotify.com/v1/users/".concat(t,"/playlists"),{method:"POST",headers:{Authorization:"Bearer "+h,"Content-Type":"application/json"},body:JSON.stringify({name:"Moodify Recommendations"})});case 5:return n=e.sent,e.next=8,n.json();case 8:G(e.sent.id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.spotify.com/v1/playlists/".concat(t,"/tracks"),e.next=3,fetch(n,{method:"PUT",headers:{Authorization:"Bearer "+h,"Content-Type":"application/json"},body:JSON.stringify({uris:g.map((function(e){return e.uri}))})});case 3:a="https://open.spotify.com/playlist/".concat(t),window.open(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(b.Provider,{value:{token:h,fetchAccessToken:function(){console.log(d.access_token),x(d.access_token),P()},addGenre:function(e){k.length>5||(k.includes(e)?S(e):w([].concat(Object(u.a)(k),[e])),console.groupCollapsed(k))},removeGenre:S,genresPicked:k,state:o,setState:s,fetchRecommendedSongs:function(){return _.apply(this,arguments)},tracks:g,reset:function(){E(null),w([])},createPlaylist:function(){return B.apply(this,arguments)}}},t)},x=["user-read-email","playlist-modify-public"];f="https://react-spotify-db.herokuapp.com/";var y=function(){return r.a.createElement("a",{href:"".concat("https://accounts.spotify.com/authorize?","client_id=").concat("29014fd46c7b4f54a73386b862156072","&redirect_uri=").concat(f,"&scope=").concat(x.join("%20"),"&response_type=token&show_dialog=true"),className:"mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Login with Spotify")},v=n(3),g=n(20),E=n(4);function j(){var e=Object(v.a)(["\n  position: absolute;\n  top: 40%;\n  right: -50px;\n"]);return j=function(){return e},e}function O(){var e=Object(v.a)(["\n  position: absolute;\n  top: 40%;\n  left: -35px;\n"]);return O=function(){return e},e}function k(){var e=Object(v.a)(["\n  position: absolute;\n  bottom: -40px;\n  right: 40%;\n"]);return k=function(){return e},e}function w(){var e=Object(v.a)(["\n  position: absolute;\n  top: -40px;\n  right: 40%;\n"]);return w=function(){return e},e}var N=E.a.p(w()),C=E.a.p(k()),S=E.a.p(O()),_=E.a.p(j());function P(){var e=Object(v.a)(["\n  display: inline-block;\n  position: relative;\n"]);return P=function(){return e},e}var A=E.a.div(P());var B=function(){var e=Object(a.useContext)(b),t=e.state,n=e.setState;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"},className:"mb-20"},r.a.createElement(A,null,r.a.createElement(N,null,"Energetic"),r.a.createElement(C,null,"Peaceful"),r.a.createElement(S,null,"Sad"),r.a.createElement(_,null,"Happy"),r.a.createElement(g.a,{axis:"xy",x:t.x,y:t.y,onChange:n})))};var G=function(){var e=Object(a.useContext)(b).addGenre;return r.a.createElement("div",{className:"flex flex-wrap content-center"},["alternative","anime","chill","classical","country","dance","disco","dubstep","edm","emo","indie","metal","party","punk","rock","r-n-b","study","techno","trance"].map((function(t,n){return r.a.createElement("span",{className:"mr-5 mb-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",key:n,onClick:function(){return e(t)}},t)})))};var T=function(){var e=Object(a.useContext)(b).fetchRecommendedSongs;return r.a.createElement("button",{className:"mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:e},"Get Songs")};var z=function(){var e=Object(a.useContext)(b).tracks;return r.a.createElement("div",{className:"flex justify-center w-11/12 max-w-5xl m-4 "},r.a.createElement("div",{className:"grid gap-1 grid-cols-4 justify-center"},e.map((function(e){return r.a.createElement("div",{className:"flex mr-5 mb-3 align-center w-64 h-24 p-2"},r.a.createElement("img",{className:"h-16 w-16 rounded-sm",src:e.album.images[2].url}),r.a.createElement("div",{className:"p-2"},r.a.createElement("p",null,e.artists[0].name),r.a.createElement("p",null,e.name)))}))))};var J=function(){var e=Object(a.useContext)(b).reset;return r.a.createElement("button",{className:"mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:e},"Go Back")};var M=function(){var e=Object(a.useContext)(b).createPlaylist;return r.a.createElement("button",{className:"mt-10 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:e},"Create Playlist")};var R=function(){var e=Object(a.useContext)(b),t=e.fetchAccessToken,n=e.token,c=e.tracks;return Object(a.useEffect)((function(){t()}),[]),r.a.createElement("div",null,!n&&r.a.createElement("div",{className:"container mt-20 mx-auto flex flex-col items-center content-center"},r.a.createElement("h1",{className:"text-5xl"},"Moodify"),r.a.createElement("h3",{className:"text-3xl"},"Get a recommended playlist of songs based on your mood."),r.a.createElement("h3",{className:"text-3xl"},"Connect to your Spotify Account to begin."),r.a.createElement(y,null)),n&&!c&&r.a.createElement("div",{className:"container mt-10 mx-auto flex flex-col items-center content-center"},r.a.createElement("h3",{className:"text-3xl mb-20"},"What type of mood are you in?"),r.a.createElement(B,null),r.a.createElement("h3",{className:"text-3xl mb-10"},"Pick up to 5 genres."),r.a.createElement(G,null),r.a.createElement(T,null)),c&&r.a.createElement("div",{className:"flex justify-center items-center flex-col"},r.a.createElement("h3",{className:"text-3xl mt-20 mb-12"},"Here are your recommended songs:"),r.a.createElement(z,null),r.a.createElement("div",{className:"mb-10"},r.a.createElement(M,null),r.a.createElement(J,null))))};n(30);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null,r.a.createElement(R,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0eaf87f5.chunk.js.map