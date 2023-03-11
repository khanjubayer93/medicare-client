import React from 'react';

const ConfirModal = ({ title, message, handleDeleteDoctor, deletingDoctor, cancelModal }) => {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={cancelModal}
                            htmlFor="my-modal-6" className="btn">Cancel</label>
                        <label
                            onClick={() => handleDeleteDoctor(deletingDoctor)}
                            htmlFor="my-modal-6" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirModal;