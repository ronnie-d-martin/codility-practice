function PermMissingElem(A) {
    let N = A.length;
    let expectedSum = ((N + 1) * (N + 2)) / 2; // Sum of numbers from 1 to (N+1)
    let actualSum = 0;

    for (let i = 0; i < N; i++) { // Compute sum using a loop
        actualSum += A[i];
    }

    return expectedSum - actualSum;
}