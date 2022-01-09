function hasTargetSum(array, target) {
  // Write your algorithm here
  let temp = [...array]
  while (temp.length > 1){
    let first = temp.shift();
    for (let each of temp){
      if (first + each === target) {return true}
    }
    
  }
  //     if (array[a] + temp[b] === target) {return true}
    return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for each item
  add all other items
    compare to target
  if no target, remove item from array and start over
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
