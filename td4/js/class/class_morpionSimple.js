import {Morpion} from "./class_morpion.js";

export class MorpionSimple extends Morpion {

    constructor(size){
      super(size);
    }

    getResult(symbole,x,y){
      const aTrouver = symbole.repeat(3);

      // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
      let ligne = '';
      this.#table[y].forEach(element => (ligne += element));
      if (ligne.indexOf(aTrouver) >= 0) {
        return true;
      }

      // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
      let col = '';
      this.#table.forEach(element => (col += element[x]));
      if (col.indexOf(aTrouver) >= 0) {
        return true;
      }

      // gagné diagonale
      if (x === y) {
        let diagonale = '';
        for (let lc = 0; lc < this.#size; lc++) {
          diagonale += this.#table[lc][lc];
        }
        if (diagonale.indexOf(aTrouver) >= 0) {
          return true;
        }
      }

      // gagné diag inverse
      if (x === this.#size - (y + 1)) {
        let inverse = '';
        for (let lc = 0; lc < this.#size; lc++) {
          inverse += this.#table[lc][this.#size - (lc + 1)];
        }
        if (inverse.indexOf(aTrouver) >= 0) {
          return true;
        }
      }

      return false;
    }
}
