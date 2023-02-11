const palindromes = function (string) {
  const altString = string.toLowerCase().replace(/[^a-z]/g, "");
  return altString.split("").reverse().join("") == altString;
};

// Do not edit below this line
module.exports = palindromes;
