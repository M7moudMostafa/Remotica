import React from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import styled from "styled-components";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

const Index = () => {
  const { ref, focusKey } = useFocusable();
  return (
    <Container>
      <Title />
      <FocusContext.Provider value={focusKey}>
        <CardContainer ref={ref}>
          <Card />
          <Card />
        </CardContainer>
      </FocusContext.Provider>
    </Container>
  );
};

const Container = styled.div``;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Index;
