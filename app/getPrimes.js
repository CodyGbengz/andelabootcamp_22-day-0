'use strict';

module.exports = {

 getPrimes : (num) => {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    if(typeof num === "string"){
      return 'please enter a number'
    }else if(num === 0 || num === 1){
      return 'input a value above 1'
    }
    else{
    for (i = 2; i <= num; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= num; j += i) {
          sieve[j] = true;
        }
      }
    }
 }

    return primes;
  }

}