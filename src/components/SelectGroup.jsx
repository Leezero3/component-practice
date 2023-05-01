import React, { useState } from "react";
import CustomSelect from "../components_library/select/CustomSelect";
import styled from "styled-components";

const SelectGroup = () => {
    const [selectedOption, setSelectedOption] = useState("자바");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const [unhideSelectedOption, setUnhideSelectedOption] = useState("자바");

    const handleUnhideOptionChange = (option) => {
        setUnhideSelectedOption(option);
    };

    return (
        <OutlineBox>
            <CustomWrapper>
                <CustomSelect
                    isAbsolute={false}
                    options={["자바", "리액트", "리액트 네이티브"]}
                    defaultValue="자바"
                    onChange={handleOptionChange}
                />
            </CustomWrapper>
            <CustomWrapper>
                <CustomSelect
                    isAbsolute={true}
                    options={["자바", "리액트", "리액트 네이티브"]}
                    defaultValue="자바"
                    onChange={handleUnhideOptionChange}
                />
            </CustomWrapper>
        </OutlineBox>
    );
};

export default SelectGroup;

const OutlineBox = styled.div`
    display: flex;
    margin: 10px;
    gap: 50px;
    height: 150px;
    width: 900px;
    border: 2px solid gray;
    overflow: hidden;
    /* position: relative; */
`;

const CustomWrapper = styled.div`
    margin: 10px;
`;
