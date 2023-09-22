import { ImageMeme as Img } from './Image.js';
/**
 * Constructeur d'objet Meme
 * variable commencant par "_" => privé (comme toute var déclarée)
 * "this." => public
 */
/**
 * construction d'un meme avec ou sans JSON
 * @param {string} jsonConfiguredMemeStr 
 */
export function Meme(jsonConfiguredMemeStr) {
    this.texte = "";
    // this.id = "id du meme";
    this.posx = 0;
    this.posy = 50;
    this.taille = 20;
    this.fontWeight = 500;
    this.fontSize = 32;
    this.underline = false;
    this.italic = false;
    this.color = "#000000";
    this.imageId = -1;
    this.image = new Img();
    this.render = undefined;
    const render = () => {
        if (undefined !== this.render && typeof this.render === 'function') {
            this.render(this);
        }
    }

    /** update du meme par objet avec force 
     * @param {object} memeData
    */
    this.update = function (memeData) {
        Object.assign(this, memeData);
        render();
    }

    /**
     * chargement valeurs depuis un meme en json
     * @param {string} jsonStr 
     */
    this.loadFromString = function (jsonStr) {
        Object.assign(this, JSON.parse(jsonStr));
    };

    if (jsonConfiguredMemeStr !== undefined) {
        this.loadFromString(jsonConfiguredMemeStr);
    }
}




