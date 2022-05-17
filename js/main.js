// "use strict";

// ДЗ 13. #16_2
// Написать скрипт который в title
// страницы(document.title) будет
// выводить текущее время и количество
// секунд которое прошло после открытия
// страниџы.
// Сгенерировать при помощи JS элемент
//  div с двумя span, где выводится 
//  тоже самое время, что и в title 

//  в разные span соответственно



let l = setInterval(function clock() {
  let d = new Date();

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let time = performance.now();

  document.querySelector(".doc_time").innerHTML = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes +  ":" + (seconds < 10 ? '0' : '') + seconds +'   //   '+ time;
  document.querySelector(".span1").innerHTML = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes +  ":" + (seconds < 10 ? '0' : '') + seconds +'   //   '+ time;
  document.querySelector(".span2").innerHTML = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes +  ":" + (seconds < 10 ? '0' : '') + seconds +'   //   '+ time;
},1000);



let x = document.createElement('div');
x.classList.add('myDiv');
x.innerHTML = 'myDiv';
x.style.backgroundColor= 'blue';
 

let container = document.querySelector('.container');
container.appendChild(x);

let y = document.createElement('span');
y.classList.add('span1');
y.innerHTML = 'time';
y.style.backgroundColor= 'yellow';
 

let r = document.querySelector('.myDiv');
r.appendChild(y);

let z = document.createElement('span');
z.classList.add('span2');
z.innerHTML = l;
z.style.backgroundColor= 'orange';
 

let s = document.querySelector('.myDiv');
s.appendChild(z);



