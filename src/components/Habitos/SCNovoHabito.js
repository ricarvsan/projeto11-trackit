import styled from "styled-components"

export const NovoHabitoContainer = styled.div`
    width: 340px;
    height: 180px;
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
    border-radius: 5px;
    

    input {
        margin: 18px 18px 8px 10px;
        width: 295px;
        height: 45px;
    }

    div:nth-child(2) {
        margin-left: 10px;
        display: flex;
        button {
            margin-right: 4px;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            background-color: #FFFFFF;
            border: 1px solid #D4D4D4;
            color: #D4D4D4;
        }
    }
    div:nth-child(3) {
        justify-content: flex-end;
        margin-top: 30px;
        margin-right: 13px;
        button {
            width: 84px;
            height: 35px;
            &:nth-child(1) {
                font-size: 16px;
                background-color: #FFFFFF;
                color: #52B6FF;
                margin-right: 20px;
            }
            &:nth-child(2) {
                font-size: 16px;
            }
        }

        display: flex;
    }
`