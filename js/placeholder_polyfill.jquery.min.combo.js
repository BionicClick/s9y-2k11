/**
 * Copyright (c) 2008 Tom Deater (http://www.tomdeater.com)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */
jQuery.onFontResize=(function(a){a(document).ready(function(){var c=a("<iframe />").attr("id","frame-onFontResize"+Date.parse(new Date)).addClass("div-onfontresize").css({width:"100em",height:"10px",position:"absolute",borderWidth:0,top:"-5000px",left:"-5000px"}).appendTo("body");
if(a.browser.msie){c.bind("resize",function(){a.onFontResize.trigger(c[0].offsetWidth/100);});}else{var b=c[0].contentWindow||c[0].contentDocument||c[0].document;
b=b.document||b;b.open();b.write('<script>window.onload = function(){var em = parent.jQuery(".div-onfontresize")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};<\/script>');
b.close();}});return{trigger:function(b){a(document).trigger("fontresize",[b]);}};})(jQuery);

/**
* HTML5 placeholder polyfill
*
* code: https://github.com/ginader/HTML5-placeholder-polyfill
* please report issues at: https://github.com/ginader/HTML5-placeholder-polyfill/issues
*
* Copyright (c) 2012 Dirk Ginader (ginader.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* Version: 1.8
*/
(function(e){var b=false;function c(f,g){if(e.trim(f.val())===""){f.data("placeholder").removeClass(g.hideClass);}else{f.data("placeholder").addClass(g.hideClass);
}}function a(h,g){var f=g.is("textarea");h.css({width:g.innerWidth()-(f?20:4),height:g.innerHeight()-6,lineHeight:g.css("line-height"),whiteSpace:f?"normal":"nowrap",overflow:"hidden"}).offset(g.offset());
}function d(f){if(b&&window.console&&window.console.log){window.console.log(f);}}e.fn.placeHolder=function(f){var g=this;this.options=e.extend({className:"placeholder",visibleToScreenreaders:true,visibleToScreenreadersHideClass:"placeholder-hide-exept-screenreader",visibleToNoneHideClass:"placeholder-hide"},f);
this.options.hideClass=this.options.visibleToScreenreaders?this.options.visibleToScreenreadersHideClass:this.options.visibleToNoneHideClass;return e(this).each(function(){var h=e(this),l=h.attr("placeholder"),m=h.attr("id"),i,k,j;
i=h.closest("label")[0];h.attr("placeholder","");if(!i&&!m){d("the input element with the placeholder needs an id!");return;}i=i||e('label[for="'+m+'"]');
if(!i){d("the input element with the placeholder needs a label!");return;}i.removeClass("visuallyhidden").addClass("visuallyhidden-with-placeholder");k=e('<span class="'+g.options.className+'">'+l+"</span>").appendTo(i);
j=(k.width()>h.width());if(j){k.attr("title",l);}a(k,h);h.data("placeholder",k);k.data("input",k);k.click(function(){e(this).data("input").focus();});h.focusin(function(){e(this).data("placeholder").addClass(g.options.hideClass);
});h.focusout(function(){c(e(this),g.options);});c(h,g.options);e(document).bind("fontresize",function(){a(k,h);});if(e.event.special.resize){e("textarea").bind("resize",function(n){a(k,h);
});}else{e("textarea").css("resize","none");}});};e(function(){if("placeholder" in e("<input>")[0]){return;}e("input[placeholder], textarea[placeholder]").placeHolder({visibleToScreenreaders:true});
});})(jQuery);