function solution(A) {
    let N = A.length;
    if (N < 4) return 0; // A valid double slice requires at least 4 elements

    let maxEnding = new Array(N).fill(0);  // Max sum slice ending at i (excluding A[i])
    let maxStarting = new Array(N).fill(0); // Max sum slice starting at i (excluding A[i])

    // Compute maxEnding: maximum sum subarray ending before i
    for (let i = 1; i < N - 1; i++) {
        maxEnding[i] = Math.max(0, maxEnding[i - 1] + A[i]);
    }

    // Compute maxStarting: maximum sum subarray starting after i
    for (let i = N - 2; i > 0; i--) {
        maxStarting[i] = Math.max(0, maxStarting[i + 1] + A[i]);
    }

    // Compute max double slice sum
    let maxDoubleSliceSum = 0;
    for (let Y = 1; Y < N - 1; Y++) {
        maxDoubleSliceSum = Math.max(maxDoubleSliceSum, maxEnding[Y - 1] + maxStarting[Y + 1]);
    }

    return maxDoubleSliceSum;
}