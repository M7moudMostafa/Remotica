import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import styled, { css } from "styled-components";

const Item = ({ item, onEnterPress }) => {
  const { ref, focused } = useFocusable({
    focusKey: item.focusKey,
    onEnterPress: () => {
      onEnterPress(item.title);
    },
  });

  useEffect(() => {
    setFocus("Main");
  }, []);

  return (
    <MenuItem ref={ref} $focused={focused}>
      {item.icon} {item.title}
    </MenuItem>
  );
};

const MenuItem = styled.div`
  transition: transform 0.3s ease, background-color 0.3s ease;
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
