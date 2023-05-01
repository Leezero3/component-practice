import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: #f8f8f8;
    border: 1px solid #ececec;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border-color: #ececec;
    font-weight: bold;
    color: black;
    cursor: pointer;

    &:hover {
        border-color: #747474;
        transition: color 0.3s ease;
    }
`;

const StyledModal = ({ children, handleClose, close }) => {
    const handleOverlayClick = (event) => {
        if (close === "overlay" && event.target === event.currentTarget) {
            handleClose();
        }
    };

    const handleButtonClick = () => {
        handleClose();
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <ModalWrapper>
                {close === "overlay" && <CloseButton onClick={handleButtonClick}>X</CloseButton>}
                {children}
            </ModalWrapper>
        </Overlay>
    );
};

export default StyledModal;
