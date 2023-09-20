function initJs(color) {
  console.log(arguments);
  console.warn(arguments);
  console.error(arguments);
  console.trace(arguments);
  
  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS est bien <b>CHARGE</b>";
  jsLoadedNode.style.color = color;
  jsLoadedNode.style.textAlign = "center";
}

initJs("black", "teste");
