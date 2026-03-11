// ==UserScript==
// @name         Monokai theme for ffc
// @description  change color of fcc
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        [ffc site link]
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    let enabled = false;
    function applyState() {
    document.body.style.backgroundColor = '#1A1B16';
    document.getElementById("learn-app-wrapper").style.backgroundColor = '#1A1B16';
    document.querySelectorAll(".language-html, .language-js, .language-md, .language-css, code").forEach(element => (element.style.backgroundColor = '#2A2B24'));
    const optionField = document.querySelectorAll(".mcq-option-row");
    optionField.forEach(element => (element.style.backgroundColor = '#1A1B16'));
    optionField.forEach(element => (element.style.borderBottom = '2px solid #403F2B'));
    optionField.forEach(element => (element.style.borderLeft = '4px solid #403F2B'));
    optionField.forEach(element => (element.style.borderRight = '4px solid #403F2B'));
    optionField.forEach(element => (element.style.borderTop = '2px solid #403F2B'));
    document.querySelectorAll(".bg-background-quaternary").forEach(element => (element.style.backgroundColor = '#4F4F4F'));
//        console.log(document.querySelectorAll(".language-html"));
    document.querySelectorAll(".universal-nav, .breadcrumbs-demo, .action-row")
        .forEach(el => {
            el.style.display = enabled ? "" : "none";
        });
}
    const selectors = [
        ".universal-nav",
        ".breadcrumbs-demo",
        ".action-row"
    ];

    function toggleElement() {

        enabled = !enabled;
        console.log("toggle:", enabled);

        selectors.forEach(sel => {
            const el = document.querySelector(sel);
            if (el) {
                el.style.display = enabled ? "" : "none";
            }
        });
    }
    const btn = document.createElement("button");
    btn.textContent = "Toggle Element";

    btn.style.cssText = `
        position:fixed;
        bottom:20px;
        right:20px;
        z-index:999999;
        padding:10px 14px;
        background:black;
        color:white;
        border:none;
        border-radius:6px;
        cursor:pointer;
    `;

    btn.addEventListener("click", toggleElement);

    document.body.appendChild(btn);
new MutationObserver(applyState)
.observe(document.body, {childList:true, subtree:true});
})();