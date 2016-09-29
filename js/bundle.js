(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var qs = function qs(query) {
	return document.querySelector(query);
};
var qsa = function qsa(query) {
	return document.querySelectorAll(query);
};
var accordionLis = qsa('.accordion > li > header');

for (var i = 0; i < accordionLis.length; i++) {
	var al = accordionLis[i];

	al.addEventListener("click", function (ev) {
		var li = this.parentNode;
		var content = li.querySelector(".content");
		if (li.classList.contains("active")) {
			li.classList.remove("active");
			content.style.height = "0px";
		} else {
			li.classList.add("active");
			var h = li.querySelector('.wrapper').offsetHeight;
			content.style.height = h + "px";
		}
	});
}

var getYPosition = function getYPosition(el) {

	var bodyRect = document.body.getBoundingClientRect();
	var elemRect = el.getBoundingClientRect();

	return elemRect.top - bodyRect.top;
};

var pn = qs("#primaryNav");
window.addEventListener("scroll", function (ev) {

	var paddingTop = 10;
	var yBox = getYPosition(qs("main .box")) - paddingTop;
	var y = window.scrollY;
	if (y >= yBox) {
		pn.classList.add("active");
	} else {
		pn.classList.remove("active");
	}
});

},{}]},{},[1]);
