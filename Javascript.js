var number = document.getElementById('button');

var p = document.getElementById('p');

number.addEventListener('click', oddOrEven);

function oddOrEven(){
 var input = document.getElementById('inputNumb').value;
  if(input % 2 == 0){
    p.textContent = 'Your number Is Even';
  } else {
    p.textContent = 'Your Number Is Odd';
  }
}

