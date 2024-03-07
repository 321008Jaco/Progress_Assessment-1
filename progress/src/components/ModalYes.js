import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function YesModal(props) {
    return (
        <Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
                <Modal.Title>CORRECT!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You know your football teams!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default YesModal;
