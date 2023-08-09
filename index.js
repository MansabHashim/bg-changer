let colors = [
  "Aliceblue",
  "Yellow",
  "Sandybrown",
  "Palegoldenrod",
  "Mediumvioletred",
  "Lightsteelblue",
  "Lavender",
  "Darkorange",
  "Chartreuse",
  "Antiquewhite",
  "Yellowgreen",
  "Seagreen",
  "Palegreen",
  "Midnightblue",
  "Lightyellow",
  "Lavenderblush",
  "Darkorchid",
  "Chocolate",
  "Aqua",
  "Aqua",
  "Seashell",
  "Paleturquoise",
  "Mintcream",
  "Lime",
  "Lawngreen",
  "Darkred",
  "Coral",
  "Aquamarine",
  "Black",
  "Sienna",
  "Palevioletred",
  "Mistyrose",
  "Limegreen",
  "Lemonchiffon",
  "Darksalmon",
  "Cornflowerblue",
  "Azure",
  "Blue",
  "Silver",
  "Papayawhip",
  "Moccasin",
  "Linen",
  "Lightblue",
  "Darkseagreen",
  "Cornsilk",
  "Beige",
  "Fuchsia",
  "Skyblue",
  "Peachpuff",
  "Navajowhite",
  "Magenta",
  "Lightcoral",
  "Darkslateblue",
  "Crimson",
  "Bisque",
  "Gray",
  "Slateblue",
  "Peru",
  "Navy",
  "Maroon",
  "Lightcyan",
  "Darkslategray",
  "Cyan",
  "Black",
  "Green",
  "Slategray",
  "Pink",
  "Navyblue",
  "Mediumaquamarine",
  "Lightgoldenrodyellow",
  "Darkturquoise",
  "Darkblue",
  "Blanchedalmond",
  "Lime",
  "Snow",
  "Plum",
  "Oldlace",
  "Mediumblue",
  "Lightgreen",
  "Darkviolet",
  "Darkcyan",
  "Blue",
  "Maroon",
  "Springgreen",
  "Powderblue",
  "Olive",
  "Mediumorchid",
  "Lightgrey",
  "Deeppink",
  "Darkgoldenrod",
  "Blueviolet",
  "Navy",
  "Steelblue",
  "Purple",
  "Olivedrab",
  "Mediumpurple",
  "Lightpink",
  "Deepskyblue",
  "Darkgray",
  "Brown",
  "Olive",
  "Tan",
  "Red",
  "Orange",
  "Mediumseagreen",
  "Lightsalmon",
  "Dimgray",
  "Darkgreen",
  "Burlywood",
  "Purple",
  "Teal",
  "Rosybrown",
  "Orangered",
  "Mediumslateblue",
  "Lightseagreen",
  "Dodgerblue",
  "Darkkhaki",
  "Cadetblue",
  "Red",
  "Thistle",
  "Royalblue",
  "Orchid",
  "Mediumspringgreen",
  "Lightskyblue",
  "Firebrick",
  "Darkmagenta",
  "Teal",
  "Silver",
  "Tomato",
  "Saddlebrown",
  "Mediumturquoise",
  "Lightslategray",
  "Floralwhite",
  "Darkolivegreen",
  "White",
  "White",
  "Turquoise",
  "Salmon",
  "Wheat",
  "Violet",
  "Whitesmoke",
  "Yellow"
];

// const color = document.querySelector(".color");
const btn = document.getElementById("buttn");
const col = document.querySelector("#color");
const navabar = document.querySelector("#nav");

btn.addEventListener("click", function () {
randomization =RandomColor();
console.log(randomization);

document.body.style.backgroundColor = colors[randomization];
col.innerHTML = colors[randomization];
col.style.color = colors[randomization];
navabar.style.backgroundColor = colors[randomization];
});


// console.log(items);

 function RandomColor(){
   return Math.floor(Math.random()  * colors.length);

 }

// const Getrandom = (min,max)=>~~(Math.random()*(max-min+1)+min)
 
// document.getElementById("col").innerText = color;
// ;
// let color = colors[Getrandom(0,colors.length-1)];
// console.log(color);


