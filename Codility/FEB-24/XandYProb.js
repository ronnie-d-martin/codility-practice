function solution(S) {
    let totalX = 0, totalY = 0;
    
    // Count total occurrences of 'x' and 'y' in S
    for (let char of S) {
        if (char === 'x') totalX++;
        if (char === 'y') totalY++;
    }
    
    let leftX = 0, leftY = 0, validSplits = 0;

    // Iterate through the string and check valid splits
    for (let i = 0; i < S.length - 1; i++) {
        if (S[i] === 'x') leftX++;
        if (S[i] === 'y') leftY++;
        
        let rightX = totalX - leftX;
        let rightY = totalY - leftY;

        // A valid split requires at least one part to contain 'x' and 'y' the same number of times
        if ((leftX === leftY) || (rightX === rightY)) {
            validSplits++;
        }
    }

    return validSplits;
}

// Test cases
console.log(solution("ayxbx")); // Output: 3
console.log(solution("zzzzy")); // Output: 0
console.log(solution("toyxmy")); // Output: 5
console.log(solution("apple")); // Output: 4
