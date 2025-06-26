//문자열은 문자의 모임
let text = 'ABCDEFG HIJ KLMN OPQRSTU  VWXYZ'
console.log('text 문자열의 길이:', text.length)
let result = text.at(5) //F 문자열의 위치 인덱스는 0부터
console.log('text.at(5)',result)
console.log('text[5]:',text[5])
text[5]='*' //값 설정하는 것은 안됨
console.log(text)
//slice() 메소드
text = 'apple, banana, kiwi'
let part = text.slice(7,17)
console.log(part)
part = text.slice(-12) //마지막값 생략 (끝까지) //-는 뒤에서부터
console.log(part)
part = text.slice(-12,-6)
console.log(part)
//substring(): slice()와 동일, 음수값은 사용 못함

//tolowercase() - 소문자, touppercase() - 대문자 변환하여 리턴
console.log('소문자 변환:', text.toLowerCase())
console.log('대문자 변환:', text.toUpperCase())

//concat() : 문자열 합치기
let text1 = 'hello'
let text2 = 'world'
let text3 = text1.concat('🧨', text2)
console.log('concat():', text3)

text1 = '      hello world     '
console.log('trim():',text1.trim(),text1.trim().length)
console.log('trimStart():',text1.trimStart(),text1.trimStart().length)
console.log('trimEnd():',text1.trimEnd(),text1.trimEnd().length)

text = '5'
let padded = text.padEnd(4,'0')
console.log("padEnd(4,'0'):",padded)

let num = 5
padded = num.toString().padStart(4,'0') //number 타입은 자동으로 string 변환
console.log("padStart(4,'0')", padded)

//배열과 중복 된 메소드만 해보기
//indexof()
//lastindexof()
//includes()