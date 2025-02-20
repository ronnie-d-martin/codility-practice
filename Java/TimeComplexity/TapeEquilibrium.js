class Solution {
    public int solution(int[] A) {
        int totalSum = 0; 
        for (int num : A) {
            totalSum += num;
        }
        int leftSum = 0;
        int minDiff = Integer.MAX_VALUE;

        for(int i = 0; i < A.length -1 ; i++){
            leftSum += A[i];
            int rightSum = totalSum - leftSum;
            int mindif = Math.abs(leftSum - rightSum);
            minDiff = Math.min(minDiff, mindif);
        }

        return minDiff;
    }
}
