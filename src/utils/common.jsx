import { createRoot } from "react-dom/client";
import Alert from "../components/Alert";
import Toast from "../components/Toast";


function cmmnAlert(message) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  const handleClose = () => {
    root.unmount();
    container.remove();
  };

  root.render(<Alert message={message} onClose={handleClose} />);
}

let toastRoot = null;
let toastContainer = null;

function cmmnToast(message, duration = 3000) {
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    document.body.appendChild(toastContainer);
    toastRoot = createRoot(toastContainer);
  }

  toastRoot.render(<Toast message={message} />);

  setTimeout(() => {
    toastRoot.unmount();
    toastContainer.remove();
    toastRoot = null;
    toastContainer = null;
  }, duration);
}

export default {
  cmmnAlert,
  cmmnToast,
};
