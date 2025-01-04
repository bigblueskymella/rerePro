import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import useDiary from '../hooks/useDiary';
import Header from '../component/Header';
import Viewer from '../component/Viewer';
import { emotionList } from '../util';

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
    // 🛑뷰어없이 아래두줄
    const emotionItem = emotionList.find((item) => item.id === Number(emotionId));
    console.log("아이템",emotionItem)
    return (
    <div>
      <Header title={date +"기록"}
        leftChild={<button onClick={goBack}>뒤로가기</button>}
        rightChild={<button onClick={goEdit}>수정하기</button>}
      />
      <div>{id}번째 일기 Diary</div>
      <div>Diary 페이지 입니다</div>
      {/* <Viewer content={content} emotionId={emotionId}/> */}
      <div>
          <h2>오늘의 운동 보기</h2>
          <div>
            <img src={emotionItem.img} />
            <div>{emotionItem.name}</div>
          </div>

          <h2>오늘의 일기 내용보기</h2>
          <div>
            <p>{content}</p>
          </div>
        </div>
    </div>
  )
  }
  
}

export default Diary
