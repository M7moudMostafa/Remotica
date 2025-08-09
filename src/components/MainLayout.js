import { Flex } from "antd";
import SideBar from "./SideBar";
import Content from "./Content";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <MainFlex gap="middle">
      <SideBar />
      <Content />
    </MainFlex>
  );
};

const MainFlex = styled(Flex)`
  width: 100vw;
  height: 100vh;
`;

export default MainLayout;
