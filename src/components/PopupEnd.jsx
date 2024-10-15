import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import '../styles/popup-end.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65vw',
    height: '65vh',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    zIndex: 30
}

export default function PopupEnd({message, modalIsOpen, restartGame}) {
    if (!modalIsOpen) return null
    return(
        <div>
            <Modal
                open={modalIsOpen}
                style={{zIndex: 30}}
                aria-labelledby="End Game"
                aria-describedby={message}
            >
                <Box
                sx={style}
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
                </Box>
            </Modal>
        </div>
    )
}

PopupEnd.propTypes = {
    message: PropTypes.string,
    modalIsOpen: PropTypes.bool,
    restartGame: PropTypes.func
}
