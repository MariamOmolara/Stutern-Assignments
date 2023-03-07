// Question 1

// Mutating array methods are those that modify the original array. These methods alter the array in place 
// and do not return a new array. Examples includes; 

push()
pop()
splice()
shift()
unshift()

// Non-mutating array methods are those that do not modify the original array, but instead return a new 
// array with the desired changes. Examples includes;

concat()
slice()
filter()
map()
reduce()

// Question 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');
console.log(languages)

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');
console.log(languages)

// Remove the first item in the array
languages.shift();
console.log(languages)

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages)

// Replace 'PHP' with 'Go' and 'Rust'
let index = languages.indexOf('PHP');
languages.splice(index, 1, 'Go', 'Rust');

console.log(languages);



// Question 3  What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
// Answer
 FruitValue = ['apple', 'mango', 'orange']


 // Question 4
 function max(numbers) {
    let maxNum = numbers[0];  // set the initial maximum value to the first element of the array
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNum) {  // if the current element is greater than the current maximum value
        maxNum = numbers[i];  // set the current maximum value to the current element
      }
    }
    return maxNum;  // return the maximum value
  }
  
  console.log(max([4, 5, 10, -2])); 


  // Question 5

  function valTimesIndex(numbers) {
    return numbers.map((value, index) => value * index);
  }
  
  console.log(valTimesIndex([1,2,3]));  
  console.log(valTimesIndex([5,10,15])); 
  
  