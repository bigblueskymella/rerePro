import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Viewer from "../component/Viewer";
import { emotionList } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id); //커스텀훅(id에 해당하는 일기 불러오기)
  const navigate = useNavigate();
  // console.log(params) 436p
  // console.log("다이어리", data);

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    // 🛑뷰어없이
    const emotionItem = emotionList.find((item) => item.id === Number(emotionId));
    console.log("아이템",emotionItem)

    return (
      <div>
        <div className="header_wrapper">
          <button onClick={() => navigate(-1)}> ◀ 뒤로 가기 </button>
          <h3>{id}번째 일기</h3>
          <button onClick={goEdit}>수정하기</button>
        </div>
        <div>Diary 페이지입니다.</div>
    
        {/* <Viewer content={content} emotionId={emotionId}/> 🛑뷰어없이*/}
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
    );
  }
};
export default Diary;
