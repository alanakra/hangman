import Modal from 'react-modal'
import PropTypes from 'prop-types'
import closeModalIcon from '/assets/close.svg'

const customStylesModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

Modal.setAppElement('#root')

export default function PopupEnd({message, modalIsOpen, setIsOpen}) {

    function closeModal() {
        setIsOpen(false)
    }

    return(
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStylesModal}
                contentLabel="End Game"
            >
                <div>
                    <img
                        src={closeModalIcon}
                        style={{
                            height: "1.6rem",
                            cursor: "pointer",
                            position: "absolute",
                            right: "20px",
                            top: "20px"
                        }}
                        onClick={closeModal}
                        alt="Close"
                    />
                    <h3
                        style={{
                            fontSize: "1.7rem"
                        }}>{message}</h3>
                    <button
                        style={{
                            padding: "8px",
                            fontSize: "1.2rem",
                            borderRadius: "0px",
                            border: "none",
                            backgroundColor: "#008CBA",
                            color: "white",
                            marginTop: "8px",
                            cursor: "pointer"
                        }}>Recommencer</button>
                </div>
            </Modal>
        </div>
    )
}

PopupEnd.propTypes = {
    message: PropTypes.string,
    modalIsOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}
