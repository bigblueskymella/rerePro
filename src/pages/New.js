import React, { useContext } from 'react'
import Header from '../component/Header'
import {useNavigate} from 'react-router-dom'
import Editor from '../component/Editor'
import { DiaryDispatchContext } from '../App'

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext)
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    const {date, content, emotionId} = data;
    onCreate(date, content, emotionId);
    navigate("/", {replace:true})
  }

  return (
    <div>
      <Header title={"새 일기 쓰기"}
      leftChild={<button onClick={()=>navigate(-1)}>뒤로가기</button>}/>
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New