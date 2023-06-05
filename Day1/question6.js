//max number in an array of numbers

const arr= [0,2,-1,-3,5];

let max_num=Number.NEGATIVE_INFINITY;

let ans=arr.forEach((num)=>{
    if(num>max_num){max_num=num}
})

console.log(max_num);