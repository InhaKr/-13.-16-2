"use strict";

// ДЗ 10. #13_1
// 1.Создать класс new SuperArray(n, m, { min: 10, max: 55 }),
// который создаст массив размерностью n на m и заполнит
// случайными числами в диапазоне options.min - options.max.
// Массив сохраняется в екземпляр класса SuperArray.
// 2.Создать метод render(separator), в прототипе. Который выведет
// двумерный массив в документ, с разделителем separator.
// 3.Создать метод clear(direction, k), где direction может быть 
// "row" или "column", а k - номер строки или столбца, 
// который нужно очистить. (поставить 0)

// --------------задачи 1,2,3----------------------------

function createMasiv(n, m) {
  let a = new Array(n);
  for (let i = 0; i < a.length; i++) {
    a[i] = new Array(m);

    for (let j = 0; j < a[i].length; j++) {
      a[i][j] = Math.floor(Math.random() * 46) + 10;
    }
  }
  return a
}


class SuperArray {

  constructor(p1) {
    this.p1 = p1;
  };

  // createMasiv(n, m) {
  //   let a = new Array(n);
  //   for (let i = 0; i < a.length; i++) {
  //     a[i] = new Array(m);

  //     for (let j = 0; j < a[i].length; j++) {
  //       a[i][j] = Math.floor(Math.random() * 46) + 10;
  //     }
  //   }
  //   return a
  // }

  // render(n, m) {
  //   let out = '';
  //   let a = new Array(n);
  //   for (let i = 0; i < a.length; i++) {
  //     a[i] = new Array(m);

  //     for (let j = 0; j < a[i].length; j++) {
  //       a[i][j] = Math.floor(Math.random() * 46) + 10;
  //       out += a[i][j] + ', ';
  //       // console.log(out)
  //     }
  //     out += '<br>'
  //     document.querySelector('.container').innerHTML = out;
  //   }
  //   return a
  // }

  clear(direction, k) {
    // debugger
    let n = 3;
    let m = 3;

    let a = new Array(n);

    for (let i = 0; i < a.length; i++) {
      a[i] = new Array(m);

      for (let j = 0; j < a[i].length; j++) {
        a[i][j] = Math.floor(Math.random() * 41) - 20;
      }
    }

    for (let i = 0; i < a.length; i++) {
      // console.log(a[i])

      if (direction === 'column') {
        a[i][k] = 0;
      }

      for (let j = 0; j < a[i].length; j++) {
        // console.log(a[j][i])
        if (direction === 'row') {
          a[k][j] = '*';
        }
      }

    }
    return (a);
  }
}

let r = new SuperArray(createMasiv(4, 5));
console.log(r);

SuperArray.prototype.render = function (n, m) {
  let out = '';
  let a = new Array(n);
  for (let i = 0; i < a.length; i++) {
    a[i] = new Array(m);

    for (let j = 0; j < a[i].length; j++) {
      a[i][j] = Math.floor(Math.random() * 46) + 10;
      out += a[i][j] + ', ';
      // console.log(out)
    }
    out += '<br>'
    document.querySelector('.container').innerHTML = out;
  }
  return a
}

console.log(r.render(5, 7))
console.log(r.clear('column', 1))
console.log(r.clear('row', 0))




