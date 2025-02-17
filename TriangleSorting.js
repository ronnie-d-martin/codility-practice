function solution(A) {
    A.sort((a, b) => a - b);
    let N = A.length;
    if (N < 3) return 0; 
    
    for (let i = 0; i < N - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1; 
        }
    }
    return 0; 
}
