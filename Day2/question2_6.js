class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const zigzagLevelOrder = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let level = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        if (level % 2 === 1) {
            currentLevel.reverse();
        }

        result.push(currentLevel);
        level++;
    }

    return result;
};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const result = zigzagLevelOrder(root);
console.log(result);
