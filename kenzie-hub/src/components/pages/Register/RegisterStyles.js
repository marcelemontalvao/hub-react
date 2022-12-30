import styled from "styled-components";

export const FormContainer = styled.div`
    width: 369px;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .header button {
        padding: 0px 16px;
        width: 67px;
        height: 40px;
        background-color: #212529;
        border-radius: 4px;
        border: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: #F8F9FA;
        cursor: pointer;

    }

    @media (max-width: 414px) {
        height: fit-content;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 369px;
    height: fit-content;
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

    input, select {
        width: 315px;
        height: 48px;
        background-color: #343B41;
        border: 1.2px solid #F8F9FA;
        border-radius: 4px;
        font-size: 16px;
        line-height: 26px;
        color: #868E96;
        padding-left: 15px;
    }

    select {
        width: 330px;
    }


    input::placeholder {
        color: #868E96;
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
        margin-bottom: 30px;
        cursor: pointer;
    }

    a {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #868E96;
    }

    .second-button {
        width: 90%;
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
