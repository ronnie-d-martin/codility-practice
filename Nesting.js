function solution(S) {
    let stack = [];
    let N = S.length
    let matchBrackets = { ")": "(" }

    for (let i = 0; i < N; i++) {
        if (S[i] === "(") {
            stack.push(S[i])
        } else {
            if (stack.length === 0 || stack.pop() !== matchBrackets[S[i]]) {
                return 0
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}

//example, string "(()(())())" is properly nested but string "())" isn't.