const palindromes = function (word) {

    let wordArray = word.toLowerCase().replace(/[^\w]/g, "").split("");
    console.log(wordArray);
    let reversedWordArray = wordArray.slice().reverse();
    return wordArray.join("") === reversedWordArray.join("");
};

console.log(palindromes("racecar!"));

// Do not edit below this line
module.exports = palindromes;
