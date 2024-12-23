import React from "react";
import "./Viewer.css";
import { emotionList } from "../util";

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((item) => item.id === emotionId);
  console.log(emotionItem);

  return (
    <div className="Viewer">
      <section className="img_wrapper">
        <h2>오늘의 운동</h2>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotionId})`,
          ].join(" ")}
        >
          <img src={emotionItem.img} />
          <div>{emotionItem.name}</div>
        </div>
      </section>
      <section className="content_wrapper">
        <h2>오늘의 운동 일기</h2>
        <div>{content}</div>
      </section>
    </div>
  );
};

export default Viewer;
