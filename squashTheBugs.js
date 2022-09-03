

function findLongest(str) {
    const longestWord =  Math.max(...str.split(' ').map(word => word.length))
    return longestWord
}

// Math.max returns largest of zero or more numbers given as input parameters
// ... spread operator Spread syntax (...) allows an iterable, such as an array or string, 
// to be expanded in places where zero or more arguments (for function calls) or elements 
// (for array literals) are expected. Spread syntax "expands" an array into its elements.
// .split(' ') splits the string into an array of words, separated by the space between
// .map maps each item in an array to something else.  The element is called word
// (since it is one), and it is mapped to the length of the word.




findLongest("The quick white fox jumped around the massive dog")
findLongest("Take me to tinseltown with you")
findLongest("Sausage chops")
findLongest("Wind your body and wiggle your belly")
findLongest("Lets all go on holiday")
