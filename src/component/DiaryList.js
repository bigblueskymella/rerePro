import React, { useState } from 'react'
import './DiaryList.css'
import {useNavigate} from 'react-router-dom'
import DiaryItem from './DiaryItem'

const DiaryList = ({data}) => {
  const navigate = useNavigate()
  return (
    <div className='DiaryList'>
      <h2>운동 일기 보여주기</h2>
      
      <div className='list_wrapper'>
        {data.map((diary)=>(
          <DiaryItem key={diary.id} {...diary}/>
        ))}
      </div>

      <button onClick={()=>{navigate("/new")}}>새 일기쓰기</button>
    </div>
  )
}

export default DiaryList