import React, { useCallback } from "react";
import styled from "styled-components";
import TitleComponent from "./Title";
import useTitles from "../../../hooks/useTitles";
import Card from "./Card";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

const TabsContent = ({ item }) => {
  const data = useTitles(item.focusKey);

  const { ref, focusKey } = useFocusable({});

  const onAssetsFocus = useCallback(
    ({ y }) => {
      ref.current &&
        ref.current.scrollTo({
          top: y - 50,
          behavior: "smooth",
        });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <Container>
        <TitleComponent title={item.title} />
        <ScrollableContainer ref={ref}>
          <CardContainer>
            {data?.data?.data.titles.map((data, i) => (
              <Card info={data} onFocus={onAssetsFocus} key={i} />
            ))}
          </CardContainer>
        </ScrollableContainer>
      </Container>
    </FocusContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollableContainer = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem 0;
`;

export default TabsContent;
