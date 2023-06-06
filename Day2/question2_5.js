function isValidString(s) {
    const stack = [];
    const starStack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {
            stack.push(i);
        } else if (char === '*') {
            starStack.push(i);
        } else {
            if (stack.length === 0 && starStack.length === 0) {
                return false;
            }

            if (stack.length > 0) {
                stack.pop();
            } else {
                starStack.pop();
            }
        }
    }

    while (stack.length > 0 && starStack.length > 0) {
        if (stack[stack.length - 1] > starStack[starStack.length - 1]) {
            return false;
        }
        stack.pop();
        starStack.pop();
    }

    return stack.length === 0;
}

const s = "*";
const isValid = isValidString(s);
console.log(isValid);
