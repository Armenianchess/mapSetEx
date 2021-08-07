
// new Set([1, 1, 2, 2, 3, 4])

// { 1, 2, 3, 4 }


// [...new Set("referee")].join("")

//"ref"

// let m = new Map();
// m.set([1, 2, 3], true,);
// m.set([1, 2, 3], false);

// {array(3) => [true] array(3) => [false]}

// question
// if i did this 
//m.set([1, 2, 3], true, [1, 2, 3], false);
// why does m not show the second 1,2,3 arr or false?


// function hasDuplicate(arr) {
//     return new Set(arr).size !== arr.length
// }


// hasDuplicate([1, 3, 2, 1]) // true
// hasDuplicate([1, 5, -1, 4]) // false


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

// function isVowel(char) {
//     return "aeiou".includes(char);
// }






// function isVowel(char) {
//   return 'aeiou'.includes(char)
// }
// function vowelCount(str) {

//   let vowelMap = new Map();

//   for (let char of str) {
//       // console.log(char)
//       let lowerCaseChar = char.toLowerCase()
//       if (isVowel(lowerCaseChar)) {
//           if (vowelMap.has(lowerCaseChar)) {
//               vowelMap.set(lowerCaseChar,
//                   vowelMap.get(lowerCaseChar) + 1)
//           } else {
//               vowelMap.set(lowerCaseChar, 1)
//           }
//       }
//   }
//   return vowelMap
// }








// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }





