function addCalculator (num1,num2,callback){
  console.log("잠시만 기다리세요");
  let value= num1+num2;
  callback(value)
}

addCalculator(1,2,function(v){
console.log(v)
})