import { useState } from 'react';

const MemoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // 빈 내용 입력 방지
    onInsert(value);
    setValue(''); // 입력창 초기화
  };

  return (
    <form className="memo-insert" onSubmit={onSubmit}>
      <input
        placeholder="메모를 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default MemoInsert;