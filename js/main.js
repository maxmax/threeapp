(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,n,t){e.exports={btn:"btn___24-jh",topLeftBtn:"topLeftBtn___2ieeA",topRightBtn:"topRightBtn___1XcHn",bottomLeftBtn:"bottomLeftBtn___2C6fq",bottomRightBtn:"bottomRightBtn___3sRCP",actionAnarchyBtnContainer:"actionAnarchyBtnContainer___QT3d2",actionCenterBtnContainer:"actionCenterBtnContainer___1Mf9x",actionLogoBtnContainer:"actionLogoBtnContainer___eh6z5"}},,,,,,function(e,n,t){e.exports={screenLoading:"screenLoading___2OPBm",active:"active___2DCDR",dots:"dots___sNrLw"}},,,,,,,,,,,function(e,n,t){e.exports=t.p+"js/images/8085ffe6e06c24d74dcac641cec1693c.jpg"},function(e,n,t){e.exports=t.p+"js/images/4dd1cd00054c6f73b913cb1f62a342e9.jpg"},function(e,n,t){e.exports={root:"root___2oJhO",video:"video___zj0yo"}},,,,,,,,,,,,function(e,n,t){e.exports=t.p+"js/images/799d4350bac35f9b945a0596aba1af94.png"},function(e,n,t){e.exports=t.p+"js/images/db25dd5d99869be90f43ee658e5773f0.png"},function(e,n,t){e.exports=t.p+"js/images/8fae51acc0be8a5042c74e13c73c80ea.png"},function(e,n,t){e.exports=t.p+"js/images/541fdce53556c40916c51f75f7db3c36.png"},function(e,n,t){e.exports=t.p+"js/images/440026709eaae88d7a3e9239d5c1d9da.gif"},function(e,n,t){e.exports=t.p+"js/images/e1657e6efce97c8afb7cb6264ffabf9c.png"},function(e,n,t){e.exports=t.p+"js/images/69c5e1c84277e10b58024afac063ade6.jpg"},function(e,n,t){e.exports=t.p+"js/images/8a2cfb90acacb6782bd86e0a400bc323.jpg"},function(e,n,t){e.exports=t.p+"js/images/c2be9f26c000e3c7b8dc400588f06787.jpg"},function(e,n,t){e.exports=t.p+"js/images/366ded8101d09e62628a5f5aee7e3485.jpg"},function(e,n,t){e.exports=t.p+"js/images/dcbef8668fac0418a56b98802952bff4.jpg"},function(e,n,t){e.exports=t.p+"js/images/53ee5eccecf171032e81507f23b511b7.jpg"},function(e,n,t){e.exports=t.p+"js/images/1356e31b6ce0984d9ddceb3f10e305c9.jpg"},function(e,n,t){e.exports=t.p+"js/images/3de230e738a0911700c0c870d35b455f.jpg"},function(e,n,t){e.exports=t.p+"js/images/a92d7344a9ef739b0d5112e0093f7c71.jpg"},function(e,n,t){e.exports=t.p+"js/images/cb6ae3ba97eef5aeb78c9a5b202a2c5a.jpg"},function(e,n,t){e.exports=t.p+"js/images/b450e1df0c059a6eec47eb448c8d0e64.jpg"},,function(e,n,t){e.exports={root:"root___11HWz",canvasBtn:"canvasBtn___1U9Vx",headerHidden:"headerHidden___JC4pe"}},,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(30),o=t(31),c=t.n(o),d=t(1),r=t.n(d),s=t(32),p=t.n(s),m=t(33),l=t.n(m),u=t(34),f=t.n(u),h=t(35),g=t.n(h),v=t(36),b=t.n(v),B=t(37),w=t.n(B),C=document.querySelector("#app"),_={actionTopLeftBtn(){var e=document.createElement("div");e.id="actionTopLeftBtnContainer",e.classList.add(r.a.btn,r.a.topLeftBtn);var n=document.createElement("img");return n.src=f.a,e.appendChild(n),C.appendChild(e),e},actionTopRightBtn(){var e=document.createElement("div");e.id="actionTopRightBtnContainer",e.classList.add(r.a.btn,r.a.topRightBtn);var n=document.createElement("img");return n.src=l.a,e.appendChild(n),C.appendChild(e),e},actionBottomLeftBtn(){var e=document.createElement("div");e.id="actionBottomLeftBtnContainer",e.classList.add(r.a.btn,r.a.bottomLeftBtn);var n=document.createElement("img");return n.src=p.a,e.appendChild(n),C.appendChild(e),e},actionBottomRightBtn(){var e=document.createElement("div");e.id="actionBottomRightBtnContainer",e.classList.add(r.a.btn,r.a.bottomRightBtn);var n=document.createElement("img");return n.src=g.a,e.appendChild(n),C.appendChild(e),e},actionAnarchyBtn(){var e=document.createElement("div");e.id="actionAnarchyBtnContainer",e.classList.add(r.a.btn,r.a.actionAnarchyBtnContainer);var n=document.createElement("img");return n.src=b.a,e.appendChild(n),C.appendChild(e),e},logoBtn(){var e=document.createElement("div");e.id="actionLogoBtnContainer",e.classList.add(r.a.actionLogoBtnContainer);var n=document.createElement("img");return n.src=w.a,e.appendChild(n),C.appendChild(e),e},actionCenterBtn(){var e=document.createElement("div");return e.id="actionCenterBtnContainer",e.classList.add(r.a.btn,r.a.actionCenterBtnContainer),C.appendChild(e),e}},y=(t(51),t(7)),x=t.n(y),L=e=>{var n=new a.LoadingManager,t=document.getElementById("loader");return t.classList.add(x.a.screenLoading),n.onStart=(e,n,a)=>{t.classList.add(x.a.active)},n.onLoad=function(){setTimeout((function(){t.classList.remove(x.a.active)}),1600)},n},j=L(),E=new a.TextureLoader(j),M=(e,n)=>{E.load(e,(function(e){n.traverse((function(n){n instanceof a.Mesh&&(n.material.map=e,n.material.flatShading=!0,n.material.needsUpdate=!0)}))}))},T=(e,n,t)=>{var a=e.getObjectByName(n);if(a){a.parent;M(t,a)}},R=t(18),A=t.n(R),S=t(19),k=t.n(S),H=t(38),z=t.n(H),P=t(39),F=t.n(P),G=t(40),O=t.n(G),W=t(41),q=t.n(W),D=t(42),I=t.n(D),J=t(43),U=t.n(J),N=t(44),V=t.n(N),K=t(45),Q=t.n(K),X=t(46),Y=t.n(X),Z=t(47),$=t.n(Z),ee=t(48),ne=t.n(ee),te=A.a,ae=A.a,ie=(k.a,k.a),oe=z.a,ce=(U.a,V.a,Y.a,I.a,F.a,Q.a,ne.a,O.a),de=(q.a,$.a,t(49)),re="Main",se="Horns",pe="Towel",me="Glasses",le="Chain_1",ue="Hat",fe="Fangs",he="https://maxmax.github.io/threeapp/assets/",ge=new de(L());ge.crossOrigin="use-credentials";var ve=e=>{var{scene:n,option:t}=e;n.children.map((e,n)=>{"Group"===e.type&&(e.visible=!1)}),setTimeout((function(){n.children.map((e,n)=>{e.name===re?e.visible=t.mainModel||!1:e.name===se?e.visible=t.hornModel||!1:e.name===le?e.visible=t.chainModel||!1:e.name===pe?e.visible=t.towelModel||!1:e.name===ue?e.visible=t.hatModel||!1:e.name===fe?e.visible=t.fangsModel||!1:e.name===me&&(e.visible=t.glassesModel||!1)})}),1600)},be=e=>{var n,t=(n="https://maxmax.github.io/threeapp/assets/hdri-huge.jpg",E.load(n)),i=new a.MeshPhongMaterial({map:t,specular:"#000000",side:a.BackSide,name:"panoramaSphereGeometryMaterial"}),o=new a.SphereGeometry(10,128,128);i.side=a.BackSide;var c=new a.Mesh(o,i);c.rotation.y=2.2,c.rotation.x=-.3,c.side=a.BackSide,c.name="panoramaSphereGeometry",e.add(c)},Be=t(20),we=t.n(Be);var Ce=t(50),_e=t.n(Ce);!function(){var e=document.querySelector("#app"),n=window.innerWidth,t=window.innerHeight;e.classList.add(_e.a.root);var o=_.actionTopLeftBtn(),d=_.actionTopRightBtn(),r=_.actionBottomLeftBtn(),s=_.actionBottomRightBtn(),p=_.actionAnarchyBtn(),m=(_.logoBtn(),new a.WebGLRenderer({antialias:!0,alpha:!0}));m.setSize(n,t),e.appendChild(m.domElement);var l=new a.PerspectiveCamera(3,window.innerWidth/window.innerHeight,.4,1e3);l.position.x=2,l.position.y=-15,l.position.z=100;var u=new a.Scene;u.sceneType="default",u.anarchyBtnCount=0,u.actionCount=0,u.dataView="",window.addEventListener("resize",(function(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}),!1),u.add(new a.AmbientLight);var f=new c.a(l,m.domElement);(e=>{e.autoRotate=!0,e.autoRotateSpeed=.66,e.minPolarAngle=.6,e.maxPolarAngle=2.4,e.minAzimuthAngle=-1.1,e.maxAzimuthAngle=1.1,e.minDistance=90,e.maxDistance=98,e.enableKeys=!0,e.keys={LEFT:0,UP:0,RIGHT:0,BOTTOM:0},e.enablePan=!1,e.update()})(f),new i.a(m,u,l),be(u),(e=>{ge.crossOrigin="use-credentials",ge.load(he+"default/head.fbx",n=>{n.name="Main",n.visible=!1,M(te,n),e.add(n),n.position.y=-1.2,n.updateMatrix()})})(u),(e=>{ge.load(he+"default/chain.fbx",n=>{n.name="Chain_1",n.visible=!1,M(ae,n),e.add(n),n.position.y=-1.3,n.updateMatrix()})})(u),(e=>{ge.load(he+"demon/horns.fbx",n=>{n.name="Horns",n.visible=!1,M(oe,n),e.add(n),n.position.y=-1.2,n.updateMatrix()})})(u),(e=>{ge.load(he+"vampire/fangs.fbx",n=>{n.name="Fangs",n.visible=!1,M(ce,n),e.add(n),n.position.y=-1.2,n.updateMatrix()})})(u),setTimeout((function(){(e=>{T(e,le,ie),T(e,re,ae),ve({scene:e,option:{hornModel:!0,chainModel:!0,mainModel:!0,fangsModel:!0}})})(u)}),2e3),o.addEventListener("click",(function(e){window.location="https://www.liltracy.com/tour"})),d.addEventListener("click",(function(e){window.location="https://www.liltracy.com/shop"})),r.addEventListener("click",(function(e){window.location="https://www.liltracy.com/work"})),s.addEventListener("click",(function(e){window.location="https://www.liltracy.com/video"})),p.addEventListener("click",(function(e){(0===u.anarchyBtnCount&&(u.sceneType="anarchy",(()=>{var e=document.querySelector("#app"),n=document.createElement("div");n.id="videoFrame",n.classList.add(we.a.root);var t=document.createElement("video");t.classList.add(we.a.video),t.src="https://maxmax.github.io/threeapp/assets/anarchy/bunny-full.mp4",t.loop=!0,t.controls=!1,t.autoplay=!0,n.appendChild(t),e.appendChild(n)})()),1===u.anarchyBtnCount)&&(u.sceneType="default",document.getElementById("videoFrame").remove());0===u.anarchyBtnCount?u.anarchyBtnCount=u.anarchyBtnCount+1:u.anarchyBtnCount=0})),p.addEventListener("mouseleave",(function(e){"anarchy"==u.sceneType&&(u.anarchyBtnCount=0,u.sceneType="default",document.getElementById("videoFrame").remove())})),function e(){setTimeout((function(){requestAnimationFrame(e),f.update()}),1e3/30),m.render(u,l)}()}()}],[[75,1,2]]]);
//# sourceMappingURL=main.js.map