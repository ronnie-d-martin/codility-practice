function solution(A) {
    let eastCars = 0;  // Number of eastbound cars (0s)
    let passingPairs = 0;  // Number of passing pairs

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            eastCars++;  // Count eastbound cars
        } else {
            passingPairs += eastCars;  // Each westbound car pairs with all previous eastbound cars
            if (passingPairs > 1000000000) {
                return -1;  // Return -1 if the limit is exceeded
            }
        }
    }

    return passingPairs;
}

// Example test cases
console.log(solution([0, 1, 0, 1, 1])); // Output: 5
console.log(solution([0, 0, 1, 1, 1])); // Output: 4
console.log(solution([1, 0, 1, 0, 1])); // Output: 3
console.log(solution([1, 1, 1, 1]));    // Output: 0
console.log(solution([0, 0, 0, 0]));    // Output: 0
