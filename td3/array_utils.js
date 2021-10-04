 export function getSum41 (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function getSum41Alt1 (arr) {
  let sum = 0;
  for (const n of arr) {
    sum += n;
  }
  return sum;
}

function getSum41Alt2 (arr) {
  let sum = 0;
  arr.forEach(n => (sum += n));
  return sum;
}

function getSum41Alt3 (arr) {
  return arr.reduce((sum, n) => sum + n);
}

/* ------------------------------------------------------ */

export function getNumberOfEven42 (arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      number++;
    }
  }
  return number;
}

function getNumberOfEven42Alt1 (arr) {
  let number = 0;
  for (const n of arr) {
    if (n % 2 === 0) {
      number++;
    }
  }
  return number;
}

function getNumberOfEven42Alt2 (arr) {
  let number = 0;
  arr.forEach(n => n % 2 === 0 ? number++ : null);
  return number;
}

function getNumberOfEven42Alt3 (arr) {
  return arr.filter(n => n % 2 === 0).length;
}

function getNumberOfEven42Alt4 (arr) {
  // tiré par les cheveux...
  // on incrémente le 1er élément à chaque pair
  let rdc = arr.reduce((nb, n) => n % 2 === 0 ? ++nb : nb);
  // du coup il faut soustraire le 1er élément
  rdc -= arr[0];
  // mais si le 1er élément est pair, on le comptabilise
  if (arr[0] % 2 === 0) {
    rdc++;
  }
  return rdc;
}

/* ------------------------------------------------------ */

// Les deux tableaux en entrées sont triés,
// donc on en tient compte dans l'algo de tri
function sort43 (arr1, arr2) {
  const s1 = arr1.length;
  const s2 = arr2.length;
  let iR = 0;
  let i1 = 0;
  let i2 = 0;
  let resultArray = [];
  while (iR < s1 + s2) {
    // aucun tableau n'a encore étét transféré
    if (i1 < s1 && i2 < s2) {
      if (arr1[i1] <= arr2[i2]) {
        resultArray[iR] = arr1[i1];
        i1++;
      } else {
        resultArray[iR] = arr2[i2];
        i2++;
      }
      iR++;
    } else {
      // Le tableau 2 a été traité, on ajoute le reste du tableau 1
      if (i1 < s1) {
        resultArray = [...resultArray, ...arr1.slice(i1)];
      } else {
        // Le tableau 1 a &t& traité, on ajoute le reste du tableau 2
        resultArray = [...resultArray, ...arr2.slice(i2)];
      }
      iR = resultArray.length;
    }
  }
  return resultArray;
}

/* ------------------------------------------------------ */

export function binarySearch44 (arr, element) {
  let result = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end && result === -1) {
    const half = Math.round((end + start) / 2);
    if (element === arr[half]) {
      result = half;
    } else if (element > arr[half]) {
      start = half + 1;
    } else {
      end = half - 1;
    }
  }
  return result;
}

/* ------------------------------------------------------ */

export function getMaxEven45 (...arr) {
  let maxEven = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > maxEven) {
      maxEven = arr[i];
    }
  }
  return maxEven;
}

function getMaxEven45Alt1 (...arr) {
  let maxEven = Number.MIN_SAFE_INTEGER;
  for (const n of arr) {
    if (n % 2 === 0 && n > maxEven) {
      maxEven = n;
    }
  }
  return maxEven;
}

function getMaxEven45Alt2 (...arr) {
  let maxEven = Number.MIN_SAFE_INTEGER;
  arr.forEach(
    n => {
      if (n % 2 === 0 && n > maxEven) {
        maxEven = n;
      }
    });

  return maxEven;
}

/* ------------------------------------------------------ */

function countWords46 (str) {
  const arr = str.split(' ');
  let counters = {};
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(counters).includes(arr[i].toLowerCase())) {
      counters[arr[i].toLowerCase()]++;
    } else {
      counters[arr[i].toLowerCase()] = 1;
    }
  }
  return counters;
}

function countWords46Alt1 (str) {
  const arr = str.split(' ');
  let counters = {};
  for (const word of arr) {
    if (Object.keys(counters).includes(word.toLowerCase())) {
      counters[word.toLowerCase()]++;
    } else {
      counters[word.toLowerCase()] = 1;
    }
  }
  return counters;
}

function countWords46Alt2 (str) {
  const arr = str.split(' ');
  let counters = {};
  arr.forEach(word => {
    if (Object.keys(counters).includes(word.toLowerCase())) {
      counters[word.toLowerCase()]++;
    } else {
      counters[word.toLowerCase()] = 1;
    }
  });

  return counters;
}

/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
// console.log('4.1');
// console.log(getSum41([1, 2, 10, 20, 40, 87]));
// console.log(getSum41Alt1([1, 2, 10, 20, 40, 87]));
// console.log(getSum41Alt2([1, 2, 10, 20, 40, 87]));
// console.log(getSum41Alt3([1, 2, 10, 20, 40, 87]));
//
// console.log('4.2');
// console.log(getNumberOfEven42([4, 2, 10, 20, 33, 40]));
// console.log(getNumberOfEven42Alt1([4, 2, 10, 20, 33, 40]));
// console.log(getNumberOfEven42Alt2([4, 2, 10, 20, 33, 40]));
// console.log(getNumberOfEven42Alt3([4, 2, 10, 20, 33, 40]));
// console.log(getNumberOfEven42Alt4([4, 2, 10, 20, 33, 40]));
// console.log(getNumberOfEven42Alt4([3]));
// console.log(getNumberOfEven42Alt4([4]));
//
// console.log('4.3');
// console.log(sort43([], []));
// console.log(sort43([1], []));
// console.log(sort43([], [20]));
// console.log(sort43([1], [5]));
// console.log(sort43([10], [5]));
// console.log(sort43([1, 4], [2, 3, 10, 20]));
// console.log(sort43([2, 3, 10, 20], [1, 4]));
// console.log(sort43([1, 20, 40], [2, 3, 10, 20]));
// console.log(sort43([2, 3, 10, 20], [1, 20, 40]));
//
// console.log('4.4');
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], -10));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 16));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 87));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 1));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 78));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 2));
// console.log(binarySearch44([1, 2, 10, 15, 20, 78], 10));
// console.log(binarySearch44([1, 2, 10, 15, 20], 10));
// console.log(binarySearch44([1, 2, 10, 15, 20], 15));
//
// console.log('4.5');
// console.log(getMaxEven45(1, 2, 10, 20, 40, 87));
// console.log(getMaxEven45Alt1(1, 2, 10, 20, 40, 87));
// console.log(getMaxEven45Alt2(1, 2, 10, 20, 40, 87));
//
// console.log('4.6');
// console.log(countWords46('Il il fait FAIT il beau pas beau fait pas ça'));
// console.log(countWords46Alt1('Il il fait FAIT il beau pas beau fait pas ça'));
// console.log(countWords46Alt2('Il il fait FAIT il beau pas beau fait pas ça'));
