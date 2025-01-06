import React, {useContext} from 'react'
import Editor from '../component/Editor'
import Header from '../component/Header'
import Diary from './Diary'
import HealthList from '../component/HealthList'
import { DiaryStateContext } from '../App'

const Home = () => { //🏀이 부분 추가하기
  const data = useContext(DiaryStateContext)// 🔴
  return (
    <div>
    <Header title={"오늘의 운동 일기"}
        leftChild={"왼쪽"}
        rightChild={"오른쪽"}
      />
    <HealthList data={data}/> {/* data를 HealthList에 전달 */}
      {/* <Editor 
        initData={{
          date:new Date().toLocaleDateString(),
          emotionId:4,
          content:"이전에 작성했던 내용",
        }}
        onSubmit={()=>{
        alert("작성 완료 버튼 클릭했음")
      }}/> */}
    </div>
  )
}

export default Home
