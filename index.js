
/* 
take one number from the array
add it with the first number in the array 
compare the resulting value against the target value
if they are the same, return true
===
loop through the numbers in the array
if the number you get by subtracting the i number from the target number is one of the number in the array
return true

*/

function hasTargetSum(array, target) {
  let result = [];
  if (array.length === 1){
    return (false) 
  } else {
  for (let i=0; i < array.length; i++){
    for (let j = i+1; j < array.length; j++){
      if (target == array[i] + array[j]) {
        result.push("true")
      } 
    }
  }
     if (result.includes("true")){
       return true
     } else{
       return false
     }
}
}


/* 
  Write the Big O time complexity of your function here
O(n²)
*/

/* 
  Add your pseudocode here
Starting from the first item of the array and loop through the whole array(i),
also start another loop from the next number in the array(j),
add the two number with each iteration, and compare it against the target value.
if they match, push "true" to the result array.
after looping through all elements of the array, check if the result array includes the value true.  If yes, return true, if no, return false.
*/

/*
Add written explanation of your solution here
take one number from the array
add it with the first number in the array 
compare the resulting value against the target value
if they are the same, return true.
then move on to the second number in the array to do the same.
repeat until you get to the last number of the array.
meanwhile, whenver you get true, store it in an array.
After going through all the numbers, check the array.
if it's empty the final result is false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5,6,3,8], 11)
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
