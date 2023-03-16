function exampleTwo(message, callback) {
  console.log(message);
  callback(message);
}

function exampleTwoNext1(message,callback) {
  console.log(`${message}+1`);
  callback(`${message}+1`);
}
function exampleTwoNext2(message) {
  console.log(`${message}+2`);
}

exampleTwo("가",exampleTwoNext1())


exampleTwo("가",()=>{
  console.log("나")
})