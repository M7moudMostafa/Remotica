import { Flex } from "antd";
import SideBar from "./SideBar";
import Content from "./Content";
import styled from "styled-components";
import Banner from "./Content/components/Banner";
import { activeComponentAtom, mediaInfoAtom } from "../stores/JotaiStore";
import { useAtomValue } from "jotai";
import TabsContent from "./Content/components/TabsContent";

const MainLayout = () => {
  const mediaInfo = useAtomValue(mediaInfoAtom);
  const activeComponent = useAtomValue(activeComponentAtom);

  return (
    <MainFlex gap="middle">
      <SideBar />
      {activeComponent === "Main" ? (
        <Wrapper>
          {mediaInfo && <Banner />}
          <Content />
        </Wrapper>
      ) : activeComponent === "Movie" && (
        <TabsContent title={"Movies"} />
      )}
    </MainFlex>
  );
};

const MainFlex = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainLayout;
