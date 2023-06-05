//function to return an array the first "nPrime" prime numbers greater than 
// a particular number "startAt"

const sieve=(size,n)=>{
    let array=new Array(size+1).fill(1);
    
    for(let i=2;i<=size;i++){
        if(array[i]==1){
    
 
           for(let j=i*i;j<=size;j+=i){
              array[j]=0;
           }
        }
    }
    let new_array=[];
   let counter=0;
     for(let k=2;k<=size;k++){
         if(array[k]==1){
            counter++;
            new_array.push(k);
            if(counter==n){break};
         }
     }
 
     return new_array;
 }

const array_return=(start,total)=>{

    let array=sieve(total*10,total);

    let output=array.filter((n)=>{
         if(n>=start){
            return n;
         }
    })

    return output;

}

console.log(array_return(3,29));