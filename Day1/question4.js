//pallindrome algorithm

let original_input=454;

let reversed_input= original_input.toString().split('').reverse().join('');

//ternary
if(original_input.toString()===reversed_input){
 
    console.log("input is pallindrome");
}
else{
    console.log("input is not pallindrome");
}

