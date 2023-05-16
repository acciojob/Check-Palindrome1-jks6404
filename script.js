// complete the given function

function palindrome(str){
let isPalindrome = true;
	let i=0, j=str.length-1;

	while(i<=j && isPalindrome){
		if (str[io]!==str[j]){
			isPalindrome=false;
	}
	i++;
	j--;
}
console.log(isPalindrome ? "Palindrome" : "Not a palindrome")
module.exports = palindrome
