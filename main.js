console.log('#####################################################');
console.log('Week 3 - Day 1')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');





// ################################################# Day 1





//دالة تقوم باستقبال مصفوفة تتكون من أرقام وتطبع جميع عناصرها
console.log('######### Day 1 Exercise 1')
let arr_1 = [5, 7, 9];
let arr_2 = ['Mohammad', 'Omar', 'Saeed', 'JavaScript'];
let arr_3 = [13, 18, 25, 5]
function printAll(arr) {
  arr.forEach((elem) => {
    console.log(elem);
  })
}
printAll(arr_1)
printAll(arr_2)
printAll(arr_3)




//دالة تقوم باستقبال مصفوفة تتكون من أرقام وترجع مصفوفة جديدة تحتوي فقط على العناصر التي أقل من 10
console.log('######### Day 1 Exercise 2')
let arr_1 = [5, 7, 9];
let arr_3 = [13, 18, 25, 5]
let arr_4 = [11, 15, 19]
function lessThan10(arr) {
  return arr.filter((elem,i) => {
    return elem < 10
  });
}
console.log(lessThan10(arr_1))
//output [5, 7, 9]
console.log(lessThan10(arr_3))
//output [5]
console.log(lessThan10(arr_4))
//output []


// دالة تقوم باستقبال مصفوفة تتكون من أرقام وترجع مصفوفة جديدة تتكون من كل عنصر * 5
console.log('######### Day 1 Exercise 3')
let arr_1 = [5, 7, 9];
let arr_3 = [13, 18, 25, 5]
let arr_4 = [11, 15, 19]

function multi5(arr) {
  return arr.map((elem) => {
    return elem * 5
  })
}
console.log(multi5(arr_1))
console.log(multi5(arr_3))
console.log(multi5(arr_4))





//دالة تقوم باستقبال مصفوفة تتكون من أرقام وترجع أول عنصر موجود في هذه المصفوفة أقل من أو يساوي 15
console.log('######### Day 1 Exercise 4')
let arr_1 = [5, 7, 9];
let arr_3 = [13, 18, 25, 5]
let arr_4 = [11, 15, 19]

function lessOrEqual15(arr) {
  return arr.find((elem) => {
    return elem <= 15;
  })
}

console.log(lessOrEqual15(arr_1))
console.log(lessOrEqual15(arr_3))
console.log(lessOrEqual15(arr_4))
console.log(lessOrEqual15([20, 15, 13, 80, 6]))
console.log(lessOrEqual15([20, 80, 60]))



//دالة تقوم باستقبال مصفوفة تتكون من أرقام وترجع مصفوفة جديدة تتكون من كل عنصر مضروب بنفسه (تربيع)
console.log('######### Day 1 Exercise 5')

let arr_1 = [5, 7, 9];
let arr_3 = [13, 18, 25, 5]
let arr_4 = [11, 15, 19]

function square_2(arr) {
  return arr.map((elem) => {
    return elem * elem;
  })
}

console.log(square_2(arr_1))
console.log(square_2(arr_3))
console.log(square_2(arr_4))



