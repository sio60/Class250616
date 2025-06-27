const REST_API_KEY='7ce89f3daf20e4d70272a67033a6b201'
const header = {
    method:'GET',
    headers:{ Authorization: `KakaoAK ${REST_API_KEY}`}
}
const query = '카리나'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=accuracy`
let result
fetch(url, header)
    .then(response=>{
        console.log('response 수신완료:',response.status)
        return response.json()
    })
    .then(data =>{
        result = data
    })
    .catch(error => console.error('fetch 실패:',error))
console.log('result',result)
