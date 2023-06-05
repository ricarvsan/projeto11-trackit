import styled from "styled-components"

export const TarefaContainer = styled.div`
    display: flex;
    font-family: Lexend Deca;
    background-color: #FFFFFF;
    width: 312px;
    height: 69px;
    margin-bottom: 10px;
    padding: 13px 13px 12px 15px;
    border-radius: 5px;
   /*  margin-top: 28px; */
    justify-content: space-between;

    button {

    }
    p {
        color: #666666;
        font-size: 20px;
        &:nth-child(1) {
            margin-bottom: 7px;
        }

        &:nth-child(2) {
            color: #666666;
            font-size: 13px;
            line-height: 16px;
        }

        &:nth-child(3) {
            color: #666666;
            font-size: 13px;
            line-height: 16px;
        }         
    }
    ion-icon {
        width: 69px;
        height: 69px;
        color: ${props => {
            if(props.tarefas.done) {
               return '#8FC549'
            } else {
                return '#e7e7e7'
            }
        }};
        z-index: 0;
    }
`