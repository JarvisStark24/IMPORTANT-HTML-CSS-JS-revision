// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// Test cases
console.log(mirrorString("hello"));   // "helloolleh"
console.log(mirrorString("abc"));     // "abccba"
console.log(mirrorString("race"));    // "raceecar"
console.log(mirrorString("mirror"));  // "mirrorrrorim"

function mirrorString(str){
    return str + str.split("").reverse().join("");
}