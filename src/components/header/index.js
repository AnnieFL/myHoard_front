import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLogin } from "../../store/reducer";
import { Navbar, NavbarReturnArrow, NavbarTitle, UserNavbarIcon } from "../../styled";
import { images } from "../../config/constants";

export default function Header(props) {
    const login = useSelector(selectLogin);
    const navigate = useNavigate();

    return (
        <Navbar>
            <NavbarTitle onClick={() => navigate("/")}>My Hoard</NavbarTitle>
            {(!!login.id && !props.profile) &&
                <UserNavbarIcon src={login.picture} onClick={() => navigate("/profile")}/>
            }
            <NavbarReturnArrow onClick={() => navigate(-1)} src={images.backArrow}/>
        </Navbar>
    )
}