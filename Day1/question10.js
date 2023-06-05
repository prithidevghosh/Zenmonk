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

const array_return=(start,num)=>{

    let array=sieve(num);

    let output=array.filter((num)=>{
         if(num>=start){
            return num;
         }
    })

    return output;

}

console.log(array_return(3,29));