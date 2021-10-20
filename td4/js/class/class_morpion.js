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

  get size(){
    return this.#size;
  }

  get table(){
    return this.#table;
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

  clicBouton (symbole, y, x){
    if (this.#table[y][x] === ' ') {
      this.#table[y][x] = symbole;
      return true;
    }
    else
      return false;
  }

  aGagne (symbole, y, x) {

    let nbSymboles;

    // gagné en ligne ?
    const ligne = y;
    nbSymboles = 0;
    for (let col = 0; col < this.#size; col++) {
      if (this.#table[ligne][col] === symbole) {
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
      if (this.#table[ligne][col] === symbole) {
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
        if (this.#table[lc][lc] === symbole) {
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
        if (this.#table[ligne][this.#size - (ligne + 1)] === symbole) {
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
