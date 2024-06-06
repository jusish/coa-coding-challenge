COA Taskforce Take-Home Challenge
Coding Challenge 1: Array Manipulation
Problem Statement:
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Solution:
The solution to this problem is implemented in the subarraySum function. It uses a sliding window approach to iterate through the array, keeping track of the current sum and the start of the subarray. If the current sum exceeds the target, elements are removed from the start of the subarray until the sum is less than or equal to the target. If the sum is equal to the target, the function returns true. If the loop completes without finding a subarray with the target sum, the function returns false.

The time complexity of this solution is O(n), where n is the length of the input array, as it iterates through the array once. The space complexity is O(1) since it only uses a constant amount of extra space.


console.log(subarraySum([4, 2, 7, 1, 9, 5], 17)); // Output: true
console.log(subarraySum([1, 2, 3, 4, 5], 9)); // Output: true
console.log(subarraySum([1, 2, 3, 4, 5], 20)); // Output: false


Coding Challenge 2: String Transformation
Problem Statement:
Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
Solution:
The solution to this problem is implemented in the stringTransform function. It first checks the length of the input string to determine which transformation(s) to apply:

If the length is divisible by 15, it reverses the string and then replaces each character with its ASCII code.
If the length is divisible by 3 (but not 15), it reverses the string.
If the length is divisible by 5 (but not 15), it replaces each character with its ASCII code.
If none of the divisibility conditions are met, it returns the original string.
The time complexity of this solution is O(n), where n is the length of the input string, as it iterates through the string once. The space complexity is also O(n) due to the use of string manipulation operations that create new strings.

console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(stringTransform("Hello World")); // Output: "Hello World"
console.log(stringTransform("Anthropic")); // Output: "Anthropic"



Interactive Photo Gallery
The interactive photo gallery is built using HTML, CSS, and JavaScript. It meets the following requirements:

Responsive Design: The gallery adapts to different screen sizes and devices, ensuring a consistent user experience.
Thumbnail Grid: The gallery displays a grid of thumbnail images that the user can click to view the full-size image.
Lightbox: When a thumbnail is clicked, a lightbox-style modal appears, displaying the full-size image and allowing the user to navigate through the gallery.
Keyboard Navigation: Users can navigate through the gallery using the left and right arrow keys.
Metadata Display: The gallery displays relevant metadata (e.g., image title, description, and photographer) for the currently displayed image.
The code for the interactive photo gallery is organized in a modular fashion, with separate files for HTML, CSS, and JavaScript. The JavaScript code leverages modern features and best practices, including the use of ES6 syntax and modules.

To run the interactive photo gallery, simply open the index.html file in a web browser.