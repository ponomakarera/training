// ==UserScript==
// @name        t.um block
// @namespace   http://noromanba.flavors.me
// @description remove t.umblr.com redirector from links on Tumblr for UserScript
// @include     http://*.tld/*
// @include     https://*.tumblr.com/*
// @grant       none
// @noframes
// @run-at      document-end
// @version     2016.5.19.0
// @homepage    https://gist.github.com/noromanba/76a3d7791cf6eaf1c94c
// @downloadURL https://gist.github.com/noromanba/76a3d7791cf6eaf1c94c/raw/t-um-block.user.js
// @license     CC0 Univ PD https://creativecommons.org/publicdomain/zero/1.0/legalcode
// @author      noromanba   http://noromanba.flavors.me
// @icon        https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/WHMIS_Class_D-2.svg/64px-WHMIS_Class_D-2.svg.png
// ==/UserScript==

// Icon (PD by Silsor/Health Canada)
// https://commons.wikimedia.org/wiki/File%3AWHMIS_Class_D-2.svg

// Bookmaklet
// http://let.hatelabo.jp/noromanba/let/hLHU2KbCtZgI

// Devel
// https://gist.github.com/noromanba/76a3d7791cf6eaf1c94c


// c.f.
// http://ptech.g.hatena.ne.jp/noromanba/20160208/1454965267
// https://stackoverflow.com/questions/35023389/tumblr-injecting-new-code-into-my-links

// e.g.
// https://yahoo.tumblr.com
// http://blog.qiita.com
(() => {
    'use strict';

    // Tumblr has https and custom-domain e.g.
    //  https://yahoo.tumblr.com
    //  http://blog.qiita.com
    //
    // Tumblr detection methods
    //
    // -[ ] og:url | optional and nullable
    //      <meta content="" property="og:url" />
    // -[ ] canonical | custom-domain url
    //      <link rel="canonical" href="https://yahoo.tumblr.com" />
    //      <link rel="canonical" href="http://blog.qiita.com" />
    // -[-] shortcut icon | probably ok, but nullable
    //      <link href="http://38.media.tumblr.com/avatar_ee011965a9a8_128.png" rel="shortcut icon" />
    //      TBD ~= whitespace-separated serector; "[rel~="shortcut"], [rel~="icon"]"
    //      document.head.querySelector('link[rel="shortcut icon"][href]');
    // -[x] pre_tumblelog.js | absolutely ok
    //
    if (!document.head || !document.head.querySelector([
        'script[src^="http://assets.tumblr.com/assets/scripts/pre_tumblelog.js"]',
        'script[src^="https://secure.assets.tumblr.com/assets/scripts/pre_tumblelog.js"]'
    ])) {
        return;
    }

    const detox = (ctx) => {
        //if (!ctx.querySelectorAll) return;

        Array.from(ctx.querySelectorAll([
            'a[href^="http://t.umblr.com/redirect?z="]',
            'area[href^="http://t.umblr.com/redirect?z="]'
        ]), link => {
            // redirector syntax; hash endsWith "%3D%3D" i.e. "==", base64?
            // http://t.umblr.com/redirect?z=<ENCODED_URL>&t=<72_DIGIT_HASH>
            const url = (new URL(link.href).search.match(/(?:\?|&)z=([^&]+)/) || [])[1];
            if (!url) return;

            link.href = decodeURIComponent(url);
        });
    };
    detox(document.body);

    new MutationObserver(records => {
        records.forEach(record => {
            detox(record.target);
        });
    }).observe(document.body, { childList: true, subtree: true });
})();


// DBG
/*
Array.from(document.querySelectorAll([
    '[href^="http://t.umblr.com/redirect?z="]',
    '[src^="http://t.umblr.com/redirect?z="]'
]), link => link.tagName).filter((val, idx, ary) => {
    return ary.indexOf(val) === idx;
});
*/
