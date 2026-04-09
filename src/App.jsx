import { useState } from "react";

function App() {
  const[text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    alert(text);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleClick}>확인</button>
    </div>
  );
}
export default App;