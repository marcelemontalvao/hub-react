import styled from "styled-components";

export const FormContainer = styled.div`
    width: 369px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 369px;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 35px;
    gap: 35px;

    span {
        width: 100%;
        display: flex;
        justify-content: center;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
        margin-top: 42px;
        margin-bottom: 22px;
    }

    label {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 30px;
        gap: 20px;
    }
    
    p {
        font-size: 12px;
        line-height: 0px;
        color: #F8F9FA;
    }

    input {
        width: 85%;
        height: 48px;
        background-color: #343B41;
        border: 1.2px solid #F8F9FA;
        border-radius: 4px;
        font-size: 16px;
        line-height: 26px;
        padding-left: 15px;
        color: #F8F9FA;
    }

    input::placeholder {
        color: #F8F9FA;
    }

    .first-button {
        width: 90%;
        height: 48px;
        background-color: #FF577F;
        border: 1.2px solid #FF577F;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        cursor: pointer;
    }

    a {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #868E96;
        text-decoration: none;
    }

    .second-button {
        width: 330px;
        height: 48px;
        background-color: #868E96;
        border: 1.2px solid #868E96;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #F8F9FA;
        margin-bottom: 42px;
        cursor: pointer;
    }
`