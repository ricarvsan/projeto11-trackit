import {FooterContainer} from './SCFooter';

export default function Footer(props) {
    
    const { title, posterURL, weekday, hour} = props;

    return (
        <FooterContainer>
            <div>
                <img src={posterURL} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                {/* <p>{ weekday && hour ? `${weekday} - ${hour}` : ''}</p> */}
                <p>{ weekday && hour && `${weekday} - ${hour}`}</p>
            </div>
        </FooterContainer>
    );
}