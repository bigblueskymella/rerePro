import React from 'react'
import DiaryItem from './DiaryItem'
import {useNavigate} from 'react-router-dom'
import './HealthList.css'
import Button from './Button'

const HealthList = ({data}) => {
  const navigate = useNavigate()
  // 🏀data가 배열인지 확인하고, 그렇지 않으면 빈 배열로 대체
  if (!Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
    <h2>운동 일기 보여주기</h2>

      <div className='list_wrapper'>
        {data.map((diary)=>(
          <DiaryItem key={diary.id} {...diary}/>
        ))}
      </div>

      <Button text={"새 일기 쓰기"} onClick={()=>{navigate("/new")}}/>
    </div>
  )
}

export default HealthList


{/* HealthList
      {data}
      <DiaryItem/> */}