export class Morpion {
  static MAX_GRILLE = 8;
  static MIN_GRILLE = 3;

  #size;
  #table;

  constructor(size){
    this.#size = size;

    if (Number.isNaN(size) || size < Morpion.MIN_GRILLE || size > Morpion.MAX_GRILLE) {
      throw new Error("La taille est incorrecte !");
    }
    else {
      this.#start();
    }
  }

  #start(){
    this.#table = new Array(this.#size);
    for (var i = 0; i < this.#size; i++) {
      this.#table[i] = new Array(this.#size);

      for (let j = 0; j < this.#size; j++) {
        this.#table[i][j] = ' ';
      }
    }
  }

  aGagne (symbole, y, x) {

    let nbSymboles;

    // gagné en ligne ?
    const ligne = y;
    nbSymboles = 0;
    for (let col = 0; col < this.#size; col++) {
      if (morpion[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#size) {
      return true;
    }

    // gagné en colonne ?
    const col = x;
    nbSymboles = 0;
    for (let ligne = 0; ligne < this.#size; ligne++) {
      if (morpion[ligne][col] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#size) {
      return true;
    }

    // gagné diagonale
    if (x === y) {
      nbSymboles = 0;
      for (let lc = 0; lc < this.#size; lc++) {
        if (morpion[lc][lc] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#size) {
        return true;
      }
    }

    // gagné diag inverse
    if (x === this.#size - (y + 1)) {
      nbSymboles = 0;
      for (let ligne = 0; ligne < this.#size; ligne++) {
        if (morpion[ligne][this.#size - (ligne + 1)] === symbole) {
          nbSymboles++;
        }
      }
      if (nbSymboles === this.#size) {
        return true;
      }
    }

    return false;
  }

}
