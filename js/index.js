import { Meme } from './Meme.js';
import { ImagesList, listeImages } from './Image.js';

/** rempli le formulaire par défaut
 * @param {Meme} meme 
 */
const fillFormDatas = (meme) => {
    const formElement = document.forms['meme_form'];
    formElement['texte'].value = meme.texte;
    formElement['PosX'].value = meme.posx;
    formElement['PosY'].value = meme.posy;
    formElement['Color'].value = meme.color;
    formElement['Taille'].value = meme.taille;
}

/** fonciton de soummission di formulaire
 * @param {SubmitEvent} evt de soumission
 */
const addFormEvent = () => {
    fillFormDatas(current);
    renderMeme(current);

    /**
     * 
     * @param {SubmitEvent} evt 
     */

    function onformsubmit(evt) {
        evt.preventDefault();
        const promiseSave = current.save();
        promiseSave.then((obj) => {
            current = new Meme();
            current.render = renderMeme;
            fillFormDatas(current);
            renderMeme(current);
        })
        console.log(evt);

    }

    const form = document.forms["meme_form"];
    form.addEventListener("submit", onformsubmit);

    // action lors de l'entrée de texte
    form['texte'].addEventListener("input", (evt) => {
        current.update({ texte: evt.target.value });
    })

    // action lors du changemnt X et Y
    form['PosX'].addEventListener("input", (evt) => {
        current.update({ PosX: Number(evt.target.value) });
    })
    form['PosY'].addEventListener("input", (evt) => {
        current.update({ PosY: Number(evt.target.value) });
    })

    // action lors du changemnt Taille
    form['Taille'].addEventListener("input", (evt) => {
        current.update({ Taille: Number(evt.target.value) });
    })

    // action lors du changemnt Couleur
    form['Color'].addEventListener("input", (evt) => {
        current.update({ Color: evt.target.value });
    })

    // action lors du changemnt Image
    form['image'].addEventListener("change", (evt) => {
        const id = Number(evt.target.value);
        const imageFound = listeImages.find(elementimage => {
            return elementimage.id === id;
        });
        current.update({ imageId: id, image: imageFound });
        // console.log(current)
    
    })

}
/**
 * 
 * @param {Meme} meme 
 */
const renderMeme = (meme) => {
    /* rendu DOM pour un meme */
    console.log(meme);
    const svg = document.querySelector('svg');
    const texteElement = svg.querySelector('text');
    texteElement.innerHTML = meme.texte;
    texteElement.setAttribute('x', meme.posx);
    texteElement.setAttribute('y', meme.posy);
    texteElement.setAttribute('font-size', meme.Taille);
    texteElement.setAttribute('fill', meme.Color);

    svg.setAttribute('viewBox',`0 0 ${undefined!==meme.image?meme.image.w:'2000'} ${undefined!==meme.image?meme.image.h:'1'}`);
    svg.querySelector('image').setAttribute('href',undefined!==meme.image?meme.image.url:'');

};

/** ajout d'un meme
 * 
 */
let current = new Meme();
current.render = renderMeme;

// autre possibilité de déclaration fonction
/**
 * chgt liste option du select en fonciton de la liste d'image
 * @param {ImagesList} images 
 */
const loadSelectImages = (images = listeImages) => {
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
// window.lso=loadSelectImages

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

    addFormEvent();
}

/** declenche le chargement apres chargement DOM

 */
const promiseImage = listeImages.loadFromRest(); // precharge la liste d'image => promise
document.addEventListener("DOMContentLoaded", function (evt) {
    promiseImage.then((r) => { // charge la liste apres promise yes et DOM yes
        loadSelectImages(listeImages)
    });
    initJs("black");
});
