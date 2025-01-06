import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useDiary from '../hooks/useDiary'
import Header from '../component/Header'
import {emotionList} from "../util"
import HealthList from '../component/HealthList'
//🟡 동적 경로 설정 URL파라미터 값 불러오기

const Diary = () => {
  const {id} = useParams()
  const data = useDiary(id)
  console.log(data)
  const navigate = useNavigate()
  const goBack=()=>{navigate(-1)}
  const goEdit=()=>{navigate(`/edit/${id}`)}
  
  if(!data){
    return <div>일기를 불러오고 있습니다...</div>
  }else{
    const {date, emotionId, content} = data; //🏀
    const HealthItem = emotionList.find((item)=>item.id===emotionId)
    console.log("아이템", HealthItem)
  return (
    <div>
      <Header title={date +"기록"}
        leftChild={<button onClick={goBack}>뒤로가기</button>}
        rightChild={<button onClick={goEdit}>수정하기</button>}
      />
      <div>{id}번째 일기 Diary</div>
      <div>Diary 페이지 입니다</div>
      <div>{content}</div>
      <div>{emotionId}</div>
    </div>
  )
}
}
export default Diary
//517