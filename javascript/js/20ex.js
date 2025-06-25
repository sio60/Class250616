const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']
/*
위의 2개 배열을 객체 배열 1개로 변경
{time:'09:00}

*/
const schedule=[{time:'09:00',todo:'수업'},{time:'11:00',todo:'과제'},{time:'12:30',todo:'점심식사'},{time:'14:00',todo:'주간회의'},{time:'16:45',todo:'자료조사'}]
function printRow(item){
    const tr = document.createElement('tr')
    for(let key in item){
        const td = document.createElement('td')
        td.textContent=item[key]
        tr.appendChild(td)
    }
    return tr
}
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
})