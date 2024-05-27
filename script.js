function firstNonRepeatedChar(s) {
 // Write your code here
	// Create a map to count occurrences of each character
    let charCount = new Map();
    
    // Iterate through the string and count each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Iterate through the string again to find the first non-repeated character
    for (let char of s) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeated character is found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
