// Đề bài:
// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). 
// Hiển thị tổng các số nguyên tố trong khoảng a và b. 
// Tạo giao diện nhập 2 số và in kết quả trên giao diện web

let inputMin = +prompt("Nhập vào số thứ nhất: ")
let inputMax = +prompt("Nhập vào số thứ hai: ")
let arr = []

for (i = inputMin; i <= inputMax; i++){
    if (i >2 && i %2!=0){
        arr.push(i)
    }
}

let sum = 0
for(i = 0; i<= arr.length-1; i++){
    sum += arr[i]
}

console.log(sum)
