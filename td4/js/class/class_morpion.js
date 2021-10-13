export class Morpion {

  #size;
  #table;

  constructor(size) {
    this.#size = size;
    this.#start();
  }

  #start(){
    this.#table = new Array(this.#size);
    for (var i = 0; i < this.#size; i++) {
      this.#table[i] = new Array(this.#size);

      for (let j = 0; j < this.#size; j++) {
        morpion[i][j] = ' ';
      }
    }
  }

  set size(n){
    this.#size = n;
  }

  get size(){
    return this.#size;
  }

  setCase(symbole,x,y){
    if (this.#table[y][x] === ' ') {
      this.#table[y][x] = symbole;
      return true;
    }
    else {
      return false;
    }
  }

  reset(){
    this.#start();
  }

}
