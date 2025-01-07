import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

// 💛props
//initData : 기존에 작성한 일기를 페이지에 보여줄 목적으로 전달되는 데이터
//onSubmit : 작성 완료 버튼을 누르면 호출할 이벤트 핸들러
const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: new Date(),
    emotionId: 3,
    content: "",
  });
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state); //state값을 전달 🟠New페이지, Edit
  };
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    })
  }
  useEffect(()=>{
    if(initData){
      setState({
        ...initData,
        // date:new Date(parseInt(initData.date))
        date:new Date().toLocaleDateString()
      })
    }
  },[initData])

  return (
    <div>
      <h2>오늘의 날짜</h2>
      <input type="date" value={state.date} onChange={handleChangeDate} />
      <h2>오늘의 운동</h2>
      <div className="emotion_list_wrapper">
        {emotionList.map((item) => (
          <EmotionItem
            key={item.id}
            {...item}
            onClick={handleChangeEmotion}
            isSelected={state.emotionId === item.id}
          />
        ))}
      </div>
      <h2>오늘의 일기</h2>
      <textarea
        placeholder="오늘은 어땠나요?"
        value={state.content}
        onChange={handleChangeContent}
      />
      <h2>작성 완료 버튼</h2>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        취소하기
      </button>
      <button onClick={handleSubmit}>작성 완료</button>
    </div>
  );
};

export default Editor;
