function solution(A, K) {
    let N = A.length
    if (K === 0 || K % N === 0) return A

    K = K % N
    return [...A.slice(-K), ...A.slice(0, N - K)]
}
