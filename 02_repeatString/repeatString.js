const repeatString = function(word,repeatAmount) {
  let count = 0;
  let result = '';
  if (repeatAmount >= 0) {
    while (count < repeatAmount) {

      result = result + word;
      count +=1;
    }
  }else{
    result = 'ERROR';
  }
 
  return result
};

// Do not edit below this line
module.exports = repeatString;
