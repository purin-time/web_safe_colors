'use strict';

  const colorCode = document.getElementById('color-code');
  const colorBg = document.getElementById('bg-color');
  const colorSt = document.getElementById('color_3');
  const colorLg = document.getElementById('color_6');
  {
  const colorn = [0,3,6,9,"C","F"];
  const array = [];

  for (let i=0; i<3; i++) {
    const colorR = colorn[Math.floor(Math.random() * colorn.length)];
    array.push(colorR);
  }

  if (isNaN(array[1])) {
    colorBg.style.color = "#333";
  } else {
    colorBg.style.color = "#fff";
  }

  function colorArray() {
    colorCode.innerHTML = array.join('');

    const colorArrayLg = ["#", array[0], array[0], array[1], array[1], array[2], array[2]];
    const colorHtLg = colorArrayLg.join('');
    colorLg.value = colorHtLg;
    console.log();

    const newArray = ["#", ...array];
    const colorHt = newArray.join('');
    colorBg.style.background = colorHt;
    colorSt.value = colorHt;
  }
  colorArray();

  const colorCg = document.getElementById("color-change");
  colorCg.onclick = function() {
    location.reload();
  }; 

}

function CopyToClipboard1() {
  colorSt.select();
  document.execCommand("Copy");

  alert("copied! : " + colorSt.value);
}

function CopyToClipboard2() {
  colorLg.select();
  document.execCommand("Copy");

  alert("copied! : " + colorLg.value);
}