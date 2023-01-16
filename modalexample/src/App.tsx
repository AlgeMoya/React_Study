// https://phrygia.github.io/react/2021-09-21-react-modal/

import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  // useState를 사용하여 open 상태를 변경한다. (open일 때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
      </Modal>
    </div>
  ); // 저어기 "팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!" 요놈이 children임.
}

export default App;
