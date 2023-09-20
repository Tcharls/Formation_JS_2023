/**
 * fonction d'init du bandeau JS
 * @param {string} color chaine de valeur de couleur css
 * @returns {undefined} pas de retour
 */

function changePreHeader(color) {
    // console.time('fnInitJs')
    console.log(arguments);
    //   console.warn(arguments);
    //   console.error(arguments);
    console.trace(arguments);

    var jsLoadedNode = document.querySelector("#is-js-loaded");
    jsLoadedNode.innerHTML = "JS est bien <b>CHARGE</b>";
    jsLoadedNode.style.color = color;
    jsLoadedNode.style.textAlign = "center";
    //   console.timeEnd('fnInitJs')
}

/**
 * fonction principale d'init des events (chargement complet et actif du DOM)
 * @param {*} color
 * @returns {undefined}
 */
function initJs(color) {
    changePreHeader(color);
    console.log("debut initJs");
    document
        .querySelector("#dontclick")
        .addEventListener("click", function (evt) {
            changePreHeader("tomato");
        });

    /**
     * 
     * @param {SubmitEvent} evt 
     */
    function onformsubmit(evt) {
        evt.preventDefault()
        console.log(evt);
        console.log('texte', evt.target['texte'].value);
        console.log('texte', evt.target['Taille'].value);
        console.log('texte', evt.target['PosX'].value);
        console.log('texte', evt.target['PosY'].value);
        console.log('texte', evt.target['Color'].value);
        // debugger;
    }

    document.forms["meme_form"].addEventListener("submit", onformsubmit);
}

/** declenche le chargement apres chargement DOM

 */
document.addEventListener("DOMContentLoaded", function (evt) {
    initJs("black");
});
