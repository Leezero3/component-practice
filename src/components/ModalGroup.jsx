import React, { useState } from "react";
import styled from "styled-components";
import StyledModal from "../components_library/modal/StyledModal";
import StyledButton from "../components_library/button/StyledButton";

function ModalGroup() {
    const [showOverlayModal, setShowOverlayModal] = useState(false);
    const [showButtonModal, setshowButtonModal] = useState(false);

    const handleCloseOverlayModal = () => {
        setShowOverlayModal(false);
    };

    const handleCloseButtonModal = () => {
        setshowButtonModal(false);
    };

    return (
        <div>
            <ModalContainer>
                <StyledButton size="small" color="primary" onClick={() => setShowOverlayModal(true)}>
                    open modal
                </StyledButton>
                {showOverlayModal && (
                    <StyledModal handleClose={handleCloseOverlayModal} close="overlay">
                        <h1>오버레이 모달입니다.</h1>
                        <p>화면 밖을 클릭하거나 x버튼을 누르면 꺼집니다.</p>
                    </StyledModal>
                )}

                <StyledButton size="medium" color="negative" outline="true" onClick={() => setshowButtonModal(true)}>
                    open modal
                </StyledButton>
                {showButtonModal && (
                    <StyledModal handleClose={handleCloseButtonModal} close="overlay">
                        <h1>버튼으로 종료하는 모달입니다.</h1>
                        <p>화면 밖을 클릭해도 종료되지 않아요. 닫기 버튼을 누르면 꺼집니다.</p>
                        <StyledButton size="small" onClick={handleCloseButtonModal}>
                            Close
                        </StyledButton>
                        <StyledButton size="small">확인</StyledButton>
                    </StyledModal>
                )}
            </ModalContainer>
        </div>
    );
}

const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    gap: 15px;
`;

export default ModalGroup;
