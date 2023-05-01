import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";

const FeatureSelect = () => {
    return (
        <Container>
            <h1>Select</h1>
            <StyledLayout id="Select">
                <SelectBox />
            </StyledLayout>
        </Container>
    );
};

export default FeatureSelect;

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    gap: 10px;
`;

const Container = styled.div`
    border: 3px solid #ddd;
    height: 200px;
    overflow: hidden;
    position: relative;
    margin-top: 50px;
    #Select {
        z-index: 992;
    }
`;
