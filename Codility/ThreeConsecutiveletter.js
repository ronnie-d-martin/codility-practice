function solution(S) {
    let counter = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === S[i + 1] && S[i] === S[i + 2]) {
            counter++
            i += 2
        }
    }

    return counter
}
