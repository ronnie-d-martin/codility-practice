function solution(A) {
    const countMap = new Map();

    // Count occurrences
    for (const num of A) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Find the first unique number
    for (const [key, value] of countMap) {
        if (value === 1) {
            return key;
        }
    }

    return -1; // Return -1 if no unique number is found
}
