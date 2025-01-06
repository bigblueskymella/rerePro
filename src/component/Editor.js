import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Editor.css";
import { emotionList } from "../util";
import HealthItem from "./HealthItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: new Date().toLocaleDateString(),
    emotionId: 4,
    content: "",
  });
  const handleChangeDate = (e) => {
    //console.log(e.target.value) //🎄
    //setState(e.target.value) //컴포넌트 state에
    setState({
      ...state, //유지(스프레드 연산자)
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state, //유지(스프레드 연산자)
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };
  //🟡기본 모양 useEffect(()=>{},[])
  //🟡[]안의 값이 바뀔 때마다 실행된다
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: new Date(parseInt(initData.date)),
      });
    }
  }, [initData]);

  const handleChangeHealth=(emotionId)=>{
    setState({
      ...state,
      emotionId,
    })
  }

  return (
    <div className="Editor">
      <h4>날짜</h4>
      <input type="date" value={state.date} onChange={handleChangeDate}/>
      <h4>이미지</h4>
      <div className="list_wrapper">
        {/*🟡기본 {map(()=>())} 🟡*/}
        {emotionList.map((item) => (
          <HealthItem
            key={item.id}
            {...item}
            src={item.img}
            onClick={handleChangeHealth}
            isSelected={state.emotionId === item.id}
          />
        ))}
      </div>
      <h4>일기</h4>
      <div className="input_wrapper">
        <textarea
          placeholder="오늘은 어땠나요?"
          value={state.content}
          onChange={handleChangeContent}
        />
      </div>
      <h4>완료버튼</h4>
      <div>
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
