!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery)}(function(e){"use strict";var t=0,s=["accepts","cache","contents","contentType","crossDomain","data","dataType","headers","ifModified","mimeType","password","processData","timeout","traditional","type","url","username"],n=function(e){return e};e.ajaxSetup({converters:{"postmessage text":n,"postmessage json":n,"postmessage html":n}}),e.ajaxTransport("postmessage",function(n){if(n.postMessage&&window.postMessage){var o,a=e("<a>").prop("href",n.postMessage)[0],i=a.protocol+"//"+a.host,r=n.xhr().upload;return{send:function(a,p){t+=1;var d={id:"postmessage-transport-"+t},c="message."+d.id;o=e('<iframe style="display:none;" src="'+n.postMessage+'" name="'+d.id+'"></iframe>').bind("load",function(){e.each(s,function(e,t){d[t]=n[t]}),d.dataType=d.dataType.replace("postmessage ",""),e(window).bind(c,function(t){t=t.originalEvent;var s,n=t.data;t.origin===i&&n.id===d.id&&("progress"===n.type?(s=document.createEvent("Event"),s.initEvent(n.type,!1,!0),e.extend(s,n),r.dispatchEvent(s)):(p(n.status,n.statusText,{postmessage:n.result},n.headers),o.remove(),e(window).unbind(c)))}),o[0].contentWindow.postMessage(d,i)}).appendTo(document.body)},abort:function(){o&&o.remove()}}}})});