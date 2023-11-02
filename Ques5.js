/* Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
Note - Do not use any sorting algorithm or library's sort method
Example-1:
Input: nums = [10,4,12,9,87,34], K = 2
Output: 34 */

const KthLargest = (nums, k) => {
    const numArr = new Array(10001).fill(0);
    for(const num of nums){
        numArr[num]++;
    }
    let count = 0;
    for(let i=numArr.length-1; i>=0; i--){
        if(numArr[i]>0){
            count += numArr[i];
            if(count >= k){
                return i;
            }
        }
    }
    return null;
}