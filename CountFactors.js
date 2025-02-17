function solution(N) {
    let count = 0;
    let sqrtN = Math.floor(Math.sqrt(N)); // Compute sqrt(N) once

    for (let i = 1; i <= sqrtN; i++) {
        if (N % i === 0) {
            count += 2; // Both i and N/i are factors
            if (i === N / i) count--; // Avoid double-counting if N is a perfect square
        }
    }

    return count;
}
