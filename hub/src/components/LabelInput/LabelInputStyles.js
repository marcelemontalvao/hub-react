import styled from "styled-components";

export const LabelInputStyles = styled.label`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    gap: 20px;

    input:disabled {
        background: #343B41;
        border: 1.2px solid #343B41;
        border-radius: 4px;
        color: #868E96;
    }
`

