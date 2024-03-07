import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NoModal(props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Oof Incorrect</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Womp Womp
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NoModal;
