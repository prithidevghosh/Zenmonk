function findLeastIndexSum(list1, list2) {
    const indexSumMap = new Map();
    const result = [];
    let minIndexSum = Infinity;


    for (let i = 0; i < list1.length; i++) {
        indexSumMap.set(list1[i], i);
    }


    for (let j = 0; j < list2.length; j++) {
        if (indexSumMap.has(list2[j])) {
            const indexSum = j + indexSumMap.get(list2[j]);

            if (indexSum < minIndexSum) {
                minIndexSum = indexSum;
                result.length = 0;
                result.push(list2[j]);
            } else if (indexSum === minIndexSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
}

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
const result = findLeastIndexSum(list1, list2);
console.log(result);
