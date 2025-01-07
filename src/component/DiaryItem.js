import React from 'react'
import './DiaryItem.css'
import {useNavigate} from 'react-router-dom'
import { getEmotionImgById } from '../util'

// DiaryList로부터 Props로 일기 객체를 받는다
// 일기 객체를 구조 분해 할당한다
const DiaryItem = ({id, emotionId, content, date}) => {
  const navigate = useNavigate()
  const goDetail = () => {navigate(`/diary/${id}`)}
  return (
    <div className='DiaryItem'>
      <div className={[`img_section_${emotionId}`].join(" ")} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)}/>
      </div>

      <div className='info_section' onClick={goDetail}>
        {/* <div>{new Date(parseInt(date)).toLocaleDateString()}</div> */}
        <div>{date}</div>
        <div className='content_wrapper'>{content? content.slice(0,58):'내용 없음'}</div>
      </div>   

      <div>
        <button onClick={()=>navigate(`/edit/${id}`)}>수정하기</button>
      </div>   
    </div>
  )
}

export default DiaryItem