// You should create an array of numbers in a Javascript file, if there isn't one. Write a funciton that multiplies them togehter.
const jsonArray = [
  {
    name: "johnny",
    age: "55"
  },
  {
    name: "ronnald",
    age: "18"
  }
];
const numArray = [1, 2, 3, 4, 5];
const multiples = array =>
  array.reduce(num => {
    return (total *= num);
  }, 1);
multiples(numArray);

var numbers = [1, 2, 3];
function multiply(array) {
  total = 1;
  array.forEach(number => (total *= number));
}
function sumArray(array) {
  return array.reduce((accumulator, number) => number + accumulator);
}
sumArray(numbers);
multiply(numbers);
