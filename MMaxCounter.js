function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let base = 0; 
    for (let i = 0; i < A.length; i++) {
        let X = A[i];

        if (1 <= X && X <= N) {
            if (counters[X - 1] < base) {
                counters[X - 1] = base;
            }

            counters[X - 1] += 1;
            maxCounter = Math.max(maxCounter, counters[X - 1]);
        } else if (X === N + 1) {
            base = maxCounter;
        }
    }

    for (let i = 0; i < N; i++) {
        if (counters[i] < base) {
            counters[i] = base;
        }
    }

    return counters;
}

// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.