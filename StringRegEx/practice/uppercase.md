How do I make the first letter of a string uppercase, but not change the case of any of the other letters?

For example:

"this is a test" -> "This is a test"
"the Eiffel Tower" -> "The Eiffel Tower"
"/index.html" -> "/index.html"



// 10,889,187 operations/sec
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// 10,875,535 operations/sec
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 4,632,536 operations/sec
function capitalizeFirstLetter(string) {
    return string.replace(/^./, string[0].toUpperCase());
}

// 1,977,828 operations/sec
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

先正则匹配到所有单词，然后将首字母大写