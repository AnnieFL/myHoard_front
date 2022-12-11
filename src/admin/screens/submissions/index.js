import Header from "../../../components/header";
import { Page, Content, MainContent, NonLink, CategoryThingsTitle, CategoryThingsRow, CategoryThingsItem, CategoryThingsImage, CategoryThings, AcceptSubmission, DenySubmission } from "../../../styled";
import { useEffect, useState } from "react";
import Server from "../../../classes/Server";
import { useSelector } from "react-redux";
import { selectLogin } from "../../../store/reducer";
import { Navigate, useNavigate } from "react-router-dom";
import Sidenav from "../../../components/sidebar";
import Loading from "../../../components/loading";

export default function Submissions() {
  const login = useSelector(selectLogin);
  const navigate = useNavigate();
  
  const [things, setThings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!things[0]) {
      (async () => {
        setThings(await Server.baseGet(`thing/submissions`, login.token));
        setLoading(false);
      })()
    }

    if (!login.admin) {
      navigate("/");
    }
  }, [])

  const approveItem = async (id) => {
    await Server.basePut(`thing/approve/${id}`, login.token);

    window.location.reload();
  }

  const denyItem = async (id) => {
    await Server.basePut(`thing/deny/${id}`, login.token);

    window.location.reload();
  }

  return (
    <Page>
      <Header />
      {!login.id &&
        <Navigate to={"/"} />
      }
      <Content>
        <Sidenav />
        <MainContent>
          {loading &&
            <Loading />
          }
          {!loading &&
            <>
              <CategoryThings>
                <CategoryThingsTitle>Submissions:</CategoryThingsTitle>
                <CategoryThingsRow>
                  {things[0] && things.map((thing, thingIndex) => (
                    <NonLink key={thingIndex}>
                      <CategoryThingsItem>
                        <AcceptSubmission title={"accept submission"} onClick={() => approveItem(thing.id)}>O</AcceptSubmission>
                        <DenySubmission title={"reject submission"} onClick={() => denyItem(thing.id)}>X</DenySubmission>
                        <CategoryThingsImage title={`${thing.name}\nCategory: ${thing.category.name}`} src={thing.picture} />
                      </CategoryThingsItem>
                    </NonLink>
                  ))}
                </CategoryThingsRow>
              </CategoryThings>
            </>}
        </MainContent>
      </Content>
    </Page>
  );
}
