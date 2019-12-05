/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-533882bff4fdd7c52de5.js"
  },
  {
    "url": "app-5c6bf55658c508ec054c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c5cb64bc0edabf3c9d7d.js"
  },
  {
    "url": "index.html",
    "revision": "065d9f488ca5e7e5cfca0d9692e8fa88"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3c58a343c0d65198ebc6c5fd06b8dfab"
  },
  {
    "url": "2.eac03220ef9302b061c7.css"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "component---src-pages-index-jsx-87f35e056019428ea06b.js"
  },
  {
    "url": "1-744795a572f5a5b09531.js"
  },
  {
    "url": "0-67c09113654780576fac.js"
  },
  {
    "url": "3-1b22589c73b63cdf3dff.js"
  },
  {
    "url": "2-09e89b32f077c3b47fd4.js"
  },
  {
    "url": "static/d/356/path---index-6a9-OizvUg0hhAS1bUMpSk1Zb3gDZPQ.json",
    "revision": "d3829872c9e76d4b8b03733c6f1c91e7"
  },
  {
    "url": "component---src-pages-404-jsx-46537e9f0841f403b54b.js"
  },
  {
    "url": "static/d/911/path---404-html-516-62a-yN5NhHioMJhs3GJuevem2O7od54.json",
    "revision": "b1e5883b19881cc890d4133dc448c212"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});