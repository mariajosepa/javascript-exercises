const reverseString = function(str) {
    let result = '';
    const charsArray = str.split('');
    charsArray.reverse()
    result = charsArray.join('');

    return result
};


// Do not edit below this line
module.exports = reverseString;
