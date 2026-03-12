// ==UserScript==
// @name         Monokai theme for ffc
// @description  change color of free code camp stuff
// @namespace    http://tampermonkey.net/
// @version      1.0
// @match        ffc
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
        // Example: JetBrains Mono. You can replace this URL with any Google Font.
    const fontName = "'Cascadia Code'";
    const fontUrl = 'https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap';
    const fontWeight = 300;

    // Wait until the head exists to append the font link
    const injectFont = setInterval(() => {
        if (document.head) {
            const link = document.createElement('link');
            link.href = fontUrl;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            clearInterval(injectFont);
        }
    }, 10);
    const monacoColorMap = {
        '#0a0a23': '#272822', // Editor Background -> Monokai BG
        '#ffffff': '#f8f8f2', // Editor Foreground / Variables / Functions -> Monokai FG
        '#858591': '#88846f', // Comments
        '#dbb8ff': '#F92672', // Keywords / Types -> Monokai Pink
        '#f07178': '#F92672', // Tags -> Monokai Pink
        '#99c9ff': '#66D9EF', // Punctuation / Properties -> Monokai Blue
        '#f78c6c': '#AE81FF', // Numbers / Constants -> Monokai Purple
        '#acd157': '#E6DB74', // Strings / RegExp -> Monokai Yellow
        '#3b3b4f': '#414339', // Selection / Line Highlight -> Monokai Grayish
    };
    const staticMonokaiCSS = `
        /* --- APPLY FONT TO EVERYTHING CODE RELATED --- */
        code[class*="language-"],
        pre[class*="language-"],
        pre,
        .monaco-editor,
        .monaco-editor .view-lines,
        .monaco-editor .margin,
        .monaco-editor .line-numbers,
        .monaco-editor .inputarea {
            font-family: ${fontName}, monospace !important;
            font-weight: ${fontWeight} !important;
            /* Optional: Adjust font size/ligatures if needed */
            font-variant-ligatures: contextual !important;
        }

        /* --- MONOKAI FOR STATIC CODE BLOCKS (Prism.js) --- */
        code[class*="language-"],
        pre[class*="language-"],
        pre {
            background-color: #272822 !important;
            color: #f8f8f2 !important;
            text-shadow: none !important;
            border: none !important;
        }
        .token.comment, .token.prolog, .token.doctype, .token.cdata { color: #88846f !important; font-style: italic !important; }
        .token.punctuation { color: #f8f8f2 !important; }
        .token.namespace { opacity: .7 !important; }
        .token.property, .token.tag, .token.constant, .token.symbol, .token.deleted { color: #F92672 !important; }
        .token.boolean, .token.number { color: #AE81FF !important; }
        .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted { color: #E6DB74 !important; }
        .token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable { color: #f8f8f2 !important; }
        .token.atrule, .token.attr-value, .token.function, .token.class-name { color: #A6E22E !important; }
        .token.keyword { color: #66D9EF !important; font-style: italic !important; }
        .token.regex, .token.important { color: #FD971F !important; }

        /* Hard override for Monaco Editor background */
        .monaco-editor, .monaco-editor-background, .monaco-editor .margin .code {
            background-color: #272822 !important;
        }
    `;
    let enabled = false;
    function applyState() {
        document.body.style.backgroundColor = '#1A1B16';
        document.getElementById("learn-app-wrapper").style.backgroundColor = '#1A1B16';
        document.querySelectorAll(".language-html, .language-js, .language-md, .language-css, code").forEach(element => (element.style.fontName = 'Cascadia Code'));
        document.querySelectorAll(".language-html, .language-js, .language-md, .language-css, code").forEach(element => (element.style.background = ' #272822'));
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

        // Inject the static CSS
        if (typeof GM_addStyle !== "undefined") {
            GM_addStyle(staticMonokaiCSS);
        } else {
            const style = document.createElement('style');
            style.textContent = staticMonokaiCSS;
            document.head.appendChild(style);
        }
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

    // Function to search a style tag and replace FCC colors with Monokai colors
    function patchMonacoStyles(styleElement) {
        // Only target tags that have Monaco colors in them
        if (styleElement.innerHTML.includes('#0a0a23') || styleElement.innerHTML.includes('.mtk')) {
            let newCSS = styleElement.innerHTML;

            for (const [fccColor, monokaiColor] of Object.entries(monacoColorMap)) {
                // Replace case-insensitively globally (e.g. #0A0A23 or #0a0a23)
                const regex = new RegExp(fccColor, 'gi');
                newCSS = newCSS.replace(regex, monokaiColor);
            }

            if (newCSS !== styleElement.innerHTML) {
                styleElement.innerHTML = newCSS;
            }
        }
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


    document.body.appendChild(btn);
    new MutationObserver(applyState)
        .observe(document.body, { childList: true, subtree: true });
    // Monaco creates dynamic <style> tags (usually <style class="monaco-colors">)
    // We use a MutationObserver to catch them the millisecond they are added to the DOM
    const observer2 = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'STYLE') {
                    patchMonacoStyles(node);
                }
            }
        }
    });

    // Start observing the page for dynamic style injections
    observer2.observe(document.documentElement, { childList: true, subtree: true });
    btn.addEventListener("click", toggleElement);
    // Patch any styles that might have loaded before our observer caught them
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('style').forEach(patchMonacoStyles);
    });

})();