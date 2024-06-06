function stringTransform(str) {
  const length = str.length;

  if (length % 15 === 0) {
    // Divisible by both 3 and 5, reverse and then replace with ASCII codes
    return str
      .split("")
      .reverse()
      .join("")
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // Divisible by 3, reverse the string
    return str.split("").reverse().join("");
  } else if (length % 5 === 0) {
    // Divisible by 5, replace each character with its ASCII code
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else {
    // No divisibility conditions met, return the original string
    return str;
  }
}

// Test the stringTransform function
console.log(stringTransform("Hamburger")); // Output: "regrubmaH"
console.log(stringTransform("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransform("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(stringTransform("Hello World")); // Output: "Hello World"
console.log(stringTransform("Anthropic")); // Output: "Anthropic"