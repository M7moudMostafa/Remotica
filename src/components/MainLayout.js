import { Flex } from "antd";
import SideBar from "./SideBar";
import Content from "./Content";
import styled from "styled-components";
import Banner from "./Content/components/Banner";
import { JotaiStore } from "../stores/JotaiStore";
import { useAtomValue } from "jotai";

const MainLayout = () => {
  const mediaInfo = useAtomValue(JotaiStore);

  return (
    <MainFlex gap="middle">
      <SideBar />
      <Wrapper>
        {mediaInfo && <Banner />}
        <Content />
      </Wrapper>
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
