
// string method to find property of length
const str = "Hello, World!";
const length = str.length;
console.log(length);
// slice extracing part of string and return in new string 
let slc ="haseeb,sher ,ali"
let part = slc.slice(2,4)
console.log(part);
//String substring() is differnce between start and end end less then 0
let sher ="haseeb,sher ,ali"
let part2 = slc.substring(8,4)
console.log(part2);
//String  Replaces a specified substring with another substring:
let str2="Hello, World!";
let replaced = str.replace("World", "Universe"); 
console.log(replaced)
//String toUpperCase() - Converts the string to uppercase:
let str3="how are u"
let upper=str3.toUpperCase()
console.log(upper)
//String toLowerCase() - Converts the string to lowercase:
let str4="HOW ARE YOU"
let lower=str3.toLowerCase()
console.log(lower)
//String concat() - Concatenates two or more strings:

let str5="haseeb"
let str6="ali"
let conca=str5.concat(str6)
console.log(conca)
//String trim() - Removes leading and trailing whitespace from a string:

let st = "haseeb  ;  ali"
let tem = st.trim()
console.log(tem)
// String trimEnd() - Removes trailing whitespace from a string:
let str7 ="Hello, World!   ";
let trimmedEnd = str.trimEnd();
console.log(trimmedEnd)
//String padStart(targetLength, padString) - Pads the string from the start with a specified character to reach a target length:
let str8="67"
let pad =str8.padStart(5,"0")
console.log(pad)
//String padEnd(targetLength, padString) - Pads the string from the end with a specified character to reach a target length:

let str11="45"
let padnd=str11.padEnd(9,"0")
console.log(padnd)
//String charAt(index) - Returns the character at a specified index:
let str12="hello ,world"
let chart=str12.charAt(7)
console.log(chart)
//String charCodeAt(index) - Returns the Unicode code point of the character at a specified index:


let str13="hello ,world"
let cht=str12.charAt(7)

console.log(cht)
// String split(separator) - Splits a string into an array of substrings based on a specified separator:
const str15 = "apple,banana,orange";
const fruits = str15.split(","); 
console.log(fruits)








