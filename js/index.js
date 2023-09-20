function initJs(color) {
    // console.time('fnInitJs')
  console.log(arguments);
  console.warn(arguments);
  console.error(arguments);
  console.trace(arguments);

  var jsLoadedNode = document.querySelector("#is-js-loaded");
  jsLoadedNode.innerHTML = "JS est bien <b>CHARGE</b>";
  jsLoadedNode.style.color = color;
  jsLoadedNode.style.textAlign = "center";
//   console.timeEnd('fnInitJs')
}

initJs("black", "teste");
