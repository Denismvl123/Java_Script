// // // первое задание



// //         let a = 2;
// //         let b = 10
// //         console.log (a)
// //         for (let i = 1; i < b; i++) {
// //         a *= 2;
// //         console.log (a)
// //         }
     
    

// // // функция - 1е задание


// //    q1 = function pow(b) {
// //     let a = 2;
// //     console.log(a)
// //       for (let i = 1; i < b; i++) {
// //     a *= 2;
// //   console.log(a)
// //      }
// //     return a;
// //         }
// //     q1(5)
   



// //     // второе задание - вариант 1

// // smile = [':)', ':):)', ':):):)', ':):):):)', ':):):):):)']
// // for (let i = 0; i < smile.length; i++) {
// //   console.log(smile[i])
// // }


// //   // второе задание - вариант 2

// // let str = ':)'; 
// // console.log(':)')
// // for (let i = 0; i < 4; i++) {
// // 	    str += ':)';
// //     console.log(str)
// // }


// // // функция - второе задание 

// // printSmile = function Smile(a, b) {
// //         let res = ''
// //     for (let i = 0; i <= b - 1; i++) {
// //         res += a;
// //         console.log(res)
// //     } 
// //             }
// // printSmile(':)', 5)



// // // третье задание

// // printnumerofNoun = function(str) {
// //   var str1 = str.replace(/[^a-zа-яё]/gi, '')
// //   var vowels = "aeiouyяиюыаоэуеё"; //гласные
// //   var q = 0
// //   for (var i = 0; i < str1.length; i++) {
// //     for (var j = 0; j < vowels.length; j++) {
// //            if (str1[i] == vowels[j]) { 
// //         q = q + 1;
// //       } 
// //     }
// // }
// // console.log("количество гласных букв в слове", str , "= " , q)
// // console.log("количество согласных букв в слове", str , "= " , str1.length - q)
// // }
// // printnumerofNoun('qwerty 567567678 nnmlееэлллл')


// // // четвертое задание

//   // palindrom = function isPalindrom(str) {
//   //   var str1 = str.replace(/[^a-zа-яё]/gi, '').toLowerCase()
//   //     var str3 = str1.split("").reverse().join("")
//   //   var q = 0
//   //   console.log(str1)
//   //   console.log(str3)
//   //   for (var i = 0; i < str1.length; i++) {
//   //                        if (str1[i] == str3[i]) { 
//   //             q = q + 1;
//   //           } else break
//   //                }
//   //  if (q == str1.length) {console.log('слово' , str , 'палиндром')}
//   //  else {console.log('слово' , str , 'не палиндром')}      
//   //    }

//   // palindrom('Abba')


//   // задание 3 через includes

//   printnumerofNoun = function(str) {
//     var str1 = str.replace(/[^a-zа-яё]/gi, '')
//     var vowels = "aeiouyяиюыаоэуеё"; //гласные
//         var sum = 0
//     for (var i = 0; i < str1.length; i++) {
//                      if (vowels.includes(str1[i])) { 
//           sum += 1;
//         }
//   }
//   console.log("количество гласных букв в слове", str , "= " , sum)
//   console.log("количество согласных букв в слове", str , "= " , str1.length - sum)
// }
//   printnumerofNoun('asfaaasaqqssaa')


//   // четвертое задание без цикла

//   // palindrom = function(str) {
//   //   var str1 = str.replace(/[^a-zа-яё]/gi, '').toLowerCase()
//   //     var str3 = str1.split("").reverse().join("")
//   //       if (str1 === str3) { 
//   //       {console.log('слово' , str , 'палиндром')}
//   //      } else {console.log('слово' , str , 'не палиндром')}        
//   //   }
//   // palindrom('Abbat')

//   printnumerofNoun = function(str) {
//     var str1 = str.replace(/[^a-zа-яё]/gi, '')
//     const matched = str1.match(/[aeiouyяиюыаоэуеё]/gi)
//     console.log('кол-во гласных: ', matched ? matched.length : 0)
//     console.log('кол-во согласных: ', matched ? str1.length - matched.length : 0)
// }
//   printnumerofNoun('asfaaasaqqssaasууу12')
//  let arr = ['a', 'b', 'c']

