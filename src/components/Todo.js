import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    };

    const closeModalHandler = () => {
        setModalIsOpen(false);
    };

    const modalConfirmHandler = () => {
        setModalIsOpen(false);
    };

    const modalCancelHandler = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="action">
                <button className="btn" onClick={deleteHandler}>
                    Delete
                </button>
            </div>
            {modalIsOpen && (
                <Modal
                    onConfirm={modalConfirmHandler}
                    onCancel={modalCancelHandler}
                />
            )}
            {modalIsOpen && <BackDrop onClick={closeModalHandler} />}
        </div>
    );
}

export default Todo;
