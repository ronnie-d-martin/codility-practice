function solution(A, B) {
    let stack = []; // Stack stores sizes of downstream fish
    let survivors = 0; // Count of surviving fish

    for (let i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            stack.push(A[i]);
        } else {
            while (stack.length > 0) {
                let lastDownstream = stack[stack.length - 1];
                if (lastDownstream > A[i]) {
                    break;
                } else {
                    stack.pop();
                }
            }
            if (stack.length === 0) {
                survivors++;
            }
        }
    }

    return survivors + stack.length;
}

A =  [4, 3, 2, 1, 5]
B =  [0, 1, 0, 0, 0]