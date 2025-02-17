function solution(S) {
    let stack = [];
    let matchingBrackets = { ')': '(', ']': '[', '}': '{' };

    for (let i = 0; i < S.length; i++) {
        if (S[i] === "(" || S[i] === "[" || S[i] === "{") {
            stack.push(S[i])
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[S[i]]) {
                return 0
            }
        }
    }

    return stack.length === 0 ? 1 : 0; // Properly nested if stack is empty
}

//For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.