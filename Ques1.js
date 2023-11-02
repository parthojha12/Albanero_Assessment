/* Q1) Write a function that takes an integer 'n'(greater than 0) as input and returns a new integer
formed by reversing the digits of 'n' without using any built-in methods for reversal. After
reversing the digits, determine whether the resulting number has any prime factors. If it does
have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
Example 1:
Input - 123
reversed integer - 321
prime factors of 321 are 3 and 107
output - Yes - [3,107]
Example 2:
Input - 1500
reversed Integre - 51
prime factors of 51 are 3 and 17
output - Yes - [3, 17]
Example 3:
Input - 1000
reversed Integre - 1
There are no prime factors for 1
output - No  */

const isPrimeNumber = (n) => {
    if(n<=1){
        return false;
    }
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

const reverseDigit = (n) => {
    let reverseNum = 0;
    while(n>0){
        reverseNum = (reverseNum*10) + (n%10);
        n = Math.floor(n/10);
    }
    return reverseNum;
}

const primeFactors = (n) => {
    const primeFactorsArr = [];
    for(let i=2; i<Math.sqrt(n); i++){
        while(n % i === 0){
            primeFactorsArr.push(i);
            n /= i;
        }
    }
    if(n>1){
        primeFactorsArr.push(n);
    }
    return primeFactorsArr;
}

const checkPrimeFactors = (n) => {
    const reverse = reverseDigit(n);
    if(isPrimeNumber(reverse)){
        return `Yes - [${reverse}]`;
    }
    const primeFactorNumber = primeFactors(reverse);
    if(primeFactorNumber.length>0){
        return `Yes - [${primeFactorNumber.join(",")}]`
    } else {
        return "No";
    }
}
  
  