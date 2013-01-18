// ==UserScript==
// @name        edumaticWindowOpenKiller
// @namespace   edumatic
// @include     http://edumatic.wmid.amu.edu.pl:9999/*
// @version     1
// @grant 		none
// ==/UserScript==
    var scriptCode = new Array();
    var newLink = "";

var eduShitLinks = document.querySelectorAll ("a[href*='top.openBigWindow']");
for (var i = eduShitLinks.length - 1;  i >= 0;  --i) {
    var eduLink  = eduShitLinks[i];
    for(var j = 35; j < eduLink.href.length-2; j++){
    	newLink += eduShitLinks[i].href[j];
    }
    console.debug("link "+newLink);
    eduLink.href = newLink;
    newLink = "";
    eduLink.target='_blank';
}