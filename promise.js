
function getChicken(string,callback) {
  setTimeout(() => {
    console.log(string);
    callback(string)
  }, 1000);
}

function getEgg(string,callback) {
  setTimeout(() => {
    console.log(` ${string}->egg`);
  }, 2000);

}

function getMeal(string,callback) {
  setTimeout(() => {
    console.log(`${string}->fried egg`);
  }, 3000);
  callback(`${string}->fried egg`)

}

//getChicken("닭",getEgg) //이건 가능
// getChicken("닭",getEgg())
getChicken("닭",(string)=>{
  console.log(string)

})
