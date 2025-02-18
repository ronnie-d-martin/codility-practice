function solution(S) {
    let n = S.length;
    let m = S[0].length; // Length of each string

    // Use a map to track character positions across different strings
    let positionMap = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let key = `${S[i][j]}_${j}`; // Unique key for character-position pair

            if (positionMap.has(key)) {
                return [positionMap.get(key), i, j]; // Found a matching pair
            }
            
            positionMap.set(key, i);
        }
    }

    return []; // No matching pair found
}
