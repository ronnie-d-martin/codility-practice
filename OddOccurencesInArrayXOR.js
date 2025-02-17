function OddOccurencesInArray(A) {
    let unpaired = 0; // Step 1: Initialize a variable to store the unpaired element
    for (let num of A) { // Step 2: Iterate through each number in the array
        unpaired ^= num; // Step 3: Perform XOR operation between `unpaired` and `num`
    }
    return unpaired; // Step 4: Return the unpaired number after looping
}