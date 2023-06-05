const arr= [0,2,-1,-3,5];

const filtered_array=arr.filter((num)=>{
    // console.log(num);
    if(num>=0) return num;
})

console.log(filtered_array);