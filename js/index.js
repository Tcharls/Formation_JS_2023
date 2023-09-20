/**
 * fonction d'init de JS
 * @param {string} color chaine de valeur de couleur css
 * @returns {undefined} pas de retour
 */

function changePreHeader(color) {
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

function initJs(params) {
  changePreHeader("black");
  console.log("debut initJs")
  document.querySelector('#dontclick').addEventListener("click", function (evt) {
    console.log(evt);
  });
}

initJs("black");
