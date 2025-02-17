function solution(A) {
    let N = A.length;
    let result = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 0; j < N; j++) {
            if (A[i] % A[j] !== 0) {
                count++;
            }
        }
        result[i] = count;
    }
    return result;
}
