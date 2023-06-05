//reverse an array

let array=[1,2,3,4];

let p1=0,p2=array.length-1;

while(p1<=p2){
    // console.log(`p1 is ${array[p1]} ,p2 is ${array[p2]}`);
    [array[p1],array[p2]]=[array[p2],array[p1]];
    p1++;
    p2--;
}

console.log(array);