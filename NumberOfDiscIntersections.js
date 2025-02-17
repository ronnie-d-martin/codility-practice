function solution(A) {
    let N = A.length;
    let starts = new Array(N);
    let ends = new Array(N);
    
    for (let i = 0; i < N; i++) {
        starts[i] = i - A[i]; // Left boundary
        ends[i] = i + A[i];   // Right boundary
    }

    starts.sort((a, b) => a - b); // Sort start points
    ends.sort((a, b) => a - b);   // Sort end points
    
    let activeCircles = 0;
    let intersections = 0;
    let endIndex = 0;
    
    // Sweep-line technique
    for (let i = 0; i < N; i++) {
        while (endIndex < N && ends[endIndex] < starts[i]) {
            activeCircles--; // Close circles that ended before this one starts
            endIndex++;
        }
        intersections += activeCircles; // Count existing active circles as intersections
        activeCircles++; // Add this circle to active ones
        
        if (intersections > 10_000_000) return -1; // Per problem constraints
    }
    
    return intersections;
}

// A[0] = 1
// A[1] = 5
// A[2] = 2
// A[3] = 1
// A[4] = 4
// A[5] = 0
