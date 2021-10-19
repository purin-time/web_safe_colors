'use strict';
{
  const colorCode = document.getElementById('color-code');
  const colorBg = document.getElementById('bg-color');
  
  const colorn = [0,3,6,9,"C","F"];
  const array = [];

  for (let i=0; i<3; i++) {
    const colorR = colorn[Math.floor(Math.random() * colorn.length)];
    array.push(colorR);
  }

  console.log(isNaN(array[1]));
  console.log(array);
  console.log(array.join(''));

  if (isNaN(array[1])) {
    colorBg.style.color = "#333";
  } else {
    colorBg.style.color = "#fff";
  }


  colorCode.innerHTML = array.join('');
  array.unshift("#");

  colorBg.style.background = array.join('');

  const colorCg = document.getElementById("color-change");
  colorCg.onclick = function() {
    location.reload();
  };

}