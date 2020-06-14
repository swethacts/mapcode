var one = ["a", "b", "c", ""],
    Two = ["a", "b", "c", "true"];
 
for(var i=0;i<one.length;i++){
   if(Two.indexOf(one[i])== -1){  
   one[i] =  Two[i];   
   }
}

console.log(one);
