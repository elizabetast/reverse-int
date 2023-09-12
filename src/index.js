module.exports = function reverse(n) {
    // Convert the number to a string and remove the negative sign if it exists
    let numStr = Math.abs(n).toString();
  
    let numArr = numStr.split('');
  
    let reversedArr = numArr.reverse();
  
    let reversedStr = reversedArr.join('');
  
    // Convert the reversed string back to a number and add back the negative sign if needed
    let resultNumber = parseInt(reversedStr);
    if (n < 0) {
      resultNumber *= 1;
    }
  
    return resultNumber;
  }

  console.log(module.exports(-251));
  