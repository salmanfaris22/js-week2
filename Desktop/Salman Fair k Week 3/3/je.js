ar =[27, 15, 7, 1, 4]

abc(ar)
function abc(arr){
  z=arr.filter((e)=>{
    return e%3==0
  })
  y=z.reduce((acc,e)=>{
    return acc+e
  },0)
    return console.log(y);

}

