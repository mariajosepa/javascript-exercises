const sumAll = function(low,hi) {

    let sum = 0;
    let ans = 0;

    if (low > 0 && Number.isInteger(low) && Number.isInteger(hi)){

        if (low > hi){
            let temp = hi;
            hi = low;
            low = temp;
        }

        for (let i = low; i < hi+1; i++) {
            sum = sum + i;
            }
        ans = sum;
    }
    else{
        ans = 'ERROR'
    }

    return ans

};


// Do not edit below this line
module.exports = sumAll;
