function solution(N, M) {
    let eaten = new Array(N).fill(false);  // Array to track which chocolates are eaten
    let currentPosition = 0;  // Start from chocolate 0
    let count = 0;  // Count of chocolates eaten

    while (!eaten[currentPosition]) {
        eaten[currentPosition] = true;  // Mark chocolate as eaten
        count++;  // Increment the count
        currentPosition = (currentPosition + M) % N;  // Move M positions ahead, wrapping around
    }

    return count;  // Return the number of chocolates eaten
}