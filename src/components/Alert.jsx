export default function Alert({ message, onClose }) {
  return (
    <div className="alert-backdrop">
    <div className="alert-box">
      <p className="alert-message">{message}</p>
      <div className="alert-actions">
        <button className="alert-btn" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  </div>
  );
}
