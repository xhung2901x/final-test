// Đề bài
// Viết một function có tên numberOneTriangle(). 
// Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác

function numberOneTriangle(n){
    let star = ""
    for (i = 0; i<=n-1; i++){
        star += "*"
        console.log(star)
    }
}

numberOneTriangle(5)