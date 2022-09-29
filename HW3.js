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

//  arr.forEach((a, b, c) => {
//   console.log(b + a + c)

//  }
//   )

  // let who = "dragon's" + 'mother';
// console.log(who);
// // Кароч ключевые слова: forEach(функция для каждого эл. массива), map(создает новый массив), filter (фильтрует массив), find(найти с опред. условием), 
// indexOf, objects, arrays, findIndex, includes, for..of, for..in

// ["Bilbo", "Gandalf", "Nazgul"].forEach(item => {console.log(item)})

// var menu = {
//   width: 300,
//   height: 200,
//   title: '"Menu"'
// };

// for (var i in menu) {
//   console.log( "Ключ: " + i + " значение: " + menu[i] );
// }







// const fs = require("fs");
// // const { stripVTControlCharacters } = require("util");
// // let filename = "library/tast1.txt";
// let str = fs.readFileSync("library/tast5.txt", { "encoding": "utf8" });
// var str1 = JSON.parse(str)
// // Прочитать весь файл в строку, разделить по числам 
// // и превратить каждое число из строки в настоящее число
// // let array = str.split("\r\n").map(w => +w);
// // let sum = 0, count = 0;
// // for (let n of array) {
// //            sum += n; // В файле каждое число будет на отдельной строке
// //          ++count;
// //    }
// // if (count)
// //     console.log("Среднее арифметическое:\n" + (sum / count));
// // // else
// // //     console.log("Положительных чисел нет");
// // var array = str.split('\n')
// console.log(str1)


// const fs = require("fs");
// fs.readFile('library/tast5.txt', (err, data) => {
//   if (err){
//       // Обработка ошибок
//       return;
//   }

//   var userData = data.toString().split(/(?={")/).map(x => JSON.parse(x));
//   return userData
//   // fs.writeFile()
// });

// console.log(userData)

// var fs = require('fs');
// var obj;
// fs.readFile('library/tast5.txt', 'utf8', function (err, data) {
// if (err) throw err;
//    obj = JSON.parse(data);
// });
// const obj1 = fs.writeFile('library/tast6.txt', obj) {
//   if (err) throw err;
//   var obj2 = fs.readFileSync("library/tast6.txt", "utf8");
// };

// console.log(obj2)

// const fs = require("fs");
 
// fs.writeFile("hello3.JSON", fs.readFileSync("library/tast1.txt", "utf8"), function(error){
 
//     if(error) throw error; // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:");
//  });
// var jsonFile = fs.readFileSync("library/task2.JSON", "utf8", function(error){
 
//   if(error) throw error; // если возникла ошибка
//   console.log("Асинхронная запись файла завершена. Содержимое файла:");
// })
//  var jsonFileRead = JSON.parse(jsonFile)
//  console.log(jsonFileRead.name)

const users = [
  {
      firstName: 'John',
      lastName: 'Caper',
      phone: '7436676737634',
      registrationDate: '12.10.2021'
  },
  {
      firstName: 'Clark',
      lastName: 'Kent',
      phone: '4346676737634',
      registrationDate: '16.09.2021'
  },
  {
      firstName: 'Tony',
      lastName: 'Stark',
      phone: '7436698337634',
      registrationDate: '11.10.2021'
  },
  {
      firstName: 'Bruce',
      lastName: 'Wayne',
      phone: '1111176737634',
      registrationDate: '09.10.2021'
  },
  {
      firstName: 'Star',
      lastName: 'Lord',
      phone: '7439374737634',
      registrationDate: '10.10.2021'
  },
  {
      firstName: 'Kate',
      lastName: 'Bishop',
      phone: '7436693647634',
      registrationDate: '11.10.2021'
  },
  {
      firstName: 'Jerry',
      lastName: 'James',
      phone: '7409048737634',
      registrationDate: '10.10.2021'
  },
  {
      firstName: 'Jeremy',
      lastName: 'Clarkson',
      phone: '743667600289334',
      registrationDate: '16.10.2020'
  },
  {
      firstName: 'Robert',
      lastName: 'Patrik',
      phone: '7436676730093',
      registrationDate: '10.10.2020'
  },
  {
      firstName: 'Jonny',
      lastName: 'Sins',
      phone: '74923982737634',
      registrationDate: '01.01.2021'
  },
  {
      firstName: 'Andrew',
      lastName: 'Garfield',
      phone: '743667988344',
      registrationDate: '09.10.2019'
  },
  {
      firstName: 'Jane',
      lastName: 'Foster',
      phone: '74368783427634',
      registrationDate: '09.10.2019'
  },
  {
      firstName: 'Rick',
      lastName: 'Smith',
      phone: '700000037634',
      registrationDate: '12.10.2021'
  },
];


// вариант без filter
// const Data1 = []
// // findUsers = function() {
//     for (var i = 0; i < users.length; i++) {
//         if ((users[i].registrationDate == '10.10.2021') || (users[i].registrationDate == '09.10.2021')) 
//             Data1.push(users[i])
//             }
//     // let user = users{i}.filter(registrationDate == '12.10.2021')  
    
    
//     console.log(Data1)
// }
// findUsers()

// вариант с filter
findUsers = function() {
var fu = users.filter (e => (e.registrationDate == '10.10.2021' || e.registrationDate == '09.10.2021'))
console.log(fu)
}
findUsers()

const fs = require("fs");
 var jsonFile = fs.readFileSync("library/task2.JSON", "utf8", function(error){
 
//   if(error) throw error; // если возникла ошибка
//   console.log("Асинхронная запись файла завершена. Содержимое файла:");
})
 var jsonFileRead = JSON.parse(jsonFile)
//  console.log(jsonFileRead.length)
//  var jsonFileReadNoDuplicates = jsonFileRead.reduce(function(previousValue, currentValue) {
// if (previousValue.indexOf(currentValue) === -1) {
//     previousValue.push(currentValue)
// }
// return previousValue
//  }, [])

//  console.log(jsonFileReadNoDuplicates.length)
const filteredArray = [];
jsonFileRead.filter((item) => {
  if (!filteredArray.some((element) => element.name === item.name)) {
    filteredArray.push(item);
  }
});
console.log(filteredArray.length);


// for (var key in users[0])
// {console.log(users[0][key])
// }