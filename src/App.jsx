import { useState, useRef } from 'react'; 
import MemoInsert from './MemoInsert'; 
import MemoList from './MemoList'; 
import './index.css';

const App = () => { 
  
  const [memos, setMemos] = useState([]); 
  const nextId = useRef(1);

  const handleInsert = (text) => {
    const memo = {
      id: nextId.current,
      text,
    };
    setMemos([memo, ...memos]); 
    nextId.current += 1;
  };

  const handleRemove = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">MemoList</h1>
      <MemoInsert onInsert={handleInsert} />
      <MemoList memos={memos} onRemove={handleRemove} />
    </div>
  );
};

export default App;