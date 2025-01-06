import React, { useContext } from 'react';
import Header from '../component/Header'
import Editor from '../component/Editor'
import { useNavigate } from 'react-router-dom'
import { DiaryDispatchContext } from '../App'
import Button from '../component/Button';

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
      leftChild={<Button text={"<뒤로가기"} onClick={()=>navigate(-1)}/>}/>
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New
