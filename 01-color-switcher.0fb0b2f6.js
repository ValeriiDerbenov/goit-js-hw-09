const t={body:document.querySelector("body"),buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};let o=null;function n(){t.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.buttonStart.addEventListener("click",(function(){o=setInterval(n,1e3),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.disabled=!1,t.buttonStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.0fb0b2f6.js.map