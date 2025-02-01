// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// Test cases
console.log(countVowels("hello"));        // 2 (e, o)
console.log(countVowels("HELLO"));        // 2 (E, O)
console.log(countVowels("javascript"));   // 3 (a, a, i)
console.log(countVowels("Vwls r mssng")); // 0 (no vowels)
console.log(countVowels("AEIOUaeiou"));   // 10 (all vowels)

// Solution

function countVowels(str){
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}