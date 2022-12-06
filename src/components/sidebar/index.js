import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogout } from "../../store/reducer";
import { SideBar, DemiLink } from "../../styled";

export default function Sidenav() {
    const login = useSelector(selectLogin)
    const dispatch = useDispatch();

    return (
        <SideBar>
            {!!login.id &&
            <>
            <ul>
                <li><DemiLink to={"/yourHoard"}>Your Hoard</DemiLink></li>
                <li><DemiLink to={"/categories"}>Categories</DemiLink></li>
                <li><DemiLink onClick={() => dispatch(setLogout())}>Logout</DemiLink></li>
                {!login.admin &&
                        <li><DemiLink to={"/suggest"}>Suggest</DemiLink></li>
                }
            </ul>
            {login.admin &&
            <>
            <h3 style={{textAlign: "center"}}>ADMIN COMMANDS</h3>
            <ul>
                <li><DemiLink to={"/admin/addCategory"}>Add category</DemiLink></li>
                <li><DemiLink to={"/admin/submissions"}>Submissions</DemiLink></li>
                <li><DemiLink to={"/admin/submissions"}>Sugestions</DemiLink></li>
                <li><DemiLink to={"/admin/grantAdmin"}>Grant Admin</DemiLink></li>
            </ul>
            </>
            }
            </>
            }
            {!login.id &&
                <ul>
                    <li><DemiLink to={"/login"}>Login</DemiLink></li>
                </ul>
            }
        </SideBar>
    )
}