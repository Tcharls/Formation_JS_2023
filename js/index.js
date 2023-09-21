import { Meme } from './Meme.js';
import { ImagesList, listeImages } from './Image.js'
// autre possibilité de déclaration fonction
/**
 * chgt liste option du select en fonciton de la liste d'image
 * @param {ImagesList} images 
 */
const loadSelectImages = (images=listeImages) => {
    const select = document.querySelector('select#image'); // déclare liste
    const noItem = select.item(0); // récupère l'unique valeur de la liste initiale
    select.innerHTML = ""; // purge liste
    select.appendChild(noItem) // recrée la liste avec la valeur sauvegardé

    images.map((e) => {
        const optEleme = document.createElement("option");
        optEleme.value = e.id;
        optEleme.innerHTML = e.titre;
        select.appendChild(optEleme);
    });
}
window.lso=loadSelectImages

/** let meme=new Meme();
console.log(meme);
*/
/**
 * fonction d'init du bandeau JS
 * @param {string} color chaine de valeur de couleur css
 * @returns {undefined} pas de retour
 */

function changePreHeader(color) {
    // console.time('fnInitJs')
    // console.log(arguments);
    //   console.warn(arguments);
    //   console.error(arguments);
    // console.trace(arguments);

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
    // console.log("debut initJs");
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

        var meme = {
            texte: evt.target["texte"].value,
            taille: Number(evt.target["Taille"].value),
            posX: Number(evt.target["PosX"].value),
            posY: Number(evt.target['PosY'].value),
            color: evt.target["Color"].value,
        };

        console.log(meme);
        // console.log('texte', evt.target['texte'].value);
        // console.log('texte', evt.target['Taille'].value);
        // console.log('texte', evt.target['PosX'].value);
        // console.log('texte', evt.target['PosY'].value);
        // console.log('texte', evt.target['Color'].value);
        // debugger;
    }

    document.forms["meme_form"].addEventListener("submit", onformsubmit);
}

/** declenche le chargement apres chargement DOM

 */
document.addEventListener("DOMContentLoaded", function (evt) {
    initJs("black");
});
