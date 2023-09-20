/**
 * Constructeur d'objet Meme
 * variable commencant par "_" => privé (comme toute var déclarée)
 * "this." => public
 */

function Meme(configuredMeme) {
    this.texte = "";
    // this.id = "id du meme";
    this.posx = 0;
    this.posy = 50;
    this.taille = 20;
    this.fontWeight = 500;
    this.fontSize = 32 ; 
    this.underline = false;
    this.italic = false;
    this.color = "#000000";
    this.imageId = -1;

    }
var meme=new Meme();