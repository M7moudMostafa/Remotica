import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { Flex, Menu } from "antd";
import { useEffect } from "react";

const Item = ({ item }) => {
  const { Item } = Menu;
  const { ref, focused, focusSelf, focusKey } = useFocusable({
    focusKey: item.focusKey
  });

  useEffect(() => {
    focusSelf()
  }, [focusSelf]);

  return (
    <Flex ref={ref} focusKey={focusKey} style={{ fontSize: "1.1rem", color: focused && "#000" }} gap="middle">
      {item.icon}
      <Item>
        {item.title}
      </Item>
    </Flex>
  );
};

export default Item;
