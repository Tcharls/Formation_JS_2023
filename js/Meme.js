import { ImageMeme as Img } from "./Image.js";
import Rest_Adr, { REST_RESSOURCES } from "./constantes.js";

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
  this.taille = 100;
  this.fontWeight = 500;
  this.fontSize = 32;
  this.underline = false;
  this.italic = false;
  this.color = "#000000";
  this.imageId = -1;
  this.image =undefined;
  this.render = undefined;
  const insideRender = () => {
    if (undefined !== this.render && typeof this.render === "function") {
      this.render(this);
    }
  };
  const render = () => {
    if (undefined !== this.render && typeof this.render === "function") {
      this.render(this);
    }
  };

  /** update du meme par objet avec force
   * @param {object} memeData
   */
  this.update = function (memeData) {
    Object.assign(this, memeData);
    render();
  };

  /**
   * chargement valeurs depuis un meme en json
   * @param {string} jsonStr
   */
  this.loadFromString = function (jsonStr) {
    Object.assign(this, JSON.parse(jsonStr));
  };

  /**
   * save
   */
  this.save = () => {
    return fetch(
      `${Rest_Adr}${REST_RESSOURCES.memes}${
        undefined !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? 'PUT':'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(this),
      }
    ).then ((response) => response.json());
  };

  if (jsonConfiguredMemeStr !== undefined) {
    this.loadFromString(jsonConfiguredMemeStr);
  }
}
