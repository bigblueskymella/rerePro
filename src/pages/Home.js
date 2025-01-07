import React, {useContext} from 'react'
import Editor from '../component/Editor'
import Header from '../component/Header'
import Diary from './Diary'
import DiaryList from '../component/DiaryList'
import { DiaryStateContext } from '../App'

const Home = () => {
  const data = useContext(DiaryStateContext)// 🔴

  return (
    <div>
      <Header title={new Date().toLocaleString()}
        leftChild={"왼쪽"}
        rightChild={"오른쪽"}
      />
      <DiaryList data={data}/>
      {/* <Editor 
        initData={{
          date:new Date().getTime(),
          emotionId:5,
          content:"이전에 작성한 일기"
        }}
        onSubmit={()=>{
        alert("작성 완료")
      }}/> */}
    </div>
  )
}

export default Home