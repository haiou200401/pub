(function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="/build/static/",n(0)})([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2);window.util=r},function(e,t){"use strict";var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=r||{};$.extend(r,{formatDate:function(t,n){var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()},i={0:"\u65e5",1:"\u4e00",2:"\u4e8c",3:"\u4e09",4:"\u56db",5:"\u4e94",6:"\u516d"};/(y+)/.test(n)&&(n=n.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(n)&&(n=n.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"\u661f\u671f":"\u5468":"")+i[t.getDay()+""]));for(var s in r)(new RegExp("("+s+")")).test(n)&&(n=n.replace(RegExp.$1,RegExp.$1.length==1?r[s]:("00"+r[s]).substr((""+r[s]).length)));return n},stringToDate:function(t){var n=t.split(" "),r=n[0],i="-";r.indexOf("/")>-1&&(i="/"),r.indexOf(".")>-1&&(i=".");var s=r.split(i),o=new Date(s[0],s[1]-1,s[2]);if(n.length>1){var u=n[1].split(":");o.setHours(u[0]),o.setMinutes(u[1]),o.setSeconds(u[2])}return o},cloneDate:function(t){var n=new Date;return n.setTime(t.getTime()),n},getNextDay:function(t){t=typeof t=="string"?this.stringToDate(t):t,t=t||new Date;var n=this.cloneDate(t);return n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setDate(n.getDate()+1),n},getDayOfWeek:function(t,n){n=typeof n=="string"?this.stringToDate(n):n,n=n||new Date;if(t<0||t>6)return null;var r=n.getDay(),i=n.getTime();return i+=(t-r)*864e5,new Date(i)},shortTime:function(t,n){t=typeof t=="string"?this.stringToDate(t):t;var r=n||new Date,i=r.getHours()*3600+r.getMinutes()*60+r.getSeconds(),s=Math.floor((r.getTime()-t.getTime())/1e3);if(s<60)return s=s<1?1:s,parseInt(s,10)+"\u79d2\u524d";if(s<=3600)return parseInt(s/60,10)+"\u5206\u949f\u4e4b\u524d";var o=("0"+t.getHours()).slice(-2),u=("0"+t.getMinutes()).slice(-2),a=t.getDate();return r.getDate()==a&&s<86400?"\u4eca\u5929 "+o+":"+u:s>=i&&s<=86400+i?"\u6628\u5929 "+o+":"+u:t.getMonth()+1+"\u6708"+a+"\u65e5 "+o+":"+u},countDown:function(t){var n=window.G_now||(new Date).getTime(),t=typeof t=="string"?this.stringToDate(t):t,t=t.getTime(),r=Math.floor(t-n)/1e3;if(r<=0)return null;var i=Math.floor(r/24/60/60),s=Math.floor((r-i*24*60*60)/60/60),o=Math.floor((r-i*24*60*60-s*60*60)/60),u=Math.floor(r-i*24*60*60-s*60*60-o*60);return{day:i,hour:s,minute:o,second:u}},getCountOfWeekX:function(t,n,r){t=this.cloneDate(t),n=this.cloneDate(n),t.setHours(0),t.setMinutes(0),t.setSeconds(0),n.setHours(0),n.setMinutes(0),n.setSeconds(0);var i=this.getDayOfWeek(r,t);i.getTime()<t.getTime()&&i.setDate(i.getDate()+7);var s=this.getDayOfWeek(r,n);return s.getTime()>n.getTime()&&s.setDate(s.getDate()-7),Math.round((s.getTime()-i.getTime())/864e5/7+1)},number_format:function(t,n){if(isNaN(t))return"";n=n||",";var r=/(-?\d+)(\d{3})(\.\d*)?/;t+="";var i=t.split("."),s=Math.min(i.length,2);for(var o=0;o<s;o++){o>0&&(i[o]=i[o].split("").reverse().join(""));while(r.test(i[o]))i[o]=i[o].replace(r,function(e,t,r,i){return t+n+r+(i?i:"")})}return i[0]+(s>1?"."+i[1].split("").reverse().join(""):"")},substring:function(t,n,r){r=r||"";var i=t.replace(/([^\x00-\xff])/g,"$1 ").length;return i>n?t.substr(0,n).replace(/([^\x00-\xff])/g,"$1 ").substr(0,n).replace(/[^\x00-\xff]$/,"").replace(/([^\x00-\xff]) /g,"$1")+r:t},tmpl:function(t,n){return String(t).replace(/\{([^\}]+)\}/g,function(e,t){var r=n[t];return r===undefined?"":r})},getUrlWithOutParams:function(t){return t=t||location.href,t.replace(/\?.*$/,"")},getParams:function(t){var t=t||window.location.href.replace(/#.*$/,""),n=t.indexOf("?"),r,i,s;if(n==-1)return{};s=t.substring(n+1).split("&"),r={};for(var o=0,u=s.length;o<u;o++){i=s[o].split("=");if(typeof i[1]=="undefined")continue;i[0]&&(r[i[0]]=i[1])}return r},uniqueId:function(){var e=+(new Date)+"-",t=0;return function(){return e+ ++t}}(),send:function(t,n){var r=this.uniqueId(),i=window.imageLogData||(window.imageLogData={}),s=i[r]=new Image;s.onerror=s.onload=function(){n&&n(),s.onerror=s.onload=null,s=null,delete i[r]},s.src=t+"&_="+r},mobileLog:function(t,n){n=n||{},n=typeof n=="string"?n:$.param(n);var r="http://www.cnblogs.com/frostbelt/?",i="interfaceName="+t+"&"+n;this.send(r+i)},getPreMatch:function(t,n){var r=[],i=new RegExp("^"+n,"i");for(var s=0;s<t.length;s++)i.test(t[s])&&r.push(t[s]);return r},getPreFieldMatch:function(t,n,r){var i=[],s=new RegExp("^"+r,"i");for(var o=0;o<t.length;o++)s.test(t[o][n])&&i.push(t[o]);return i},getSuffixMatch:function(t,n){var r=[],i=new RegExp(n+"$","i");for(var s=0;s<t.length;s++)i.test(t[s])&&r.push(t[s]);return r},getSuffixFieldMatch:function(t,n,r){var i=[],s=new RegExp(r+"$","i");for(var o=0;o<t.length;o++)s.test(t[o][n])&&i.push(t[o]);return i},shuffle:function(t,r){r=r||"";if((typeof t==="undefined"?"undefined":n(t))!="object")return!1;var i=t,s=!t.length;s&&(i=[],$.each(t,function(e,t){i.push(e)})),i.sort(function(){return Math.random()>.5?1:-1});if(s){var o={};for(var u=0,a=i.length;u<a;u++){var f=i[u];o[r+f]=t[f]}return o}return i},getBrowserNameAndVersion:function(){var t=navigator.userAgent.toLowerCase(),n=t.match(/(msie\s|trident.*rv:)([\d.]+)/)||t.match(/(firefox)\/([\d.]+)/)||t.match(/(chrome)\/([\d.]+)/)||t.match(/(opera).([\d.]+)/)||t.match(/(version)\/([\d.]+).*safari/)||null;if(!n||!n.length)return{name:"",version:""};var r=n[1];return{name:r=="version"?"safari":/trident|msie/.test(r)?"ie":r,version:n[2]||""}},is_ie6:function(t){t=parseInt(t,10)||6;var n=navigator.userAgent.toLowerCase(),r=(n.match(/.+?(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1];return/msie/.test(n)&&parseInt(r,10)==t},is_phone:function(){if(!window.navigator||!navigator.userAgent)return!0;var t=navigator.userAgent.toLowerCase(),n=["android","iphone","360browser","ipad","mobile"],r=!1;for(var i=0,s=n.length;i<s;i++)if((new RegExp(n[i],"i")).test(t)){r=!0;break}return r},getScrollTop:function(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement&&document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t},getRnd:function(t,n){return typeof n=="undefined"&&(n=t,t=0),t+parseInt(Math.random()*(n-t+1))},setCookie:function(t,n,r,i){i=i||{};var s=parseFloat(r)||365,o=new Date;o.setTime(o.getTime()+s*864e5);var u=t+"="+escape(n)+";expires="+o.toGMTString();u+=i.domain?";domain="+i.domain:"",u+=i.path?";path="+i.path:"",u+=i.secure?";secure="+i.secure:"",document.cookie=u},getCookie:function(t){if(document.cookie.length>0){var n=document.cookie.indexOf(t+"=");if(n!=-1){n=n+t.length+1;var r=document.cookie.indexOf(";",n);return r==-1&&(r=document.cookie.length),unescape(document.cookie.substring(n,r))}}return""},saveData:function(t,n,r){if(typeof n!="string")try{n=JSON.stringify(n)}catch(i){window.console&&console.log("saveData error, value is not string")}if(r=="today"){var s=new Date,o=this.getNextDay(s);r=(o.getTime()-s.getTime())/864e5}this.setCookie(t,n,r,{path:"/"})},getData:function(t){var n=this.getCookie(t);try{n=JSON.parse(n)}catch(r){}return n},getAndroidVersion:function(){var t=2;try{var n=navigator.userAgent.match(/Android (\d\.\d)/);t=parseFloat(n[1])}catch(r){}return t},compAndroidVersion:function(t,n){t=(t+"").split("."),n=(n+"").split(".");var r=Math.max(t.length,n.length);while(t.length<r)t.push(0);while(n.length<r)n.push(0);var i=!1;for(var s=0;s<r;s++){if(t[s]>n[s])break;if(t[s]<n[s]){i=!0;break}}return!i},isPhone:function(t){return/^1(3|4|5|7|8)[0-9]{9}$/i.test(t)},initUa:function(){return this.ua||(this.ua=window.navigator?navigator.userAgent.toLowerCase():""),this.ua},is_weixin:function(){return this.initUa(),this.ua.match(/MicroMessenger/i)=="micromessenger"},is_iphone:function(){return this.initUa(),/iphone|mac|ipad/i.test(this.ua)&&!/android/i.test(this.ua)},is_360browser:function(){return this.initUa(),/360browser|360 aphone browser|qhbrowser/i.test(this.ua)},downloadLevels:[{key:"10000",value:"\u4e07"},{key:"1000",value:"\u5343"}],sizeLevels:[{key:"1048576",value:"M"},{key:"1024",value:"K"}],getFixedText:function(t,n,r,i){if(!t)return 0+r;for(var s=0,o=n.length;s<o;s++){var u=n[s],a=u.key,f=u.value;if(t/a>=1)return i==0?Math.floor(t/a)+f+r:(t/a).toFixed(i)+f+r}return t+r},getFixedText_size:function(t,n){return this.getFixedText(t,this.sizeLevels,"B",n)},getFixedText_time:function(t,n,r){return this.getFixedText(t,this.downloadLevels,n,r)},getFirst:function(t,n){return n=n||",",typeof t!="string"&&t.length?t[0]:typeof t=="string"&&t.indexOf(n)!=-1?t.split(n)[0]:typeof t=="string"||typeof t=="number"?t+"":null},getFixedTime:function(t){if(!t)return"";var n=Math.floor(t%3600/60),r=t%60,i=[n,r];return t>=3600&&i.unshift(Math.floor(t/3600)),i.map(function(e){return("0"+e).slice(-2)}).join(":")},midKey:"____guid",localStorageEnable:function(){try{return!!window.localStorage}catch(e){return!1}}(),get:function(){return this.logParamsM2||this.getParams().m2||this.localStorageEnable&&window.localStorage[this.midKey]||this.getCookie(this.midKey)||this.generateMID()},_saveUid:function(t){this.localStorageEnable?window.localStorage[this.midKey]=t:this.setCookie(this.midKey,t,null,{path:"/"}),this.logParamsM2=t},generateMID:function(){function i(e){var t=0,n=0,r=e.length-1;for(r;r>=0;r--){var i=parseInt(e.charCodeAt(r),10);t=(t<<6&268435455)+i+(i<<14),(n=t&266338304)!=0&&(t^=n>>21)}return t}function s(){var e=[n.appName,n.version,n.language||n.browserLanguage,n.platform,n.userAgent,r.width,"x",r.height,r.colorDepth,t.referrer].join(""),s=e.length,o=window.history.length;while(o)e+=o--^s++;return(Math.round(Math.random()*2147483647)^i(e))*2147483647}var t=document,n=navigator,r=window.screen,o;return o=[i(t.domain),s(),+(new Date)+Math.random()+Math.random()].join(""),o=o.replace(/\./ig,"e"),o=o.substr(0,32),this._saveUid(o),o},record:function(t,n,r){var i=this;i.logParamsM2=i.get();var s={u:location.href.replace(/[?#].*$/,""),ver:"",mid:i.logParamsM2,cid:1,from:1,act:r||"start",sid:t||"",market_id:"",pos:n||"",tj:"",refer:""};i.send("http://s.360.cn/zhushou/soft.html?"+$.param(s))},noop:function(){}}),e.exports=r}]);