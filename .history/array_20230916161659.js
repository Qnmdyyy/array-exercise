// // 1. Chọn ra những số là số chẵn từ mảng cho trước
// // 2. Chọn ra những số là số Lẻ từ mảng cho trước
// // 3. Chọn ra những số là vừa chia hết cho 2 và chia hết cho 3
// // 4. Chọn ra những số là vừa chia hết cho 2 và chia hết cho 3 nhưng không chia hết cho 6

const numbers = [-5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// // 1.
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i]);
//   }
// }

// 2.
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     console.log(numbers[i]);
//   }
// }

// // 3.
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0) {
//     console.log(numbers[i]);
//   }
// }

// // 4.
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0 && numbers[i] % 3 == 0 && numbers[i] % 6 == 1) {
//     console.log(numbers[i]);
//   }
// }

// // 5. Chọn ra những số nguyên tố
// // 6. Liệt kê các số không âm
// // 7. tính trung bình của array
// // 8. tính tổng của array
// // 9. tính tổng các số lẻ của array
// // 10. tính tổng các sô không âm ở vị trí chẵn
// // 11. tìm số lớn nhất trong mảng
// // 12. tìm số nhỏ nhất trong mảng
// // 13. tìm số lớn thứ nhì trong mảng
// // 14. sao chép mảng thành mảng mới ( 3 cách k dùng reduce, 2 cách dùng reduce)

// // 5.
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] %  != 0) {
//     console.log(numbers[i]);
//   }
// }

// // 6.
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(numbers[i]);
//   }
// }

// //
// let sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// // 8.
// console.log(sum);

// // 7.
// let avr = sum / numbers.length;
// console.log(avr);

// 9.
// let sumOdd = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 != 0) {
//     sumOdd += numbers[i];
//   }
// }
// console.log(sumOdd);

// 10.
// let sum = 0;
// for (let i = 2; i < numbers.length; i += 2) {
//   if (numbers[i] >= 0) {
//     sum += numbers[i];
//   }
// }
// console.log(sum);

// 11.
// let max = numbers[0];
// // console.log(max);/
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// 12.
// let min = numbers[0];
// // console.log(max);/
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(min);

// 13.

// 14.
const students = ["a", "b", "c", "d"];

// C1:
const students1 = students.slice();
console.log(students1);

// C2:
const students2 = [...students];
console.log(students2);

// C3:
let students3 = [];
for (let i = 0; i < students.length; i++) {
  students3.push(students[i]);
}
console.log(students3);

// C4:
let students4 = students.reduce(function (value) {
  return students;
}, 0);
console.log(students4);

// 15. cho 2 mảng khác nhau có thể khác length tìm các giá trị giống nhau ở 2 mảng
// Input:
// [1, 2, 3, 4 ,5]
// [2, 7, 8, 10, 1, 3]
// Output:
// [1, 2, 3] (ko cần đúng thứ tự)
