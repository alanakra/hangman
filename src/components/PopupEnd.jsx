import { useState } from 'react'
import Modal from 'react-modal'

const customStylesModal = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

Modal.setAppElement('#root')

export default function PopupEnd({message}) {
    let subtitle
    const [modalIsOpen, setIsOpen] = useState(true)

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00'
    }

    function closeModal() {
        setIsOpen(false)
    }

    return(
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStylesModal}
                contentLabel="End Game"
            >
                <div>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>{message}</div>
                </div>
            </Modal>
        </div>
    )
}
