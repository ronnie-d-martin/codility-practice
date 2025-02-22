function solution(A, B, N) {
    let roadCount = new Array(N + 1).fill(0);
    
    for (let i = 0; i < A.length; i++) {
        roadCount[A[i]]++;
        roadCount[B[i]]++;
    }
    
    let maxRank = 0;
    
    for (let i = 0; i < A.length; i++) {
        const a = A[i], b = B[i];
        const currentRank = roadCount[a] + roadCount[b] - 1;
        maxRank = Math.max(maxRank, currentRank);
    }
    
    return maxRank;
}
