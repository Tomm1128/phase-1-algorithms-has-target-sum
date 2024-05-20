function hasTargetSum(array, target) {
  // Write your algorithm here
  
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Write a function that takes in two arguments: [an array of numbers], a number
  Goal for the function is to see if any pair of numbers in the array add up to the target number. 
  Then returns true or false depending on if there is a pair of values that add up to the target.

  function {
    iterate through the array and grab the first element 
    Then iterate through the array again and grab the next element
    Add the two values together and see if they match the target
    If they do, return true otherwise return false
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
