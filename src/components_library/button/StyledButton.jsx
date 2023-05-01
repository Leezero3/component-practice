import React from "react";
import styled, { css } from "styled-components";

const sizes = {
    large: {
        fontWeight: "bold",
        minWidth: "200px",
        height: "55px",
    },
    medium: {
        fontWeight: "normal",
        minWidth: "150px",
        height: "45px",
    },
    small: {
        fontWeight: "normal",
        minWidth: "100px",
        height: "35px",
    },
};

const basicColor = {
    primary: {
        backgroundColor: "#008cba",
    },
    negative: {
        backgroundColor: "#f44336",
    },
    default: {
        backgroundColor: "#4caf50",
    },
};

const borders = {
    primary: {
        border: `3px solid ${basicColor.primary.backgroundColor}`,
        color: basicColor.primary.backgroundColor,
    },
    negative: {
        border: `3px solid ${basicColor.negative.backgroundColor}`,
        color: basicColor.negative.backgroundColor,
    },
    default: {
        border: "3px solid #d4d4d4",
        color: "#d4d4d4",
    },
};

const ButtonStyle = styled.button`
    color: black;
    font-weight: ${(props) => sizes[props.size].fontWeight};
    min-width: ${(props) => sizes[props.size].minWidth};
    height: ${(props) => sizes[props.size].height};
    border: none;
    border-radius: 8px;
    /* padding: ${(props) => sizes[props.size].padding}; */
    cursor: pointer;
    /* text-align: center; */
    /* display: flex; */
    /* align-items: center; */
    gap: 20px; /* 텍스트와 아이콘 사이의 간격을 조절합니다. */
    background-color: ${(props) => basicColor[props.color].backgroundColor};
    ${(props) => {
        return props.outline
            ? css`
                  border: ${borders[props.color].border};
                  background-color: #fff;
              `
            : "";
    }};

    /* 아이콘 스타일 */
    .material-icons {
        font-size: 14px;
        vertical-align: middle;
        margin-left: 5px;
    }
`;

const StyledButton = ({ children, icon, color = "default", size = "medium", outline = false, ...rest }) => {
    return (
        <ButtonStyle color={color} size={size} outline={outline} {...rest}>
            {children}
            {icon && <span className="material-icons">{icon}</span>}
        </ButtonStyle>
    );
};

export default StyledButton;
