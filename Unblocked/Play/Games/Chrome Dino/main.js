// ------------------------------------
// SCRIPT INJECTION
// ------------------------------------
function injectScript(src, async=false, nonce="") {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    if (async) script.setAttribute("async", "");
    if (nonce) script.setAttribute("nonce", nonce);
    document.head.append(script);
    console.log(`Injected script: ${src}`);
}

injectScript("/js/tab_cloak.js");
injectScript("/js/notify.js");
injectScript("https://fundingchoicesmessages.google.com/i/pub-5756835229788588?ers=1", true, "yibq-w_TR5NOCRWsU-VL0Q");

// ------------------------------------
// API CHECK FUNCTIONS
// ------------------------------------

// ------------------------------------
// COOKIE MANAGEMENT AND DOM MANIPULATIONS
// ------------------------------------




