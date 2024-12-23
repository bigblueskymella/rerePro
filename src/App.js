import React, { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: "mock1",
    date: new Date().toLocaleDateString(),
    content: "샘플1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().toLocaleDateString(),
    content: "샘플2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().toLocaleDateString(),
    content: "샘플3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      // 🔴{...item, ...action.data}
      return state.map((item) => {
        // String(item.id) === String(action.data.id) ? {...item, ...action.data} : item
        if (String(item.id) === String(action.data.id)) {
          return { ...item, ...action.data };
        } else {
          return item;
        }
      })
    }
    case "DELETE": {
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
    }
    default: {
      return state;
    }
  }
}

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).toLocaleDateString(),
        content,
        emotionId,
      },
      // data: mockData,
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId, //🔴id:targetId 
        date: new Date(date).toLocaleDateString(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중...</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div> */}
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
};

export default App;
