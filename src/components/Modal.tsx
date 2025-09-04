import type { ReactNode } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/35 flex justify-center items-center transition-all ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-sm shadow transition-all relative ${
          open ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-gray-300 cursor-pointer transition-colors"
        >
          <GrClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
