import React, { useState } from "react";
import StyledInput from "../components_library/input/StyledInput";
import StyledButton from "../components_library/button/StyledButton";
import styled from "styled-components";

function InputGroup() {
    const [commaValue, setCommaValue] = useState("");
    const [formValues, setFormValues] = useState({
        name: "",
        price: "",
    });

    const handlePriceInputChange = (event) => {
        const inputValue = event.target.value;
        const value = inputValue.replace(/,/g, "");
        if (isNaN(value)) return;
        const formatter = new Intl.NumberFormat("ko-KR");
        const formattedValue = formatter.format(value);
        setCommaValue(formattedValue);
        setFormValues((prevValues) => ({
            ...prevValues,
            price: value,
        }));
    };

    const handleNameInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSaveClick = () => {
        alert(`이름: ${formValues.name}, 가격: ${formValues.price}`);
    };

    return (
        <>
            <InputContainer>
                이름 :
                <StyledInput type="text" name="name" value={formValues.name} onChange={handleNameInputChange} />
                가격 :
                <StyledInput type="text" name="price" value={commaValue} onChange={handlePriceInputChange} />
                <StyledButton size="small" onClick={handleSaveClick}>
                    저장
                </StyledButton>
            </InputContainer>
        </>
    );
}

export default InputGroup;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    gap: 15px;
`;
