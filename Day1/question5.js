//function to filter only positive numbers from an array


const fun=(arr)=>{
    const filtered_array=arr.filter((num)=>{
    
        return num>=0;
    })
    
    return filtered_array;
}

let output=fun([1,2,-4,-3,-2,4,6]);

console.log(output);