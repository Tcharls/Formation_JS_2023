class ImageShort {
    /** ex declaration variable private */
    #uid;
    /** declaration variable */
    w;
    h;
    url;

    /** declaration constructeur par défaut
    * @param {Object?} 
    */
    constructor(img={}) {
        this.#uid=Math.random();
        if (undefined !== img.w) {
            this.w = img.w;
        }

        /** condition sous forme ternaire : si 'undefined!==img.h' alors 'img.h:100' */
        // this.h=(undefined!==img.h?img.h:100);

        if (undefined !== img.url && img.url.length >= 5) {
            this.url = img.url;
        } else {
            this.url = "";
        }
    }

    get uid() {
        return this.#uid;
    }

    set uid(value){
        this.#uid = value;
    }

    /** declaration fonction rapport hauteur largeur */
    get RatioWH(){
        return this.w/this.h;
    }
}

/** classe étendue depuis la classe Image */
export class ImageMeme extends ImageShort {
    titre = "pas image";
    id = undefined;

    constructor(img) {
        super(img);

        if (undefined !== img.titre && img.titre.length > 2) {
            this.titre = img.titre;
        } else if (
            undefined === img.titre &&
            undefined !== img.url &&
            img.url.length > 5
        ) {
            this.titre = img.url.slice(
                img.url.lastindexof("/") + 1,
                img.url.lastindexof(".")
            );
        }

        if (undefined !== img.id) {
            this.id = img.id;
        }
    }
}

export class ImagesList extends Array{
    loadFromRest(){
        return fetch('http://localhost:5679/images')
            .then(response=>{
                return response.json();})
            .then((arr)=>{
                console.log(arr,this);

                /** vidange totale array */
                // this.splice(0);

                /** 
                 * traite chaque élément du tableau
                 * this.forEach((element,position,liste))
                 * ou voir  dessous 
                 *          arr.map((element,position,liste)=>{
                 *          console.log(element,position,liste);
                 *          this.push(element);
                 *          })    
                });
                */
                this.push(...arr);
                console.log(this);
            })
    }

}

export const listeImages=new ImagesList();
listeImages.loadFromRest();