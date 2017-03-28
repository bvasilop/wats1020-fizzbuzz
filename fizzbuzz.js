      // First declare for to describe loop
      // Secondly declare a variable for i 
      // Then count through numbers one through 20 
  for (var i = 1; i <= 20; i++) {
      // Use if conditional to figure out if the numbers are divisible by 3, 5, or both.
      // To simplify and condense code see if it is divisible by 15 --any number divisible by 3 and 5 is also divisible by 15--
    if(i % 15 === 0) {
      // If divisible by 15: Print FizzBuzz 
      console.log('FizzBuzz');
      // Use else if conditional to determine if divisible by 3
  } else if (i % 3 ===0){
      // If only divisible by 3: Print Fizz
      console.log('Fizz');
      // Use else if conditional to determine if divisible by 5
  } else if (i % 5 === 0) {
      // If divisible by 5, Print Buzz
      console.log('Buzz');
      // Use else conditional to see if the number is not divisible by 3 or 5
  } else {
      // If it is not, then Print number
      console.log(i);
  }
}

 