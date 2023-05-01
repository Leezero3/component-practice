import styled from "styled-components";

const CustomSelectStyle = styled.div`
    width: 300px;
    position: ${(props) => (props.isAbsolute ? "absolute" : "relative")};

    .selected-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .options {
        width: 99.4%;
        max-height: 150px;
        overflow-y: auto;
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: #fff;
        border: 1px solid #ccc;
        border-top: none;
    }

    .options li {
        padding: 10px;
        cursor: pointer;
    }

    .options li:hover {
        background-color: #ccc;
    }
`;

export default CustomSelectStyle;
