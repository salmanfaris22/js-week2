st =  "This is another test"




        x=abc(st)






function abc(str){
    z=str.split(" ")
  f= z.map((e)=>{
    if(e.length>=5){
        e=e.split("").reverse().join("")
    }
    return e
   })

   f=f.join(" ")
return console.log(f)
}

