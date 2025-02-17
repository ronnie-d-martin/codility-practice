var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b); // Merge and sort
    let mid = Math.floor(merged.length / 2);
    console.log(mid)
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2; // Even case
    } else {
        return merged[mid]; // Odd case
    }
    
};

console.log(findMedianSortedArrays([1,2], [3,4]))