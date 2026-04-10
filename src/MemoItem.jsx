const MemoItem = ({ memo, onRemove }) => {
  const { id, text } = memo;

  return (
    <div className="memo-item-box">
      <div className="text">{text}</div>
      <button className="remove-btn" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
};

export default MemoItem;