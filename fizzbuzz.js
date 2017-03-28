  
  // Count through numbers one through 20 and figure out if each one is divisible by 3, 5, or both.
  for (var i = 1; i <= 20; i++) {
  // For each number, do the following check:

  // See if it is divisible by 15
  
    if(i % 15 === 0) {
      // If divisible by 15: Print FizzBuzz (any number divisible by 3 and 5 is also divisible by 15)

      console.log('FizzBuzz');
    } else if (i % 3 ===0){
      // If only divisible by 3: Print Fizz
      console.log('Fizz');
    
  } else if ( i % 5 === 0) {
      // See if it is divisible by 5
      // If so: Print Buzz
      console.log('Buzz');
  } else {
    // See if it is not divisible by 3 or 5
    // If so: Print number
    console.log(i);
  
  }
}

 