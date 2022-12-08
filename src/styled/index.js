import styled from "styled-components";
import { colors } from "../config/constants";
import { Link } from "react-router-dom";

export const Page = styled.div`
    background: url('/images/background_image.jpg'), linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) );
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
    width: 20%;
    min-width: 200px;
    margin-right: 20px;
    box-shadow: 0px 0px 10px black;
    background-color: ${colors.background};
    @media(max-width: 500px) {
        display: none;
    }
`;

export const MainContent = styled.div`
    width: 75%;
    @media(max-width: 500px) {
        width: 100%;
    }
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
    @media(max-width: 500px) {
        display: none;
    }
`;

export const NavbarReturnArrow = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    left: 20px;
    top: 0.5vh;
    cursor: pointer;
    @media(max-width: 500px) {
        display: none;
    }
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

export const IconLink = styled.sup`
    font-size: 0.5em;
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
    width: 100%;
    border-bottom: 1px solid ${colors.letter};
    font-size: 1.4em;
    color: ${colors.letter};
`;

export const Option = styled.option`
    background-color: ${colors.item};
    border: none;
    width: 100%;
    border-bottom: 1px solid ${colors.letter};
    color: ${colors.letter};
`;

export const InputFile = styled.input`
    display: none;
`;

export const LabelFile = styled.label`
    padding: 20px 10px;
    width: 200px;
    border: 1px solid ${colors.letter};
    border-radius: 15px;
    color: ${colors.letter};
    text-transform: uppercase;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
`;

export const LabelDate = styled.label`
    font-size: 0.9em;
    width: 100%;
    text-decoration: underline;
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


//Home
export const HomePost = styled.div`
    width: 100%;
    background-image: linear-gradient(${colors.itemGradient.color1}, ${colors.itemGradient.color2});
    margin-bottom: 15px;
    margin-top: 15px;
    border-radius: 15px;
`;

export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    align-items: center;
`;

export const PostProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    margin-right: 10px;
`;

export const PostTitle = styled.h2`
    color: ${colors.letter};
`;

export const PostContent = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
`;

export const PostImage = styled.img`
    height: 500px; 
    width: 500px; 
    @media(max-width:800px) {
        height: 300px;
        width: 300px;
    }
`;

export const PostReport = styled.div`
    color: ${props => props.color ? props.color : "black"};
    margin-left: auto; 
    margin-right: 25px;
`;

export const PostFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`;

export const PostInfo = styled.span`
    color: ${colors.letter};
    font-weight: bold;
    font-size: 1.3em;
`;
//

export const ContentMain = styled.div`
    background: ${colors.item};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 20px;
    @media(min-width: 500px) {
        margin-right: 20px;
    }
`;

//Profile
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ProfileInfoPicture = styled.img`
    width: 90px;
    height: 90px;
    border: 3px solid ${props => props.points < 100 ? "black" : props.points < 200 ? "#cd7f32" : props.points < 300 ? "#c0c0c0" : "gold"};
    border-radius: 10px;
    margin-right: 10px;
`;

export const ProfileInfoName = styled.h1`
    color: ${colors.letter};
`;

export const ProfileInfoTitle = styled.sub`
    color: ${colors.letter};
    font-size: 0.5em;
`;

export const ProfileInfoItems = styled.h2`
    color: ${colors.letter};
`;

export const ProfileCategories = styled.div`
`;

export const ProfileCategoriesTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: ${colors.letter};
`;

export const ProfileCategoriesRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ProfileCategoriesItem = styled.div`
    height: 150px;
    width: 150px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.itemGradient.color1};
    color: ${colors.letter};
    border: 3px solid ${props => props.rarity < 1 ? "black" : props.points < 2 ? "#cd7f32" : props.points < 3 ? "#c0c0c0" : props.points < 4 ? "gold" : ""};
    ${props => props.rarity == 4 ?
        `border-top: 3px solid cyan;
         border-left: 3px solid red;
         border-bottom: 3px solid gold;
         border-right: 3px solid green;`
    : ""};
    font-size: 2em;
    border-radius: 15px;
    cursor: pointer;
    &:hover{
        background-color: ${colors.itemGradient.color2};
    }
`;

export const ProfileCategoriesItemImage = styled.img`
    height: 125px;
    width: 125px;
    ${props => props.owned === 0 ?
        `filter: brightness(0%);`
        : ""}
`;
//

//Category
export const CategoryInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CategoryInfoPicture = styled.img`
    width: 90px;
    height: 90px;
    border: 3px solid ${props => props.rarity < 1 ? "black" : props.points < 2 ? "#cd7f32" : props.points < 3 ? "#c0c0c0" : props.points < 4 ? "gold" : ""};
    ${props => props.rarity == 4 ?
        `border-top: 3px solid cyan;
         border-left: 3px solid red;
         border-bottom: 3px solid gold;
         border-right: 3px solid green;`
        : ""};
    ${props => props.owned === 0 ?
        `filter: brightness(0%);`
        : ""}
    border-radius: 10px;
    margin-right: 10px;
`;

export const CategoryInfoName = styled.h1`
    color: ${colors.letter};
`;

export const CategoryInfoTitle = styled.sub`
    color: ${colors.letter};
    font-size: 0.5em;
`;

export const CategoryInfoItems = styled.h2`
    color: ${colors.letter};
`;

export const CategoryThings = styled.div`
`;

export const CategoryThingsTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: ${colors.letter};
`;

export const CategoryThingsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CategoryThingsItem = styled.div`
    height: 150px;
    width: 150px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.itemGradient.color1};
    color: ${colors.letter};
    border: 2px solid ${colors.letter};
    font-size: 2em;
    border-radius: 15px;
    cursor: pointer;
    &:hover{
        background-color: ${colors.itemGradient.color2};
    }
`;

export const CategoryThingsImage = styled.img`
    height: 125px;
    width: 125px;
    border-radius: 25px;
`;
//

//Gob
export const ListUsers = styled.div`
`;

export const ListUsersTitle = styled.h1`
    width: 100%;
    text-align: center;
    color: ${colors.letter};
`;

export const ListUsersRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ListUsersItem = styled.div`
    height: 150px;
    width: 150px;
    margin-left: 10px;
    margin-bottom: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.itemGradient.color1};
    color: ${colors.letter};
    font-size: 2em;
    border-radius: 100%;
    cursor: pointer;
    &:hover{
        background-color: ${colors.itemGradient.color2};
    }
`;

export const ListUsersCrown = styled.img`
    height: 125px;
    width: 125px;
    position: absolute;
    margin-bottom:150px;
`;

export const ListUsersPicture = styled.img`
    height: 125px;
    width: 125px;
    border-radius: 100%;
`;

export const ListUsersName = styled.span`
    position: absolute;
    margin-top: 160px;
    padding: 3px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    font-size: 0.9em;
    color: ${colors.background};
`;
//