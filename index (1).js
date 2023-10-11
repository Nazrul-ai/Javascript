function sortArrayDescending(arr) {
  // Use the built-in sort method with a compare function
  arr.sort(function(a, b) {
    return b - a; // Compare elements in descending order
  });
}

// Example usage
const numbers = [5, 2, 9, 1, 5];
sortArrayDescending(numbers);

console.log(numbers); // This will print the sorted array in descending order
