function solution(A) {
    A.sort((a, b) => a - b);
    let N = A.length;

    let maxProduct1 = A[N - 3] * A[N - 2] * A[N - 1];
    let maxProduct2 = A[0] * A[1] * A[N - 1];
    return Math.max(maxProduct1, maxProduct2);
}


