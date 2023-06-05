import { NavContainer } from './SCHeader';
import { User } from '../../contexts/User';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {

    const {user} = useContext(User);

    return (
        <NavContainer data-test="header">
            <p>TrackIt</p>
            <img src={user.image} alt="imagem usuario" data-test="avatar"/>
        </NavContainer>
    );
}