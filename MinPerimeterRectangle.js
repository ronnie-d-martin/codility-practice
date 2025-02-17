function solution(N) {
    let sqrt = Math.floor(Math.sqrt(N))
    let minPerimeter = Infinity;

    for (let i = 1; i <= sqrt; i++) {
        if (N % i === 0) {
            let B = N / i
            let perimeter = 2 * (i + B)
            minPerimeter = Math.min(minPerimeter, perimeter)
        }
    }
    return minPerimeter;
}

