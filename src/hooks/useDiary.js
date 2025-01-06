import React, { useContext, useEffect, useState } from 'react'
import { DiaryStateContext } from '../App'
import {useNavigate} from 'react-router-dom'

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diary, setDiary]=useState()
  const navigate = useNavigate()

  useEffect(()=>{
    const matchDiary = data.find((item)=>String(item.id)===String(id))
    if(matchDiary){
      setDiary(matchDiary)
    }else{
      alert("일기가 존재하지 않습니다");
      navigate("/", {replace:true})
    }
  },[id,data])

  return diary;
}

export default useDiary

// 🛑리액트 훅은 컴포넌트를 위해 제공되는 기능
// 일반 함수에서 호출하면 오류가 발생되어
// 커스텀 훅을 만들어서 사용한다 512