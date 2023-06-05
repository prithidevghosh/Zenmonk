//function to return if a number is boolean or not depending on whether the number is prime or not

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



const fun=(num)=>{
    let primes=sieve(num);
    if(primes[primes.length-1]==num){
        return true;
    }
    else{
        return false;
    }
}

console.log(fun(23));
