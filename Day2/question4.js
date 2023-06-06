const numbers = new Map();

let nums = [1, 2];

nums.forEach((num) => {
    if (numbers.has(num)) {
        let val = numbers.get(num); val++;
        numbers.set(num, val);
    } else {
        numbers.set(num, 1);
    }
})

let occurence = Math.floor(nums.length / 3);
let output = [];

for (const [key, value] of numbers) {
    if (value > occurence) {
        output.push(key);
    }
}

console.log(output);