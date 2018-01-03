!function(n,e){"use strict"
;var t=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var n=t.clientWidth
;n&&(t.style.fontSize=n>540?Math.floor(72)+"px":Math.floor(n/750*100)+"px")}
;n.addEventListener&&(e.addEventListener(i,o,!1),n.addEventListener("DOMContentLoaded",o,!1))}(document,window);