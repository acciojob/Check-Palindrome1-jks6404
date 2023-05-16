// complete the given function

function palindrome(str){
	var s =	str.toLowerCase()
var i = 0
	var j = s.length - 1;
	while (i<j) {
		if(s.charAt(i)===s.charAt(j)) {
			i++;
			j--;
			return true
		}
		else {
			return false
		}
		
	}
	

}
module.exports = palindrome
