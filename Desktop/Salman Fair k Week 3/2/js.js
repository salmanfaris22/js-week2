ar = [
    { name: "Bella", salary: 29000 },
    { name: "Smith", salary: 32000 }
    
    ]

abc(ar)

 function abc(arr){
   z= arr.reduce((acc,e)=>{
        return acc+e.salary
    },0)
  return console.log(z);
 }   

