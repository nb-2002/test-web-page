import{a as v,g as E,f as u,c as f,h as C,e as g,j as B,k as D,s as y,C as i,x as s,F as d,D as F,E as m,B as $,r as p,z as k,y as x,t as w,u as A}from"./index-BG2SrH2i.js";import{h as z}from"./render-DjSmuU3c.js";const P=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(l,{slots:a}){const{proxy:{$q:o}}=E(),t=g(B,u);if(t===u)return console.error("QPage needs to be a deep child of QLayout"),u;if(g(D,u)===u)return console.error("QPage needs to be child of QPageContainer"),u;const r=f(()=>{const n=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof l.styleFn=="function"){const _=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return l.styleFn(n,_)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),c=f(()=>`q-page${l.padding===!0?" q-layout-padding":""}`);return()=>C("main",{class:c.value,style:r.value},z(a.default))}}),h={0:"#BAAD9A",2:"#EEE4DB",4:"#EDE0C8",8:"#F2B179",16:"#F59563",32:"#F67C5F",64:"#F76E30",128:"#F9D86E",256:"#F9D86E",512:"#E6D86E",1024:"#EDC22E",2048:"#EDC22E",4096:"#EDC22E",8192:"#EDC22E",16384:"#EDC22E",32768:"#EDC22E",65536:"#EDC22E"};class Q{state;constructor(){this.state=this.initialize(),console.log("array",this.state.board)}initialize(){const a=Array.from({length:4},()=>Array.from({length:4},()=>0));return this.addRandomBox(a),this.addRandomBox(a),{board:a,score:0}}addRandomBox(a){const o=[];for(let t=0;t<4;t++)for(let e=0;e<4;e++)a[t]?.[e]===0&&o.push([t,e]);if(o.length>0){const t=Math.floor(Math.random()*o.length);if(o[t]!==void 0){const[e,r]=o[t];a[e]!==void 0&&(a[e][r]=Math.random()<.9?2:4)}}}}const j=["x","y","fill"],R={key:0},q=["x","y"],b=y({__name:"BoxArray",props:{b:{type:Boolean},boxarr:{}},setup(l){const a=l,o=f(()=>a.b===!0?a.boxarr.filter(t=>t.n!==0):a.boxarr);return(t,e)=>(s(),i(d,null,[(s(!0),i(d,null,m(o.value,r=>(s(),i("rect",{key:r.id,width:"140",height:"140",rx:"10",x:r.x,y:r.y,fill:r.color},null,8,j))),128)),t.b===!0?(s(),i("g",R,[(s(!0),i(d,null,m(o.value,r=>(s(),i("text",{key:r.id,x:r.x+70,y:r.y+75,"text-anchor":"middle","alignment-baseline":"middle","font-size":"50px"},$(r.n),9,q))),128))])):F("",!0)],64))}}),H={class:"row items-center justify-evenly"},M={width:"610",height:"610"},N=y({__name:"BigBox",setup(l){const a=p({b:!1,boxarr:[...Array(16).keys()].map(e=>({id:e,x:10+150*(e/4|0),y:10+150*(e%4),n:0,color:h[0]}))}),o=p({b:!0,boxarr:[...Array(16).keys()].map(e=>({id:e,x:10+150*(e/4|0),y:10+150*(e%4),n:e%2?2:0,t:!0,color:h[e%2?2:0]}))}),t=new Q;console.log(t.state.board);for(let e=0;e<4;e++)for(let r=0;r<4;r++)if(o.value.boxarr[e*4+r]!==void 0&&t.state.board[e]!==void 0){const c=o.value.boxarr[e*4+r],n=t.state.board[e]?.[r];c?.n!==void 0&&c.color!==void 0&&n!==void 0&&(c.n=n,c.color=h[n])}return(e,r)=>(s(),i("div",H,[(s(),i("svg",M,[r[0]||(r[0]=k("rect",{width:"610",height:"610",rx:"10",fill:"#998C7E"},null,-1)),x(b,{boxarr:a.value.boxarr,b:a.value.b},null,8,["boxarr","b"]),x(b,{boxarr:o.value.boxarr,b:o.value.b},null,8,["boxarr","b"])]))]))}}),K=y({__name:"IndexPage",setup(l){return(a,o)=>(s(),w(P,{class:"items-center justify-evenly"},{default:A(()=>[x(N)]),_:1}))}});export{K as default};
