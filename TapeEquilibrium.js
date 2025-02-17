function solution(A) {
    let totalSum = A.reduce((acc, val) => acc + val, 0); // Compute total sum
    let leftSum = 0;
    let minDifference = Infinity;

    for (let P = 0; P < A.length - 1; P++) {
        leftSum += A[P]; // Add current element to leftSum
        let rightSum = totalSum - leftSum; // Compute rightSum dynamically
        let difference = Math.abs(leftSum - rightSum);

        minDifference = Math.min(minDifference, difference);
    }

    return minDifference;
}