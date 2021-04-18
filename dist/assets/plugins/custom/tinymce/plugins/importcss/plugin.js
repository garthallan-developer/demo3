!function(){"use strict";var t,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),n=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),r=tinymce.util.Tools.resolve("tinymce.EditorManager"),i=tinymce.util.Tools.resolve("tinymce.Env"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=function(t){return t.getParam("importcss_selector_converter")},u=function(t){return t.getParam("importcss_append")},s=(t="array",function(e){return r=typeof(n=e),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===t;var n,r}),a=Array.prototype.push,l=function(t,e){return function(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!s(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);a.apply(e,t[n])}return e}(function(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++){var o=t[i];r[i]=e(o,i)}return r}(t,e))},f=function(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t},m=function(t,e,n){var c=[],u={},s=function(e,u){var a,l,f,m=e.href;if(l=m,f=i.cacheSuffix,"string"==typeof l&&(l=l.replace("?"+f,"").replace("&"+f,"")),(m=l)&&n(m,u)&&!function(t,e){var n=function(t){var e=t.getParam("skin");return!1!==e&&(e||"oxide")}(t);if(n){var i=function(t){return t.getParam("skin_url")}(t),o=i?t.documentBaseURI.toAbsolute(i):r.baseURL+"/skins/ui/"+n,c=r.baseURL+"/skins/content/";return e===o+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(c)}return!1}(t,m)){o.each(e.imports,(function(t){s(t,!0)}));try{a=e.cssRules||e.rules}catch(t){}o.each(a,(function(t){t.styleSheet?s(t.styleSheet,!0):function(t){return t.selectorText}(t)&&o.each(t.selectorText.split(","),(function(t){c.push(o.trim(t))}))}))}};o.each(t.contentCSS,(function(t){u[t]=!0})),n||(n=function(t,e){return e||u[t]});try{o.each(e.styleSheets,(function(t){s(t)}))}catch(t){}return c},p=function(t,e){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(r){var i=r[1],c=r[2].substr(1).split(".").join(" "),u=o.makeMap("a,img");return r[1]?(n={title:e},t.schema.getTextBlockElements()[i]?n.block=i:t.schema.getBlockElements()[i]||u[i.toLowerCase()]?n.selector=i:n.inline=i):r[2]&&(n={inline:"span",title:e.substr(1),classes:c}),!1!==function(t){return t.getParam("importcss_merge_classes")}(t)?n.classes=c:n.attributes={class:c},n}},g=function(t,e){return null===e||!1!==function(t){return t.getParam("importcss_exclusive")}(t)},v=function(t){t.on("init",(function(e){var r=function(){var t=[],e=[],n={};return{addItemToGroup:function(t,r){n[t]?n[t].push(r):(e.push(t),n[t]=[r])},addItem:function(e){t.push(e)},toFormats:function(){return l(e,(function(t){var e=n[t];return 0===e.length?[]:[{title:t,items:e}]})).concat(t)}}}(),i={},s=f(function(t){return t.getParam("importcss_selector_filter")}(t)),a=function(t){return o.map(t,(function(t){return o.extend({},t,{original:t,selectors:{},filter:f(t.filter),item:{text:t.title,menu:[]}})}))}(function(t){return t.getParam("importcss_groups")}(t)),v=function(e,r){if(function(t,e,n,r){return!(g(t,n)?e in r:e in n.selectors)}(t,e,r,i)){!function(t,e,n,r){g(t,n)?r[e]=!0:n.selectors[e]=!0}(t,e,r,i);var u=function(t,e,n,r){return(r&&r.selector_converter?r.selector_converter:c(t)?c(t):function(){return p(t,n)}).call(e,n,r)}(t,t.plugins.importcss,e,r);if(u){var s=u.name||n.DOM.uniqueId();return t.formatter.register(s,u),o.extend({},{title:u.title,format:s})}}return null};o.each(m(t,t.getDoc(),f(function(t){return t.getParam("importcss_file_filter")}(t))),(function(t){if(-1===t.indexOf(".mce-")&&(!s||s(t))){var e=function(t,e){return o.grep(t,(function(t){return!t.filter||t.filter(e)}))}(a,t);if(e.length>0)o.each(e,(function(e){var n=v(t,e);n&&r.addItemToGroup(e.title,n)}));else{var n=v(t,null);n&&r.addItem(n)}}}));var y=r.toFormats();t.fire("addStyleModifications",{items:y,replace:!u(t)})}))};e.add("importcss",(function(t){return v(t),function(t){return{convertSelectorToFormat:function(e){return p(t,e)}}}(t)}))}();