import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import useDiary from '../hooks/useDiary';
import Header from '../component/Header';
import Viewer from '../component/Viewer';

const Diary = () => {
  const {id} = useParams();
  const data = useDiary(id)
  // const params = useParams();
  // console.log(params)
  const navigate = useNavigate()
  const goBack=()=>{navigate(-1)}
  const goEdit=()=>{navigate(`/edit/${id}`)}

  if(!data){
    return <div>일기를 불러오고 있습니다...</div>
  }else{
    const {date, emotionId, content}=data;
    return (
    <div>
      <Header title={date +"기록"}
        leftChild={<button onClick={goBack}>뒤로가기</button>}
        rightChild={<button onClick={goEdit}>수정하기</button>}
      />
      <div>{id}번째 일기 Diary</div>
      <div>Diary 페이지 입니다</div>
      <Viewer content={content} emotionId={emotionId}/>
    </div>
  )
  }
  
}

export default Diary