/*
Recursion tips
1. Figure out bare minimum pieces of info to represent your problem
2. Give reasonable defaults to the bare minimum pieces of info
3. Check the base case. Is there are work to do? If not, return
4. Do some work, call your function again and make sure the arguments have changed in some fashion
*/

function printNumber(n, dec = 1) {
	//base case. Always provide a base case
	if (n === 0) {
		return;
	}

	console.log(n);
	/*
  always change recursion in some manner to avoid infinite recursive loop
  */
	printNumber(n - dec);
}

printNumber(12);
