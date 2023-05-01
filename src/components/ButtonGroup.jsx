import React from "react";
import styled from "styled-components";
import StyledButton from "../components_library/button/StyledButton";

function ButtonGroup() {
    const handleClick = () => {
        alert("버튼을 만들었습니다.");
    };

    const promptClick = () => {
        const promptBox = prompt("네 어려워요", "답변을 적어주세요");
        console.log(promptBox);
    };

    return (
        <>
            <ButtonContainer>
                <StyledButton size="large" color="primary" icon="favorite" outline={true} onClick={handleClick}>
                    Large Primary Button
                </StyledButton>
                <StyledButton size="medium" color="primary">
                    Medium
                </StyledButton>
                <StyledButton size="small" color="primary">
                    Small
                </StyledButton>
            </ButtonContainer>
            <ButtonContainer>
                <StyledButton size="large" color="negative" icon="star" outline={true} onClick={promptClick}>
                    Large Negative Button
                </StyledButton>
                <StyledButton size="medium" color="negative">
                    Medium
                </StyledButton>
                <StyledButton size="small" color="negative">
                    Small
                </StyledButton>
            </ButtonContainer>
        </>
    );
}

export default ButtonGroup;

const ButtonContainer = styled.div`
    display: flex;
    margin: 10px;
    gap: 15px;
`;
