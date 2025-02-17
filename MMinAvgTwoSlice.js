function solution(A) {
    let N = A.length;
    let minAvg = Infinity;
    let minIndex = 0;

    // Iterate through the array and check only 2-element and 3-element slices
    for (let i = 0; i < N - 1; i++) {
        // 2-element slice
        let avg2 = (A[i] + A[i + 1]) / 2;
        if (avg2 < minAvg) {
            minAvg = avg2;
            minIndex = i;
        }

        // 3-element slice (ensure we don't go out of bounds)
        if (i < N - 2) {
            let avg3 = (A[i] + A[i + 1] + A[i + 2]) / 3;
            if (avg3 < minAvg) {
                minAvg = avg3;
                minIndex = i;
            }
        }
    }

    return minIndex;
}
// For example, array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// contains the following example slices:

// slice (1, 2), whose average is (2 + 2) / 2 = 2;
// slice (3, 4), whose average is (5 + 1) / 2 = 3;
// slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
// The goal is to find the starting position of a slice whose average is minimal.