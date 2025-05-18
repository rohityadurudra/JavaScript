 //the most common and clean way to remove an element from an array at any position in JavaScript is:

//✅ Using splice()

array.splice(index, 1);

//index: the position of the element to remove

//1: number of elements to remove (just one in this case)

//🔍 Example:

let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(2, 1); // removes "cherry" at index 2
console.log(fruits); // ["apple", "banana", "date"]

//🔁 Note:
//splice() modifies the original array.

//If you want to keep the original array unchanged, make a copy first:

let newFruits = [...fruits];
newFruits.splice(2, 1);

//You can remove numbers from an array in JavaScript using the same methods — because arrays in JavaScript can contain any type of element (numbers, strings, objects, etc.).

//✅ Example: Remove a number by index

let numbers1 = [10, 20, 30, 40];
numbers1.splice(2, 1); // removes the number at index 2 (which is 30)
console.log(numbers1); // [10, 20, 40]

//✅ Example: Remove a number by value


//If you don’t know the index but want to remove a specific number, use indexOf() with splice():

let numbers2 = [10, 20, 30, 40];
let valueToRemove1 = 30;

let index = numbers2.indexOf(valueToRemove1);
if (index !== -1) {
  numbers2.splice(index, 1); // removes 30
}

console.log(numbers2); // [10, 20, 40]

//🧠 Bonus Tip:
//If the number occurs multiple times and you want to remove all occurrences:

let nums = [10, 20, 30, 20, 40];
let valueToRemove = 20;

nums = nums.filter(num => num !== valueToRemove);

console.log(nums); // [10, 30, 40]