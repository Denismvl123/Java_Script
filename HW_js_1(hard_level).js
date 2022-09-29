// const checkAge = function(age) {         
//     if (age < 18) {
//         console.log('You don’t have access cause your age is ' + age + ' It’s less then')
//     } else if (age >= 18 && age < 61) {
//         console.log('Welcome')
//     } else if (age > 61) {
//         console.log('Keep calm and look Culture channel')
//     } else {'Technical work'}
    
//     }
//     checkAge(17)





// const checkAge_1 = function(age) {
//   if (typeof (age) != 'number')
//   {console.log('Error')}
//   else {
//     if (age < 18) {
//     console.log('You don’t have access cause your age is ' + age + ' It’s less then')
// } else if (age >= 18 && age < 61) {
//     console.log('Welcome')
// } else if (age > 61) {
//     console.log('Keep calm and look Culture channel')
// } else {'Technical work'}
// }
// }
// checkAge_1(17)



const checkAge_3 = function(age) 
{
    if (typeof (age) == 'boolean')
 {console.log('Error')}
    else
    { 
        let age_1 = Number(age)
        if (isNaN(age_1))
{console.log('Error') }
   else
    if (age_1 <= 121 && age_1 > 0) {
    if (age_1 < 18) {
        console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then')
    } else if (age_1 >= 18 && age_1 < 61) {
        console.log('Welcome')
    } else if (age_1 > 61) {
        console.log('Keep calm and look Culture channel')
    } else {'Technical work'}
   }
   else {console.log('Error')}
    }
}
checkAge_3('17p')