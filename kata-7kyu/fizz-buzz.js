function fizzbuzz(n)
{
   return Array(n).fill(1).map((_,i) => i + 1).map(el => (!(el % 3) && !(el % 5)) ? 'FizzBuzz' 
                : !(el % 3) ? 'Fizz' : !(el % 5) ? 'Buzz' : el );
}
