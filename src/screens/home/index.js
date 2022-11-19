import Header from "../../components/header";
import { texts } from "./texts.js";
import { Page, Content, SideBar, HomeTitle, MainContent, ExampleImage, ImagesRow, Image, ImageDesc } from "../../styled";

export default function Home() {
  const login = false;
  const lang = "go";

  return (
    <Page>
      <Header />
      <Content>
        <SideBar>AA</SideBar>
        {!login &&
          <MainContent>
            <HomeTitle>{texts.collect[lang]}</HomeTitle>
            <ImagesRow>
              <Image>
                <ExampleImage src={"images/item1.png"} />
                <ImageDesc>{texts.bottles[lang]}</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item2.png"} />
                <ImageDesc>{texts.chairs[lang]}</ImageDesc>
              </Image>
              <Image>
                <ExampleImage src={"images/item3.png"} />
                <ImageDesc>{texts.pipe[lang]}</ImageDesc>
              </Image>
            </ImagesRow>
            <HomeTitle>{texts.show[lang]}</HomeTitle>
            <HomeTitle>{texts.hoard[lang]}</HomeTitle>
          </MainContent>
        }
        {login &&
          <MainContent></MainContent>
        }
      </Content>
    </Page>
  );
}
