function solution(A) {
    let positions = new Map();
    let maxDistance = 0;

    for (let i = 0; i < A.length; i++) {
        if (!positions.has(A[i])) {
            positions.set(A[i], i); 
        }
        maxDistance = Math.max(maxDistance, i - positions.get(A[i])); 
    }

    return maxDistance;
}
