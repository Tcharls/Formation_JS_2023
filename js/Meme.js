/**
 * Constructeur d'objet Meme
 * variable commencant par "_" => privé (comme toute var déclarée)
 * "this." => public
 */
/**
 * construction d'un meme avec ou sans JSON
 * @param {string} jsonConfiguredMemeStr 
 */
function Meme(jsonConfiguredMemeStr) {
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

    /**
     * chargement valeurs depuis un meme en json
     * @param {string} jsonStr 
     */
    this.loadFromString = function (jsonStr) {
        Object.assign(this, JSON.parse(jsonStr));
    };

}

var meme = new Meme();



