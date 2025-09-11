import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import React, { useEffect } from "react";
import styled from "styled-components";

const Button = ({ onEnterPress, title }) => {
  const { focusKey, ref, focusSelf, focused } = useFocusable({
    onEnterPress: onEnterPress
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf])

  return (
    <FocusContext.Provider value={focusKey}>
      <CustomButton ref={ref} focused={focused}>{title}</CustomButton>
    </FocusContext.Provider>
  );
};

const CustomButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: none;
  outline: none;
  background: ${({ focused }) => focused && "rgba(255, 215, 0, 0.2)"};
  color: ${({ focused }) => focused && "#ffd700"};
  border: 1px solid ${({ focused }) => focused && "rgba(255, 215, 0, 0.3)"};

  transition: all 0.3s ease;

  ${({ focused }) =>
    focused &&
    `
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    `}
`;

export default Button;
