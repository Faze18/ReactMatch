"use strict";var precacheConfig=[["/ReactMatch/index.html","fe6534e7d8d7cd26ae541315526e502d"],["/ReactMatch/static/css/main.54f5ff4f.css","7baf1e866f5a7890830c83d3739c65a5"],["/ReactMatch/static/js/main.761583ff.js","829426c16f93a169b75f968da56ad17e"],["/ReactMatch/static/media/Austin1.ebf6a5d7.jpg","ebf6a5d7dd1d8d03e1b3d365a250ff5a"],["/ReactMatch/static/media/Austin3.11610f73.jpg","11610f73c073bfe476b399a8f8523f86"],["/ReactMatch/static/media/Austin4.328462e1.jpg","328462e1f4a8a0eb6260706eb0a7ff1f"],["/ReactMatch/static/media/Austin5.15ff6d62.jpg","15ff6d623338815c7aaa31e588af2160"],["/ReactMatch/static/media/Austin6.72c49c62.jpg","72c49c62a58d28dd713c26cd317f44b8"],["/ReactMatch/static/media/Austin7.01363bdd.jpg","01363bddc12c34b16ff71a19038e5958"],["/ReactMatch/static/media/AustinGif.96de38fa.gif","96de38fa4d9db55e4078b702976ff17b"],["/ReactMatch/static/media/DrEvil.3f16a590.jpg","3f16a5908d2490881e90ea164bcdded8"],["/ReactMatch/static/media/DrEvil2.d3d55999.png","d3d55999823e3fcb7ec00181f29391a3"],["/ReactMatch/static/media/Heather.ecfb707d.jpg","ecfb707d32c7718c7fbece8e192758f5"],["/ReactMatch/static/media/Kinsington.0dacef08.jpeg","0dacef084cf5c4beed18bca9bd3d9012"],["/ReactMatch/static/media/Number2.560948d7.png","560948d7130422f3c2b29ae98a147036"],["/ReactMatch/static/media/Number2_2.7c0d7e68.png","7c0d7e68bcd3c4d1657974149e5620d5"],["/ReactMatch/static/media/logo.bf1aab9a.png","bf1aab9a046e4dcd6cae325aa750024a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/ReactMatch/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});