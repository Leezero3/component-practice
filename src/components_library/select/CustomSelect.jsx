import React, { useState } from "react";
import CustomSelectStyle from "./CustomSelectStyle";

const CustomSelect = ({ options, defaultValue, onChange, isAbsolute }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <CustomSelectStyle isAbsolute={isAbsolute}>
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </CustomSelectStyle>
    );
};

export default CustomSelect;
