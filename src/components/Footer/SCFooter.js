import styled from "styled-components"


export const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: space-between;
    z-index: 2;


    button {
        font-size: 18px;
        margin: auto;
    }

    button:nth-child(1) {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        color: #52B6FF;
    }

    button:nth-child(2) {
        margin: none;
        width: 91px;
        height: 91px;
        border-radius: 98.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
    }

    button:nth-child(3) {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        color: #52B6FF;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`