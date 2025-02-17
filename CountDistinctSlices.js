function solution(M, A) {
    let N = A.length;
    let seen = new Array(M + 1).fill(false); // Track seen elements
    let left = 0, right = 0, count = 0;
    
    while (right < N) {
        while (right < N && !seen[A[right]]) {
            seen[A[right]] = true; // Mark element as seen
            count += (right - left + 1); // Count all valid slices ending at right
            
            if (count > 1_000_000_000) return 1_000_000_000; // Constraint check
            right++;
        }

        while (right < N && seen[A[right]]) {
            seen[A[left]] = false; // Remove leftmost element from set
            left++;
        }
    }

    return count;
}