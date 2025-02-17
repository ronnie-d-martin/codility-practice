function solution(A) {
    let countMap = new Map()
    let N = A.length

    //set the value 
    for (let i = 0; i < N; i++) {
        countMap.set(A[i], (countMap.get(A[i]) || 0) + 1)
    }

    //checking the dominator
    let dominator = null
    for (let [key, count] of countMap) {
        if (count > Math.floor(N / 2)) {
            dominator = key
            break;
        }
    }

    //condtion if no dominator
    if (dominator === null) return -1

    //finding the dominator in the map
    for (let j = 0; j < N; j++) {
        if (A[j] === dominator) {
            return j
        }
    }

    return -1
}