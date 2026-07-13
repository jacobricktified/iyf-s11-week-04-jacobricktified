//function to check if a string is a palindrome
function isPalindrome(str) {

    // Remove spaces and convert to lowercase
    const cleaned = str.toLowerCase().replace(/\s/g, "");

    // Reverse the string
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));