import { Flex } from "antd";
import SideBar from "./SideBar";
import Content from "./Content";
import styled from "styled-components";
import Banner from "./Content/components/Banner";
import { activeComponentAtom, mediaInfoAtom } from "../stores/JotaiStore";
import { useAtomValue } from "jotai";
import TabsContent from "./Content/components/TabsContent";
import { MenuItems } from "../utils/MenuItem";

const MainLayout = () => {
  const mediaInfo = useAtomValue(mediaInfoAtom);
  const activeComponent = useAtomValue(activeComponentAtom);

  if (activeComponent === "Main") {
    return (
      <MainFlex gap="middle">
        <SideBar customFocusKey={"SIDEBAR_MENU"}/>
        <Wrapper>
          {mediaInfo && <Banner />}
          <Content />
        </Wrapper>
      </MainFlex>
    );
  }

  const activeItem = MenuItems.find((item) => item.title === activeComponent);

  return (
    <MainFlex gap="middle">
      <SideBar />
      {activeItem ? <TabsContent item={activeItem} /> : null}
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
