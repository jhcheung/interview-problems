function ArrayChallenge(strArr) {

    // code goes here
    var firstArray = strArr[0].split(", ")
    var secondArray = strArr[1].split(", ")
  
    var firstPointer = 0,
        secondPointer = 0,
        returnArray = []
        returnStr = '';
    while (firstPointer < firstArray.length && secondPointer < secondArray.length) {
      
      if (firstArray[firstPointer] < secondArray[secondPointer]) {
        firstPointer++;
      } else if (firstArray[firstPointer] > secondArray[secondPointer]) {
        secondPointer++;
      } else if (firstArray[firstPointer] === secondArray[secondPointer]) {
        returnArray.push(firstArray[firstPointer])
        firstPointer++;
        secondPointer++;
      }
    }
    if (returnArray.length > 0) {
      return returnArray.join(',');
    } else {
      return false
    }
  }
     
  // keep this function call here  
  console.log(ArrayChallenge(readline()));
  
//   Array Challenge
//   Have the function ArrayChallenge(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
//   Examples
//   Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//   Output: 1,4,13
//   Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
//   Output: 1,9,10
//   Browse Resources
//   Search for any help or documentation you might need for this problem. For example: array indexing, Ruby hash tables, etc.
  