/*
https://leetcode.com/problems/find-common-elements-between-two-arrays/

You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.

Consider calculating the following values:

The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
Return an integer array answer of size 2 containing the two values in the above order.



Example 1:
*/

const nums1A = [4, 3, 2, 3, 1]
const nums2A = [2, 2, 5, 2, 3, 6]
const expectedA = [3, 4]
/*
Explanation: We calculate the values as follows:
- The elements at indices 1, 2, and 3 in nums1 occur at least once in nums2. So the first value is 3.
- The elements at indices 0, 1, 3, and 4 in nums2 occur at least once in nums1. So the second value is 4.


Example 2:
*/

const nums1B = [3, 4, 2, 3]
const nums2B = [1, 5]
const expectedB = [0, 0]

/*
Explanation: There are no common elements between the two arrays, so the two values will be 0.


Constraints:

n == nums1.length
m == nums2.length
1 <= n, m <= 100
1 <= nums1[i], nums2[i] <= 100
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function findIntersectionValues(nums1, nums2) {
    let commonIndicesCount1 = 0;
    let commonIndicesCount2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                commonIndicesCount1++;
                break;
            }
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums1[j] === nums2[i]) {
                commonIndicesCount2++;
                break;
            }
        }
    }

    return [commonIndicesCount1, commonIndicesCount2];
}

// function findIntersectionValues(nums1, nums2) {
//     const commonElementsSet = new Set();

//     for (const num of nums1) {
//         if (nums2.includes(num)) {
//             commonElementsSet.add(num);
//         }
//     }

//     for (const num of nums2) {
//         if (nums1.includes(num)) {
//             commonElementsSet.add(num);
//         }
//     }

//     return [commonElementsSet.size, commonElementsSet.size];
// }

// function findIntersectionValues(nums1, nums2) {
//     //Your code here
//     let empty = [];
//     let counter1 = 0;
//     let counter2 = 0;
//     let obj = {};


//     for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++)
//     if (nums2[i] === nums1[j]) {
//         counter1++;
//         break;
//     }
// };


// for (let i = 0; i < nums2.length; i++) {
//     for (let j = 0; j < nums1.length; j++)
//     if (nums1[i] === nums2[j]) {
//         counter2++;
//         break;
//     }
// };

// empty.push(counter2);
// empty.push(counter1);
// return empty;


// for (ele in nums1) {
//     console.log(nums1)
//     if (!obj[ele] === undefined) {
//         obj[ele] += ele
//     }else {
//         obj[ele]++
//     }
// }

// for (push in nums2) {
//     if (!obj[push] === undefined) {
//         obj[push] += ele
//     }else {
//         obj[push]++
//     }
// }

// for (let i = 0; i < nums1.length; i++) {
//     if (nums1[i] == nums2[i]) counter1++
// };
// for (let j = 0; j < nums2.length; j++) {
//     if (nums2[j] == nums1[j]) counter2++
// };

// return empty;
// };

console.log(findIntersectionValues(nums1A, nums2A))
console.log(findIntersectionValues(nums1B, nums2B))
