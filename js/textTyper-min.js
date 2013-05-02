/*!
 * jQuery Text Typer
 * 
 * @version : 1.0
 * @author : Pathik Gandhi (http://pathikgandhi.info)
 * @plugin_uri : https://github.com/gr8pathik/jquery-texttyper
 * @plugin_demo : http://labs.pathikgandhi.info/jquery/textTyper
 */
(function(e){"use strict";e.fn.textTyper=function(t){var n={typingClass:"typing",beforeAnimation:function(){},afterAnimation:function(){},speed:70,nextLineDelay:400,startsFrom:0,cursorHtml:'<span class="typing">|</span>'},r=e.extend({},n,t);this.each(function(){var t=e(this);var n=t.children().length>0?t.children():t,i=n.length,s=[];while(i--){s[i]=e(n[i]).html();e(n[i]).html("")}t.init=function(e){var n=r.beforeAnimation;if(n)n();t.animate(0)};t.animate=function(i){var o=n[i],u=r.typingClass,a=r.startsFrom;e(o).addClass(u);var f=setInterval(function(){var u=r.cursorHtml;e(o).html(s[i].substr(0,a)+u);a++;if(s[i].length<a){clearInterval(f);i++;if(n[i]){setTimeout(function(){e(o).html(s[i-1]);t.animate(i)},r.nextLineDelay)}else{var l=r.afterAnimation;if(l)l()}}},r.speed)};t.init()});return this}})(jQuery)