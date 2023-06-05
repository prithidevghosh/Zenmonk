const sieve=(n)=>{
   let array=new Array(n+1).fill(1);
   
   for(let i=2;i<=n;i++){
       if(array[i]==1){
   

          for(let j=i*i;j<=n;j+=i){
             array[j]=0;
          }
       }
   }
   let new_array=[];

    for(let k=2;k<=n;k++){
        if(array[k]==1){
           new_array.push(k);
        }
    }

    return new_array;
}

let num=6972;
let primes=sieve(num);
if(primes[primes.length-1]==num){
    console.log("yes prime");
}
else{
    console.log("not prime");
}