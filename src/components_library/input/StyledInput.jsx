import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
    border: 1px solid black;
    border-radius: 9px;
    color: black;
    padding: 10px 10px;
    width: 200px;
    height: 30px;
    transition: all 0.2s ease-in-out;
    &:hover {
        border-radius: 10px;
    }
`;
const StyledInput = (props) => {
    return <InputStyle {...props} />;
};

export default StyledInput;
