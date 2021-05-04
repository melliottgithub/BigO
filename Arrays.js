const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


console.log(strings)
//push
strings.push('e'); // O(1)

console.log(strings)
//pop
strings.pop(); // O(1)
console.log(strings)
strings.pop(); // O(1)
console.log(strings)

//unshift
strings.unshift('x') // O(n)

console.log(strings)
//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings)