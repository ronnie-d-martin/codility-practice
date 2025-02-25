function solution(A) {
    A.sort((a, b) => a - b); // Sort the preferences in ascending order
    let rooms = 0;
    let i = 0;
    let N = A.length;

    while (i < N) {
        let capacity = A[i]; // The smallest available guest preference
        let count = 0;

        while (i < N && count < capacity) {
            count++;
            i++;
        }
        
        rooms++; // Allocate a new room
    }

    return rooms;
}

// Example test cases
console.log(solution([1, 1, 1, 1, 1])); // Output: 5
console.log(solution([2, 1, 4])); // Output: 2
console.log(solution([2, 7, 2, 9, 8])); // Output: 2
console.log(solution([7, 3, 1, 1, 4, 5, 4, 9])); // Output: 4
