function solution(A, B, K) {
    let countUpToB = Math.floor(B / K);
    let countUpToA = Math.floor((A - 1) / K);
    return countUpToB - countUpToA;
}
