const members = [{ name: "김유나", age: "24", address: "서울", height: "157.5" }, 
    { name: "김경민", age: "19", address: "집", height: "170" }, 
    { name: "김준우", age: "29", address: "가산", height: "163" }]


function printRow(item){          //하나씩 가져운 요소를 : item 변수에 저장 -> tr 요소를 만들기
    const tr = document.createElement('tr')
    for(let key in item){  //객체 모든 속성을 순회
        const td = document.createElement('td')
        td.textContent=item[key]
        tr.appendChild(td)
    }
    console.log(tr)
    return tr //위에 만들어진 tr을 전달
}
//DOMContentLoaded 이벤트 : dom 자료구조를 만들어서 메모리에 저장한 후에 발생
//                              ㄴ 화면의 구성 요소들이 만들어진 후에 설정
document.addEventListener('DOMContentLoaded', function(){

//html의 최상위 요소 가져오기
const root=document.getElementById('root')
//table 요소를 만들어서 첫번째 줄에 제목을 넣어 table에 추가
const table=document.createElement('table')
table.innerHTML=`<tr>
            <th>이름</th>
            <th>나이</th>
            <th>거주지</th>
            <th>키</th>
                </tr>`
//table을 root 요소에 추가하기
 root.appendChild(table)
 //배열에 저장된 객체 요소 각각에 대해 반복하는 메소드
members.forEach(item => {
    //item 객체로 tr요소 만드는 함수 호출
    const trResult=printRow(item)
    table.appendChild(trResult)
})})