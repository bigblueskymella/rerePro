import emotion01 from "./img/emotion01.png";
import emotion02 from "./img/emotion02.png";
import emotion03 from "./img/emotion03.png";
import emotion04 from "./img/emotion04.png";
import emotion05 from "./img/emotion05.png";
import emotion06 from "./img/emotion06.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion01;
    case "2":
      return emotion02;
    case "3":
      return emotion03;
    case "4":
      return emotion04;
    case "5":
      return emotion05;
    case "6":
      return emotion06;
    default:
      return null;
  }
};

export const emotionList = [
  {
    id:1,
    name:"줄넘기",
    img:getEmotionImgById(1),
  },
  {
    id:2,
    name:"농구",
    img:getEmotionImgById(2),
  },
  {
    id:3,
    name:"훌라후프",
    img:getEmotionImgById(3),
  },
  {
    id:4,
    name:"베드민턴",
    img:getEmotionImgById(4),
  },
  {
    id:5,
    name:"아령",
    img:getEmotionImgById(5),
  },
  {
    id:6,
    name:"걷기",
    img:getEmotionImgById(6),
  },
]
