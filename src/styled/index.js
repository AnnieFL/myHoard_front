import styled from "styled-components";
import { colors } from "../config/constants";
import { Link } from "react-router-dom";

export const Page = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('images/background_image.jpg');
    background-position:center top;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div`
    min-height: 88vh;
    display: flex;
    flex-direction: row;
`;

export const SideBar = styled.div`
    width: 25%;
    margin-right: 20px;
    box-shadow: 0px 0px 10px black;
    background-color: ${colors.background};
    @media(max-width: 500px) {
        display: none;
    }
`;

export const MainContent = styled.div`
    width: 75%
`;


export const Navbar = styled.div`
    background-image: linear-gradient(${colors.itemGradient.color1}, ${colors.itemGradient.color2});
    color: ${colors.letter};
    height: 12vh;
    box-shadow: 0px 0px 10px black;
    min-height: 80px;
`;

export const NavbarTitle = styled.div`
    font-family: "Goblin One";
    font-size: 2em;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const UserNavbarIcon = styled.img`
    border-radius: 100%;
    border: 3px solid ${colors.itemGradient.color1};
    width: 70px;
    height: 70px;
    position: absolute;
    right: 20px;
    top: 0.5vh;
    cursor: pointer;
`;

export const HomeTitle = styled.h1`
    color: ${colors.letter};
    text-align: center;
`;

export const ExampleImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
`;

export const ImagesRow = styled.div`
    width: 70%;
    margin-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.letter};
    padding: 20px;
    border-radius: 50px;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`;

export const Image = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const ImageDesc = styled.div`
    font-size: 0.8em;
    text-align: center;
    color: ${colors.background};
    @media(max-width: 900px) {
        margin-bottom: 5px;
    }
`;

export const NonLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover {
        color: inherit;
    }
`;

export const DemiLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover {
        color: inherit;
        text-decoration: underline;
    }
`;

//Form
export const FormMain = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
    
export const FormContent = styled.form`
    background-color: ${colors.item};
    color: ${colors.letter};
    min-width: 360px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;    
    padding: 20px;
`;

export const Field = styled.div`
    margin: 15px;
    padding: 5px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;  
`;

export const Input = styled.input`
    background-color: ${colors.item};
    border: none;
    width: 100%;
    border-bottom: 1px solid ${colors.letter};
    font-size: 1.4em;
    color: ${colors.letter};
`;

export const Select = styled.select`
    background-color: ${colors.item};
    border: none;
    border-bottom: 1px solid ${colors.letter};
    color: ${colors.letter};
`;

export const Option = styled.option`
    background-color: ${colors.item};
    border: none;
    border-bottom: 1px solid ${colors.letter};
    color: ${colors.letter};
`;

export const SubmitButton = styled.button`
    border: 1px solid ${colors.letter};
    border-radius: 5px;
    background-color: ${colors.item};
    color: ${colors.letter};
    font-size: 1.2em;
    padding: 3px 15px 3px 15px;
    cursor: pointer;
`;

export const FormMessage = styled.span`
    width: 100%;
    margin-top: 15px;
    text-align: center;
    font-size: 0.8em;
    color: ${colors.letter};
`;

export const FormLink = styled(Link)`
    color: inherit;
    &:hover {
        color: inherit;
    }
`;
//