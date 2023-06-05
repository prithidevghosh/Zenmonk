//print first 100 prime numbers

const sieve=()=>{
    let array=new Array(50001).fill(1);
    
    for(let i=2;i<=50000;i++){
        if(array[i]==1){
    
 
           for(let j=i*i;j<=50000;j+=i){
              array[j]=0;
           }
        }
    }
    let new_array=[];
    let counter=0;

     for(let k=2;k<=50000;k++){
         if(array[k]==1){
            counter++;
            new_array.push(k);
          
            if(counter==100){break;}
         }
     }
 
     return new_array;
 }

 let arr=sieve();

 for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
 }

