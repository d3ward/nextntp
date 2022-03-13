/* ----- Function to preconnect to an url ----- */
function preconnectTo(url) {
    var hint = document.createElement("link");
    hint.rel = "preconnect";
    hint.href = url;
    document.head.appendChild(hint);
  }