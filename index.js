function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let x = 0; x < array.length; x++){
    for (let y = x + 1; y < array.length; y++){
      if ((array[x] + array[y]) === target){
        return true
      } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n²)

  I believe it is quadratic since my solution has to iterate through the array twice. 
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
   I knew I had to iterate through the array twice, grabbing one element and adding it to all the other elements to see if it matches the target and return true if it does. If it goes through both loops and does not return true, the function by default will return false. 
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
