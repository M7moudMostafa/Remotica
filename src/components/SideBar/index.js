import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import Sider from "antd/es/layout/Sider";
import Item from "./components/item";
import { MenuItems } from "../../utils/MenuItem";
import Logo from "./components/Logo";
import styled from "styled-components";
import { activeComponentAtom } from "../../stores/JotaiStore";
import { useAtom } from "jotai";

const SideBar = ({ customFocusKey }) => {
  const { ref, focusKey } = useFocusable({
    focusKey: customFocusKey
  });
  const [, setActiveComponent] = useAtom(activeComponentAtom);

  const onEnterPress = (component) => {
    setActiveComponent(component);
  };

  return (
    <SideBarComponent width={350}>
      <Logo />
      <FocusContext.Provider value={focusKey}>
        <Menu ref={ref}>
          {MenuItems.map((item, i) => (
            <Item
              item={item}
              key={i}
              onEnterPress={onEnterPress}
            />
          ))}
        </Menu>
      </FocusContext.Provider>
    </SideBarComponent>
  );
};

const SideBarComponent = styled(Sider)`
    background: rgba(0, 0, 0, 0.3); 
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    color: #ffffff !important;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
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
