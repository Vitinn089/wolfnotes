import { RiShutDownLine } from 'react-icons/ri' //react-icons/<biblioteca de icones>
import { Container, Profile, Logout } from "./styles";

import avatarPlaceHolder from "../../assets/avatar_placeholder.png"
import { useAuth } from '../../hooks/auth';
import { api } from "../../service/api";


export function Header() {
    const { singOut, user } = useAuth();

    const avartUrl = user. avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
    
    return (
        <Container>
            <Profile to='/profile'>
                <img 
                    src={avartUrl}
                    alt={user.name}
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={singOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}