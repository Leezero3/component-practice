import React, { useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

function SelectBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleSelectBox = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return createPortal(
        <div>
            <StSelect type="button" onClick={toggleSelectBox}>
                {selectedOption && ` ${selectedOption}`}
            </StSelect>
            {isOpen && (
                <Option>
                    <Stbtntop type="button" onClick={() => handleOptionClick("리액트")}>
                        리액트
                    </Stbtntop>
                    <Stbtn type="button" onClick={() => handleOptionClick("자바")}>
                        자바
                    </Stbtn>
                    <Stbtn type="button" onClick={() => handleOptionClick("스프링")}>
                        스프링
                    </Stbtn>
                    <Stbtnbottom type="button" onClick={() => handleOptionClick("리액트네이티브")}>
                        리액트네이티브
                    </Stbtnbottom>
                </Option>
            )}
        </div>,
        document.getElementById("Select")
    );
}

export default SelectBox;

const StSelect = styled.button`
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
`;
const Stbtn = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    background-color: lightgray;
    &:hover {
        background-color: black;
    }
`;
const Stbtntop = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    background-color: lightgray;
    border-radius: 10px 10px 0px 0px;
    &:hover {
        background-color: black;
    }
`;
const Stbtnbottom = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    background-color: lightgray;
    border-radius: 0px 0px 10px 10px;
    &:hover {
        background-color: black;
    }
`;

const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;
