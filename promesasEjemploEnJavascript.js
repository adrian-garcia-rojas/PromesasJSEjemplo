let x = 10

const p = new Promise((resolve, reject) =>{
  if(x==10){
    resolve('el resultado es: ' + x)
  }
  else{
    reject('no es igual xd')
  }
})


p.then(res =>{
  console.log('Success: ' + res)
})
.catch(error =>{
  console.log('Error: ' + error)
})