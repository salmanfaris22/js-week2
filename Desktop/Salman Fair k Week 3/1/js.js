
ar=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]

abc(ar)




function abc(arr){
  p=[]
   z = arr.map((e)=> e.sort((a,b)=>b-a))
  z= z.map((e)=>e[0]) 
  
   return console.log(z);
  
  
   
}

