// getHiddenCard = function(a, b = 4) {
//     var fg ='*'.repeat(b);
//     var qw = a.slice(12)
//     var gh = fg.concat(qw)
//   console.log(gh)
//   return gh
//   }
//   getHiddenCard('1234567812341234')

// const capitalize = (a) => {
//       var cap = a.slice(0, 1).toUpperCase().concat(a.slice(1))
//     console.log(cap)
//     return cap
// }
// capitalize('sunnyrt')

// const isInternationalPhone = (a) => {
//     const firstNumber = a[0]
//     console.log(firstNumber)
//       return firstNumber !== '+'
//        }
//     isInternationalPhone('+79111152583')
 
// const isLeapYear = (year) => {
//  let  year1 = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
//   return year1;
// };
// console.log(isLeapYear(2016))

// const getLetter = (name, number) => {

//   if (number <= name.length || number > 0) {
//     var qw = name.slice(number - 1, number)
//     console.log(`'${qw}'`)
//   }
//   else {
//     console.log(`""`)
//   }

// };
// getLetter('Deni', 4)

// const normalizeUrl = (adress) => {

//   if (adress.startsWith('https://')) {
//     console.log(adress)
//     return adress
//   }
//   else {
//     console.log('https://' + adress)
//     return 'https://' + adress
//       }

// };
// normalizeUrl('https://game.ru')

// const convertText = (text) => {
//   let firstletter = text.slice(0, 1)
//   console.log(firstletter)
//   if (text ===''){
//     console.log(`''`)
//     return text
//   }
//   else if (firstletter.toUpperCase() === text.slice(0, 1)) {
//     console.log(text)
//     return text
//   } else {
//   let text1 = text.split("").reverse().join("")
//   console.log(text1)
//   return text1}
// }
// convertText('')

// const getNumberExplanation = (number) => {
//   switch (number) {
//   case 666: 
//       return console.log('devil number');
//     case 42:
//       return console.log('answer for everything');
//     case 7:
//       return console.log('prime number');
//     default: console.log('null')
//   }
//   }
//   getNumberExplanation(0)

// const printNumbers = (initialNumber) => {
//   // BEGIN (write your solution here)
//   let i = initialNumber;
//   while (i > 0) {
//     console.log(i);
//     i = i - 1;
//   }
//   console.log('finished!');

//   // END
// };

// printNumbers(4)


// const joinNumbersFromRange = (startNumber, finishNumber) => {
//   let result = '';
//   let i = startNumber;
//   while (i <= finishNumber) {
//     result = result + `${i}`;
//   i = i + 1;
//   }
//   return console.log(result);
// }

// joinNumbersFromRange(1,5)

// const mySubstr = (text, number) => {
//   let result = '';
//   let i = 0
//   while (i < number) {
//     result = `${result}${text[i]}`;
//       i = i + 1;
// };
// return console.log(result);
// }
// mySubstr('qwerty', 5)
// const countChars = (str, char) => {
//   let i = 0;
//   let count = 0;
//   let str1 = str.toLowerCase()
//   while (i < str1.length) {
//     if (str1[i] === char.toLowerCase()) {
   
//       count = count + 1;
//     }
//        i = i + 1;
//   }
//   return console.log(count);
// };

// countChars ('Every', 'r')

// const makeItFunny = (text, index) => {
//   let result = '';
//   let i = 0
//   while (i < text.length) {
//     // let y = i+1
//     // console.log(indexOf(text[i]))
//     if ((i+1) % index === 0) 
//     {
//       // result = `${result}${text[i].toUpperCase()}`;
//       result = result + text[i].toUpperCase() 
//       i = i + 1;
//     }
//     // result = `${result}${text[i]}`;
//     result = result + text[i]
//     i = i + 1;
    
// };
// return console.log(result);
// }
// makeItFunny('Qwertyqwerty', 3)

const encrypt = (text) => {
  let result = ''
for (i=0; i<text.length; i+= 1) {
  if ((i % 2) !== 0) {
    result = result + text[i] + text[i-1]
  } else if (i === text.length-1) {result = result + text[i]}
 }
return console.log(result)
}
encrypt('Samon')

