function solution(H) {
    let stack = [];
    let blocks = 0;

    for (let i = 0; i < H.length; i++) {
        // Remove blocks if the height decreases
        while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
            stack.pop();
        }

        // If the height is not in the stack, add a new block
        if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
            stack.push(H[i]);
            blocks++;  // Count the new block
        }
    }

    return blocks;
}

//Input: H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
