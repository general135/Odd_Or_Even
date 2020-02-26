var number = document.getElementById('button');

number.addEventListener('click', () => {
  oddOrEven();
});

function oddOrEven(){
 var input = document.getElementById('inputNumb').value;
  if(input % 2 == 0){
    document.write("Even");
  } else {
    document.write("Odd");
  }
}
