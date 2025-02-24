function solution(A) {
    A.sort((a, b) => a - b); // Sort the array in ascending order
    let rooms = 0; // Count of rooms needed
    let i = 0; // Pointer for iterating through guests

    while (i < A.length) {
        let capacity = A[i]; // The max number of guests allowed in this room
        let count = 0; // Guests in the current room

        // Fill the room with as many guests as possible
        while (i < A.length && count < capacity) {
            count++;
            i++;
        }
        rooms++; // Increase room count
    }

    return rooms;
}
