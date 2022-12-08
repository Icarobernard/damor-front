

import React from "react";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function ModalMessage({ message, modalOpen, setModalOpen, redirect }) {
    return (
        <>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Mensagem
                    </h5>
                    <button
                        aria-label="Close"
                        className=" close"
                        type="button"
                        onClick={() => setModalOpen(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button onClick={() => { redirect() }} color="primary" type="button">
                        Confirmar
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalMessage;

