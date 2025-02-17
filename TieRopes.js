function solution(K, A) {
    let count = 0;  // Count of valid ropes
    let currentLength = 0;  // Accumulate rope lengths

    for (let i = 0; i < A.length; i++) {
        currentLength += A[i]; // Add rope length
        
        if (currentLength >= K) { 
            count++; // Count this as a valid rope
            currentLength = 0; // Reset for the next rope
        }
    }

    return count;
}