const binary_search = (arr, target) => {
    const row = arr.length;
    const col = arr[0].length;
    let low = 0, high = row * col - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let converted_col = mid % col;
        let converted_row = Math.floor(mid / col);
        let res = arr[converted_row][converted_col];

        if (res === target) {
            return true;
        } else if (res < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
}

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
console.log(binary_search(matrix, 11));
console.log(1 / 3);
