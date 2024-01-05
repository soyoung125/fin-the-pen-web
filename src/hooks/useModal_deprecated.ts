import { useState } from "react";

const useModal_deprecated = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return { modalOpen, openModal, closeModal };
};
export default useModal_deprecated;
