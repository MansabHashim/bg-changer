const hexBtn = document.querySelector('#hexBtn');
const hexcode = document.querySelector('#hexcode');
const navabar = document.querySelector("#nav");


const codes = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

hexBtn.addEventListener('click', getHex);

function getHex(){
  let hexColor = '#';

  for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * codes.length);
    hexColor += codes[random];
  }

  document.body.style.backgroundColor = hexColor;
  hexcode.innerHTML = hexColor;
  hexcode.style.color = hexColor;
  navabar.style.backgroundColor = hexColor;
}
