function solution(S) {
    let N = S.length;
    let field = new Set(); // Keeps track of occupied positions
    let successfulMoves = 0;

    for (let i = 0; i < N; i++) {
        let target;
        
        if (S[i] === '>') {
            target = i + 1;
        } else if (S[i] === '<') {
            target = i - 1;
        } else if (S[i] === '^' || S[i] === 'v') {
            target = i; // Up and down don't affect horizontal positioning
        }

        if (!field.has(target)) {
            successfulMoves++;
            field.add(target);
        }
    }

    return successfulMoves;
}

// Example test cases
console.log(solution("><^v")); // Output: 2
console.log(solution("<<<^v>>")); // Output: 6
