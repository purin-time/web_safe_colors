'use strict';
{
  const colorCode = document.getElementById('color-code');
  const colorBg = document.getElementById('bg-color');
  const colorSt = document.getElementById('color_3');
  const colorLg = document.getElementById('color_6');
  
  const colorn = [0,3,6,9,"C","F"];
  const array = [];

  for (let i=0; i<3; i++) {
    const colorR = colorn[Math.floor(Math.random() * colorn.length)];
    array.push(colorR);
  }

  // console.log(isNaN(array[1]));
  // console.log(array);
  // console.log(array.join(''));

  if (isNaN(array[1])) {
    colorBg.style.color = "#333";
  } else {
    colorBg.style.color = "#fff";
  }

  function colorArray() {
    colorCode.innerHTML = array.join('');
  }
  colorArray();

  // const newArr = array.map(colorArrayLg);
  // console.log(newArr);

  function colorBgStyle() {
    array.unshift("#");
    const colorHt = array.join('');
    colorBg.style.background = colorHt;
    colorSt.innerHTML = colorHt;
  }
  colorBgStyle();


  const colorCg = document.getElementById("color-change");
  colorCg.onclick = function() {
    location.reload();
  };

}