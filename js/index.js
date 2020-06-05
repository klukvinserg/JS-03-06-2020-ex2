let arr = [
  {
    id: 'one',
    question: '1) How many latters are there in the world "Hello"?',
    valueAnOne: 'yes',
    anOne: '5',
    valueAnTwo: 'no',
    anTwo: '2',
  },
  {
    id: 'two',
    question: '2) How many latters are there in the world "Sofa"?',
    valueAnOne: 'no',
    anOne: '10',
    valueAnTwo: 'yes',
    anTwo: '4',
  },
  {
    id: 'three',
    question: '3) How many latters are there in the world "Ok"?',
    valueAnOne: 'no',
    anOne: '1',
    valueAnTwo: 'yes',
    anTwo: '2',
  },
  {
    id: 'four',
    question: '4) How many latters are there in the world "Dell"?',
    valueAnOne: 'yes',
    anOne: '4',
    valueAnTwo: 'no',
    anTwo: '11',
  },
  {
    id: 'five',
    question: '5) How many latters are there in the world "Window"?',
    valueAnOne: 'no',
    anOne: '3',
    valueAnTwo: 'yes',
    anTwo: '6',
  },
];

let i = 0;
let j = arr.length;
let count = 0;

getHtml();

function getHtml() {
  let createDiv = document.createElement('div');
  let createP = document.createElement('p');
  let createInputOne = document.createElement('input');
  let createBOne = document.createElement('b');
  let createBr = document.createElement('br');
  let createInputTwo = document.createElement('input');
  let createBTwo = document.createElement('b');

  createDiv.setAttribute('id', arr[i].id);

  createInputOne.setAttribute('name', 'buttonR');
  createInputOne.setAttribute('type', 'radio');
  createInputOne.setAttribute('value', arr[i].valueAnOne);

  createInputTwo.setAttribute('name', 'buttonR');
  createInputTwo.setAttribute('type', 'radio');
  createInputTwo.setAttribute('value', arr[i].valueAnTwo);

  createP.innerHTML = arr[i].question;
  createBOne.innerHTML = arr[i].anOne;
  createBTwo.innerHTML = arr[i].anTwo;

  createDiv.appendChild(createP);
  createDiv.appendChild(createInputOne);
  createDiv.appendChild(createBOne);
  createDiv.appendChild(createBr);
  createDiv.appendChild(createInputTwo);
  createDiv.appendChild(createBTwo);

  testBlock.appendChild(createDiv);

  i++;

  if (i >= j) {
    next.style.display = 'none';
    finish.style.display = 'block';
  }
}

function clickNext() {
  if (
    document.getElementsByName('buttonR')[0].checked === false &&
    document.getElementsByName('buttonR')[1].checked === false
  ) {
    alert('Select one answer');
    return false;
  }

  for (let i = 0; i < document.getElementsByName('buttonR').length; i++) {
    if (
      document.getElementsByName('buttonR')[i].checked === true &&
      document.getElementsByName('buttonR')[i].value === 'yes'
    ) {
      count++;
    }
  }

  let tmp = document.getElementById(arr[i - 1].id);

  tmp.remove();

  getHtml();
}

function clickFinish() {
  if (
    document.getElementsByName('buttonR')[0].checked === false &&
    document.getElementsByName('buttonR')[1].checked === false
  ) {
    alert('Select one answer');
    return false;
  }

  for (let i = 0; i < document.getElementsByName('buttonR').length; i++) {
    if (
      document.getElementsByName('buttonR')[i].checked === true &&
      document.getElementsByName('buttonR')[i].value === 'yes'
    ) {
      count++;
    }
  }

  finish.style.display = 'none';

  let tmp = document.getElementById(arr[i - 1].id);
  tmp.remove();

  testBlock.innerHTML = `Result: ${count} correct answer to ${j} question`;
}
