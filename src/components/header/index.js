import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "../../store/reducer";
import { Navbar, NavbarTitle, UserNavbarIcon } from "../../styled";

export default function Header() {
    const login = useSelector(selectLogin);
    const navigate = useNavigate();

    return (
        <Navbar>
            <NavbarTitle onClick={() => navigate("/")}>My Hoard</NavbarTitle>
            {!!login.id &&
                <UserNavbarIcon src={login.picture} onClick={() => navigate("/profile")}/>
            }
        </Navbar>
    )
}