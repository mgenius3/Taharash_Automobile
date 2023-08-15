"use strict";
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 5387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ logout)
/* harmony export */ });
function logout() {
    localStorage.clear();
    return true;
};


/***/ }),

/***/ 7893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getInitials),
/* harmony export */   "S": () => (/* binding */ shortenString)
/* harmony export */ });
function shortenString(str, maxLength) {
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
function getInitials(fullName) {
    // Split the input string by whitespaces
    const words = fullName?.split(" ");
    if (words != undefined) {
        // Get the first letters of the two words
        const firstLetter1 = words[0][0];
        const firstLetter2 = words[1][0];
        // Concatenate the first letters
        const concatenatedLetters = firstLetter1 + firstLetter2;
        return concatenatedLetters;
    }
    return null;
}


/***/ })

};
;