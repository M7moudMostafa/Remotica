import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Item from "./components/item";
import { MenuItems } from "../../utils/MenuItem";
import Logo from "./components/Logo";

const SideBar = () => {
  const { ref, focusKey } = useFocusable();
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <Logo />
      <FocusContext.Provider value={focusKey}>
        <Menu ref={ref} theme="dark" mode="inline" style={{ padding: "1rem 1rem" }}>
          {MenuItems.map((item) => (
            <Item item={item} />
          ))}
        </Menu>
      </FocusContext.Provider>
    </Sider>
  );
};

export default SideBar;
