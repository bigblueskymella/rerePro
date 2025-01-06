import React from "react";
import "./HealthItem.css";

const HealthItem = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    // <div className='HealthItem' onClick={handleOnClick}>
    // 🟡join() 메서드
    // let arr = ["안녕", "나", "누구"]
    // console.log(arr.join())
    // console.log(arr.join("-"))
    <div
      className={[
        "HealthItem",
        isSelected ? `HealthItem_on_${id}` : `HealthItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img src={img} />
      <span>{name}</span>
    </div>
  );
};

export default HealthItem;
