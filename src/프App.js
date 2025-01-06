import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Button from "./component/Button";
import emotion01 from "./img/emotion01.png";

function App() {
  return (
    <div className="App">
      <div className="link-wrapper">
        <Link to={"/"} className="li-1">
          <img src={emotion01} />
          Home
        </Link>
        <Link to={"/new"} className="li-1">
          New
        </Link>
        <Link to={"/diary"} className="li-1">
          Diary
        </Link>
        <Link to={"/edit"} className="li-1">
          Edit
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

      <Button
        text={"버튼 텍스트"}
        onClick={() => {
          alert("hi");
        }}
      />
    </div>
  );
}

export default App;
