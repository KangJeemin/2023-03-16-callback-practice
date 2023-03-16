function searcher(string,callback) {
  callback(string);
}

function searchA(str){
  if(str.includes('a')){
    console.log("a가 있습니다.")
  }
}
searcher("abc",searchA)

