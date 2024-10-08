import Modal from 'react-modal'
import PropTypes from 'prop-types'
import '../styles/popup-end.scss'


const customStylesModal = {
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '65vw',
        height: '65vh',
        transform: 'translate(25%,25%)'
    },
}

Modal.setAppElement('#root')

export default function PopupEnd({message, modalIsOpen, restartGame}) {
    if (!modalIsOpen) return null
    return(
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStylesModal}
                contentLabel="End Game"
            >
                <div
                    className="popup-end">
                        <div>
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
                                }}
                                onClick={restartGame}>Restart
                            </button>
                        </div>
                </div>
            </Modal>
        </div>
    )
}

PopupEnd.propTypes = {
    message: PropTypes.string,
    modalIsOpen: PropTypes.bool,
    restartGame: PropTypes.func
}
