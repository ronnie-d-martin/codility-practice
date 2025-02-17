function solution(A) {
    let distinct = new Set
    let N = A.length

    for (let i = 0; i < N; i++) {
        distinct.add(Math.abs(A[i]))
    }

    return distinct.size
}