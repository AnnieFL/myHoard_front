import styled from "styled-components";
import { colors } from "../config/constants";

export const Page = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.div`
    height: 88vh;
    display: flex;
    flex-direction: row;
`;

export const SideBar = styled.div`
    height: 100%;
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
`;

export const HomeTitle = styled.h1`
    color: ${colors.letter};
    text-align: center;
`;

export const ExampleImage = styled.img`
    width: 100px;
    height: 100px;
`;

export const ImagesRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const ImageDesc = styled.div`
    font-size: 0.8em;
`;