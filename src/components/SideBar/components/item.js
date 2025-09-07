import {
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useAtom, useAtomValue } from "jotai";
import styled, { css } from "styled-components";
import { activeComponentAtom, mediaInfoAtom } from "../../../stores/JotaiStore";

const Item = ({ item, onEnterPress }) => {
  const [, setMediaInfo] = useAtom(mediaInfoAtom);
  const activeComponent = useAtomValue(activeComponentAtom);

  const { ref, focused, focusKey } = useFocusable({
    focusKey: item.focusKey,
    onEnterPress: () => {
      onEnterPress(item.title);
    },
    onFocus: () => setMediaInfo(null)
  });

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
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 1rem;
      color: #ffd700;
      transform: scale(1.05);
    `}

  ${({ $focused }) =>
    $focused &&
    css`
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.2);
      padding: 1rem;
      border-radius: 1rem;
      color: #ffd700;
      transform: scale(1.05);
    `}
`;

export default Item;
