var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // Store unique characters
    let left = 0; // Left pointer
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) { 
            charSet.delete(s[left]); // Remove from set
            left++; // Shrink window
        }
        charSet.add(s[right]); // Add new character
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }

    return maxLength;
}; 