import { createPortal } from "react-dom";

import "./Modal.scss";

const Modal = (props) => {
    const { isOpen, onClose, children } = props;

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className="modal" onClick={onClose ? onClose : null}>
            <div className="modal__content">{children}</div>
        </div>,
        document.getElementById("modal-root")
    );
};

export { Modal };
