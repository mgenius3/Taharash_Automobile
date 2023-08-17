export function shortenString(str, maxLength) {
  if (str?.length > maxLength) {
    // Shorten the string and append ellipses
    return str.slice(0, maxLength - 3) + "...";
  } else {
    // Return the original string if it's already shorter than the maximum length
    return str;
  }
}
// export function getInitials(firstName, lastName) {
//   const firstInitial = firstName?.charAt(0);
//   const lastInitial = lastName?.charAt(0);
//   if (!firstInitial && !lastInitial) return "nil";
//   return firstInitial + lastInitial;
// }

export function getInitials(fullName) {
  // Split the input string by whitespaces

  const words = fullName?.charAt(0);

  if (words != undefined) {
    // Get the first letters of the two words
    // const firstLetter1 = words[0][0];
    // const firstLetter2 = words[1][0];

    // Concatenate the first letters
    // const concatenatedLetters = firstLetter1 + firstLetter2;

    let firstletter = words;
    return firstletter;

    // return concatenatedLetters;
  }
  return null;
}
