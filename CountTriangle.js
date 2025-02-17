function solution(A) {
    let N = A.length;
    if (N < 3) return 0; // Not enough elements to form a triangle

    A.sort((a, b) => a - b); // Step 1: Sort the array
    let count = 0;

    for (let R = 2; R < N; R++) {
        let P = 0, Q = R - 1;

        while (P < Q) {
            if (A[P] + A[Q] > A[R]) {
                count += (Q - P); // All pairs (P, Q), (P+1, Q), ..., (Q-1, Q) are valid
                Q--; // Move Q left to check next possible pair
            } else {
                P++; // Increase P to try a larger sum
            }
        }
    }

    return count;
}