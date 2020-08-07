/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
    }
  
    const nums1Length = nums1.length;
    const nums2Length = nums2.length;
  
    let start = 0;
    let end = nums1Length;
  
    while (start <= end) {
      const nums1Median = Math.floor((start + end) / 2);
      const nums2Median = Math.floor((nums1Length + nums2Length + 1) / 2 - nums1Median);
  
      const xMaxLeft = nums1Median === 0 ? Number.NEGATIVE_INFINITY : nums1[nums1Median - 1];
      const xMinRight = nums1Median === nums1Length ? Number.POSITIVE_INFINITY : nums1[nums1Median];
  
      const yMaxLeft = nums2Median === 0 ? Number.NEGATIVE_INFINITY : nums2[nums2Median - 1];
      const yMinRight = nums2Median === nums2Length ? Number.POSITIVE_INFINITY : nums2[nums2Median];
  
      if (xMaxLeft <= yMinRight && yMaxLeft <= xMinRight) {
        if ((nums1Length + nums2Length) % 2 === 0) {
          return (Math.max(xMaxLeft, yMaxLeft) + Math.min(yMinRight, xMinRight)) / 2;
        }
        return Math.max(xMaxLeft, yMaxLeft);
      }
      if (xMaxLeft > yMinRight) {
        end = nums1Median - 1;
      } else {
        start = nums1Median + 1;
      }
    }
  
    return false;
  };