import styled from "styled-components";
import Modal from "react-modal";

export const DashboardPage = styled.main`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
        min-height: 72px;
    }

    div button {
        width: 55px;
        background-color: #212529;
        border: none;
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        text-align: center;
        color: #F8F9FA;
        cursor: pointer;
    }
    
    & section:nth-child(2) {
        display: flex;
        align-items: center;
        height: 118px;

        div {
            width: 100%;
        }
       
    }
 
    & section:nth-child(2) h2,  & section:nth-child(3) span {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #F8F9FA;
    }

    & section:nth-child(2) span {
        font-size: 12px;
        line-height: 22px;
        color: #868E96;
    }
 
    & section:nth-child(3) div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 23px;
        height: 118px;
        color: #F8F9FA;
    }

    & section:nth-child(3) button {
        width: 32px;
        height: 32px;
        font-size: 20px;
        color: #FFFFFF;
    }

    & section:nth-child(4) {
        color: #F8F9FA;
        height: 100vh;
    }

    header,  & section:nth-child(2) {
        border-bottom: 2px solid #868E96;
    }
`

export const TechContainer = styled.div`
    display: flex !important;
    justify-content: center !important;
    background: #121214;
    border-radius: 4px;
    height: 59px;
    width: 95%;

    section {
        width: 95%;
        display: flex;
        justify-content: space-between;
    }

    p { 
        font-size: 12px;
        line-height: 22px;
        color: #868E96;
    }


`

export const TechsContainer = styled.div`
    background-color: #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 23px;
    padding-bottom: 23px;
    cursor: pointer;

    div:hover {
        background-color: #343B41;

        span {
            font-weight: 700;
        }

        p {
            color: #F8F9FA;
        }
    }
`

export const ModalStyles = styled(Modal) `
    background-color: #343B41;
    border-radius: 4px 4px 0px 0px;
    margin: 300px auto;
    width: fit-content;
    height: fit-content;
`

export const FormContainer = styled.div`
    width: 369px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 90%;
        height: 50px;
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 22px;
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

    select {
        width: 330px;
        height: 48px;
        background-color: #343B41;
        border: 1.2px solid #F8F9FA;
        border-radius: 4px;
        font-size: 16px;
        line-height: 26px;
        color: #F8F9FA;
        padding-left: 15px;
    }

    span {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: #F8F9FA;
    }

    button {
        border: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: #868E96;
        cursor: pointer;
        background-color: transparent;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 369px;
    height: 280px;
    background-color: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 5px;
    gap: 25px;

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

    #delete-btn {
        margin-bottom: 0;
    }
`