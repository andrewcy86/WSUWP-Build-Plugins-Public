jQuery.cookie=function(e,b,a){if(1<arguments.length&&"[object Object]"!==String(b)){a=jQuery.extend({},a);if(null===b||void 0===b)a.expires=-1;if("number"===typeof a.expires){var d=a.expires,c=a.expires=new Date;c.setDate(c.getDate()+d)}b=String(b);return document.cookie=[encodeURIComponent(e),"=",a.raw?b:encodeURIComponent(b),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b||{};c=a.raw?function(a){return a}:
decodeURIComponent;return(d=RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(d[1]):null};