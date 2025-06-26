//배열 메소드 연습(2)
// 1.splice - 배열에 새로운 요소를 추가/삭제
let fruits = ['banana', 'mango','apple','orange']

fruits.splice(2,0,'lemon')
//2: 새로운 데이터 레몬이 들어가는 위치 (인덱스)
//0: 삭제할 데이터 갯수
//그 뒤에 값들: 추가 데이터
console.log(fruits.toString()) 
fruits = ['banana', 'mango','apple','orange']
fruits.splice(1,1) //리턴이 없다, 또는 사용 안한다
//1: 추가될 위치
//1:삭제할 데이터 갯수
//추가할 데이터 없음
console.log(fruits.toString()) //fruits 자체가 바뀜
//banana,orange,apple

//2. slice(): 배열의 특정 부분을 자르기하여 새로운 배열을 생성
fruits = ['banana', 'mango', 'orange', 'apple']
let myfruits = fruits.slice(1, 3) //메소드 결과 리턴이 있음, 리턴이 중요함
//1: 시작위치 인덱스
//3: 마지막 위치 인덱스(포함x)
//자르기한 배열의 갯수 = 3-1 =2개
console.log(fruits.toString()) //fruits는 변화가 없음
console.log(myfruits.toString()) //myfruits는 새로운 배열

//slice()의 입력값이 1개인 경우 - 마지막 인덱스 생략(끝까지)
myfruits = fruits.slice(1)
console.log('🧨',myfruits.toString())
//slice()의 입력값이 음수인 경우 - 맨뒤 -1부터 접근
myfruits = fruits.slice(-3,-1)
console.log('🧨',myfruits.toString())

myfruits = fruits.slice(-1)
console.log('🧨',myfruits.toString()) //apple

//3. indexOf()
fruits = ['apple', 'orange', 'apple', 'mango']
let position = fruits.indexOf('apple')
console.log('apple의 첫번째 위치:', position)
//4. LastIndexOf()
position = fruits.lastIndexOf('apple')
console.log('apple의 마지막 위치:', position)
position = fruits.indexOf('lemon') //없는 값
console.log('lemon의 첫번째 위치:', position)
//5. includes()
let result = fruits.includes('mango')
console.log('mango 있음?', result)
result = fruits.includes('lemon')
console.log('lemon 있음?', result)
//6. find(): 인자가 콜백함수 - 참 또는 거짓을 리턴
//           for each처럼 배열 요소를 하나씩 가져와 함수에 전달 합니다
//                           ㄴ 값, 인덱스, 원본배열
const number = [4, 9, 16, 35, 37]
let first = number.find(myFunction) //함수에 대입한 조건식이 참인 첫번째 값
function myFunction(value, index, array){ //값, 인덱스, 원본배열
    return value > 18
}
console.log('18보다 큰 첫번째 값: ',first)
//7. findIndex()
first = number.findIndex(myFunction)
console.log('18보다 큰 첫번째 값의 인덱스:', first)
//8. findLast()
let last = number.findLast(myFunction)
console.log('18보다 큰 마지막 값의 값:', last)
//9. findLastIndex()
last = number.findLastIndex(myFunction)
console.log('18보다 큰 마지막 값의 인덱스:', last)
//화살표 함수로 변환
first = number.find(value => value > 18 || value < 34)
console.log('/18보다 큰 첫번째 값:', first)
