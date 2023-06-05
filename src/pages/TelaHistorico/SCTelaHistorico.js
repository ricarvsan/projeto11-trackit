import styled from "styled-components"

export const HistoricoContainer = styled.div`
    width: 375px;
    height: 100vh;
    background-color: #E5E5E5;
    padding-top: 98px;
    position: fixed;
    overflow-y: scroll;
    font-family: Lexend Deca;

    p {
        &:nth-child(2) {
            padding: 0 17px 17px 17px;
            color: #126BA5;
            font-size: 23px;
        }
        &:nth-child(3) {
            color: #666666;
            font-size: 18px;
            padding: 0 22px 17px 17px;
            
        }
    }   
`