function binaryGapFunc(N) {
    let maxGap = 0;
    let currentGap = 0;
    let foundOne = false; // Flag to detect first 1

    while (N > 0) {
        if (N & 1) { // If the last bit is 1
            if (foundOne) {
                maxGap = Math.max(maxGap, currentGap);
            }
            foundOne = true; // Start counting gaps after the first 1
            currentGap = 0; // Reset gap counter
        } else if (foundOne) { // Count gap only after first 1
            currentGap++;
        }
        N >>= 1; // Right shift N (divide by 2)
    }

    return maxGap;
}
