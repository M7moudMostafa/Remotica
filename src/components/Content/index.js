import React, { useCallback, useRef } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import styled from "styled-components";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import useTitles from "../../hooks/useTitles";

const Index = () => {
  const scrollingRef = useRef();

  const { ref, focusKey } = useFocusable();
  const results = useTitles();

  const onFocus = useCallback(
    ({ x }) => {
      scrollingRef.current &&
        scrollingRef.current.scrollTo({
          left: x - 350,
          behavior: "smooth",
        });
    },
    [scrollingRef]
  );

  return (
    <Container>
      <Title />
      <FocusContext.Provider value={focusKey}>
        <CardContainer ref={ref}>
          <ContentRowScrollingWrapper ref={scrollingRef}>
            <ContentRowScrollingContent>
              {results[0]?.data?.data?.titles?.slice(0, 10)?.map((info, i) => (
                <Card info={info} onFocus={onFocus} key={i} />
              ))}
            </ContentRowScrollingContent>
          </ContentRowScrollingWrapper>
        </CardContainer>
      </FocusContext.Provider>
    </Container>
  );
};

const Container = styled.div`
  max-width: calc(100vw - 350px);
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem 0 0;
`;

const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentRowScrollingWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;
export default Index;
