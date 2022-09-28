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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9f5d89518ea017ef203a07fdb54348c2"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f7f7161d.js",
    "revision": "9e983649a4fb484fc6b3a8fb69584400"
  },
  {
    "url": "assets/js/11.b20632c1.js",
    "revision": "3fbd2d5bffa55f484b6cd25778bbf8c6"
  },
  {
    "url": "assets/js/12.0246bbbc.js",
    "revision": "5dedf0f80f181f93fcf14118dc3ad3f4"
  },
  {
    "url": "assets/js/13.28bda602.js",
    "revision": "c1f50acc3b14c5f32f6ee2cb88469f75"
  },
  {
    "url": "assets/js/14.97519492.js",
    "revision": "d164246e29212ebca7727e76bbacd526"
  },
  {
    "url": "assets/js/15.be4dbb4d.js",
    "revision": "4bf042b6c47306d1c6eda58df12ee104"
  },
  {
    "url": "assets/js/16.73d7db7e.js",
    "revision": "f1971a82c7c697a9089adfd525c0b689"
  },
  {
    "url": "assets/js/17.86983806.js",
    "revision": "40d3f6d4374714109fbeb4207d4aaf3d"
  },
  {
    "url": "assets/js/18.967110c4.js",
    "revision": "d9467212f623bbd7537697ecad90e58e"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.ba640331.js",
    "revision": "31302a0254e4c765afe505e2e40dcdc0"
  },
  {
    "url": "assets/js/4.cec81cc0.js",
    "revision": "dd9cd69980ffda00e5d772f8e9dda30a"
  },
  {
    "url": "assets/js/5.6854503b.js",
    "revision": "9196cbc6e3b59fc26e3ba74f76fd6013"
  },
  {
    "url": "assets/js/6.50184266.js",
    "revision": "480e90f17965ec85079f13ef9a3aa018"
  },
  {
    "url": "assets/js/7.29047d46.js",
    "revision": "d7f295832f4dffbd02d0c74b21dd629c"
  },
  {
    "url": "assets/js/8.cf87f0c1.js",
    "revision": "17ac1de1251ea90828ee088071fd3998"
  },
  {
    "url": "assets/js/9.c98e7c1c.js",
    "revision": "ab225b948483e8b8d982897c54bf1102"
  },
  {
    "url": "assets/js/app.cfbcbb76.js",
    "revision": "08d94c7814d81ee4e12511ec2acadc78"
  },
  {
    "url": "demo/index.html",
    "revision": "5431862fed3a1da2ab6e60e296e186c3"
  },
  {
    "url": "gitCmd/index.html",
    "revision": "b8a6d5ffa77937b84f9de3a821822b0f"
  },
  {
    "url": "guide.html",
    "revision": "9863a5f520bc405c82d6c986d6052a96"
  },
  {
    "url": "images/demo1.jpg",
    "revision": "4283b8d7f590d92a9074c6aca2b36a56"
  },
  {
    "url": "images/demo2.jpg",
    "revision": "d275840554d55c05a4e04fb7ba8dd6f8"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/lealeft1.png",
    "revision": "e28b9454b02813d90f9f7be7bb5d4d61"
  },
  {
    "url": "images/lealeft2.png",
    "revision": "8b3d04846d000b83a7a4e9e6732a3c4c"
  },
  {
    "url": "images/lealeft3.png",
    "revision": "f51730cdf9d6a936086c237568a740b8"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/tinymce.jpg",
    "revision": "58ae8a8f17f02dc94c4212e36f4153c7"
  },
  {
    "url": "index.html",
    "revision": "088a61c40f2279b06aff2de68cba25ad"
  },
  {
    "url": "jsPage/a.html",
    "revision": "3151fb4cb7cba58684443dedea58edf4"
  },
  {
    "url": "jsPage/b.html",
    "revision": "d700dd898d3eb512cab77eda8749d02d"
  },
  {
    "url": "jsPage/c.html",
    "revision": "af417f857a1d09d3a01384cf3dc083b1"
  },
  {
    "url": "jsPage/d.html",
    "revision": "65e656826be3efb920d920718f99cc5b"
  },
  {
    "url": "jsPage/index.html",
    "revision": "e7a94fd01dc46ff015f5b1902c0d35a3"
  },
  {
    "url": "lealeft/a.html",
    "revision": "a293a3e99fd4fd471d0619827d560ea0"
  },
  {
    "url": "lealeft/index.html",
    "revision": "71bef00089893b65921d2214a51dfa71"
  },
  {
    "url": "vuePage/index.html",
    "revision": "869ac6437486dc8f31e454402c9df416"
  },
  {
    "url": "webPage/a.html",
    "revision": "489735dc43c5da341dae5907ac40aaa1"
  },
  {
    "url": "webPage/b.html",
    "revision": "ce0d97e172e1c2ea41e70afe19a046be"
  },
  {
    "url": "webPage/index.html",
    "revision": "f89fb18510064ec6599e4d341dc11b2a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
