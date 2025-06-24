

add()
add()
add()

let result = sub() 
console.log('뺄셈: ',result)
console.log('뺄셈: ',sub())

muliply(23,57) 
muliply(53,32)

result = div (343,6521)
console.log('나누기', result)
console.log('나눈 결과 소수점', result.toFixed(3)) 

//함수 정의 => 함수 호이스팅(끌어올리기) 불가능
const div = (num1,num2)=>{
    return num1/num2
}
const add =()=>{
    console.log(100+1000)
}
const sub =()=>{ 
    return 100-1000; 
}

const muliply=(num1, num2)=>{
    console.log('num1*num2: ', num1*num2)
}
