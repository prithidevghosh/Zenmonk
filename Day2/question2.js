function findSubstringWords(words) {
    const wordSet = new Set(words);
    const result = [];

    for (let word of words) {
        for (let i = 1; i < word.length; i++) {
            const substring = word.substring(0, i);
            if (wordSet.has(substring)) {
                result.push(substring);
                break;
            }
        }
    }

    return result;
}

const words = ["mass", "as", "hero", "superhero"];
const result = findSubstringWords(words);
console.log(result);
