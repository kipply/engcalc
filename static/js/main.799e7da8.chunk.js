(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,c,n){e.exports=n(731)},228:function(e,c,n){},229:function(e,c,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},230:function(e,c,n){},731:function(e,c,n){"use strict";n.r(c);var t=n(4),a=n.n(t),i=n(215),l=n.n(i),r=(n(228),n(216)),s=n(217),o=n(221),g=n(218),m=n(222),u=(n(229),n(230),n(219)),f=n(220),k=n(656),E=n(675),h=function(e){function c(e){var n;Object(r.a)(this,c),(n=Object(o.a)(this,Object(g.a)(c).call(this,e)))._handleKeyDown=function(e){/^[0-9()+-\/*coslogsin%tan^]$/.test(e.key)&&n.click(e.key),/^Backspace$/.test(e.key)&&n.backspace(e.key),/^Enter$/.test(e.key)&&n.evaluate(e.key)};E.initializeApp({apiKey:"AIzaSyB6lBJlsRrXf_JCoe0MA3a955_TQII5PHU",authDomain:"engcalc-f321c.firebaseapp.com",databaseURL:"https://engcalc-f321c.firebaseio.com",projectId:"engcalc-f321c",storageBucket:"engcalc-f321c.appspot.com",messagingSenderId:"875353035427"});return n.equation="",n.answerEquation="",n.eState=!0,n.answer="",n}return Object(m.a)(c,e),Object(s.a)(c,[{key:"click",value:function(e){this.equation+=e,this.eState=!0,this.setState({state:this.state})}},{key:"clear",value:function(){this.equation="",this.eState=!0,this.setState({state:this.state})}},{key:"backspace",value:function(){this.equation=this.equation.slice(0,this.equation.length-1),this.eState=!0,this.setState({state:this.state})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"evaluate",value:function(){var e=this,c=this.equation,n=(c=c.replace("x","*")).match(/ln\((.+)\)/);n&&(c=c.replace(/ln\((.+)\)/,"log("+n[1]+", e)"));try{this.answer=u.eval(c),k.get("http://159.203.3.149:5000/evaluate?value="+this.answer).then(function(c){e.answerEquation=c.data,e.equation="",e.eState=!1,console.log(e.answerEquation),e.setState({state:e.state})}).catch(function(e){alert("We made an OOPSIE")})}catch(t){alert("You made an OOPSIE")}}},{key:"music",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"toprow"},this.eState&&a.a.createElement("div",{className:"equation"},this.equation),!this.eState&&a.a.createElement("div",{className:"equation"},a.a.createElement(f.Tex,{texContent:this.answerEquation}))),a.a.createElement("div",{className:"row"},a.a.createElement("img",{src:"/engcalc/images/1title.gif"}),a.a.createElement("img",{src:"/engcalc/images/2factorial.gif",onClick:function(){return e.click("!")}}),a.a.createElement("img",{src:"/engcalc/images/3openbracket.gif",onClick:function(){return e.click("(")}}),a.a.createElement("img",{src:"/engcalc/images/4closingbracket.gif",onClick:function(){return e.click(")")}}),a.a.createElement("img",{src:"/engcalc/images/5modulo.gif",onClick:function(){return e.click("%")}}),a.a.createElement("img",{src:"/engcalc/images/6AC.gif",onClick:function(){return e.clear()}})),a.a.createElement("div",{className:"row"},a.a.createElement("img",{src:"/engcalc/images/7music.png",onClick:function(){return e.music()}}),a.a.createElement("img",{src:"/engcalc/images/8sin.gif",onClick:function(){return e.click("sin(")}}),a.a.createElement("img",{src:"/engcalc/images/9ln.gif",onClick:function(){return e.click("ln(")}}),a.a.createElement("img",{src:"/engcalc/images/101.gif",onClick:function(){return e.click("1")}}),a.a.createElement("img",{src:"/engcalc/images/113.gif",onClick:function(){return e.click("3")}}),a.a.createElement("img",{src:"/engcalc/images/125.gif",onClick:function(){return e.click("5")}}),a.a.createElement("img",{src:"/engcalc/images/13:.gif.gif",onClick:function(){return e.click("/")}})),a.a.createElement("div",{className:"row"},a.a.createElement("img",{src:"/engcalc/images/14pi.gif",onClick:function(){return e.click("pi")}}),a.a.createElement("img",{src:"/engcalc/images/15cos.gif",onClick:function(){return e.click("cos(")}}),a.a.createElement("img",{src:"/engcalc/images/16log.gif",onClick:function(){return e.click("log(")}}),a.a.createElement("img",{src:"/engcalc/images/177.gif",onClick:function(){return e.click("7")}}),a.a.createElement("img",{src:"/engcalc/images/189.gif",onClick:function(){return e.click("9")}}),a.a.createElement("img",{src:"/engcalc/images/190.gif",onClick:function(){return e.click("0")}}),a.a.createElement("img",{src:"/engcalc/images/20x.gif",onClick:function(){return e.click("x")}})),a.a.createElement("div",{className:"row"},a.a.createElement("img",{src:"/engcalc/images/21e.gif",onClick:function(){return e.click("e")}}),a.a.createElement("img",{src:"/engcalc/images/22tan.gif",onClick:function(){return e.click("tan(")}}),a.a.createElement("img",{src:"/engcalc/images/23sqrt.gif",onClick:function(){return e.click("sqrt(")}}),a.a.createElement("img",{src:"/engcalc/images/242.gif",onClick:function(){return e.click("2")}}),a.a.createElement("img",{src:"/engcalc/images/254.gif",onClick:function(){return e.click("4")}}),a.a.createElement("img",{src:"/engcalc/images/266.gif",onClick:function(){return e.click("6")}}),a.a.createElement("img",{src:"/engcalc/images/27-.gif",onClick:function(){return e.click("-")}})),a.a.createElement("div",{className:"row"},a.a.createElement("img",{src:"/engcalc/images/28ans.gif",onClick:function(){return e.click(e.answer)}}),a.a.createElement("img",{src:"/engcalc/images/29exp.png",onClick:function(){return e.click("*10^")}}),a.a.createElement("img",{src:"/engcalc/images/30^.gif",onClick:function(){return e.click("^")}}),a.a.createElement("img",{src:"/engcalc/images/318.gif",onClick:function(){return e.click("8")}}),a.a.createElement("img",{src:"/engcalc/images/32..gif",onClick:function(){return e.click(".")}}),a.a.createElement("img",{src:"/engcalc/images/33=.png",onClick:function(){return e.evaluate()}}),a.a.createElement("img",{src:"/engcalc/images/34+.gif",onClick:function(){return e.click("+")}})))}}]),c}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[223,1,2]]]);
//# sourceMappingURL=main.799e7da8.chunk.js.map