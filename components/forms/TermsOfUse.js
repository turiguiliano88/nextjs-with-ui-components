import Button from "../Button";
import { Modal, ModalTitle, ModalAction, ModalContent } from "../Modal";

export default function TermsOfUse({ enabled, trigger }) {
  return (
    <Modal enabled={enabled}>
      <ModalTitle>Term of Use</ModalTitle>
      <ModalContent>
        <p>Please read this carefully</p>
      </ModalContent>
      <ModalAction>
        <div className="mr-2 inline">
          <Button size="small">Ok</Button>
        </div>
        <Button size="small" type="neutral" onClick={trigger}>
          Cancel
        </Button>
      </ModalAction>
    </Modal>
  );
}
