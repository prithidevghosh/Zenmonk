//rotate an array to left by 1 position

let array=[6,2,3,4,5];

let first_num=array[0];

for(let i=1;i<array.length;i++){
    let temp=array[i-1];
    array[i-1]=array[i];
    array[i]=temp;

}

array[array.length-1]=first_num;

console.log(array);