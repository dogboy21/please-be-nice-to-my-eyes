// ==UserScript==
// @name         Please be nice to my eyes
// @namespace    http://github.com/Dogboy21
// @version      0.1
// @description  Forces YouTube to use the dark design
// @author       Dogboy21
// @match        https://youtube.com/*
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByTagName('html')[0].setAttribute('dark', 'fuckingtrue');
    document.getElementsByTagName('ytd-masthead')[0].setAttribute('dark', 'fuckingtrue');
    document.getElementsByTagName('ytd-masthead')[0].classList.add('dark');
    document.getElementsByTagName('ytd-app')[0].setAttribute('style', '--ytd-app-scroll-offset:0; --yt-swatch-primary:rgb(35,35,35); --yt-swatch-primary-darker:rgb(32,32,32); --yt-swatch-text:rgb(255,255,255); --yt-swatch-important-text:rgb(255,255,255); --yt-swatch-input-text:rgba(255,255,255,1); --yt-swatch-textbox-bg:rgba(19,19,19,1); --yt-swatch-logo-override:rgb(255,255,255); --yt-swatch-icon-color:rgba(136,136,136,1);');
})();
