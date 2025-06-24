//4개의 연산을 테스트 console에 결과값 출력 값은 789 125
//전역 변수 : 파일 전체에서 사용 이름이 같은 지역 변수 result와 다른 메모리 공간
const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click',function(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let op = document.getElementById('op').value
    console.log(typeof (num1), typeof (num2)) //typeop: string
    let result = calc(Number(num1), Number(num2), op) //실매개변수(인자)
    //funtion calc
    document.querySelector('span#result').textContent=result
})
function calc(num1, num2, op){ //형식 매개변수
    switch (op) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.error("잘못된 값입니다")
            break
    }
    return result
}