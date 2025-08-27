import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { activeComponentAtom } from "../../../stores/JotaiStore";

const Item = ({ item, onEnterPress }) => {
  const { ref, focused, focusKey } = useFocusable({
    focusKey: item.focusKey,
    onEnterPress: () => {
      onEnterPress(item.title);
    },
  });

  const activeComponent = useAtomValue(activeComponentAtom);

  useEffect(() => {
    setFocus("Main");
  }, []);

  return (
    <MenuItem
      ref={ref}
      $focused={focused}
      $selected={activeComponent === focusKey}
    >
      {<item.icon />} {item.title}
    </MenuItem>
  );
};

const MenuItem = styled.div`
  transition: transform 0.3s ease, background-color 0.3s ease;

  ${({ $selected }) =>
    $selected &&
    css`
      font-size: 1.5rem;
      background: linear-gradient(to right, #7cbfff, #3d00b6);
      padding: 1rem;
      border-radius: 1rem;
      color: #011a32;
      transform: scale(1.05);
    `}

  ${({ $focused }) =>
    $focused &&
    css`
      font-size: 1.5rem;
      background: linear-gradient(to right, #0083ff, #1f005c);
      padding: 1rem;
      border-radius: 1rem;
      color: #011a32;
      transform: scale(1.05);
    `}
`;

export default Item;
