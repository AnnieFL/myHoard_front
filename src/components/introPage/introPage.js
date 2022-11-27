import { Content, SideBar, HomeTitle, MainContent, ExampleImage, ImagesRow, Image, ImageDesc, DemiLink } from "../../styled";
import { useEffect, useState } from "react";
import Server from "../../classes/Server";

export default function IntroPage() {
    const [topThree, setTopThree] = useState([]);


    useEffect(() => {
        if (!topThree[0]) {
            (async () => {
                setTopThree(await Server.baseGet("user/top/3"));
            })();
        }
    }, [])

    return (
        <Content>
            <SideBar>
                <DemiLink to="/login">Login</DemiLink>
            </SideBar>
            <MainContent>
                <HomeTitle>Collect things!</HomeTitle>
                <ImagesRow>
                    <Image>
                        <ExampleImage src={"images/item1.png"} />
                        <ImageDesc>Bottles!!</ImageDesc>
                    </Image>
                    <Image>
                        <ExampleImage src={"images/item2.png"} />
                        <ImageDesc>Chairs!!</ImageDesc>
                    </Image>
                    <Image>
                        <ExampleImage src={"images/item3.png"} />
                        <ImageDesc>This... thing!</ImageDesc>
                    </Image>
                </ImagesRow>
                <HomeTitle>Show them off!</HomeTitle>
                <ImagesRow>
                    {topThree.map((user, userKey) => (
                        <Image key={userKey}>
                            <ExampleImage src={user.picture} />
                            <ImageDesc>{user.name} - {user.score ? user.score : 0} points</ImageDesc>
                        </Image>
                    ))
                    }
                    {[...Array(3 - topThree.length)].map((element, index) => (
                        <Image key={index}>
                            <ExampleImage src="images/loading.png" />
                            <ImageDesc>...</ImageDesc>
                        </Image>
                    ))}
                </ImagesRow>
                <HomeTitle>And build... Your Hoard!</HomeTitle>
            </MainContent>
        </Content>
    );
}
