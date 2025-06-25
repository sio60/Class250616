//객체의 배열 = 배열의 요소는 객체
const members = [{ name: "김유나", age: "24", address: "서울", height: "157.5" }, 
    { name: "김경민", age: "19", address: "집", height: "170" }, 
    { name: "김준우", age: "29", address: "가산", height: "163" }]

console.log("배열 0번 요소", members[0])
console.log("배열 0번 요소 name", members[0].name)


console.log("배열 1번 요소", members[1])
console.log("배열 2번 요소", members[2])
//1) members 배열에 저장된객체의 name 속성 출력
for(let m of members){
    console.log(m['name'])
}

//2) 거주지 address 속성값이 '서울'인 name 속성값 출력
for(let i of members){
    if(i.address==="서울"){
        console.log("서울거주:", i.name)}
}

//3) 객체 배열에서 age가 20 이상인 name 속성값 출력
for(let n of members){
    if(n.age >= 20){
        console.log("성인임:", n.name)
    }
}

// 4) 모든 배열 요소의 모든 속성값 출력
for(let m of members){
    console.log('------------')
    console.log(m['name'])
    console.log(m['age'])
    console.log(m['address'])
    console.log(m['height'])
}
for(let m of members){
    console.log('~~~~~~~~~~~~')
    for(let key in m){ //객체 m의 모든 속성을 순서대로 가져와서 key에 저장
        console.log(m[key])
    }
}
//5) foreach 메소드 - 배열의 요소를 하나씩 가져다가 특정한 함수를 실행
//                    ㄴ 메소드의 인자(입력)은 함수
members.forEach(
    function(item){         
        console.log('///////////////////')     //하나씩 가져온 요소를 item 변수에 저장
        console.log(item.address)
    }
)

//위에 코드를 화살표 함수로도 변경 가능함
members.forEach(
    (item)=>{         
        console.log('=========')
        console.log(item.address)
    }
)
//메소드의 입력(인자)인 함수를 먼저 정의하고 함수 이름 사용
function print(item){         
    console.log('.................')
    console.log(item.address)}
members.forEach(item => print(item)) //많이 쓰이는 형식