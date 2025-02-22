function solution(S) {
    let minStr = S.slice(1);

    for (let i = 1; i < S.length; i++) {
        let candidate = S.slice(0, i) + S.slice(i + 1);
        if (candidate < minStr) {
            minStr = candidate;
        }
    }

    return minStr;
}
