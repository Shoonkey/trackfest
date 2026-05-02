import { type Ref } from "preact";

// import Button from "../Button";
import { Dialog, Header, Title } from "./style";
import { forwardRef, ReactNode } from "preact/compat";
import { XIcon } from "@phosphor-icons/react";

interface ModalProps {
  id: string;
  title: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

function Modal(
  { id, title, children, className, onClose }: ModalProps,
  ref: Ref<HTMLDialogElement>,
) {
  return (
    <Dialog id={id} ref={ref} className={className} onClose={onClose}>
      <Header>
        <Title>{title}</Title>
        <button className="close-btn" command="close" commandfor={id} title="Close">
          <XIcon />
        </button>
      </Header>
      {children}
    </Dialog>
  );
}

export default forwardRef(Modal);
