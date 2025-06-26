const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']
/*
위의 2개 배열을 객체 배열 1개로 변경
{time:'09:00}
//비어있는 배열에 새로운 요소를 추가 : push() 메소드 활용

*/
const schedule =[]
for (let i=0;i<time.length;i++){
    let newItem = {time: time[i], todo: todo[i]} //속성이름: 값
    schedule.push(newItem)
}
// const schedule=[{time:'09:00',todo:'수업'},{time:'11:00',todo:'과제'},{time:'12:30',todo:'점심식사'},{time:'14:00',todo:'주간회의'},{time:'16:45',todo:'자료조사'}]
function printRow(item){
    const tr = document.createElement('tr')
    for(let key in item){
        const td = document.createElement('td')
        td.textContent=item[key]
        tr.appendChild(td)
    }
    return tr
}

//DOMContentLoaded 이벤트 사용할 때에는 모든 이벤트 리스너를 DOMContentLoaded 이벤트 안에 작성 
document.addEventListener('DOMContentLoaded',function(){
    const root=document.getElementById('root')
    const table=document.createElement('table')
    table.innerHTML=`<tr>
    <th>시간</th>
    <th>할 일</th>
    </tr>
    `
    root.appendChild(table)
    schedule.forEach(item=>{
        const trResult=printRow(item)
        table.appendChild(trResult)
    })
    
    const newBTN = document.getElementById('newBTN')
    newBTN.addEventListener('click',()=> {  
    //입력값 가져와서 newitem 객체 만들기
    const newtime = document.getElementById('newtime').value
    const newtodo = document.getElementById('newtodo').value
    const newItem = {time: newtime,todo:newtodo} //새로운 일정 객체 생성
    
    //printrow 실행하여 tr 전달 받기 - 새로운 일정 tr (행) 만들기
    const newtr = printRow(newItem)
    schedule.push(newItem) //스케줄 배열에 새로운 일정 추가
    // 스케줄 배열을 time 속성 순서로 정렬(난이도 최상)
    schedule.sort((a,b) => a.time.localeCompare(b.time))
    // ㄴ a,b는 2개의 객체 time 속성비교
    //tr을 table에 추가 -> 정렬 된 스케줄 배열로 table 다시 만들기
    table.innerHTML = `<tr>
    <th>시간</th>
    <th>할 일</th>
    </tr>
    `
    schedule.forEach(
        (Item)=>{
            const resultr=printRow(Item)
            table.appendChild(resultr)
        }
    )
    table.appendChild(newtr) //mission

    console.log('새 스케줄 추가 후:', schedule)
}) // newBtn.addEvenLIstener의 끝
}) //document.addEventListener의 끝