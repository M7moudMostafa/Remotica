import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Sider from "antd/es/layout/Sider";
import Item from "./components/item";
import { MenuItems } from "../../utils/MenuItem";
import Logo from "./components/Logo";
import styled from "styled-components";

const SideBar = () => {
  const { ref, focusKey } = useFocusable();

  return (
    <SideBarComponent width={350}>
      <Logo />
      <FocusContext.Provider value={focusKey}>
        <Menu ref={ref}>
          {MenuItems.map((item) => (
            <Item item={item} />
          ))}
        </Menu>
      </FocusContext.Provider>
    </SideBarComponent>
  );
};

const SideBarComponent = styled(Sider)`
  background: linear-gradient(to right, #0083ff, #87ceeb);
`;

const Menu = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
  font-size: 1.3rem;
`;

export default SideBar;
