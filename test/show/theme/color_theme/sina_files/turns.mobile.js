(function(b){b.fn.turns=function(d){this.ret=[];for(var c=0;c<this.length;c++){this.ret[c]=new a(d,this[c])}return this};var a=function(c,d){this.conts=b(c.contName);this.tags=b(c.tagName);this.cont=b(".jdAdCont")[0];var e=b(c.contName);this.col=e[0];this.endcol=e[e.length-1];this.cont.appendChild(this.col.cloneNode(true));this.cont.insertBefore(this.endcol.cloneNode(true),this.col);this.interval=c.interval;this.gsize=c.gsize;this.pos=0;this.timer=null;this.turns=0;this.data=c.data;this.size=this.conts.length;this.speed=30;this.flag=false;this.start();this.mouseoverout(b(c.parent),this.tags)};a.prototype={start:function(){var c=this;this.show(this.pos,"next")},next:function(){this.pos++;this.pos%=this.size;this.show(this.pos,"next")},prev:function(){this.pos--;this.pos=(this.pos+this.size)%this.size;this.show(this.pos,"prev")},stop:function(){clearTimeout(this.timer)},show:function(i,f){var c=this;this.hideCurrent();b(this.cont).removeClass("move");b(this.conts[i]).addClass("current");b(this.tags[i]).addClass("select");var e=this.col.scrollWidth;if(e==0){return}b(".jdAdContInner",this.conts[i]).each(function(l,m){var k=m.getAttribute("exposal");var j=m.getAttribute("on");if(!j){b.getScript(k);m.setAttribute("on",true)}});var g=30,h=0,d=0;if(f=="prev"){d=-e*(i+1);h=e}else{if(f=="next"){d=-e*i;h=-e}else{return}}c.cont.style.left=d+"px";setTimeout(function(){b(c.cont).addClass("move");c.cont.style.left=(d+h)+"px";c.timer=setTimeout(function(){c.next()},c.interval)},50)},hideCurrent:function(){this.conts.removeClass("current");this.tags.removeClass("select")},imgload:function(d){if(d.imgok){return}var e=d.itemdom.getElementsByTagName("img");d.imgok=true;var c=e[0];c.src="http://img13.360buyimg.com/cms/s{size}x{size}_".replace(/{size}/g,this.imgHeight)+d.data_skuimg},exposes:{},exposal:function(c){if(this.exposes[c.exposal_url]==1){return}else{this.exposes[c.exposal_url]=1;_J.getScript(c.exposal_url)}},mouseoverout:function(h,f){var d=this;var g,e={x:0,y:0};var j=function(k){var l=k.touches[0];e={x:l.pageX,y:l.pageY};d.stop()};var c=function(k){if(k.touches.length>1||k.scale&&event.scale!==1){return}var l=k.touches[0];g={x:l.pageX-e.x,y:l.pageY-e.y}};var i=function(k){d.stop();if(!g){return}if((g.x<-10)&&(Math.abs(g.y/g.x)<65/300)){d.next()}else{if((g.x>10)&&(Math.abs(g.y/g.x)<65/300)){d.prev()}else{setTimeout(function(){d.stop();d.next()},d.interval)}}g=null};h.on("touchstart",j);h.on("touchmove",c);h.on("touchend",i);h.on("touchcancel",i)}}})(_J);