function solution(A) {
    let numSet = new Set(A); 

    for (let i = 1; i <= A.length + 1; i++) {
        if (!numSet.has(i)) {
            return i;
        }
    }
    
    return 1; 
}