function solution(A) {
    let max_sum = A[0]; // Maximum sum found so far
    let current_sum = A[0]; // Sum of the current slice

    for (let i = 1; i < A.length; i++) {
        // Either extend the existing slice or start a new one
        current_sum = Math.max(A[i], current_sum + A[i]);

        // Update maximum sum
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum;
}