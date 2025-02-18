function solution(R, V) {
    let balanceA = 0, balanceB = 0;  // Current balances
    let minBalanceA = 0, minBalanceB = 0;  // Minimum required balances

    for (let i = 0; i < R.length; i++) {
        if (R[i] === 'A') {
            balanceA += V[i];  // Money received by A
            balanceB -= V[i];  // Money sent from B
            minBalanceB = Math.min(minBalanceB, balanceB);
        } else {
            balanceB += V[i];  // Money received by B
            balanceA -= V[i];  // Money sent from A
            minBalanceA = Math.min(minBalanceA, balanceA);
        }
    }

    // The minimum balance needed is the absolute value of the lowest balance reached
    return [Math.abs(minBalanceA), Math.abs(minBalanceB)];
}
