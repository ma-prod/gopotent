! function(t, n, e, s, i, o, r) { i = i || "Hood", ("Promise" in this) || (s = s.replace(".js", "-pf.js")), t[i] = t[i] || function() {
        (t[i].q = t[i].q || []).push(arguments) }, t[i].l = 1 * new Date, o = n.createElement(e), r = n.getElementsByTagName(e)[0], o.async = 1, o.crossOrigin = "anonymous", o.src = s + '?hf=' + i, r.parentNode.insertBefore(o, r) }(window, document, "script", "");
Hood('init', 'NTY4UsYjNLBa58r2ya0xO3ojMjE0NsgR', { push: 'BOY1B5wgN1OjEgBfZICjJDtjUdIhPkY4jKTT9ekUU0suAW1D1y3_3W78cBtJU4Dg3g1w73HjGgvojX-0UjZPNtU' });
Hood('config', 'customSw', '/sw.js');

function fAllow() { /* console.log("allowed") */ }

function fBlock() { /* console.log("blocked") */ }

function fGranted() { /* console.log("granted") */ }
Hood('requestPushPermission');
Hood('event', 'onPushGranted', fGranted);
Hood('event', 'onPushAllow', fAllow);
Hood('event', 'onPushBlock', fBlock);