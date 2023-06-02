import {FooterContainer} from './SCFooter';


export default function Footer(props) {
    
    const { title, posterURL, weekday, hour} = props;

    return (
        <FooterContainer>
            <button>Hábitos</button>
            <button>Hoje</button>
            <button>Histórico</button>
        </FooterContainer>
    );
}