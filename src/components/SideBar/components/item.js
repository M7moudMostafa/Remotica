import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import styled, { css } from "styled-components";

const Item = ({ item }) => {
  const { ref, focused, focusKey } = useFocusable({
    focusKey: item.focusKey,
  });

  useEffect(() => {
    setFocus("Main");
  }, []);

  return (
    <MenuItem ref={ref} focusKey={focusKey} focused={focused}>
      {item.icon} {item.title}
    </MenuItem>
  );
};

const MenuItem = styled.div`
  ${({ focused }) =>
    focused &&
    css`
      font-size: 1.5rem;
      background: linear-gradient(to right, #0083ff, #1f005c);
      padding: 1rem;
      border-radius: 1rem;
      color: #011a32;
    `}
`;

export default Item;
