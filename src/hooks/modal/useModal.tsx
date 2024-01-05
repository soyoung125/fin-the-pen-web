import { useOverlay } from "@hooks/use-overlay/useOverlay.tsx";
import { ReactNode } from "react";
import Modal from "@hooks/modal/Modal.tsx";

export const useModal = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const openModal = ({
    isBackdropClickable,
    modalElement,
  }: {
    isBackdropClickable?: boolean;
    modalElement: ReactNode;
  }) => {
    openOverlay(
      <Modal onClickClose={isBackdropClickable ? closeOverlay : () => {}}>
        {modalElement}
      </Modal>
    );
  };

  return { openModal, closeModal: closeOverlay };
};
