// n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
//  📥 Input: getLevel3(5)
//  📤 Output: [3, 9, 27, 81, 243]

// let n = 5;

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(3 ** i);
// }
// console.log(arr);

// Array3.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output: [9, 8, 5]

// let n = [4, 5, 7, 8, 6, 9];
// let newArr = [];

// for (let i = 0; i < n.length; i++) {
//   if (i % 2 === 1) {
//     newArr.push(n[i]);
//   }
// }

// console.log(newArr.reverse());

// Array4.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// 📥 Input: [10, 5, 3, 8, 1, 6, 9]
//  📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)
// function findIndexSum(arr) {
//   let min = 0;
//   let max = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[min]) {
//       min = i;
//     }
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }

//   return min + max;
// }

// const array = [10, 5, 3, 8, 1, 6, 9];
// const sum = findIndexSum(array);
// console.log(sum);

// Array5.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output:
//  Juft indekslilar: [4, 7, 6]
//  Toq indekslilar: [5, 8, 9]

// let n = [4, 5, 7, 8, 6, 9];
// let newArr1 = [];
// let newArr2 = [];

// for (let i = 0; i < n.length; i++) {
//   if (i % 2 === 1) {
//     newArr1.push(n[i]);
//   } else {
//     newArr2.push(n[i]);
//   }
// }

// console.log(newArr1);
// console.log(newArr2);

// Array10.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// 📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
//  📤 Output: [15, 9, 8, 5]

// let n = [4, 5, 7, 8, 6, 9, 10, 15];
// let arr = [];

// for (let i = 0; i < n.length; i++) {
//   if (i % 2 === 1) {
//     arr.push(n[i]);
//   }
// }
// console.log(arr);

// Array2.
// n natural soni va X, Y butun sonlari berilgan (n > 2).
// a[0] = X, a[1] = Y.
// Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
// 📥 Input: n = 6, X = 1, Y = 2
//  📤 Output: [1, 2, 3, 5, 8, 13]
// let n = 6;
// const arr = [1, 2];
// for (let i = 0; i < n - 2; i++) {
//   let sum = arr[i] + arr[i + 1];
//   arr.push(sum);
//   sum = sum + sum;
// }
// console.log(arr);
// Array8.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// 📥 Input: [7, 3, 9, 1, 8, 2, 4]
//  📤 Output:
//  Birinchi yarmi katta: [7, 9, 8]
//  Ikkinchi yarmi kichik: [3, 1, 2, 4]

// let n = [7, 3, 9, 1, 8, 2, 4];
// let arr1 = [];
// let arr2 = [];

// for (i = 0; i < n.length; i++) {
//   if (n.length > n[i]) {
//     arr1.push(n[i]);
//   } else {
//     arr2.push(n[i]);
//   }
// }
// console.log(arr1);
// console.log(arr2);

// Array9.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// 📥 Input: [1, 2, 3, 4]
//  📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]

let arr = [1, 2, 3, 4];
