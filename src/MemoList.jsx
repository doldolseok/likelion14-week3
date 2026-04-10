import MemoItem from './MemoItem';

const MemoList = ({ memos, onRemove }) => {
  return (
    <div className="memo-list">
      {memos.map((memo) => (
        <MemoItem memo={memo} key={memo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default MemoList;