function toCase(text) {
  // write your code here
	let str=text.toString();
	if(str.length===0) return "-";
	let res="";
	res+=str.toLowerCase();
	res+='-';
	res+=str.toUpperCase();
	return res;
}
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
