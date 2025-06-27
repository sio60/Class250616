//html 없이 node.js로 실행 ㄱㅂㅈㄱ
//new Date() = Date라는 class를 이용해서 새로운(new) 날짜 데이터를 만듭니다
//             기본값은 현재 날짜와 시간
// 백틱과 ${}기호 사용하는 형식을 문자열 템플릿이라고 부름
const today = new Date()
console.log(`현재 날짜와 시간: ${today}`)
//locale : 현지(국가와 언어)
console.log(`현재 날짜와 시간: ${today.toLocaleString()}`)
console.log(`현재 날짜와 시간: ${today.toLocaleDateString()}`)
console.log(`현재 날짜와 시간: ${today.toLocaleTimeString()}`)
//표준시()
console.log(`현재 날짜와 시간(표준시): ${today.toISOString()}`)
console.log(`현재 날짜와 시간(표준시): ${today.toUTCString()}`)
//
console.log(today.toString()) //모든 객체에 기본 메소드 toString()
console.log(today.toDateString())
console.log(today.toTimeString())

//날짜는 기본적으로 정수값 형식임
//       ㄴ 1970년 1월 1일 0시 기준으로 얼마큼 지났는지를 MS 단위로 저장
console.log(`정수값 new Date() : ${today.getTime()}`) //1750985919885
let todayLong = 55 * 365 * 24 * 60 * 60 * 1000 //24년 12월 31일 오후 11:59:59초
console.log(`정수값 new Date() 대략적인 값 : ${todayLong}`)

//날짜 데이터에서 조작
console.log(`today에서 년도 추출:${today.getFullYear()}`)
console.log(`today에서 월 추출:${today.getMonth()}`) //월은 0~11
console.log(`today에서 일 추출:${today.getDate()}`)
console.log(`today에서 요일 추출:${today.getDay()}`) //일요일 0, 0~6

//특정 날짜
let date1 = new Date('2025-12-25')
let date2 = new Date('2025/12/25')
let date3 = new Date('2025.12.25')
console.log(`date1:${date1}`)
console.log(`date2:${date2}`)
console.log(`date3:${date3}`)
//특정 날짜와 시간
date1 = new Date(2025,11,25,11,30,0) //년, 월(0~11), 일, 시, 분, 초
console.log(`date1 날짜와 시간:${date1}`)
date2 = new Date('2025-06-27T18:30:00') //현지 시간 설정
console.log(`date2 날짜와 시간: ${date2}`)
date3 = new Date('2025-06-27T18:30:00z') //표준시 설정
console.log(`date2 날짜와 시간: ${date3}`)

//locale 정보 확인 => ko - KR (언어 - 국가)
//'en - US', 'ja-JP', 'fr-FR'
//지정된 locale 정보로 출력 형식이 달라짐
console.log(`참고 : locale 정보 ${navigator.language}`)
console.log(`참고 : 프랑스 시간 ${date2.toLocaleString('fr-FR')}`)
console.log(`참고 : 미국 시간 ${date2.toLocaleString('en-EN')}`)
//날짜를 이용한 계산
date1 = new Date()
date2 = new Date('2025-12-25')

let diff = date2 - date1
console.log(`날짜의 뺄셈: ${diff}`) //단위 : ms => 15631861134

let oneday = 24*60*60*1000
diff/=oneday    //diff = diff / oneday
console.log(`날짜의 뺄셈: ${diff}일`)
//소숫점 : 반올림, 내림 , 올림 -> Math.round(), Math.floor(), Math.ceil()
console.log(`반올림:${Math.ceil(diff)}일`)
//날짜 변경하기 : 년도, 월, 일 단위로 더하기 또는 빼기
let someday = new Date()
//예시) 오늘로부터 3년 후
someday.setFullYear(someday.getFullYear()+3)
console.log(someday.toString())
//예시) 오늘로부터 3달 후
someday = new Date()
someday.setMonth(someday.getMonth()+3)
console.log(someday.toString())
//예시) 오늘로부터 181일 후
someday = new Date()
someday.setDate(someday.getDate()+181)
console.log(someday.toString())
//input type='date' 입력요소는 형식이 'yyyy -MM-dd'
//값을 설정할 때에는 별도 코드 만들기
function dateInputFmt(vdate){
    const year = vdate.getFullYear()
    const month = (vdate.getMonth() +1).toString().padStart(2,'0')
    const datee = vdate.getDate().toString().padStart(2,'0')
    return [year, month, datee].join('-')
}
console.log(dateInputFmt(new Date()))
