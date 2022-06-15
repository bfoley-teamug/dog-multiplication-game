let math = document.getElementById('math');
let one = document.getElementById('one');
let one_again = document.getElementById('one_again');
let two = document.getElementById('two');
let two_again = document.getElementById('two_again');
let photos = document.getElementById('photos');

let multiply_one = Math.floor(Math.random() * 9) + 1;
let multiply_two = Math.floor(Math.random() * 9) + 1;

let product = multiply_one * multiply_two;

console.log(product);

one.textContent = multiply_one;
two.textContent = multiply_two;
one_again.textContent = multiply_one;
two_again.textContent = multiply_two;

let field = document.getElementById('field');
let inputNum = field.querySelector('.num');
let inputValue = parseInt(inputNum.value);
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
const image = document.getElementById('image');
const bb = document.getElementById('bb');
const cc = document.getElementById('cc');

const heyNowButton = document.getElementById('heyNowButton');

for (let i = 0; i < multiply_two - 1; i++) {
    bb.textContent += multiply_one + " + ";
  }

cc.textContent = bb.textContent + multiply_one + ' = ';

heyNowButton.addEventListener('click', () => {
  console.log('Hey now!');
  console.log(inputNum.value);

   if (product == inputNum.value) {
    console.log('whoa!');
    text.textContent = "correct!";
      if (image.src != "https://pbs.twimg.com/media/FTtiv9fVIAA-UmW?format=jpg&name=small") {
        image.src = "https://pbs.twimg.com/media/FTtiv9fVIAA-UmW?format=jpg&name=small";
      } else {
        image.src = "https://pbs.twimg.com/media/FUw3qM5UEAA4F9X?format=jpg&name=small";
      }
  } else {
    console.log('drink some more caffeine!');
    text.textContent = "you are wrong!";
  }
  text2.textContent = product;
});

let productNum = parseInt(product);

const img = new Image();
const imgSrc = 'https://pbs.twimg.com/media/FTthKN0VEAAQq8n?format=jpg&name=120x120';

// generate table of the dog, rows and columns based on one and two variables

function generateImage() {
  const img = document.createElement('img')
  img.src = imgSrc;
  return img;
}

function createTable(w, h, src) {
    let table = document.createElement('table');
    for(let i = 0; i < h; ++i) {
        let row = table.insertRow();
        for(let j = 0; j < w; ++j) {
            let td = row.insertCell();
            let img = document.createElement('img');
            img.setAttribute('src', src);
            td.appendChild(img);
        }
    }
    document.getElementById('photos').appendChild(table);
}

createTable(multiply_one, multiply_two, imgSrc);

//
