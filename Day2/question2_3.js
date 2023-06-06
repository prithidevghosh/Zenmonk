function findDiagonalOrder(mat) {
    if (mat.length === 0 || mat[0].length === 0) {
        return [];
    }

    const m = mat.length;
    const n = mat[0].length;
    const result = new Array(m * n);

    let row = 0;
    let col = 0;
    let direction = 1;

    for (let i = 0; i < result.length; i++) {
        result[i] = mat[row][col];

        row -= direction;
        col += direction;

        if (row >= m) {
            row = m - 1;
            col += 2;
            direction = -direction;
        }

        if (col >= n) {
            col = n - 1;
            row += 2;
            direction = -direction;
        }

        if (row < 0) {
            row = 0;
            direction = -direction;
        }

        if (col < 0) {
            col = 0;
            direction = -direction;
        }
    }

    return result;
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const diagonalOrder = findDiagonalOrder(matrix);
console.log(diagonalOrder);
