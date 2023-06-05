import styled from "styled-components"

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    background: #126BA5;    
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px 0px #00000026;
    z-index: 2;
    p {
        font-family: Playball;
        font-size: 39px;
        text-decoration: none;
        color: #FFFFFF;
        padding-left: 18px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 90px;
        margin: auto 18px;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`
