function printImmediately(print) {
  print();
}
printImmediately(()=>console.log('hello'));

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'),2000);

class UserStorage {
  loginUser(id,password,onSuccess,onError){
    serTimeout(()=>{
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      )
      {
        onSuccess(id);
      }
      else{
        onError(new Error('not found'));
      }
    },2000);
  }
  getRoles(user,onSuccess,onError){
    setTimeout(() => {
      if(user === 'ellie'){
        onSuccess({name:'ellie', role: 'admin'});
      }
      else{
        onError(new Error('no access'));
      }
    }, 3000);
  }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(id,password,(user)=>{
UserStorage.getRoles(user,(userWithRole)=>{
  alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
},error=>{console.log(error)})
},error=>{console.log(error)})
