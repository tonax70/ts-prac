// ==UserScript==
// @name         Coursera God-Mode V9 (The Accumulator)
// @namespace    http://tampermonkey.net/
// @version      9.0
// @description  Alt+S to toggle. Automates the 80->90% manual success trick with a visual HUD.
// @author       You
// @match        *://*.coursera.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let isEnabled = false;
    let phase = "IDLE";
    let serverStatus = "WAITING";
    const TARGET_HIGH = 16.0;

    // --- 1. THE HUD (Heads-Up Display) ---
    const hud = document.createElement('div');
    hud.style = "position:fixed;top:10px;right:10px;z-index:9999;background:rgba(0,0,0,0.8);color:white;padding:10px;border-radius:5px;font-family:monospace;font-size:12px;border:1px solid #444;pointer-events:none;display:none;";
    document.body.appendChild(hud);

    function updateHUD(actualSpeed, progress) {
        hud.style.display = isEnabled ? 'block' : 'none';
        hud.innerHTML = `
            <b style="color:#00ff00">COURSERA TURBO V9</b><br>
            PHASE: <span style="color:${phase==='STEALTH'?'#ffaa00':'#00aaff'}">${phase}</span><br>
            SPEED: ${actualSpeed.toFixed(2)}x<br>
            PROGRESS: ${progress.toFixed(1)}%<br>
            SERVER: <span style="color:${serverStatus==='ACCEPTED'?'#00ff00':'#ffffff'}">${serverStatus}</span>
        `;
    }

    // --- 2. NETWORK INTERCEPTOR ---
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function(m, u) { this._url = u; return originalOpen.apply(this, arguments); };
    XMLHttpRequest.prototype.send = function(data) {
        if (this._url && (this._url.includes('infobatch') || this._url.includes('videoEvents'))) {
            this.addEventListener('load', function() {
                if (this.status === 200) {
                    if (this._url.includes('ended')) {
                        serverStatus = "ACCEPTED";
                        console.log("%c✅ SERVER ACCEPTED COMPLETION", "color: #00ff00; font-weight: bold;");
                    } else {
                        serverStatus = "HEARTBEAT_OK";
                    }
                } else {
                    serverStatus = `ERR_${this.status}`;
                }
            });
        }
        return originalSend.apply(this, arguments);
    };

    // --- 3. PROTOTYPE DNA LOCK ---
    const nativeSetter = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set;
    const nativeGetter = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').get;

    Object.defineProperty(HTMLMediaElement.prototype, 'playbackRate', {
        get: function() { return isEnabled ? (phase === "STEALTH" ? 1.0 : TARGET_HIGH) : nativeGetter.call(this); },
        set: function(val) { if (!isEnabled) nativeSetter.call(this, val); },
        configurable: true
    });

    // --- 4. THE BRAIN (80/90 Logic) ---
    function brain() {
        if (!isEnabled) return;
        const v = document.querySelector('video');
        if (!v) return;

        const progress = (v.currentTime / v.duration) * 100;

        // PHASE SWITCHING LOGIC (Your Manual Trick)
        if (progress < 80) {
            phase = "TURBO_1";
            nativeSetter.call(v, TARGET_HIGH);
        } else if (progress >= 80 && progress < 91) {
            phase = "STEALTH"; // This mimics you stopping the script
            nativeSetter.call(v, 1.0);
        } else if (progress >= 91) {
            phase = "FINAL_SPRINT";
            nativeSetter.call(v, TARGET_HIGH);
        }

        v.muted = true;
        if (v.paused && !v.ended) v.play();

        // Calculate actual speed for HUD
        window.lastV = window.lastV || v.currentTime;
        window.lastR = window.lastR || performance.now();
        const deltaV = v.currentTime - window.lastV;
        const deltaR = (performance.now() - window.lastR) / 1000;
        const actual = deltaV / deltaR;
        window.lastV = v.currentTime;
        window.lastR = performance.now();

        updateHUD(actual, progress);
        if (v.ended) { phase = "DONE"; isEnabled = false; }
    }

    setInterval(brain, 1000);

    // --- 5. TOGGLE ---
    window.addEventListener('keydown', (e) => {
        if (e.altKey && e.code === 'KeyS') {
            e.preventDefault();
            isEnabled = !isEnabled;
            if (!isEnabled) {
                phase = "IDLE";
                const v = document.querySelector('video');
                if (v) nativeSetter.call(v, 1.0);
            }
        }
    });

    console.log("🛠️ V9 The Accumulator Loaded. Alt+S to start. Follow the HUD.");
})();