import {
   FocusContext,
   useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LinkItem from "./LinkItem";
import { NAVIGATION_ITEMS } from "../../../utils/menuItems";

const NavBar = () => {
   const { t } = useTranslation();
   const { ref, focusSelf, focusKey } = useFocusable({
      focusKey: "NAV_BAR",
      isFocusBoundary: true,
      saveLastFocusedChild: true,
      focusBoundaryDirections: ["up", "left"],
   });

   useEffect(() => {
      focusSelf();
   }, [focusSelf]);

   return (
      <FocusContext.Provider value={focusKey}>
         <NavContainer ref={ref}>
            {NAVIGATION_ITEMS.map((item) => (
               <LinkItem 
                  key={item.id} 
                  label={t(item.translationKey)} 
                  focusKey={item.id} 
               />
            ))}
         </NavContainer>
      </FocusContext.Provider>
   );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default NavBar;
