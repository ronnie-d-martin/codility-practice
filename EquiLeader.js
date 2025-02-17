function solution(A) {
    let N = A.length;
    
    // Step 1: Find the leader candidate using Boyer-Moore Voting Algorithm
    let candidate = null;
    let count = 0;
    
    for (let num of A) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Step 2: Verify if the candidate is actually the leader
    let leaderCount = A.filter(num => num === candidate).length;
    if (leaderCount <= N / 2) return 0; // No leader found
    
    let leader = candidate;
    let equiLeaders = 0;
    let leftCount = 0;
    let rightCount = leaderCount;

    // Step 3: Count equi leaders by iterating through the array
    for (let S = 0; S < N - 1; S++) {
        if (A[S] === leader) {
            leftCount++;
            rightCount--;
        }

        // Check if leader is valid in both left and right parts
        let leftSize = S + 1;
        let rightSize = N - (S + 1);

        if (leftCount > leftSize / 2 && rightCount > rightSize / 2) {
            equiLeaders++;
        }
    }

    return equiLeaders;
}


// Index S	Left Part	Right Part	Leader in both?
// 0	[4]	[3, 4, 4, 4, 2]	✅ (Leader = 4)
// 1	[4, 3]	[4, 4, 4, 2]	❌
// 2	[4, 3, 4]	[4, 4, 2]	✅ (Leader = 4)
// 3	[4, 3, 4, 4]	[4, 2]	❌
// 4	[4, 3, 4, 4, 4]	[2]	❌
