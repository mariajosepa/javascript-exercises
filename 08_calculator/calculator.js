const add = function(num1,num2) {
    return num1 + num2;
	
};

const subtract = function(num1,num2) {
    return num1 - num2;
	
};

const sum = function(arr) {

  let arrSum = 0;
  if (arr.length > 0){
    arrSum = arr.reduce((acc,curr) => acc + curr, 0);
  }else{
    arr = 0;
  }
    return arrSum;
};

const multiply = function(arr) {
  return arr.reduce((acc,curr) => acc * curr, 1);
};

const power = function(base,exp) {
  return Math.pow(base,exp);
};

const factorial = function(num) {
  let ans = 0;

  if (num === 0){
    ans = 1;
  }
  let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
    ans = result;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
