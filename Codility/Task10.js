function solution(A) {
    let maxSubsetSize = 0;
    let n = A.length;
  
    for (let i = 0; i < (1 << n); i++) {
        let subset = [];
        let andResult = -1; 

        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(A[j]);
                andResult = andResult === -1 ? A[j] : (andResult & A[j]);
            }
        }

        if (andResult > 0) {
            maxSubsetSize = Math.max(maxSubsetSize, subset.length);
        }
    }

    return maxSubsetSize;
}
