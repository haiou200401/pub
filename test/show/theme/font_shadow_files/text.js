!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){var r,i,o,a;a=n(18),i=n(45),r=n(46),o=n(22),window.template=function(){var t,e,n,o,l,s,u,c,h,f;return f=req.w,n=req.h,e=req.ctype,s=req.qid,t=req.ad,l=req.ls,c=req.rurl,a.init(e,s,t,l),i.init(c),o="http://www.so.com/s?src=lm&q=360&ls="+l+"&ctype="+e,h={conWidth:f,conHeight:n,logoSrc:o},u={ads:t,setting:h},r(u)}},18:function(t,e){var n;n={init:function(t,e,n,r){return this.pvSrc="http://stat.lianmeng.360.cn/s2/srp.gif?lm_extend=ctype:"+t+"&qid="+e+"&nu="+n.length+"&ls="+r+"&_r="+(new Date).getTime(),this.clkSrc="http://stat.lianmeng.360.cn/s2/clk.gif?lm_extend=ctype:"+t+"&qid="+e+"&nu="+n.length+"&ls="+r+"&_r="+(new Date).getTime(),this.sendLog(this.pvSrc),this.sendLog("http://cm.mediav.com?mvdid=121"),$(document).ready(function(t){return function(){return $(document).delegate("a.clk","click",function(e){var n,r,i,o,a,l;return o=$(e.currentTarget),n=null!=(r=o.attr("data-index"))?r:"",a=null!=(i=o.attr("title"))?i:"",l=t.clkSrc+"&index="+n+"&txt="+encodeURIComponent(a)+"&_r="+(new Date).getTime(),t.sendLog(l)})}}(this))},sendLog:function(t){var e;return e=new Image,e.onload=e.onerror=function(){return e=null},e.src=t}},t.exports=n},20:function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function i(t){return(Array.isArray(t)?t.map(i):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}function o(t){return l[t]||t}function a(t){var e=String(t).replace(s,o);return e===""+t?t:e}e.merge=function u(t,e){if(1===arguments.length){for(var n=t[0],i=1;i<t.length;i++)n=u(n,t[i]);return n}var o=t["class"],a=e["class"];(o||a)&&(o=o||[],a=a||[],Array.isArray(o)||(o=[o]),Array.isArray(a)||(a=[a]),t["class"]=o.concat(a).filter(r));for(var l in e)"class"!=l&&(t[l]=e[l]);return t},e.joinClasses=i,e.cls=function(t,n){for(var r=[],o=0;o<t.length;o++)n&&n[o]?r.push(e.escape(i([t[o]]))):r.push(i(t[o]));var a=i(r);return a.length?' class="'+a+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,i){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(i?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],o=Object.keys(t);if(o.length)for(var a=0;a<o.length;++a){var l=o[a],s=t[l];"class"==l?(s=i(s))&&r.push(" "+l+'="'+s+'"'):r.push(e.attr(l,s,!1,n))}return r.join("")};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},s=/[&<>"]/g;e.escape=a,e.rethrow=function c(t,e,r,i){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||i))throw t.message+=" on line "+r,t;try{i=i||n(21).readFileSync(e,"utf8")}catch(o){c(t,null,r)}var a=3,l=i.split("\n"),s=Math.max(r-a,0),u=Math.min(l.length,r+a),a=l.slice(s,u).map(function(t,e){var n=e+s+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+a+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},21:function(t,e){},22:function(t,e){var n;n={serialize:function(t){var e,n,r,i,o,a;for(i=[],r=function(t){return i.push(t.name+"="+t.val)},e=n=0,a=t.length;a>=0?a>n:n>a;e=a>=0?++n:--n)r(t[e]);return o=i.join("&")},setUrl:function(t){var e,n,r,i,o;return n=[],e=t&&t.curl.substr(0,t.curl.search(/\?/)+1),r=t&&t.curl.substr(t.curl.search(/\?/)+1),r&&r.replace(/([^=&]+)=([^&]*)/g,function(t,e,r){return"q"===e?n.push({name:e,val:"360"}):n.push({name:e,val:r})}),o=e?e+this.serialize(n):null!=(i=t&&t.curl)?i:"https://www.so.com/s?src=lm&q=360&test=1"}},t.exports=n},45:function(t,e){var n;n={init:function(t){return this.now=(new Date).getTime(),this.rurl=t,$(document).ready(function(e){return function(){return $(document).delegate("a.clk","mousedown",function(t){return e.mouseDown=(new Date).getTime()}),$(document).delegate("a.clk","mouseup",function(n){var r,i,o,a,l,s;return l=$(n.currentTarget),e.mouseUp=(new Date).getTime(),o=parseInt(l.attr("data-index")),a="st="+e.now,s="ud="+e.mouseUp,r="dd="+e.mouseDown,t="rurl="+encodeURIComponent(e.rurl),i=l.attr("href"),i+=-1===i.indexOf("?")?"?"+a+"&"+s+"&"+r+"&"+t:"&"+a+"&"+s+"&"+r+"&"+t,l.attr("href",i)})}}(this))}},t.exports=n},46:function(t,e,n){var r=n(20);t.exports=function(t){var e,n=[],i={},o=t||{};return function(t,o,a){n.push("<style>html,body,div,a{\n    margin : 0;\n    padding : 0;\n    border : 0;\n    outline : 0;\n    font-size: 100%;\n    font-family: Microsoft Yahei, '宋体';\n}\nhtml{\n    width: "+r.escape(null==(e=o.conWidth)?"":e)+"px;\n    height: "+r.escape(null==(e=o.conHeight)?"":e)+"px;\n}\nbody{\n    background-color: white;\n}\na{\n    text-decoration: none;    \n}\n.logo{\n    position:absolute;    \n    right:0;\n    bottom:0;\n    width: 18px;\n    height: 18px;\n    background:url('http://p5.qhimg.com/d/inn/3ac333ef/logo2.png') no-repeat;\n    _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"http://p5.qhimg.com/d/inn/3ac333ef/logo2.png\");\n    _background:none;\n}\n</style>"),300==o.conWidth&&250==o.conHeight?n.push("<style>.container{\n    margin: 5px 10px;\n    width: 280px;\n    height: 240px;\n}\n.item{\n    width: 280px;\n    height: 70px;\n    margin: 5px 0px;\n}\n.tit{\n    height: 16px;\n    line-height: 16px;\n    width: 280px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 280px;\n    overflow: hidden;\n    height: 36px;\n    *height: 32px;\n    line-height: 16px;\n    margin: 2px 0px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 280px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 14px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):160==o.conWidth&&600==o.conHeight?n.push("<style>.container{\n    width: 150px;\n    height: 588px;\n    margin: 6px 5px;\n}\n.item{\n    width: 150px;\n    height: 80px;\n    margin: 4px 0px;\n}\n.tit{\n    height: 20px;\n    line-height: 20px;\n    width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 150px;\n    overflow: hidden;\n    height: 36px;\n    *height: 32px;\n    line-height: 16px;\n    margin: 2px 0px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 150px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 14px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):250==o.conWidth&&250==o.conHeight?n.push("<style>.container{\n    margin: 5px 10px;\n    width: 230px;\n    height: 240px;\n}\n.item{\n    width: 230px;\n    height: 70px;\n    margin: 5px 0px;\n}\n.tit{\n    height: 16px;\n    line-height: 16px;\n    width: 230px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 230px;\n    overflow: hidden;\n    height: 36px;\n    *height: 32px;\n    line-height: 16px;\n    margin: 2px 0px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 230px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 14px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):336==o.conWidth&&280==o.conHeight?n.push("<style>.container{\n    margin: 0px 0px;\n    width: 336px;\n    height: 280px;\n}\n.item{\n    width: 336px;\n    height: 65px;\n    margin: 5px 0px;\n}\n.tit{\n    height: 20px;\n    line-height: 20px;\n    width: 336px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 336px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 20px;\n    line-height: 20px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 336px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 20px;\n    line-height: 20px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):640==o.conWidth&&60==o.conHeight?n.push("<style>.container{\n    width: 630px;\n    height: 60px;\n    margin: 0px 5px 0px 5px;\n}\n.item{\n    float: left;    \n    *display: inline;\n    width: 200px;\n    height: 50px;\n    margin: 5px;\n}\n.tit{\n    height: 16px;\n    line-height: 16px;\n    width: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 16px;\n    margin: 2px 0px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 14px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):960==o.conWidth&&90==o.conHeight?n.push("<style>.container{\n    width: 960px;\n    height: 90px;\n}\n.item{\n    float: left;    \n    *display:inline;\n    width: 220px;\n    height: 80px;\n    margin: 5px 10px;\n}\n.tit{\n    height: 16px;\n    line-height: 16px;\n    width: 220px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-top: 4px;\n}\n.tit a{\n    color: #1f27f6;    \n    font-size: 14px;\n    text-decoration: underline;\n}\n.desc{\n    width: 220px;\n    overflow: hidden;\n    height: 36px;\n    *height: 32px;\n    line-height: 16px;\n    margin: 5px 0px 5px 0px;\n}\n.desc a{\n    color: #494949;\n    font-size: 12px;\n}\n.surl{\n    width: 220px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 16px;\n    line-height: 14px;\n}\n.surl a{\n    color: #0c794f;\n    font-size: 12px;\n}</style>"):n.push("<style></style>"),i.inlayItem=e=function(t,i){this&&this.block,this&&this.attributes||{};n.push('<div class="item"><div class="tit"><a'+r.attr("href",t.curl,!0,!1)+r.attr("data-href",t.curl,!0,!1)+r.attr("data-index",i,!0,!1)+' target="_blank"'+r.attr("title",t.tit,!0,!1)+' class="clk">'+r.escape(null==(e=t.tit)?"":e)+'</a></div><div class="desc"><a'+r.attr("href",t.curl,!0,!1)+r.attr("data-href",t.curl,!0,!1)+r.attr("data-index",i,!0,!1)+' target="_blank"'+r.attr("title",t.desc,!0,!1)+' class="clk">'+r.escape(null==(e=t.desc)?"":e)+'</a></div><div class="surl"><a'+r.attr("href",t.curl,!0,!1)+r.attr("data-href",t.curl,!0,!1)+r.attr("data-index",i,!0,!1)+' target="_blank"'+r.attr("title",t.surl,!0,!1)+' class="clk">'+r.escape(null==(e=t.surl)?"":e)+"</a></div></div>")},n.push('<div class="container">'),function(){var e=t;if("number"==typeof e.length)for(var r=0,o=e.length;o>r;r++){var a=e[r];i.inlayItem.call({block:function(){n.push(" ")}},a,r)}else{var o=0;for(var r in e){o++;var a=e[r];i.inlayItem.call({block:function(){n.push(" ")}},a,r)}}}.call(this),n.push("</div><a"+r.attr("href",""+o.logoSrc,!0,!1)+' target="_blank" data-t="logo"><div class="logo"></div></a>')}.call(this,"ads"in o?o.ads:"undefined"!=typeof ads?ads:void 0,"setting"in o?o.setting:"undefined"!=typeof setting?setting:void 0,"undefined"in o?o.undefined:void 0),n.join("")}}});