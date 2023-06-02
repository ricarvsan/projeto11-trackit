import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Lexend Deca;
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
    padding-top: 70px;
    img {
        width: 180px;
        height: 180px;
        margin-bottom: 32px;
    }
    button {
        margin-bottom: 25px;
        width: 323px;
        &:disabled {
            background-color: #52B6FF;
            opacity: 0.7;
        }
    }
    p {
        font-size: 14px;
        color: #52b6ff;
        font-weight: 400;
        text-decoration-line: underline;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    input:disabled {
        background-color: #F2F2F2;
    }
`