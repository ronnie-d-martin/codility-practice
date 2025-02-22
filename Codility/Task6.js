function solution(D, X) {
    let days = 0;
    let i = 0;

    while (i < D.length) {
        days++;
        let maxD = D[i];
        let minD = D[i];

        while (i + 1 < D.length && Math.max(maxD, D[i + 1]) - Math.min(minD, D[i + 1]) <= X) {
            i++;
            maxD = Math.max(maxD, D[i])
            minD = Math.min(minD, D[i])
        }
        i++;
    }
    return days
}
