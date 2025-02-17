function solution(A) {
    if (A.length < 2) return 0; // No transaction possible

    let min_price = A[0]; // Track minimum price seen so far
    let max_profit = 0;   // Track maximum profit found

    for (let i = 1; i < A.length; i++) {
        min_price = Math.min(min_price, A[i]); // Update min price
        max_profit = Math.max(max_profit, A[i] - min_price); // Compute max profit
    }

    return max_profit;
}