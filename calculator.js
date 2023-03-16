
function Calculator(num1,num2,callback) {
  callback(num1,num2);
}
function add (num1,num2) {
  let add = num1+num2;
   console.log(add);
}
function sub(num1,num2){
  let sub = num1-num2;
  console.log(sub);
}
function div(num1,num2){
  let div = num1/num2;
  console.log(div);
}
function rem(num1,num2){
  let rem = num1%num2;
  console.log(rem);
}
Calculator(1,5,add);
Calculator(6,5,sub);
Calculator(6,2,div);
Calculator(6,4,rem);



