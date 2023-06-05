import styled from "styled-components"

export const PageContainer = styled.div`
    width: 375px;
    height: 75vh;
    background-color: #E5E5E5;
    padding: 98px 17px 0px 17px;
    position: fixed;
    overflow-y: auto;
    font-family: Lexend Deca;

    p {
        &:nth-child(2) {            
            color: #126BA5;
            font-size: 23px;
        }
        &:nth-child(3) {
            color: #BABABA;
            font-size: 18px;            
        }
    } 
`